/* eslint-disable no-console */
/**
 * @fileoverview Fetches heroes data from the blockchain.
 */

const { AUCTION_SALES } = require('../constants/addresses.const');
const { DATA_SOURCES } = require('../constants/constants.const');
const etherEnt = require('../ether');
const {
  getProvider,
  getArchivalProvider,
  getContractAuctionSales,
} = require('../ether');
const {
  getSalesAuctionChainByHeroId,
} = require('../auctions/query-auctions.ent');
const { getProfileByAddress } = require('./owner-profile.ent');

const {
  processHeroChainData,
  normalizeChainProcessedHero,
} = require('./normalise-blockchain.ent');
const {
  decodeRecessiveGenesAndNormalize,
} = require('../heroes-helpers/recessive-genes.ent');

const { asyncMapCap, delay } = require('../utils/helpers');
const { get: getConfig } = require('../configure');
const { catchErrorRetry } = require('../utils/error-handler');

const log = require('../utils/log.service').get();

/**
 * Get heroes data from blockchain with normalized data schema.
 *
 * @param {Array<string>} heroIds hero IDs.
 * @param {Object=} params Parameters for fetching the heroes.
 * @param {number=} params.blockNumber Query hero state at particular block number.
 * @param {Date=} params.blockMinedAt Pass a mining date of block to help with
 *    stamina calculations and relevant time-sensitive properties.
 * @return {Promise<Array<Object>>} Normalized heroes.
 */
exports.getHeroesChain = async (heroIds, params = {}) => {
  const heroes = await asyncMapCap(
    heroIds,
    async (heroId) => {
      return exports.getHeroChain(heroId, params);
    },
    getConfig('concurrentBlockChainRequests'),
  );

  const normalizedHeroes = heroes.map((hero) =>
    normalizeChainProcessedHero(hero, DATA_SOURCES.CHAIN, params),
  );

  await decodeRecessiveGenesAndNormalize(normalizedHeroes);

  return normalizedHeroes;
};

/**
 * Fetches a single hero from the blockchain and returns raw result.
 *
 * Will retry up to the config's max retries.
 *
 * @param {number|string} heroId hero ID.
 * @param {Object=} params Parameters for fetching the heroes.
 * @param {number=} params.blockNumber Query hero state at particular block number.
 * @param {number=} retries Retry count.
 * @return {Promise<Array<Object>>} Fetched heroes.
 */
exports.getHeroChain = async (heroId, params = {}, retries = 0) => {
  let currentRPC = await getProvider();
  try {
    // Force convert hero Id into number
    heroId = Number(heroId);

    // Determine which block to query the hero for
    let { lastBlockMined: blockToQuery } = currentRPC;
    if (params.blockNumber) {
      blockToQuery = params.blockNumber;
      // Switch to archival RPC provider for this query
      currentRPC = await getArchivalProvider();
    }

    const heroesContract = etherEnt.getContractHeroes(currentRPC);

    const [heroRaw, ownerOfAddress, heroSalesData] = await Promise.all([
      heroesContract.getHero(heroId, { blockTag: blockToQuery }),
      heroesContract.ownerOf(heroId, { blockTag: blockToQuery }),
      getSalesAuctionChainByHeroId(heroId),
    ]);

    let ownerAddress = '';
    if (ownerOfAddress.toLowerCase() === AUCTION_SALES) {
      const salesContract = getContractAuctionSales(currentRPC);
      const auction = await salesContract.getAuction(heroId, {
        blockTag: blockToQuery,
      });
      ownerAddress = auction.seller.toLowerCase();
    } else {
      ownerAddress = ownerOfAddress.toLowerCase();
    }

    const owner = await getProfileByAddress(ownerAddress);
    const hero = processHeroChainData(heroRaw, owner, ownerAddress);
    hero.salesData = heroSalesData;

    return hero;
  } catch (ex) {
    await catchErrorRetry(log, {
      ex,
      retries,
      errorMessage: `getHeroChain() - RPC: ${currentRPC.name} - Hero: ${heroId}`,
      retryFunction: exports.getHeroChain,
      retryArguments: [heroId, params],
    });
  }
};

/**
 * Fetches heroes by owner and filters by profession.
 *
 * @param {string} ownerAddress The owner's address to fetch - lowercased.
 * @param {string} profession The profession to filter by (use constant enum).
 * @return {Promise<Array<Object>>} Fetched heroes.
 */
exports.fetchHeroesByOwnerAndProfessionChain = async (
  ownerAddress,
  profession,
) => {
  const heroes = await exports.fetchHeroesByOwnerChain(ownerAddress);

  const professionHeroes = heroes.filter(
    (hero) => hero.profession === profession,
  );

  return professionHeroes;
};

/**
 * Fetches heroes by owner.
 *
 * @param {string} ownerAddress The owner's address to fetch - lowercased.
 * @param {number=} optRetry Retry count.
 * @return {Promise<Array<Object>>} Fetched heroes.
 */
exports.fetchHeroesByOwnerChain = async (ownerAddress, optRetry = 0) => {
  try {
    const allHeroIds = await exports.fetchHeroIdsByOwnerChain(ownerAddress);

    const heroes = await exports.getHeroesChain(allHeroIds);

    return heroes;
  } catch (ex) {
    optRetry += 1;
    const currentRPC = await getProvider();

    const logMessage =
      `Failed to fetch heroes for owner: ${ownerAddress} - ` +
      `retry: ${optRetry} - RPC: ${currentRPC.name}`;

    if (optRetry > getConfig('maxRetries')) {
      await log.error(`Giving up! ${logMessage}`, { error: ex });
      throw ex;
    }

    await delay(3 * optRetry);
    await log.warn(logMessage, { error: ex });
    return exports.fetchHeroesByOwnerChain(ownerAddress, optRetry);
  }
};

/**
 * Fetches hero IDs by owner.
 *
 * @param {string} ownerAddress The owner's address to fetch - lowercased.
 * @param {number=} retries Retry count.
 * @return {Promise<Array<number>>} Fetched hero ids.
 */
exports.fetchHeroIdsByOwnerChain = async (ownerAddress, retries = 0) => {
  const currentRPC = await getProvider();
  try {
    const heroesContract = etherEnt.getContractHeroes(currentRPC);
    const salesContract = getContractAuctionSales(currentRPC);

    const [saleIds, heroIds] = await Promise.all([
      salesContract.getUserAuctions(ownerAddress),
      heroesContract.getUserHeroes(ownerAddress),
    ]);

    const allHeroIds = heroIds.concat(saleIds);

    const allHeroIdsNorm = allHeroIds.map((heroId) => Number(heroId));

    return allHeroIdsNorm;
  } catch (ex) {
    await catchErrorRetry(log, {
      ex,
      retries,
      errorMessage:
        `fetchHeroIdsByOwnerChain() - RPC: ${currentRPC.name} - ` +
        `ownerAddress: ${ownerAddress}`,
      retryFunction: exports.fetchHeroIdsByOwnerChain,
      retryArguments: [ownerAddress],
    });
  }
};
