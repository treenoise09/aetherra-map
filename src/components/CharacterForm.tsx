import { useState, useEffect } from "react";
import type { Character } from "@/types/character";

type Props = {
  onAdd: (char: Character) => void;
  editingData?: Character | null;
};

export default function CharacterForm({ onAdd, editingData }: Props) {
  const [form, setForm] = useState<Character>({
    name: "",
    class: "",
    background: "",
    race: "",
    story: "",
    image: "",
    status: "Alive",
  });

  useEffect(() => {
    if (editingData) {
      setForm(editingData);
    }
  }, [editingData]);

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    onAdd(form);
    setForm({
      name: "",
      class: "",
      background: "",
      race: "",
      story: "",
      image: "",
      status: "Alive",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-8">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full px-3 py-2 bg-black/30 border border-yellow-800/20 rounded text-sm focus:outline-none focus:border-yellow-600" />
      <input name="class" value={form.class} onChange={handleChange} placeholder="Class" className="w-full px-3 py-2 bg-black/30 border border-yellow-800/20 rounded text-sm focus:outline-none focus:border-yellow-600" />
      <input name="background" value={form.background} onChange={handleChange} placeholder="Background" className="w-full px-3 py-2 bg-black/30 border border-yellow-800/20 rounded text-sm focus:outline-none focus:border-yellow-600" />
      <input name="race" value={form.race} onChange={handleChange} placeholder="Race" className="w-full px-3 py-2 bg-black/30 border border-yellow-800/20 rounded text-sm focus:outline-none focus:border-yellow-600" />
      <textarea name="story" value={form.story} onChange={handleChange} placeholder="Story" className="w-full px-3 py-2 bg-black/30 border border-yellow-800/20 rounded text-sm focus:outline-none focus:border-yellow-600" />

      <select name="status" value={form.status} onChange={handleChange} className="w-full px-3 py-2 bg-black/30 border border-yellow-800/20 rounded text-sm focus:outline-none focus:border-yellow-600">
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="NPC">NPC</option>
        <option value="Missing">Missing</option>
      </select>

      <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="w-full px-3 py-2 bg-black/30 border border-yellow-800/20 rounded text-sm focus:outline-none focus:border-yellow-600" />

      <button className="px-4 py-2 bg-yellow-700 rounded">
        {editingData ? "Update Character" : "Add Character"}
      </button>
    </form>
  );
}