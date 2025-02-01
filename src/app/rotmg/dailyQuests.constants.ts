export type TDailyQuest = {
  task: string;
  description: string;
  marks: string[];
  rewards: string[];
  id?: string;
};

export const SCOUT_QUESTS = [
  {
    task: "Scout the Abyss",
    description: "Scout the Abyss of Demons and report back here!",
    marks: ["Mark of Malphas"],
    rewards: ["Potion of Vitality", "Potion of Vitality"],
  },
  {
    task: "Scout the Pit",
    description: "Scout the Snake Pit and report back here!",
    marks: ["Mark of Stheno"],
    rewards: ["Potion of Speed", "Potion of Speed"],
  },
  {
    task: "Scout the Sewers",
    description: "Scout the Toxic Sewers and report back here!",
    marks: ["Mark of Gulpord"],
    rewards: ["Potion of Defense", "Potion of Defense"],
  },
  {
    task: "Scout the Sprites",
    description: "Scout the Sprite World and report back here!",
    marks: ["Mark of Limon"],
    rewards: ["Potion of Dexterity", "Potion of Dexterity"],
  },
  {
    task: "Scout the Lair",
    description: "Scout the Undead Lair and report back here!",
    marks: ["Mark of Septavius"],
    rewards: ["Potion of Wisdom", "Potion of Wisdom"],
  },
  {
    task: "Scout the Theatre",
    description: "Scout the Puppet Master's Theatre and report back here!",
    marks: ["Mark of the Puppet Master"],
    rewards: ["Potion of Attack", "Potion of Attack"],
  },
  {
    task: "Scout the Woods",
    description: "Scout the Magic Woods and report back here!",
    marks: ["Mark of the Fountain Spirit"],
    rewards: ["Potion of Speed", "Potion of Dexterity"],
  },
  {
    task: "Scout the Library",
    description: "Scout the Cursed Library and report back here!",
    marks: ["Mark of the Archivist"],
    rewards: ["Potion of Vitality", "Potion of Wisdom"],
  },
].sort((a, b) => a.task.localeCompare(b.task));

export const BEGINNER_QUESTS = [
  {
    task: "The Pirate King",
    description: "Defeat Dreadstump the Pirate King in the Pirate Cave.",
    marks: [
      "Mark of Dreadstump",
      "Mark of Dreadstump",
      "Mark of Dreadstump",
      "Mark of Dreadstump",
    ],
    rewards: ["Beginner Quest Chest"],
  },
  {
    task: "The Mama",
    description: "Defeat Mama Megamoth in the Forest Maze.",
    marks: [
      "Mark of Mama Megamoth",
      "Mark of Mama Megamoth",
      "Mark of Mama Megamoth",
      "Mark of Mama Megamoth",
    ],
    rewards: ["Beginner Quest Chest"],
  },
  {
    task: "The Spider Queen",
    description: "Defeat Arachna the Spider Queen in the Spider Den.",
    marks: [
      "Mark of Arachna",
      "Mark of Arachna",
      "Mark of Arachna",
      "Mark of Arachna",
    ],
    rewards: ["Beginner Quest Chest"],
  },
  {
    task: "The Masked God",
    description: "Defeat Mixcoatl the Masked God in the Forbidden Jungle.",
    marks: [
      "Mark of Mixcoatl",
      "Mark of Mixcoatl",
      "Mark of Mixcoatl",
      "Mark of Mixcoatl",
    ],
    rewards: ["Beginner Quest Chest"],
  },
  {
    task: "The Bee Queen",
    description: "Defeat the Bee Queen in the Hive.",
    marks: [
      "Mark of the Bee Queen",
      "Mark of the Bee Queen",
      "Mark of the Bee Queen",
      "Mark of the Bee Queen",
    ],
    rewards: ["Beginner Quest Chest"],
  },
  {
    task: "Run the Table",
    description:
      "Get rid of all these lowly monsters and I'll get some good gear for you.",
    marks: [
      "Mark of Dreadstump",
      "Mark of Mama Megamoth",
      "Mark of Arachna",
      "Mark of Mixcoatl",
      "Mark of the Bee Queen",
    ],
    rewards: ["Beginner Quest Chest", "Treasure Map"],
  },
].sort((a, b) => a.task.localeCompare(b.task));

