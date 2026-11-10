window.DECK_CARD_RARITY_GROUPS = {
  Superstring: {
    epic: [
      "basic enhancement", "unyielding", "battle dancer", "starry eyes", "battery pack",
      "demonblade", "bounty hunter", "beacon of hope", "enhanced ignis", "war machine",
      "dark note", "kittys blessing", "sunbrust armor", "finale shot", "treasure raiders",
      "ascend to glory", "illusion shot", "enhanced emberspit", "dooms gaze", "grenadier king",
      "ready to compete", "blade master", "dimensional magazine", "relentless spree",
      "genetic lock", "kinetic overload", "elo booster", "card valuation", "whos the boss",
      "ammo bearer", "chrono bullets", "resurgence", "defense first", "assailant",
      "relentless assault", "berserker"
    ],
    rare: [
      "takeover", "suppression", "spell surge", "toxic spread", "rapid cooldown", "no retreat",
      "lone legend", "thorny path", "adaptive resilience", "glided protector",
      "crystalline torment", "razor defense", "temporal wish", "saviors resolve",
      "crimson demise", "corrosive shots", "dimensional slash", "power vacuum", "level skip",
      "amulet", "do or die", "hardened paper", "glided escape", "awaken 1+3", "awaken 1+2",
      "ultimate ready!", "fury", "hydro cannon", "rodent warrior", "wariors solitude",
      "lethal reload", "woodpecker", "jumper", "assasin", "bruiser", "survivalist", "armorer",
      "hunter's log", "mobile arsenal", "crippler", "drumbstick combo", "headhunter",
      "heavy hitter", "swift escape", "thunderstrike", "jump power", "movement speed",
      "max hp", "max armor"
    ],
    refined: [
      "defensive stance", "medic rounds", "battle drills", "equilibrium", "crystal analyzer",
      "ammo burst", "pain inhibition", "enhanced shock grenade", "adaptive weapon",
      "adaptive shield", "bullet blaze", "heavy barrage", "overload concerto", "out of thin air",
      "enhanced slow granade", "enhanced granade", "active skill", "inner strength",
      "fatal trigger", "sturdy guard", "battle cry", "unified pulse", "rookie support",
      "lone warrior", "guardian of hope", "shared bond", "together we stand", "nimble",
      "athlete", "radiant charge", "scope hunt", "focused fire", "steady aim", "bouncy shot",
      "hit and run", "sustained vitality", "full armor", "rapid reload"
    ]
  },
  Crystalline: {
    epic: [
      "lone advantage", "crystalline battery pack", "serum", "heart ravager", "northern might",
      "flaming fist", "kill order", "ashes to glory", "thousand strikes", "limit break",
      "ironclad body", "soul force", "gluttonous fiend", "energy recycle", "power entity",
      "unstable mutation", "hidden strike", "ascendant", "crystal plauge", "speed surge",
      "chaos drain", "corrosive claws", "eco round", "the joker", "forbidden claws", "comeback",
      "claws", "unarmord claws"
    ],
    rare: [
      "steal", "survival instinct", "vital force", "rear assault", "revitalized", "repture",
      "toxic claws", "body snatch", "body conditioning", "speed world", "war stomp",
      "rapid healing", "world annihilator", "armor forge", "shield of renewal", "stamp return",
      "hostile takeover", "armor plate", "magnetic pull", "phantom rodent", "grim pendulum",
      "stronger together", "coordinated attack", "forbidden armor", "forbidden blood",
      "absorber", "armor bandit", "hunt boost", "fiery rage", "path of survival", "jumper",
      "bloodrage marauder", "stattering leap", "rusher", "light of life", "enhanced armor"
    ],
    refined: [
      "vengeful spirit", "second chance", "hardened resolve", "flowing fortitude",
      "arcane fortitude", "arcane wisdom", "soul siphon", "parting gift", "smoke escape",
      "deadly tempo", "crippling blow", "timeflash", "shield bash", "chaotic", "no retreat",
      "hidden potential", "void armor", "arcane timer", "brainiac", "energy siphon",
      "evolved claws", "enchanted skill", "monthly pass", "phantom", "lone suvivor",
      "demon parade", "armor of doom", "vitality boost", "growth armor", "forbidden leap",
      "forbidden speed", "leaper", "sprinter", "bloodrage", "armor devourer"
    ]
  }
};

window.DECK_CARD_CATALOG = {};
window.DECK_CARD_RARITY = {};

Object.entries(window.DECK_CARD_RARITY_GROUPS).forEach(([type, groups]) => {
  const rarityGroups = Object.entries(groups);
  window.DECK_CARD_CATALOG[type] = rarityGroups.flatMap(([, names]) => names);
  window.DECK_CARD_RARITY[type] = Object.fromEntries(
    rarityGroups.flatMap(([rarity, names]) => names.map(name => [name, rarity]))
  );
});
