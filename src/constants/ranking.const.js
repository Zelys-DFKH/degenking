/**
 * @fileoverview Constants needed by the new ranking system of Dec 2021.
 */

//  max and min scores for profession (including statboost2 and rarity)
exports.MAXES = {
  mining: 20850.0,
  gardening: 19600.0,
  foraging: 18350.0,
  fishing: 18975.0,
};
exports.MINS = {
  mining: 10000.0,
  gardening: 9375.0,
  foraging: 8750.0,
  fishing: 8750.0,
};
exports.SCALE = {
  mining: 10850.0,
  gardening: 10225.0,
  foraging: 9600.0,
  fishing: 10225.0,
};

//  json of statGrowthP
exports.STAT_GROWTH_P = {
  archer: {
    agilityGrowthP: 5000.0,
    dexterityGrowthP: 8000.0,
    enduranceGrowthP: 6000.0,
    intelligenceGrowthP: 4000.0,
    luckGrowthP: 4000.0,
    strengthGrowthP: 5500.0,
    wisdomGrowthP: 2500.0,
    vitalityGrowthP: 5000.0,
  },
  darkKnight: {
    agilityGrowthP: 3500.0,
    dexterityGrowthP: 5500.0,
    enduranceGrowthP: 6000.0,
    intelligenceGrowthP: 7000.0,
    luckGrowthP: 3500.0,
    strengthGrowthP: 8500.0,
    wisdomGrowthP: 3500.0,
    vitalityGrowthP: 7500.0,
  },
  dragoon: {
    agilityGrowthP: 6500.0,
    dexterityGrowthP: 6500.0,
    enduranceGrowthP: 7000.0,
    intelligenceGrowthP: 5000.0,
    luckGrowthP: 5000.0,
    strengthGrowthP: 8000.0,
    wisdomGrowthP: 6000.0,
    vitalityGrowthP: 6000.0,
  },
  knight: {
    agilityGrowthP: 4500.0,
    dexterityGrowthP: 5500.0,
    enduranceGrowthP: 7500.0,
    intelligenceGrowthP: 2000.0,
    luckGrowthP: 3500.0,
    strengthGrowthP: 7000.0,
    wisdomGrowthP: 2500.0,
    vitalityGrowthP: 7500.0,
  },
  monk: {
    agilityGrowthP: 6000.0,
    dexterityGrowthP: 6000.0,
    enduranceGrowthP: 5500.0,
    intelligenceGrowthP: 2500.0,
    luckGrowthP: 3000.0,
    strengthGrowthP: 6000.0,
    wisdomGrowthP: 5000.0,
    vitalityGrowthP: 6000.0,
  },
  ninja: {
    agilityGrowthP: 8500.0,
    dexterityGrowthP: 7500.0,
    enduranceGrowthP: 4000.0,
    intelligenceGrowthP: 5000.0,
    luckGrowthP: 6000.0,
    strengthGrowthP: 5000.0,
    wisdomGrowthP: 4000.0,
    vitalityGrowthP: 5000.0,
  },
  paladin: {
    agilityGrowthP: 3500.0,
    dexterityGrowthP: 4000.0,
    enduranceGrowthP: 8000.0,
    intelligenceGrowthP: 3000.0,
    luckGrowthP: 4000.0,
    strengthGrowthP: 8000.0,
    wisdomGrowthP: 6500.0,
    vitalityGrowthP: 8000.0,
  },
  pirate: {
    agilityGrowthP: 5000.0,
    dexterityGrowthP: 7000.0,
    enduranceGrowthP: 5500.0,
    intelligenceGrowthP: 2000.0,
    luckGrowthP: 5500.0,
    strengthGrowthP: 7000.0,
    wisdomGrowthP: 2000.0,
    vitalityGrowthP: 6000.0,
  },
  priest: {
    agilityGrowthP: 4000.0,
    dexterityGrowthP: 3000.0,
    enduranceGrowthP: 6000.0,
    intelligenceGrowthP: 7000.0,
    luckGrowthP: 4000.0,
    strengthGrowthP: 3000.0,
    wisdomGrowthP: 8000.0,
    vitalityGrowthP: 5000.0,
  },
  sage: {
    agilityGrowthP: 7500.0,
    dexterityGrowthP: 4000.0,
    enduranceGrowthP: 5000.0,
    intelligenceGrowthP: 9000.0,
    luckGrowthP: 5500.0,
    strengthGrowthP: 4000.0,
    wisdomGrowthP: 9000.0,
    vitalityGrowthP: 6000.0,
  },
  summoner: {
    agilityGrowthP: 5000.0,
    dexterityGrowthP: 4500.0,
    enduranceGrowthP: 5000.0,
    intelligenceGrowthP: 8500.0,
    luckGrowthP: 4000.0,
    strengthGrowthP: 4500.0,
    wisdomGrowthP: 8500.0,
    vitalityGrowthP: 5000.0,
  },
  dreadKnight: {
    agilityGrowthP: 6000.0,
    dexterityGrowthP: 7500.0,
    enduranceGrowthP: 7500.0,
    intelligenceGrowthP: 6500.0,
    luckGrowthP: 6000.0,
    strengthGrowthP: 8500.0,
    wisdomGrowthP: 6500.0,
    vitalityGrowthP: 6500.0,
  },
  thief: {
    agilityGrowthP: 7000.0,
    dexterityGrowthP: 5500.0,
    enduranceGrowthP: 4500.0,
    intelligenceGrowthP: 2500.0,
    luckGrowthP: 6500.0,
    strengthGrowthP: 5500.0,
    wisdomGrowthP: 3500.0,
    vitalityGrowthP: 5000.0,
  },
  warrior: {
    agilityGrowthP: 5000.0,
    dexterityGrowthP: 7000.0,
    enduranceGrowthP: 6500.0,
    intelligenceGrowthP: 2000.0,
    luckGrowthP: 3500.0,
    strengthGrowthP: 7500.0,
    wisdomGrowthP: 2000.0,
    vitalityGrowthP: 6500.0,
  },
  wizard: {
    agilityGrowthP: 4000.0,
    dexterityGrowthP: 3000.0,
    enduranceGrowthP: 5000.0,
    intelligenceGrowthP: 8000.0,
    luckGrowthP: 4000.0,
    strengthGrowthP: 3000.0,
    wisdomGrowthP: 8000.0,
    vitalityGrowthP: 5000.0,
  },
};

//  key stats for each profession
exports.PROFESSION_STATS = {
  mining: ['strength', 'endurance'],
  gardening: ['wisdom', 'vitality'],
  foraging: ['dexterity', 'intelligence'],
  fishing: ['luck', 'agility'],
};

// map statboost abbrev to full string
exports.STAT_BOOST_2 = {
  STR: 'mining',
  END: 'mining',
  WIS: 'gardening',
  VIT: 'gardening',
  DEX: 'foraging',
  INT: 'foraging',
  LCK: 'fishing',
  AGI: 'fishing',
};

// rarity boosts - calculated these, they match the doc online
exports.RARITY_BOOST = {
  0: 0,
  1: 250,
  2: 500,
  3: 875,
  4: 1250,
};