export const STRANDARD_QUESTS = [
  {
    task: "The Snake Queen",
    description: "Defeat Stheno in the Snake Pit.",
    marks: [
      "Mark of Stheno",
      "Mark of Stheno",
      "Mark of Stheno",
      "Mark of Stheno",
      "Mark of Stheno",
      "Mark of Stheno",
      "Mark of Stheno",
      "Mark of Stheno",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "The Sprite Goddess",
    description: "Defeat Limon in the Sprite World.",
    marks: [
      "Mark of Limon",
      "Mark of Limon",
      "Mark of Limon",
      "Mark of Limon",
      "Mark of Limon",
      "Mark of Limon",
      "Mark of Limon",
      "Mark of Limon",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "The Titan",
    description: "Defeat the Sandstone Titan in the Ancient Ruins.",
    marks: [
      "Mark of the Sandstone Titan",
      "Mark of the Sandstone Titan",
      "Mark of the Sandstone Titan",
      "Mark of the Sandstone Titan",
      "Mark of the Sandstone Titan",
      "Mark of the Sandstone Titan",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "The Ghost God",
    description: "Defeat Septavius in the Undead Lair.",
    marks: [
      "Mark of Septavius",
      "Mark of Septavius",
      "Mark of Septavius",
      "Mark of Septavius",
      "Mark of Septavius",
      "Mark of Septavius",
      "Mark of Septavius",
      "Mark of Septavius",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "The Archdemon",
    description: "Defeat Malphas in the Abyss of Demons.",
    marks: [
      "Mark of Malphas",
      "Mark of Malphas",
      "Mark of Malphas",
      "Mark of Malphas",
      "Mark of Malphas",
      "Mark of Malphas",
      "Mark of Malphas",
      "Mark of Malphas",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "The Slime God",
    description: "Defeat Gulpord in the Toxic Sewers.",
    marks: [
      "Mark of Gulpord",
      "Mark of Gulpord",
      "Mark of Gulpord",
      "Mark of Gulpord",
      "Mark of Gulpord",
      "Mark of Gulpord",
      "Mark of Gulpord",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "The Puppet Master",
    description: "Defeat The Puppet Master in the Theatre.",
    marks: [
      "Mark of the Puppet Master",
      "Mark of the Puppet Master",
      "Mark of the Puppet Master",
      "Mark of the Puppet Master",
      "Mark of the Puppet Master",
      "Mark of the Puppet Master",
      "Mark of the Puppet Master",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "The Fountain Spirit",
    description: "Defeat the Fountain Spirit in the Magic Woods.",
    marks: [
      "Mark of the Fountain Spirit",
      "Mark of the Fountain Spirit",
      "Mark of the Fountain Spirit",
      "Mark of the Fountain Spirit",
      "Mark of the Fountain Spirit",
      "Mark of the Fountain Spirit",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "The Archivist",
    description: "Defeat Avalon in the Cursed Library!",
    marks: [
      "Mark of the Archivist",
      "Mark of the Archivist",
      "Mark of the Archivist",
      "Mark of the Archivist",
      "Mark of the Archivist",
      "Mark of the Archivist",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "The Apparition",
    description: "Defeat the Ghost of Skuld in the Haunted Cemetery.",
    marks: ["Mark of Skuld", "Mark of Skuld", "Mark of Skuld"],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "The Vampire Lord",
    description: "Defeat Lord Ruthven in the Manor of the Immortals.",
    marks: [
      "Mark of Ruthven",
      "Mark of Ruthven",
      "Mark of Ruthven",
      "Mark of Ruthven",
      "Mark of Ruthven",
      "Mark of Ruthven",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "The Mad Scientist",
    description: "Defeat Dr. Terrible in the Mad Lab.",
    marks: [
      "Mark of Dr Terrible",
      "Mark of Dr Terrible",
      "Mark of Dr Terrible",
      "Mark of Dr Terrible",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "To the Mountains!",
    description: "Head to the mountains to take down Oryx's generals!",
    marks: [
      "Mark of Septavius",
      "Mark of Limon",
      "Mark of Gulpord",
      "Mark of Malphas",
      "Mark of Dr Terrible",
      "Mark of the Puppet Master",
      "Mark of Skuld",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "Smite the Undead!",
    description: "Put these ones back in their graves, would ya?",
    marks: ["Mark of Septavius", "Mark of Skuld", "Mark of Ruthven"],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "As Above, So Below",
    description: "Take to the skies and sink to the depths for this quest!",
    marks: ["Mark of Limon", "Mark of Gulpord"],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "Blessings and Curses",
    description: "Life is all about balance, wouldn't you agree?",
    marks: ["Mark of the Fountain Spirit", "Mark of the Archivist"],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "Demonhunter",
    description: "I don't think Holy Water will cut it for these ones!",
    marks: ["Mark of Malphas", "Mark of Daichi"],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "That's the Spirit",
    description:
      "All sorts of ghouls lurk in the realm, some more frightening than others!",
    marks: [
      "Mark of Limon",
      "Mark of Septavius",
      "Mark of the Fountain Spirit",
      "Mark of Skuld",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "Rainbow Road",
    description: "Bring me some marks while you search for stat potions!",
    marks: [
      "Mark of Septavius",
      "Mark of Limon",
      "Mark of Gulpord",
      "Mark of Malphas",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "The Cost of Wisdom",
    description:
      "I was never the most book smart, but there's still time for you!",
    marks: [
      "Mark of Dr Terrible",
      "Mark of Dr Terrible",
      "Mark of the Archivist",
      "Mark of the Archivist",
    ],
    rewards: ["Standard Quest Chest"],
  },
  {
    task: "Dimensional Foes",
    description: "Slay Limon the Sprite Goddess and the Tesseract Goddess.",
    marks: [
      "Mark of Limon",
      "Mark of Limon",
      "Mark of Limon",
      "Mark of Limon",
      "Mark of the Tesseract Goddess",
      "Mark of the Tesseract Goddess",
    ],
    rewards: ["Standard Quest Chest", "Cubic Jelly"],
  },
].sort((a, b) => a.task.localeCompare(b.task));

export const MIGHTY_QUESTS = [
  {
    task: "The Effigy",
    description:
      "Defeat the Golden Oryx Effigy in the Cave of a Thousand Treasures.",
    marks: ["Mark of the Effigy"],
    rewards: ["Mighty Quest Chest", "Loot Drop Potion", "Loot Tier Potion"],
  },
  {
    task: "Arboreal Adventurer",
    description:
      "Eradicate the Heart of the Wetlands, the Fountain Spirit, and the Murderous Megamoth!",
    marks: [
      "Mark of the Wetlands",
      "Mark of the Wetlands",
      "Mark of the Fountain Spirit",
      "Mark of the Megamoth",
    ],
    rewards: ["Mighty Quest Chest", "Speed Sprout"],
  },
  {
    task: "The New King",
    description: "Defeat Jon Bilgewater in the Deadwater Docks.",
    marks: [
      "Mark of Bilgewater",
      "Mark of Bilgewater",
      "Mark of Bilgewater",
      "Mark of Bilgewater",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "The Megamoth",
    description: "Defeat the Murderous Megamoth in the Woodland Labyrinth.",
    marks: [
      "Mark of the Megamoth",
      "Mark of the Megamoth",
      "Mark of the Megamoth",
      "Mark of the Megamoth",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "The Prodigal Son",
    description: "Defeat the Son of Arachna in the Crawling Depths.",
    marks: [
      "Mark of the Son of Arachna",
      "Mark of the Son of Arachna",
      "Mark of the Son of Arachna",
      "Mark of the Son of Arachna",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "The Cursed Heart",
    description: "Defeat The Heart of the Wetlands in the Sulfurous Wetlands.",
    marks: [
      "Mark of the Wetlands",
      "Mark of the Wetlands",
      "Mark of the Wetlands",
      "Mark of the Wetlands",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "Pub Crawl",
    description: "Defeat Bradley the Barkeep in The Tavern.",
    marks: [
      "Mark of the Barkeep",
      "Mark of the Barkeep",
      "Mark of the Barkeep",
      "Mark of the Barkeep",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "The Mermaid Goddess",
    description: "Defeat Thessal the Mermaid Goddess in the Ocean Trench.",
    marks: [
      "Mark of Thessal",
      "Mark of Thessal",
      "Mark of Thessal",
      "Mark of Thessal",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "The Nightmare",
    description: "Defeat the Nightmare Colony in the Parasite Chambers.",
    marks: [
      "Mark of Parasitic Horrors",
      "Mark of Parasitic Horrors",
      "Mark of Parasitic Horrors",
      "Mark of Parasitic Horrors",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "The Ghost Pirate",
    description: "Defeat Davy Jones on his Ghost Ship.",
    marks: [
      "Mark of Davy Jones",
      "Mark of Davy Jones",
      "Mark of Davy Jones",
      "Mark of Davy Jones",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "The Elemental Wyvern",
    description: "Defeat the Ivory Wyvern in the Lair of Draconis.",
    marks: [
      "Mark of the Wyvern",
      "Mark of the Wyvern",
      "Mark of the Wyvern",
      "Mark of the Wyvern",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "The Fallen",
    description: "Defeat Daichi in the Mountain Temple.",
    marks: [
      "Mark of Daichi",
      "Mark of Daichi",
      "Mark of Daichi",
      "Mark of Daichi",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "The Unwilling",
    description: "Defeat Esben the Unwilling in the Ice Cave.",
    marks: ["Mark of Esben", "Mark of Esben", "Mark of Esben", "Mark of Esben"],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "The Ancients",
    description: "Defeat Geb in the Tomb of the Ancients.",
    marks: ["Mark of Geb", "Mark of Geb", "Mark of Geb", "Mark of Geb"],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "The Goddess",
    description: "Defeat the Tesseract Goddess in The Third Dimension.",
    marks: [
      "Mark of the Tesseract Goddess",
      "Mark of the Tesseract Goddess",
      "Mark of the Tesseract Goddess",
      "Mark of the Tesseract Goddess",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "The Mad God",
    description: "Defeat Oryx the Mad God in his chamber.",
    marks: ["Mark of Oryx", "Mark of Oryx", "Mark of Oryx", "Mark of Oryx"],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "The Doorwarden",
    description: "Defeat Janus the Doorwarden in Oryx's Castle.",
    marks: ["Mark of Janus", "Mark of Janus", "Mark of Janus", "Mark of Janus"],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "Double Trouble",
    description: "Put a stop to Oryx and his Doorwarden!",
    marks: [
      "Mark of Oryx",
      "Mark of Oryx",
      "Mark of Oryx",
      "Mark of Janus",
      "Mark of Janus",
      "Mark of Janus",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "Epic Showdown",
    description:
      "Slay Jon Bilgewater, the Son of Arachna, and the Murderous Megamoth to be rewarded.",
    marks: [
      "Mark of Bilgewater",
      "Mark of Bilgewater",
      "Mark of the Son of Arachna",
      "Mark of the Son of Arachna",
      "Mark of the Megamoth",
      "Mark of the Megamoth",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "Exterminate!",
    description: "Get rid of those overgrown insects!",
    marks: [
      "Mark of the Son of Arachna",
      "Mark of the Son of Arachna",
      "Mark of the Megamoth",
      "Mark of the Megamoth",
      "Mark of the Killer Bee Queen",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "Unsettling Foes",
    description: "Defeat these creepy combatants for a prize!",
    marks: [
      "Mark of Parasitic Horrors",
      "Mark of Parasitic Horrors",
      "Mark of Esben",
      "Mark of Davy Jones",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "Long Forgotten",
    description: "Many forgot about these ancient foes. Aye, but not me!",
    marks: ["Mark of Esben", "Mark of Esben", "Mark of Geb", "Mark of Geb"],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "Thar be Pirates!",
    description: "Avast! Clear out the pirate presence in the realm!",
    marks: [
      "Mark of Bilgewater",
      "Mark of Bilgewater",
      "Mark of Davy Jones",
      "Mark of Davy Jones",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "Lost and Found",
    description:
      "People say some things are best left forgotten. I heartily disagree!",
    marks: [
      "Mark of Parasitic Horrors",
      "Mark of the Wyvern",
      "Mark of Davy Jones",
      "Mark of Geb",
    ],
    rewards: ["Mighty Quest Chest"],
  },
  {
    task: "Ocean Man",
    description:
      "With how vast the realm is, you'd think Oryx wouldn't care for the high seas.",
    marks: [
      "Mark of Thessal",
      "Mark of Thessal",
      "Mark of Davy Jones",
      "Mark of Bilgewater",
    ],
    rewards: ["Mighty Quest Chest"],
  },
].sort((a, b) => a.task.localeCompare(b.task));

export const EPIC_QUESTS = [
  {
    task: "The Killer Queen",
    description: "Defeat the Killer Bee Queen in the Nest.",
    marks: [
      "Mark of the Killer Bee Queen",
      "Mark of the Killer Bee Queen",
      "Mark of the Killer Bee Queen",
    ],
    rewards: ["Honeyed Epic Quest Chest", "Lucky Clover"],
  },
  {
    task: "The King",
    description: "Defeat the Forgotten King in the Shatters.",
    marks: [
      "Mark of the Forgotten King",
      "Mark of the Forgotten King",
      "Mark of the Forgotten King",
    ],
    rewards: ["Royal Epic Quest Chest", "Lucky Clover"],
  },
  {
    task: "The Colossus",
    description: "Defeat the Marble Colossus in the Lost Halls.",
    marks: [
      "Mark of the Marble Colossus",
      "Mark of the Marble Colossus",
      "Mark of the Marble Colossus",
    ],
    rewards: ["Marble Epic Quest Chest", "Lucky Clover"],
  },
  {
    task: "The Cultist",
    description: "Defeat Malus in the Cultist Hideout.",
    marks: ["Mark of Malus", "Mark of Malus", "Mark of Malus"],
    rewards: ["Cultish Epic Quest Chest", "Lucky Clover"],
  },
  {
    task: "The End",
    description: "Defeat the Void Entity in the Void.",
    marks: [
      "Mark of the Void Entity",
      "Mark of the Void Entity",
      "Mark of the Void Entity",
    ],
    rewards: ["Voided Epic Quest Chest", "Lucky Clover"],
  },
  {
    task: "The Crystal",
    description: "Defeat the Crystal Entity in the Crystal Cavern.",
    marks: [
      "Mark of the Crystal Entity",
      "Mark of the Crystal Entity",
      "Mark of the Crystal Entity",
    ],
    rewards: ["Crystallized Epic Quest Chest", "Lucky Clover"],
  },
  {
    task: "Havoc in the Halls",
    description:
      "Take down Malus and the Marble Colossus for otherworldly rewards!",
    marks: [
      "Mark of the Marble Colossus",
      "Mark of the Marble Colossus",
      "Mark of Malus",
      "Mark of Malus",
    ],
    rewards: ["Voided Epic Quest Chest", "Lucky Clover"],
  },
  {
    task: "Kogboldian Treasure",
    description:
      "Defeat the Factory Control Core in the Kogbold Steamworks 3 times.",
    marks: [
      "Mark of the Control Core",
      "Mark of the Control Core",
      "Mark of the Control Core",
    ],
    rewards: ["Steampunk Epic Quest Chest", "Lucky Clover"],
  },
  {
    task: "Moonlight Festival",
    description: "Join in on the festivities at the Moonlight Village!",
    marks: ["Mark of Moonlight", "Mark of Moonlight", "Mark of Moonlight"],
    rewards: ["Moonlit Epic Quest Chest", "Lucky Clover"],
  },
  {
    task: "Advanced Kogbold Steamworks",
    description: "Join in on the factory!",
    marks: [
      "Mark of the Advanced Control Core",
      "Mark of the Advanced Control Core",
      "Mark of the Advanced Control Core",
    ],
    rewards: [
      "Steampunk Epic Quest Chest",
      "Steampunk Epic Quest Chest",
      "Lucky Clover",
    ],
  },
  {
    task: "Advanced Nest",
    description: "Defeat the Killer Bee Queen in the Advanced Nest.",
    marks: [
      "Mark of the Advanced Killer Bee Queen",
      "Mark of the Advanced Killer Bee Queen",
      "Mark of the Advanced Killer Bee Queen",
      "Mark of the Advanced Killer Bee Queen",
    ],
    rewards: [
      "Honeyed Epic Quest Chest",
      "Honeyed Epic Quest Chest",
      "Lucky Clover",
    ],
  },
  {
    task: "The Warden",
    description:
      "Entertain Soulwarden Murcian in the Spectral Penitentiary 3 times.",
    marks: [
      "Mark of the Soulwarden",
      "Mark of the Soulwarden",
      "Mark of the Soulwarden",
    ],
    rewards: ["Spectral Epic Quest Chest", "Lucky Clover"],
  },
].sort((a, b) => a.task.localeCompare(b.task));

export const COMBINED_QUESTS: TDailyQuest[] = [
  ...SCOUT_QUESTS,
  ...BEGINNER_QUESTS,
  ...STRANDARD_QUESTS,
  ...MIGHTY_QUESTS,
  ...EPIC_QUESTS,
];
