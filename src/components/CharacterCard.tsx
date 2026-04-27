import type { Character } from "@/types/character";


const statusColor = {
  Alive: "text-green-400 border-green-400",
  Dead: "text-red-400 border-red-400",
  NPC: "text-blue-400 border-blue-400",
  Missing: "text-gray-400 border-gray-400",
};
export default function CharacterCard({
  char,
  onDelete,
  onEdit,
  onClick
}: {
  char: Character;
  onDelete: () => void;
  onEdit: () => void;
  onClick: () => void;
}) {
    
  return (
     <div
      onClick={onClick}
      className="cursor-pointer group bg-gradient-to-b from-black/60 to-black/30 border border-yellow-800/30 rounded-2xl overflow-hidden hover:scale-[1.02] transition"
    >
  {/* IMAGE */}
  {char.image && (
    <div className="relative h-56 overflow-hidden">
      <img
        src={char.image}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      {/* overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
    </div>
  )}

  <div className="p-5">

    {/* NAME + STATUS */}
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-xl text-yellow-400 font-bold tracking-wide">
        {char.name}
      </h2>

      <span className={`text-xs px-2 py-1 border rounded ${statusColor[char.status]}`}>
        {char.status}
      </span>
    </div>

    {/* META */}
    <div className="text-xs text-yellow-200/60 mb-3">
      {char.class} • {char.race} • {char.background}
    </div>

    {/* STORY */}
    <p className="text-sm text-yellow-100/80 leading-relaxed line-clamp-3 mb-4">
      {char.story}
    </p>

    {/* ACTIONS */}
    <div className="flex gap-3">
      <button className="text-xs px-3 py-1 border border-yellow-700 rounded hover:bg-yellow-700/20 transition">
        Edit
      </button>

      <button className="text-xs px-3 py-1 border border-red-700 text-red-400 rounded hover:bg-red-700/20 transition">
        Delete
      </button>
    </div>

  </div>
</div>
  );
}