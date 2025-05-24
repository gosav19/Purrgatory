// This is mock data that would be replaced with real NFT data from a blockchain API
export const nfts = [
  {
    id: 1,
    name: "Whisker Wraith",
    description: "A ghostly feline with ethereal whiskers that sense spirits.",
    image: "/api/placeholder/400/400",
    rarity: "Epic",
    price: 0.8,
    traits: {
      fur: "Spectral White",
      eyes: "Soul Gaze",
      accessory: "Spirit Chain",
      background: "Foggy Graveyard",
    }
  },
  {
    id: 2,
    name: "Midnight Mischief",
    description: "This void-black cat causes trouble between realms.",
    image: "/api/placeholder/400/400",
    rarity: "Rare",
    price: 0.5,
    traits: {
      fur: "Void Black",
      eyes: "Amber Gleam",
      accessory: "Mischief Hat",
      background: "Moonlit Rooftop",
    }
  },
  {
    id: 3,
    name: "Purr Prophet",
    description: "Can predict your fate with the tone of its purr.",
    image: "/api/placeholder/400/400",
    rarity: "Legendary",
    price: 1.2,
    traits: {
      fur: "Oracle Gold",
      eyes: "Fortune Blue",
      accessory: "Prophecy Scroll",
      background: "Cosmic Nexus",
    }
  },
  {
    id: 4,
    name: "Cathulu",
    description: "Part cat, part ancient one. Don't stare too long.",
    image: "/api/placeholder/400/400",
    rarity: "Mythic",
    price: 2.5,
    traits: {
      fur: "Tentacle Gray",
      eyes: "Cosmic Horror",
      accessory: "Elder Crown",
      background: "R'lyeh Depths",
    }
  },
  {
    id: 5,
    name: "Spectre Siamese",
    description: "This Siamese appears only when something is about to happen.",
    image: "/api/placeholder/400/400",
    rarity: "Uncommon",
    price: 0.3,
    traits: {
      fur: "Transparent Cream",
      eyes: "Warning Red",
      accessory: "Phantom Bell",
      background: "Victorian Mansion",
    }
  },
  {
    id: 6,
    name: "Nekorrect",
    description: "Guardian of the gates that judges sins with a gentle purr.",
    image: "/api/placeholder/400/400",
    rarity: "Epic",
    price: 0.85,
    traits: {
      fur: "Judge Black",
      eyes: "Justice Gold",
      accessory: "Soul Scale",
      background: "Gateway Arch",
    }
  },
  {
    id: 7,
    name: "Fluffernutter",
    description: "Died from excessive cuteness. Still dangerously adorable.",
    image: "/api/placeholder/400/400",
    rarity: "Common",
    price: 0.2,
    traits: {
      fur: "Cloud Fluff",
      eyes: "Button Cute",
      accessory: "Tiny Halo",
      background: "Rainbow Bridge",
    }
  },
  {
    id: 8,
    name: "Nine Lives Down",
    description: "On its final life but refuses to cross over yet.",
    image: "/api/placeholder/400/400",
    rarity: "Rare",
    price: 0.6,
    traits: {
      fur: "Battle Scarred",
      eyes: "Determined Green",
      accessory: "Life Counter",
      background: "Limbo Void",
    }
  },
  {
    id: 9,
    name: "Ashen Familiar",
    description: "A witch's companion that followed her into the afterlife.",
    image: "/api/placeholder/400/400",
    rarity: "Uncommon",
    price: 0.35,
    traits: {
      fur: "Witch's Gray",
      eyes: "Familiar Purple",
      accessory: "Potion Vial",
      background: "Cauldron Steam",
    }
  },
  {
    id: 10,
    name: "Meowmmy",
    description: "Wrapped in ancient bandages but still demands treats.",
    image: "/api/placeholder/400/400",
    rarity: "Epic",
    price: 0.9,
    traits: {
      fur: "Bandage Wrapped",
      eyes: "Ancient Blue",
      accessory: "Scarab Beetle",
      background: "Desert Tomb",
    }
  },
  {
    id: 11,
    name: "Psycat",
    description: "Can read thoughts and project images of treats.",
    image: "/api/placeholder/400/400",
    rarity: "Legendary",
    price: 1.3,
    traits: {
      fur: "Mind Wave Purple",
      eyes: "Third Eye",
      accessory: "Neural Crown",
      background: "Thought Nebula",
    }
  },
  {
    id: 12,
    name: "Toasty",
    description: "Got too close to the fireplace. Now eternally warm.",
    image: "/api/placeholder/400/400",
    rarity: "Common",
    price: 0.15,
    traits: {
      fur: "Charcoal Black",
      eyes: "Ember Orange",
      accessory: "Smoke Wisp",
      background: "Hearth Stone",
    }
  },
];

export const rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic"];

export const traitTypes = ["fur", "eyes", "accessory", "background"];

export function getAllTraitValues() {
  const traits = {};
  
  traitTypes.forEach(type => {
    traits[type] = [...new Set(nfts.map(nft => nft.traits[type]))];
  });
  
  return traits;
}