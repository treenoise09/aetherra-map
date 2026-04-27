import { useState, useEffect } from "react";
import CharacterForm from "@/components/CharacterForm";
import CharacterCard from "@/components/CharacterCard";
import type { Character } from "@/types/character";
import CharacterModal from "../components/CharacterModal";
export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
const [editingData, setEditingData] = useState<Character | null>(null);
const [editingIndex, setEditingIndex] = useState<number | null>(null);
const [selectedChar, setSelectedChar] = useState<Character | null>(null);
  // LOAD
  useEffect(() => {
    const saved = localStorage.getItem("chars");
    if (saved) setCharacters(JSON.parse(saved));
  }, []);

  // SAVE
  useEffect(() => {
    localStorage.setItem("chars", JSON.stringify(characters));
  }, [characters]);
  useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedChar(null);
  };
  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, []);

  // ADD / EDIT
  function addCharacter(char: any) {
      if (editingIndex !== null) {
    const updated = [...characters];
    updated[editingIndex] = char;
    setCharacters(updated);
    setEditingIndex(null);
    setEditingData(null);
  } else {
    setCharacters([...characters, char]);
  }
  }
  

  // DELETE
const deleteCharacter = (index: number) => {
  const updated = characters.filter((_, i) => i !== index);
  setCharacters(updated);
};

  // EDIT
const editCharacter = (index: number) => {
  setEditingData(characters[index]);
  setEditingIndex(index);
};

  return (
    <div className="p-6 text-yellow-100">
  <h1
    className="text-3xl mb-8"
    style={{ fontFamily: "'Cinzel Decorative', serif" }}
  >
    Player Characters
  </h1>

  <div className="grid lg:grid-cols-3 gap-6">
    
    {/* LEFT: FORM */}
    <div className="lg:col-span-1">
      <div className="bg-black/40 border border-yellow-800/20 rounded-xl p-4 backdrop-blur">
        <CharacterForm 
  onAdd={addCharacter} 
  editingData={editingData} 
/>
      </div>
    </div>
    {selectedChar && (
  <CharacterModal
    char={selectedChar}
    onClose={() => setSelectedChar(null)}
  />
)}

    {/* RIGHT: CARDS */}
    <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
      {characters.map((char, i) => (
  <CharacterCard
    key={i}
    char={char}
    onClick={() => setSelectedChar(char)}
    onDelete={() => deleteCharacter(i)}
    onEdit={() => editCharacter(i)}
  />
))}
    </div>

  </div>
</div>
  );
}