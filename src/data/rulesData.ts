export type RuleCategory =
  | "ban"
  | "allowed"
  | "clarification"
  | "world"
  | "character";

export interface RuleItem {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  category: RuleCategory;
}

export const rules: RuleItem[] = [
  {
    id: "ban-1",
    title: "Silvery Barbs",
    description: "Spell นี้ถูกแบนเพราะ balance",
    category: "ban",
    tags: ["Spell"],
  },
  {
    id: "allowed-1",
    title: "Potion Bonus Action",
    description: "ดื่ม potion เป็น bonus action ได้",
    category: "allowed",
    tags: ["Rule"],
  },
  {
    id: "clarify-1",
    title: "Stealth Rule",
    description: "ใช้ passive perception ก่อน roll",
    category: "clarification",
    tags: ["Rule"],
  },
  {
    id: "world-1",
    title: "Underground Magic",
    description: "เวทต้องใช้ Hextech catalyst",
    category: "world",
    tags: ["Lore"],
  },
  {
    id: "char-1",
    title: "Starting Level",
    description: "เริ่มที่เลเวล 3",
    category: "character",
    tags: ["Setup"],
  },
];