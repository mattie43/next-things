// https://realmstock.network/Notifier/EventHistory

export type Event = {
  eventId: string;
  realm: string;
  server: string;
  realmCount: number; // Out of 85
  unknownNumber: number;
  realmScore: number;
  spawnTime: string;
  uid: string;
  unknownBoolean: boolean;
};

// 34584|Hearth|USWest|13|152|49|07:53|69d97196-76a9-4230-bcb5-c24bcd15df9e|False
// 46045|Cronus|USEast2|70|153|77|07:53|cec1107e-3a9f-4784-95e8-8d6620fd15c3|False

// Dungeon ID + Name
export const dungeons = [
  "1804|Sprite World",
  "1815|Pirate Cave",
  "24372|Forest Maze",
  "1816|Snake Pit",
  "1817|Spider Den",
  "1818|Undead Lair",
  "1819|Abyss of Demons",
  "2192|Mad Lab",
  "3465|Oryx's Castle",
  "3451|Oryx's Chamber",
  "1588|Oryx's Chamber",
  "2999|Chicken Chamber",
  "578|Wine Cellar",
  "24608|Wine Cellar Short",
  "1886|Battle for the Nexus",
  "1845|Dreamscape Labyrinth",
  "1844|Tomb of the Ancients",
  "1898|Tomb of the Ancients (Heroic)",
  "8849|Belladonna's Garden",
  "8853|Old Lair of Shaitan",
  "8193|Court of Oryx",
  "1840|Ocean Trench",
  "1843|Forbidden Jungle",
  "1849|Manor of the Immortals",
  "1857|Davy Jones' Locker",
  "1858|Beachzone",
  "24110|Cave of A Thousand Treasures",
  "1866|Candyland Hunting Grounds",
  "1867|Haunted Cemetery",
  "24357|Haunted Cemetery Gates",
  "24358|Haunted Cemetery Graves",
  "24361|Haunted Cemetery Final Battle",
  "309|Halloween Haunted Cemetery",
  "9043|Puppet Master's Theatre",
  "29310|The Shatters",
  "29798|Puppet Master's Encore",
  "29835|Ice Cave",
  "29837|The Inner Sanctum",
  "30014|Old Lair of Draconis",
  "30030|The Ivory Wyvern",
  "30015|Consolation of Draconis",
  "1884|Woodland Labyrinth",
  "1885|Deadwater Docks",
  "28811|Bilgewater's Grotto",
  "1838|The Crawling Depths",
  "574|Toxic Sewers",
  "285|The Hive",
  "311|Mountain Temple",
  "9323|Heroic Undead Lair",
  "9324|Heroic Abyss of Demons",
  "45591|Lair of Draconis",
  "28057|Lair of Shaitan",
  "19302|The Third Dimension",
  "26074|Admin Arena",
  "26075|Crab Arena",
  "26078|Thessal Arena",
  "26127|Xolotl Arena",
  "26128|Puppet Arena",
  "1321|Crab Arena 2",
  "1322|Thessal Arena 2",
  "1323|Xolotl Arena 2",
  "1324|Puppet Arena 2",
  "14883|The Bridge Sentinel Rehearsal",
  "14884|The Twilight Archmage Rehearsal",
  "14885|The Forgotten King Rehearsal",
  "49768|Hidden Interregnum",
  "25490|Sulfurous Wetlands",
  "29920|KSW Encounter",
  "1430|Queen Bunny Chamber",
  "51922|Hidden Interregnum",
  "23691|Spectral Penitentiary",
  "3971|Snowball Rolling Solo 2",
  "3972|Snowball Rolling Solo",
  "49433|Kogbold Steamworks",
  "28822|Advanced Kogbold Steamworks",
  "1821|Nexus",
  "1822|Kitchen",
  "1862|Nexus Explanation",
  "1863|Vault Explanation",
  "1864|Guild Explanation",
  "635|Exalted Kitchen",
  "15566|Santa Workshop",
  "4259|The Nest",
  "17570|Advanced Nest",
  "9657|Ancient Ruins",
  "6817|FR Test",
  "763|Oryxmania Treasure Room",
  "1038|Oryxmania Treasure Room 2",
  "45092|Lost Halls",
  "45075|The Void",
  "32255|Remnant of the Void",
  "2462|Remnant of the Void",
  "45155|Cultist Hideout",
  "19459|Cultist Hideout",
  "45236|LH Test",
  "45118|LH Boss Test",
  "6218|Oryx's Sanctuary",
  "6219|Oryx's Sanctuary",
  "1905|Oryx Mania Sanctuary",
  "45752|Malogia",
  "45751|Untaris",
  "45771|Forax",
  "45774|Katalund",
  "13983|Secluded Thicket",
  "52926|Interregnum Daily Quest Room",
  "22060|RRCubeGodTest",
  "1820|Random Realm",
  "1824|Vault",
  "1839|Guild Hall",
  "1872|Cloth Bazaar",
  "1875|Pet Yard",
  "5980|Daily Login Room",
  "5974|Daily Quest Room",
  "3873|Oryx Pandemonium Decaract",
  "20447|Moonlight Village",
  "15730|High Tech Terror",
  "45508|LOD Rock Dragon",
  "50432|The Inner Workings",
  "43738|Chess",
  "8164|Oryx Horde",
  "45679|Fungal Cavern",
  "5704|Rainbow Road",
  "1293|Guild Hall",
  "1553|Guild Hall 2",
  "1569|Guild Hall 3",
  "1575|Guild Hall 4",
  "2554|Cnidarian Reef",
  "1944|Parasite Chambers",
  "43986|The Machine",
  "2172|Magic Woods",
  "32696|Ice Tomb",
  "17744|The Tavern",
  "17917|Beer Encounter Arena",
  "43862|Cursed Library",
  "10042|Crystal Cavern",
  "26094|Crystal Cavern",
  "25857|GC encounter",
];

