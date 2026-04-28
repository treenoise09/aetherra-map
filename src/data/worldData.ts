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
lore: "Saraketh Dominion ตั้งอยู่กลางทะเลทรายกว้างใหญ่ที่ทั้งโหดร้ายและเต็มไปด้วยโอกาส เมือง Solkarah เติบโตขึ้นรอบโอเอซิสโบราณ และกลายเป็นศูนย์กลางการค้าที่สำคัญที่สุดแห่งหนึ่งของทวีป คาราวานเดินทางข้ามทะเลทรายเพื่อนำพาคริสตัลและทรัพยากรหายากเข้าสู่ตลาด\n\nคริสตัลจากผืนทรายถูกเชื่อว่ามีคุณสมบัติพิเศษ บางชนิดสามารถกักเก็บพลังงานหรือถูกนำไปใช้ในงานเวทขั้นสูง แม้จะมีการใช้งานอย่างแพร่หลาย แต่แทบไม่มีใครเข้าใจธรรมชาติของมันอย่างแท้จริง\n\nภายใต้ความมั่งคั่ง เมืองนี้ขับเคลื่อนด้วยอำนาจของตระกูลพ่อค้าและเครือข่ายผลประโยชน์ ทุกข้อตกลงมีราคา และไม่ใช่ทุกความจริงที่จะถูกเปิดเผย",    population: [
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
lore: "Veramor คือกลุ่มหมู่เกาะที่ตั้งอยู่ท่ามกลางทะเลลึก ซึ่งขึ้นชื่อเรื่องพายุที่รุนแรงและเส้นทางเดินเรือที่คาดเดาได้ยาก เมืองท่าอย่าง Veramor Port จึงกลายเป็นจุดรวมของกะลาสี พ่อค้า และผู้ที่ใช้ชีวิตบนทะเล\n\nอำนาจใน Veramor ไม่ได้มาจากกฎหมายกลาง แต่ขึ้นอยู่กับกองเรือและกัปตันที่ผู้คนยอมรับ เส้นทางการค้า การขนส่ง และข่าวสารล้วนถูกควบคุมผ่านเครือข่ายเหล่านี้\n\nแม้จะมีการใช้เวทมนตร์อยู่บ้าง—โดยเฉพาะในด้านการเดินเรือ—แต่ทะเลยังคงเป็นสิ่งที่ไม่มีใครควบคุมได้อย่างแท้จริง และผู้ที่ประมาท มักไม่กลับขึ้นฝั่ง",    population: [
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
lore: "Elthanir Verdancy เป็นผืนป่าโบราณที่มีความอุดมสมบูรณ์ผิดปกติ ต้นไม้ขนาดมหึมาและรากไม้ที่แผ่ขยายลึกลงใต้ดินทำให้ภูมิประเทศที่นี่เปลี่ยนแปลงได้ยาก\n\nผู้คนในภูมิภาคนี้ใช้ชีวิตอย่างระมัดระวังและพยายามรักษาสมดุลกับธรรมชาติ พวกเขาเชื่อว่าป่ามีลักษณะบางอย่างที่ 'ตอบสนอง' ต่อสิ่งรอบตัว แม้จะไม่มีหลักฐานชัดเจน แต่เหตุการณ์หลายอย่างทำให้ความเชื่อนี้ยังคงอยู่\n\nเมือง Sylvandor ถูกสร้างขึ้นให้กลมกลืนกับสภาพแวดล้อม แทนที่จะควบคุมมัน และผู้ที่ไม่เข้าใจกฎของป่า มักจะหลงทางหรือหายไปโดยไม่มีร่องรอย",    population: [
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
lore: "Frostspire Theocracy ตั้งอยู่ท่ามกลางเทือกเขาน้ำแข็งและสภาพอากาศที่โหดร้าย เมืองถูกสร้างขึ้นเพื่อความอยู่รอดเป็นหลัก ทั้งกำแพง ป้อมปราการ และมหาวิหารต่างมีบทบาทในชีวิตประจำวัน\n\nศรัทธาเป็นศูนย์กลางของสังคม ผู้คนเชื่อว่าความหนาวและภัยจากภายนอกเป็นบททดสอบที่ต้องฝ่าฟัน อัศวินและนักบวชจึงมีบทบาทสำคัญในการปกป้องเมือง\n\nมีรายงานการพบมังกรและสิ่งมีชีวิตขนาดใหญ่ในภูเขา แม้จะไม่เกิดขึ้นบ่อย แต่ก็เพียงพอที่จะทำให้ภัยคุกคามนี้ยังคงเป็นเรื่องจริงสำหรับผู้คนในภูมิภาค",    population: [
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

  tagline: "A World Touched by Hidden Magic",

  description:
    "Aetherra คือโลกที่ดูเหมือนธรรมดาในสายตาของคนส่วนใหญ่—อาณาจักร การค้า และสงครามดำเนินไปตามปกติ แต่ลึกลงไปในธรรมชาติ มีบางสิ่งที่ไม่อาจอธิบายได้ไหลเวียนอยู่",

  coreConcept:
    "บางคนเชื่อว่าเวทมนตร์ไม่ใช่เพียงพลัง แต่เป็น 'กระแส' ของสิ่งที่ยิ่งใหญ่กว่านั้น—สิ่งที่ถูกเรียกว่า Aetherra Veyl แม้จะไม่มีหลักฐานชัดเจน แต่เหตุการณ์หลายอย่างในโลกนี้ดูเหมือนจะเชื่อมโยงกันอย่างน่าประหลาด",

  currentState:
    "ช่วงหลังเริ่มมีเหตุการณ์ผิดปกติ—คริสตัลเสื่อมสภาพ ป่าบางแห่งเงียบผิดปกติ และพายุเกิดโดยไม่มีรูปแบบ นักวิชาการบางคนเริ่มตั้งคำถามว่าโลกนี้กำลังเปลี่ยนแปลงหรือไม่",

  warning:
    "Strange patterns emerge. Nature behaves... differently. Few notice — fewer understand.",

  farEast: {
    name: "Far East Quarter",
    description:
      "ย่านชุมชนของผู้คนจากดินแดนตะวันออกที่ปรากฏอยู่ในเมืองใหญ่ แม้ไม่มีใครรู้ว่าพวกเขามาจากที่ใดแน่ชัด",
    traits: [
      "Present in major trade cities",
      "Distinct culture and traditions",
      "Independent trade networks",
      "Tightly connected communities",
    ],
  },
};
