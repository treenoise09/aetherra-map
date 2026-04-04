export interface Region {
  id: string;
  name: string;
  subtitle: string;
  emoji: string;
  icon: string;
  color: string;
  glowColor: string;
  bgGradient: string;
  x: number;
  y: number;
  size: number;
  terrain: string;
  capital: string;
  ruler: string;
  government: string;
  economy: string;
  culture: string;
  danger: string;
  suitedFor: string;
  summary: string;
  lore: string;
  population: { race: string; percent: number; role: string }[];
  traits: string[];
  knownFor: string[];
  isUnderground?: boolean;
}

export const regions: Region[] = [
  {
    id: "saraketh",
    name: "Saraketh Dominion",
    subtitle: "Land of Gold and Crystal",
    emoji: "🏜️",
    icon: "desert",
    color: "#D4A843",
    glowColor: "rgba(212, 168, 67, 0.4)",
    bgGradient: "from-amber-950 via-yellow-950 to-amber-900",
    x: 72,
    y: 48,
    size: 14,
    terrain: "Desert",
    capital: "Solkarah",
    ruler: "The Sovereign",
    government: "Sovereign + Merchant Council",
    economy: "Magic Crystals & Trade",
    culture: "Negotiation, Commerce & Survival",
    danger: "Sandstorms, Desert Beasts & Crime",
    suitedFor: "Merchant, Adventurer, Rogue",
    summary: "A land of opportunity — but everything has a price.",
    lore: "Saraketh Dominion คืออาณาจักรทะเลทรายอันมั่งคั่งที่รุ่งเรืองจากคริสตัลเวทมนตร์และการค้า เมืองหลวง Solkarah เป็นศูนย์กลางการค้าที่คึกคักที่สุดในทวีป เต็มไปด้วยพ่อค้า คาราวาน และนักผจญภัย ทองคำและคริสตัลไหลเวียนเหมือนน้ำ แต่ความอันตรายซ่อนอยู่ในทุกมุมมืด",
    population: [
      { race: "Human", percent: 60, role: "Laborers / Adventurers / Citizens" },
      { race: "Tiefling", percent: 20, role: "Merchant Class / Politicians" },
      { race: "Half-Elf", percent: 10, role: "Mixed Roles" },
      { race: "Others", percent: 10, role: "Various" },
    ],
    traits: [
      "Richest trading hub on the continent",
      "Magic crystals power everything",
      "Wealth determines social standing",
      "Fierce sandstorm seasons",
    ],
    knownFor: ["Crystal Markets", "Caravan Routes", "The Grand Bazaar", "The Sovereign's Palace"],
  },
  {
    id: "veramor",
    name: "The Free Tides of Veramor",
    subtitle: "Islands of Freedom and Fleet",
    emoji: "🌊",
    icon: "ocean",
    color: "#4A9EC4",
    glowColor: "rgba(74, 158, 196, 0.4)",
    bgGradient: "from-blue-950 via-cyan-950 to-blue-900",
    x: 31,
    y: 21,
    size: 12,
    terrain: "Archipelago / Ocean",
    capital: "Veramor Port",
    ruler: "High Admiral",
    government: "Free Confederation of Captains",
    economy: "Maritime Trade, Transport & Privateering",
    culture: "Freedom, Self-rule & Ocean Life",
    danger: "Sea Storms, Sea Monsters & Fleet Conflicts",
    suitedFor: "Rogue, Bard, Sailor, Adventurer",
    summary: "A land of freedom — but the sea shows no mercy.",
    lore: "Veramor คือสหพันธรัฐหมู่เกาะที่รุ่งเรืองจากการเดินเรือและการค้า เป็นจุดเชื่อมต่อสำคัญของเส้นทางทะเลทั่วทั้งทวีป เมืองท่า Veramor Port เต็มไปด้วยกะลาสี พ่อค้า และนักผจญภัยที่แสวงหาโชคลาภและอิสรภาพบนคลื่น",
    population: [
      { race: "Human", percent: 50, role: "Sailors / Traders" },
      { race: "Goliath / Orc / Half-Orc", percent: 20, role: "Warriors / Crew" },
      { race: "Beastfolk", percent: 20, role: "Scouts / Hunters" },
      { race: "Others", percent: 10, role: "Various" },
    ],
    traits: [
      "Largest naval force on the continent",
      "Captains hold ultimate authority",
      "No binding laws between islands",
      "Legendary sea monster hunters",
    ],
    knownFor: ["Veramor Port", "The Admiral's Fleet", "Sea Monster Trophies", "Smuggler's Coves"],
  },
  {
    id: "elthanir",
    name: "Elthanir Verdancy",
    subtitle: "The Living Ancient Forest",
    emoji: "🌳",
    icon: "forest",
    color: "#4A8C5C",
    glowColor: "rgba(74, 140, 92, 0.4)",
    bgGradient: "from-green-950 via-emerald-950 to-green-900",
    x: 56.5,
    y: 40,
    size: 13,
    terrain: "Ancient Forest",
    capital: "Sylvandor",
    ruler: "Forest-Blessed Leaders",
    government: "Council of Guardians & Forest Listeners",
    economy: "Natural Resources & Ancient Wisdom",
    culture: "Harmony with Nature, Peace & Seclusion",
    danger: "Wild Beasts, Nature Spirits & Forbidden Zones",
    suitedFor: "Druid, Healer, Ranger",
    summary: "A land of balance — but the forest doesn't welcome everyone.",
    lore: "Elthanir Verdancy คือดินแดนแห่งป่าโบราณที่ผู้คนใช้ชีวิตร่วมกับธรรมชาติอย่างกลมกลืน เมือง Sylvandor ถูกสร้างขึ้นท่ามกลางต้นไม้ยักษ์และผืนป่าศักดิ์สิทธิ์ ผู้พิทักษ์ป่าคือผู้ที่ได้รับพรจากธรรมชาติเอง",
    population: [
      { race: "Human", percent: 40, role: "Villagers / Rangers" },
      { race: "Elf", percent: 30, role: "Guardians / Lore-keepers" },
      { race: "Firbolg", percent: 15, role: "Forest Wardens" },
      { race: "Others", percent: 15, role: "Various" },
    ],
    traits: [
      "Trees older than recorded history",
      "Magic flows through every root",
      "Outsiders are rarely welcomed",
      "Nature spirits actively protect the land",
    ],
    knownFor: ["Sylvandor (city in the treetops)", "The Great Root Network", "Sacred Groves", "The Forbidden Depths"],
  },
  {
    id: "frostspire",
    name: "Frostspire Theocracy",
    subtitle: "Kingdom of Faith in the Ice",
    emoji: "❄️",
    icon: "ice",
    color: "#8BB8D4",
    glowColor: "rgba(139, 184, 212, 0.4)",
    bgGradient: "from-slate-950 via-blue-950 to-slate-900",
    x: 51,
    y: 12,
    size: 11,
    terrain: "Ice Mountains & Blizzards",
    capital: "Frostspire",
    ruler: "Religious Leaders & Holy Knights",
    government: "Theocracy + Noble Houses",
    economy: "Faith, Tribute & Mountain Resources",
    culture: "Discipline, Duty & Unyielding Faith",
    danger: "Extreme Cold, Blizzards & Mountain Hazards",
    suitedFor: "Knight, Paladin, Cleric",
    summary: "A land of faith — where holiness and brutality walk side by side.",
    lore: "Frostspire Theocracy คืออาณาจักรแห่งภูเขาน้ำแข็งที่ตั้งอยู่ท่ามกลางพายุหิมะอันโหดร้าย เมืองหลวง Frostspire ถูกสร้างรอบมหาวิหารศักดิ์สิทธิ์และป้อมปราการสูงตระหง่าน ศรัทธาคือทุกสิ่ง",
    population: [
      { race: "Human", percent: 70, role: "Knights / Clergy / Citizens" },
      { race: "Elf", percent: 20, role: "Nobility / Holy Order" },
      { race: "Others", percent: 10, role: "Various" },
    ],
    traits: [
      "Faith governs every aspect of life",
      "Most disciplined military on the continent",
      "Several powerful noble houses",
      "Outsiders treated with suspicion",
    ],
    knownFor: ["The Grand Cathedral", "The Holy Order", "Frostspire Citadel", "Ancient Holy Relics"],
  },
  {
    id: "ironwald",
    name: "The Ironwald Imperium",
    subtitle: "The Underdark Empire of Magitek",
    emoji: "⚙️",
    icon: "mechanical",
    color: "#8A6DAC",
    glowColor: "rgba(138, 109, 172, 0.4)",
    bgGradient: "from-purple-950 via-slate-950 to-purple-900",
    x: 48.5,
    y: 89,
    size: 10,
    terrain: "Underground / Underdark",
    capital: "Unknown (Underdark)",
    ruler: "The Ironwald Command",
    government: "Military Imperium",
    economy: "Magitek Industry & Resource Extraction",
    culture: "Order, Efficiency & Technological Supremacy",
    danger: "Unknown — Few Enter, Fewer Return",
    suitedFor: "Artificer, Fighter, Wizard",
    summary: "A civilization beneath the surface — where magic and machine are one.",
    lore: "ลึกลงไปใต้ผืนดินของ Aetherra มีจักรวรรดิที่ผู้คนบนผิวโลกแทบไม่เคยเห็น The Ironwald Imperium ผสานเวทมนตร์เข้ากับเทคโนโลยีจนกลายเป็นพลังที่ไร้เทียมทาน ประตูสู่อาณาจักรนี้ปิดตลอดกาล",
    population: [
      { race: "Warforged / Construct", percent: 35, role: "Workers / Soldiers" },
      { race: "Deep Gnome", percent: 30, role: "Engineers / Artificers" },
      { race: "Duergar", percent: 25, role: "Miners / Warriors" },
      { race: "Others", percent: 10, role: "Subjects" },
    ],
    traits: [
      "Advanced Magitek far beyond surface technology",
      "Completely closed to outsiders",
      "Every movement is planned in advance",
      "No reliance on natural magic",
    ],
    knownFor: ["Magitek War Machines", "The Iron Vaults", "Deep Crystal Mines", "The Unseen Armies"],
    isUnderground: true,
  },
];

export const worldInfo = {
  name: "Aetherra",
  fullName: "Aetherra Veyl",
  tagline: "Where Magic Flows Through All Living Things",
  description: "Aetherra คือโลกที่เวทมนตร์ไหลเวียนอยู่ในทุกสรรพสิ่ง ตั้งแต่รากไม้ใต้ผืนป่า ไปจนถึงคริสตัลใต้ทะเลทราย และเครื่องจักรเวทในโลกใต้ดิน",
  warning: "Something stirs in the silence of the forest. Crystals pulse with unknown energy. Storms break natural patterns. The world of Aetherra is responding to something...",
  farEast: {
    name: "Far East Quarter",
    description: "Found in every major city — a district of Eastern traders, warriors, and mysterious arts from distant lands.",
    traits: [
      "Foreign Quarter found in all major cities",
      "Exotic food, language & culture",
      "Wandering swordmasters & strange martial arts",
      "Rare goods trading hub",
      "Close-knit community bonds",
    ],
  },
};