// Event ID + Color + Name
export const events = [
  "4314|000000FF|EH Event Hive Summoner",
  "4312|834008FF|Killer Bee Nest",
  "4324|9F6230FF|Yellow Beehemoth",
  "4325|954D3AFF|Red Beehemoth",
  "4326|2A74A3FF|Blue Beehemoth",
  "6622|CB7E5EFF|Archbishop Leucoryx",
  "8150|C1E8FBFF|Snow Construct",
  "8174|4583BCFF|Permafrost Lord",
  "15581|9A6824FF|Event Chest",
  "32925|11472DFF|Wandering Turkey",
  "29970|94A224FF|Oryxmas Gift",
  "25799|000000FF|Snowy Spawner Object",
  "25611|C5D8DFFF|Snowy The Frost God",
  "6208|A8988DFF|Event Chest",
  "19235|EB2727FF|Sapphire Revealer",
  "19236|EB2727FF|Emerald Revealer",
  "19237|EB2727FF|Topaz Revealer",
  "19238|EB2727FF|Amethyst Revealer",
  "19239|EB2727FF|Ruby Revealer",
  "19240|000000FF|Sapphire Initiator",
  "19241|000000FF|Emerald Initiator",
  "19242|000000FF|Topaz Initiator",
  "19243|000000FF|Amethyst Initiator",
  "19244|000000FF|Ruby Initiator",
  "19245|000000FF|The Skeyper",
  "45660|000000FF|The Skeyper",
  "19246|A2816AFF|The Skeyper",
  "26111|000000FF|Alien Realm Leprechaun Spawner",
  "26112|000000FF|Alien Biff Spawner",
  "26115|000000FF|Realm Leprechaun Spawner",
  "26116|000000FF|Realm Leprechaun Spawner 2",
  "26118|000000FF|Biff Spawner",
  "46074|C5D8DFFF|RSM Snowman Body Generator",
  "46045|B9A7A4FF|Jack Frost",
  "24332|000000FF|Valentine's Heart",
  "9781|B9942EFF|Yellow Leprechaun",
  "32952|000000FF|The Appetizer Spawner",
  "32953|000000FF|The Santappetizer",
  "32954|AA515CFF|The Santappetizer",
  "33026|000000FF|Presents Spawner",
  "33029|9CAB5AFF|The Gardener",
  "33034|000000FF|Gardener Spawner",
  "44140|722989FF|Void Prison",
  "44143|33467BFF|Daeva Prison",
  "44147|000000FF|Void Heralds Spawner",
  "44149|000000FF|Daeva Heralds Spawner",
  "17216|000000FF|Dragon Initiator",
  "17217|000000FF|Dragon Spawner",
  "17218|000000FF|Statues Initiator",
  "17219|000000FF|Statues Spawner",
  "17220|000000FF|Dragon Initiator 2",
  "17221|000000FF|Dragon Spawner 2",
  "17222|000000FF|Statues Initiator 2",
  "17223|000000FF|Statues Spawner 2",
  "31112|B6ADA6FF|Hard Merc 2",
  "31095|000000FF|Merc A Spawner",
  "31096|000000FF|Merc B Spawner",
  "31097|000000FF|Merc C Spawner",
  "31098|000000FF|Merc D Spawner",
  "31105|000000FF|Hero Helper Counter",
  "14507|3B3D35FF|Monument to the Bridge Sentinel",
  "14510|373830FF|Monument to the Twilight Archmage",
  "14512|47443EFF|Monument to the Forgotten King",
  "8799|90538FFF|Purple Leprechaun",
  "31639|000000FF|Oryxmas Elf Event",
  "31640|000000FF|Oryxmas Elf Event",
  "31638|000000FF|Elf Event",
  "45104|856466FF|Lost Sentry",
  "1640|B91011FF|Red Demon",
  "1653|F66203FF|Phoenix Lord",
  "1661|CBAB52FF|Cyclops God",
  "2344|98BDADFF|Ghost King",
  "2349|98BDADFF|Ghost King",
  "1656|35863BFF|Oasis Giant",
  "2335|622510FF|Ent Ancient",
  "2336|622510FF|Ent Ancient",
  "2331|C68159FF|Lich",
  "2332|C68159FF|Lich",
  "29688|622510FF|Ent Ancient",
  "29689|622510FF|Ent Ancient",
  "52094|2D8479FF|Commander Calbrik",
  "45850|2D8479FF|Commander Calbrik",
  "45863|2D8479FF|Alien UFO",
  "45683|2D8479FF|Alien UFO",
  "3870|D1CCD2FF|Biff the Buffed Bunny",
  "3871|4583BCFF|Permafrost Lord",
  "1334|9F9F9FFF|Decaract",
  "1335|4F4444FF|Decaract",
  "1351|898484FF|The Puppet Master",
  "1355|7B7482FF|Puppet of Chaos",
  "1357|827474FF|Puppet of Pain",
  "20800|373A31FF|Ethereal Shrine",
  "1640|B91011FF|Red Demon",
  "1653|F66203FF|Phoenix Lord",
  "1661|CBAB52FF|Cyclops God",
  "2344|98BDADFF|Ghost King",
  "2349|98BDADFF|Ghost King",
  "1656|35863BFF|Oasis Giant",
  "2335|622510FF|Ent Ancient",
  "2336|622510FF|Ent Ancient",
  "2331|C68159FF|Lich",
  "2332|C68159FF|Lich",
  "29688|622510FF|Ent Ancient",
  "29689|622510FF|Ent Ancient",
  "49702|000000FF|Shady Vagrant Spawner",
  "49707|7B4B58FF|Pirate Queen Ramm",
  "51810|7B4B58FF|Pirate Queen Ramm",
  "49708|7B4B58FF|Pirate Queen Ramm",
  "49717|7B7140FF|Izel the Grand Shaman",
  "51811|7B7140FF|Izel the Grand Shaman",
  "49718|7B7140FF|Izel the Grand Shaman",
  "49729|835C70FF|Nefret the Pharaoh",
  "51812|835C70FF|Nefret the Pharaoh",
  "49730|835C70FF|Nefret the Pharaoh",
  "49782|712F66FF|Black Blade Ozuchi",
  "51813|712F66FF|Black Blade Ozuchi",
  "45667|475237FF|Limoz the Viridian Dragon",
  "45430|6F2229FF|Pyyr the Crimson Dragon",
  "45449|716C61FF|Ivory Wyvern",
  "45521|DC956FFF|Rock Dragon",
  "32751|301C1CFF|The Pumpkin Master",
  "32752|E77C08FF|Pumpkin Blast",
  "32754|524B27FF|Huntress Pumpkin",
  "32757|5A9115FF|Trickster Pumpkin",
  "32760|A06F1DFF|Pumpkin of Chaos",
  "32762|6B531BFF|Pumpkin of Pain",
  "2357|BBDCFBFF|Mysterious Crystal",
  "2357|BBDCFBFF|Mysterious Crystal",
  "29747|A78944FF|The Puppet Master",
  "29758|847786FF|Wizard Puppet",
  "29759|909090FF|Knight Puppet",
  "29751|D7C7A4FF|Priest Puppet",
  "29760|D7C7A4FF|Priest Puppet",
  "29752|A78944FF|The Puppet Master",
  "29764|3B3835FF|Oryx Puppet",
  "29765|B84C46FF|Minion Puppet",
  "29749|847786FF|Wizard Puppet",
  "29750|909090FF|Knight Puppet",
  "29762|815276FF|Assassin Puppet",
  "29753|D7C7A4FF|Priest Puppet",
  "29754|92992BFF|Archer Puppet",
  "29755|86773DFF|Rogue Puppet",
  "29774|887D65FF|Warrior Puppet",
  "29721|B3616AFF|Huntress Puppet",
  "29776|D8CB49FF|Paladin Puppet",
  "29777|865064FF|Necromancer Puppet",
  "29778|93936CFF|Mystic Puppet",
  "29779|9F1D0EFF|Sorcerer Puppet",
  "29784|ACA388FF|Trickster Puppet",
  "29780|ACA388FF|Trickster Puppet",
  "29785|221E10FF|Ninja Puppet",
  "18527|7676A2FF|Heroic Septavius the Ghost God",
  "21959|68646CFF|Avatar of the Forgotten King",
  "21983|C39479FF|Wrapped Dragon",
  "21996|A191DDFF|Lord of the Lost Lands",
  "22000|DF977AFF|Jolly Sphinx",
  "22003|8D7E79FF|Snow Shrine",
  "22006|C96A75FF|Pumpkin Shrine",
  "22009|B7D7F4FF|Ice Cube God",
  "22013|3E2439FF|Gobble God",
  "22019|AFA8AAFF|Frostaract",
  "22021|4F4444FF|Pentaract Tower Ultra",
  "22023|B06F6BFF|Hat God",
  "22029|7F7D30FF|Zombie Horde",
  "22034|A46A33FF|New Beach Bum",
  "22041|75674DFF|Ghost Ship Whirlpool",
  "22042|A5B7C7FF|Frozen Ship",
  "22108|000000FF|New Train Encounter Spawner",
  "22109|4C3E2EFF|Kogbold Expedition Engine",
  "22127|000000FF|New Beer Encounter Spawner",
  "22128|B58446FF|Beer God",
  "22137|BC7878FF|Candy Miner",
  "22139|000000FF|New EH Event Hive Summoner",
  "22146|856466FF|Lost Sentry",
  "22147|373A31FF|Ethereal Shrine",
  "22148|000000FF|New Temple Encounter",
  "22149|214C30FF|Jade Statue",
  "22150|6A2212FF|Garnet Statue",
  "20475|937254FF|Bilgewater's Galleon",
  "20744|545268FF|Flying Behemoth",
  "16935|201B18FF|Sentient Monolith",
  "16936|282534FF|Monolith Siphon",
  "16937|172D25FF|Monolith Siphon",
  "16938|25293CFF|Monolith Siphon",
  "16970|25293CFF|Monolith Siphon",
  "16990|601460FF|Ravenous Rot",
  "24005|8F5546FF|Legion General",
  "24008|89823EFF|Mutant Overgrowth",
  "34456|488B72FF|Adult Baneserpent",
  "34460|80B4A3FF|Well of Souls",
  "34463|A46969FF|Eye of the Underworld",
  "34489|4A3B56FF|The Plague Doctor",
  "34493|936958FF|Skeletal Centipede",
  "34565|AA8269FF|Maze Minotaur",
  "34510|5C4767FF|Sigma Werewolf",
  "34537|8B6182FF|Skull Knight",
  "34538|A89267FF|World's Oyster",
  "34539|FFFFFFFF|Gates of the Nether",
  "34554|614534FF|Goblin Outpost",
  "34550|676A77FF|Goblin Patriarch",
  "34558|752A36FF|Ancient Kaiju",
  "34581|722424FF|Bloodroot Heart",
  "34584|242538FF|The Lich King",
  "34605|512E67FF|Daughter of Limon",
  "51031|578D9DFF|Eye of the Storm",
  "51032|4B471FFF|Possessed Pumpkin",
  "51035|625D88FF|Commander Calbrik",
  "51061|7887A8FF|Astral Rift",
  "51072|BE6B29FF|Crab Sovereign",
  "51075|837C78FF|Aerial Warship",
  "51078|49372AFF|Corrupted Bramblethorn",
  "29083|39541EFF|Limoz the Veridian Dragon",
  "8155|707562FF|Stone Guardian",
  "8154|66695CFF|Stone Guardian",
  "8149|5C5F54FF|Oryx Statue",
  "29217|000000FF|Oryx Horde Spawner",
  "3369|584D29FF|Sarcophagus",
  "9635|6C584CFF|Chancellor Dammah",
  "45613|694C3CFF|Chief Beisa",
  "2471|E2F9FFFF|Mysterious Crystal",
  "1063|C9AE70FF|Easter Egg Basket",
  "1064|C9AE70FF|Easter Egg Basket",
  "1065|C9AE70FF|Easter Egg Basket",
  "2206|F2B0C6FF|Mysterious Egg",
  "2207|D1CCD2FF|Biff the Buffed Bunny",
  "28980|8A99A4FF|Alien Biff",
  "28981|000000FF|Alien Biff",
  "10588|6E8435FF|Leprechaun",
  "10589|6E8435FF|Leprechaun",
  "5708|6E8435FF|Leprechaun",
  "6894|5A7A91FF|Alien Leprechaun",
  "23296|000000FF|MotMG St Patricks Event Anchor",
  "23298|737A62FF|Leprechaun Statue",
  "23299|6A902BFF|Leprechaun",
  "29953|23599DFF|Nikao the Azure Dragon",
  "29849|23599DFF|Nikao the Defiler",
  "29954|801915FF|Pyyr the Crimson Dragon",
  "30019|801915FF|Pyyr the Wicked",
  "29955|39541EFF|Limoz the Veridian Dragon",
  "30017|39541EFF|Limoz the Plague Bearer",
  "30026|96AC92FF|Ivory Wyvern",
  "29742|96AC92FF|Mirror Wyvern",
  "29743|96AC92FF|Mirror Wyvern",
  "29746|96AC92FF|Mirror Wyvern",
  "29748|96AC92FF|Mirror Wyvern",
  "8986|000000FF|Pile Spawn MidForest",
  "8987|000000FF|Pile Spawn MidPlains",
  "8988|000000FF|Pile Spawn MidSand",
  "8989|000000FF|Pile Spawn HighForest",
  "8990|000000FF|Pile Spawn HighPlains",
  "8991|000000FF|Pile Spawn HighSand",
  "8992|000000FF|Pile Spawn God",
  "1597|9F9F9FFF|Decaract",
  "3448|839EBDFF|Stone Guardian",
  "3449|7E90ACFF|Stone Guardian",
  "46390|7B6276FF|Stone Guardian",
  "46391|785A61FF|Stone Guardian",
  "28615|000000FF|Temple Encounter",
  "28619|214C30FF|Jade Statue",
  "28618|6A2212FF|Garnet Statue",
  "29517|68646CFF|Avatar of the Forgotten King",
  "24179|D88D68FF|Dragon Head Spawner",
  "24184|DC956FFF|Eye of the Dragon",
  "3408|A191DDFF|Lord of the Lol 0",
  "3412|CD9D6EFF|Grand Sphinx",
  "3414|DBAD84FF|Skull Shrine",
  "3665|C96A75FF|Pumpkin Shrine",
  "3417|04319DFF|Cube God",
  "3625|3E2439FF|Gobble God",
  "3423|9F9F9FFF|Pentaract",
  "3585|4F4444FF|Pentaract Tower Ultra",
  "3425|B34E38FF|Hermit God",
  "3668|7F7D30FF|Zombie Horde",
  "3669|A46A33FF|Beach Bum",
  "3640|75674DFF|Ghost Ship Whirlpool",
  "3639|86775EFF|Ghost Ship",
  "29690|A191DDFF|Challenger",
  "30617|000000FF|Train Encounter Spawner",
  "14727|4C3E2EFF|Kogbold Expedition Engine",
  "25979|000000FF|Beer Encounter Spawner",
  "24101|B58446FF|Beer God",
  "29517|68646CFF|Avatar of the Forgotten King",
  "24179|D88D68FF|Dragon Head Spawner",
  "24184|DC956FFF|Eye of the Dragon",
  "3408|A191DDFF|Lord of the Lol 0",
  "3412|CD9D6EFF|Grand Sphinx",
  "3414|DBAD84FF|Skull Shrine",
  "3665|C96A75FF|Pumpkin Shrine",
  "3417|04319DFF|Cube God",
  "3625|3E2439FF|Gobble God",
  "3423|9F9F9FFF|Pentaract",
  "3585|4F4444FF|Pentaract Tower Ultra",
  "3425|B34E38FF|Hermit God",
  "3668|7F7D30FF|Zombie Horde",
  "3669|A46A33FF|Beach Bum",
  "3640|75674DFF|Ghost Ship Whirlpool",
  "3639|86775EFF|Ghost Ship",
  "29690|A191DDFF|Challenger",
  "30617|000000FF|Train Encounter Spawner",
  "14727|4C3E2EFF|Kogbold Expedition Engine",
  "25979|000000FF|Beer Encounter Spawner",
  "24101|B58446FF|Beer God",
  "21897|A2424BFF|Red Demon",
  "21901|F56603FF|Phoenix Lord",
  "21906|BF8C4BFF|Cyclops God",
  "21912|4E95A7FF|Ghost King",
  "21914|4E95A7FF|Ghost King",
  "21924|478844FF|Oasis Giant",
  "21930|88411FFF|Ent Ancient",
  "21936|C67A58FF|Lich",
  "34553|878F67FF|Sword in the Stone?",
  "16995|837557FF|Insurgent Rebel Commander",
  "51059|355233FF|Piranha Shoal",
  "34597|955753FF|Carp Emperor",
  "34559|C5693FFF|Carp Emperor",
  "18007|715859FF|Mammoth Rat",
  "34508|A27D9AFF|Maiden of the Sea",
  "17004|917A61FF|Lantern Holder",
  "24015|675F39FF|Shady Sect Leader",
  "44164|553648FF|Death Knight",
  "24012|6E3D49FF|Alpha Werewolf",
  "34515|844C4BFF|Flesh Golem",
  "34600|26332DFF|Sinister Scarecrow",
  "34476|8E4D50FF|Infernal Ironsmith",
  "34551|CF9529FF|Demonic Effigy",
  "34573|603524FF|Eternal Tormentor",
  "24023|976B61FF|Animal Merchant",
  "34499|7F5F50FF|Washed-Up Captain",
  "44151|382A66FF|Celestial Sprite",
  "44153|865915FF|Cosmic Sprite",
  "34570|368367FF|Artificial Sprite God",
  "34481|C79238FF|Critter Brood",
  "34519|6B6E7EFF|Sunken Treasure",
  "9833|475488FF|Dread Viper",
  "16999|823C5FFF|Alluring Blossom",
  "34603|635C4BFF|Hornet's Nest",
  "51055|4B392FFF|Elder Ent Ancient",
  "34485|5D768FFF|Assembled Giant",
  "34518|7B5643FF|Monstrous Grizzly",
  "34509|9A6357FF|Organ Harvester",
  "2907|6CC4EAFF|Elder Sprite Tree",
  "46601|EB2727FF|Glitch Highlands Spawner",
  "46600|EB2727FF|Glitch Midlands Spawner",
  "46599|EB2727FF|Glitch Mountains Spawner",
  "46598|000000FF|The Glitch",
  "29793|898484FF|The Puppet Master",
  "29857|CC72A9FF|Cursed Blast",
  "29796|74695FFF|Huntress Puppet",
  "29806|676771FF|Trickster Puppet",
  "29812|7B7482FF|Puppet of Chaos",
  "29833|827474FF|Puppet of Pain",
  "1902|5F7691FF|Thessal the Mermaid Goddess",
  "5892|5F7591FF|Thessal the Mermaid Goddess",
  "5894|5F7691FF|Thessal the Mermaid Goddess",
  "5895|AA2D11FF|Deep Sea Beast",
  "2463|000000FF|Void Heralds Spawner Coral Reefs",
  "2464|000000FF|Void Heralds Spawner Dead Church",
  "2465|000000FF|Void Heralds Spawner Ancient City",
  "2466|000000FF|Void Heralds Spawner Risen Hells",
  "2467|000000FF|Void Heralds Spawner Sprite Forest",
  "2468|000000FF|Void Heralds Spawner Haunted Hallows",
  "2469|000000FF|Void Heralds Spawner Shipwreck",
  "17969|000000FF|New Sapphire Initiator",
  "17970|000000FF|New Emerald Initiator",
  "17971|000000FF|New Topaz Initiator",
  "17972|000000FF|New Amethyst Initiator",
  "17973|000000FF|New Ruby Initiator",
  "17974|000000FF|The Keyper",
  "17975|000000FF|New The Appetizer Spawner",
  "51835|000000FF|New Mercenary Initiator",
  "51836|000000FF|Vindication Announcer",
  "51837|000000FF|Vindication Announcer",
  "51838|000000FF|Vindication Announcer",
  "51839|000000FF|Vindication Announcer",
  "51886|000000FF|Vindication Announcer",
  "51887|000000FF|Vindication Announcer",
  "51888|000000FF|Vindication Announcer",
  "51889|000000FF|Vindication Announcer",
  "51890|000000FF|Vindication Announcer",
  "51891|000000FF|Vindication Announcer",
  "51912|000000FF|Interregnum Spawner 1",
  "51914|000000FF|Interregnum Spawner 2",
  "51987|000000FF|New Zombie Horde Spawner 1",
  "51988|000000FF|New Zombie Horde Spawner 2",
  "51989|000000FF|New Zombie Horde Spawner 3",
  "52013|000000FF|Totalia Spawner 1",
  "52014|000000FF|Totalia Spawner 2",
  "52015|000000FF|Totalia Spawner 3",
  "51942|000000FF|New Turkey God Spawner 1",
  "51943|000000FF|New Turkey God Spawner 2",
  "51944|000000FF|New Turkey God Spawner 3",
  "52019|986039FF|Thanksgiving Banquet",
  "52016|000000FF|Thanksgiving Banquet Spawner",
  "29932|000000FF|New Present Spawner Risen Hell",
  "29933|000000FF|New Present Spawner Sprite Forest",
  "29934|000000FF|New Present Spawner Shipwreck Cove",
  "29935|000000FF|New Present Spawner Haunted Hallows",
  "29936|000000FF|New Present Spawner Dead Church",
  "29937|000000FF|New Present Spawner Abandoned City",
  "29938|000000FF|New Present Spawner Coral Reefs",
  "25856|BC7878FF|Candy Miner",
];
