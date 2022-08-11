/**
 * @fileoverview Standardised naming of contracts for DFK Network.
 */

const { PROFESSIONS } = require('./constants.const');

exports.UNISWAPV2FACTORY = '';
exports.UNISWAPV2ROUTER = '';
exports.MASTER_GARDENER = '';
exports.JEWEL_TOKEN = '0xccb93dabd71c8dad03fc4ce5559dc3d89f67a260';
exports.CRYSTAL_TOKEN = '0x04b9da42306b023f3572e106b11d82aad9d32ebb';
exports.BASE_TOKEN = exports.CRYSTAL_TOKEN;
exports.XJEWEL_TOKEN = '0x77f2656d04e158f915bc22f07b779d94c1dc47ff';
exports.XCRYSTAL_TOKEN = '0x6e7185872bcdf3f7a6cbbe81356e50daffb002d2';

exports.BANK = exports.XCRYSTAL_TOKEN;
exports.BANKER = '';
exports.AIRDROP = '';

exports.HEROES = '0xeb9b61b145d6489be575d3603f4a704810e143df';
exports.TEARS_TOKEN = '0x58e63a9bbb2047cd9ba7e6bb4490c238d271c278';
exports.AUCTION_SALES = '0xc390faa4c7f66e4d62e59c231d5bed32ff77bef0';
exports.AUCTION_SALES_LOWERCASE = '0xc390faa4c7f66e4d62e59c231d5bed32ff77bef0';
exports.PROFILES = '';
exports.RUNES = '0x75e8d8676d774c9429fbb148b30e304b5542ac3d';
exports.MEDITATION = '0xd507b6b299d9fc835a0df92f718920d13fa49b47';
exports.SUMMON_V2 = '';

exports.BRIDGE_HEROES = '0x739b1666c2956f601f095298132773074c3e184b';

//
// QUESTING
//

// Currently active quests
exports.QUEST_CORE_V2 = '0xe9abfbc143d7cef74b5b793ec5907fa62ca53154';
exports.QUEST_GARDENING_V1 = '';
exports.QUEST_MINING_GOLD_V2 = '0x75912145f5cfefb980616fa47b2f103210faab94';
exports.QUEST_MINING_JEWEL_V2 = '0x98b3c85ac3cc3ef36ff25a9229857abace3e7410';
exports.QUEST_FORAGING_V2 = '0xad51199b453075c73fa106afcaad59f705ef7872';
exports.QUEST_FISHING_V2 = '0x407ab39b3675f29a719476af6eb3b9e5d93969e6';
exports.QUEST_WISHING_WELL_V2 = '';

//
// Training Quest Contracts
//
exports.QUEST_STR_ADDRESS = '0xb8828c687fb1c875d5acb4281c5cdf9f49fa4637';
exports.QUEST_AGI_ADDRESS = '0x801b7296f106d8818da1d04ed769e5a76e8911fe';
exports.QUEST_END_ADDRESS = '0xbd391e4641e1bce989a246602ecdc746efa9d845';
exports.QUEST_WIS_ADDRESS = '0x0832a218c2202088a1800d424248fc689ae7460';
exports.QUEST_DEX_ADDRESS = '0x9ec92963d0387ba57d5f2d505319b1c135c6f1d';
exports.QUEST_VIT_ADDRESS = '0xe3edf52d33f2bb05dbda5ba73903e27a9b9b7e9d';
exports.QUEST_INT_ADDRESS = '0x81fa8a2bfcd703dc83c5d4bee1075899448a5cde';
exports.QUEST_LCK_ADDRESS = '0xd8ccf866959830a8e397442b5f7ddd790f230962';

// An enumerated version of training quests
exports.TRAINING_QUESTS = {
  STR: exports.QUEST_STR_ADDRESS,
  AGI: exports.QUEST_AGI_ADDRESS,
  END: exports.QUEST_END_ADDRESS,
  WIS: exports.QUEST_WIS_ADDRESS,
  DEX: exports.QUEST_DEX_ADDRESS,
  VIT: exports.QUEST_VIT_ADDRESS,
  INT: exports.QUEST_INT_ADDRESS,
  LCK: exports.QUEST_LCK_ADDRESS,
};

/** @const {Array<string>} TRAINING_QUESTS All the training quests */
exports.TRAINING_QUESTS_AR = [
  exports.QUEST_STR_ADDRESS,
  exports.QUEST_AGI_ADDRESS,
  exports.QUEST_END_ADDRESS,
  exports.QUEST_WIS_ADDRESS,
  exports.QUEST_DEX_ADDRESS,
  exports.QUEST_VIT_ADDRESS,
  exports.QUEST_INT_ADDRESS,
  exports.QUEST_LCK_ADDRESS,
];

exports.QUESTS_REV = {
  [exports.QUEST_FORAGING_V2]: 'FORAGING',
  [exports.QUEST_FISHING_V2]: 'FISHING',
  [exports.QUEST_MINING_GOLD_V1]: 'MINING_GOLD',
  [exports.QUEST_MINING_GOLD_V2]: 'MINING_GOLD',
  [exports.QUEST_MINING_JEWEL_V1]: 'MINING_JEWEL',
  [exports.QUEST_MINING_JEWEL_V2]: 'MINING_JEWEL',
  [exports.QUEST_STR_ADDRESS]: 'STR_TRAIN',
  [exports.QUEST_AGI_ADDRESS]: 'AGI_TRAIN',
  [exports.QUEST_END_ADDRESS]: 'END_TRAIN',
  [exports.QUEST_WIS_ADDRESS]: 'WIS_TRAIN',
  [exports.QUEST_DEX_ADDRESS]: 'DEX_TRAIN',
  [exports.QUEST_VIT_ADDRESS]: 'VIT_TRAIN',
  [exports.QUEST_INT_ADDRESS]: 'INT_TRAIN',
  [exports.QUEST_LCK_ADDRESS]: 'LCK_TRAIN',
};

/** @enum {boolean} Determines which quest types need to be handled by new questing */
exports.QUESTS_HANDLER_NEW = {
  [exports.QUEST_CORE_V2]: true,
  [exports.QUEST_FORAGING_V2]: true,
  [exports.QUEST_FISHING_V2]: true,
  [exports.QUEST_MINING_GOLD_V2]: true,
  [exports.QUEST_MINING_JEWEL_V2]: true,
  [exports.QUEST_MINING_JEWEL_V1]: true,
  [exports.QUEST_STR_ADDRESS]: true,
  [exports.QUEST_AGI_ADDRESS]: true,
  [exports.QUEST_END_ADDRESS]: true,
  [exports.QUEST_WIS_ADDRESS]: true,
  [exports.QUEST_DEX_ADDRESS]: true,
  [exports.QUEST_VIT_ADDRESS]: true,
  [exports.QUEST_INT_ADDRESS]: true,
  [exports.QUEST_LCK_ADDRESS]: true,
};

/** @enum {Array<string>} Map profession values to profession quest addresses */
exports.PROFESSIONS_TO_QUESTS = {
  [PROFESSIONS.MINING]: [
    exports.QUEST_MINING_GOLD_V2,
    exports.QUEST_MINING_JEWEL_V2,
  ],
  [PROFESSIONS.FORAGING]: [exports.QUEST_FORAGING_V2],
  [PROFESSIONS.FISHING]: [exports.QUEST_FISHING_V2],
};
