export type Character = {
  name: string;
  class: string;
  background: string;
  race: string;
  story: string;
  image: string;
  status: "Alive" | "Dead" | "NPC" | "Missing";
};