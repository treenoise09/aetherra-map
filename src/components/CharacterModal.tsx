import type { Character } from "@/types/character";

export default function CharacterModal({ char, onClose }: any) {
  if (!char) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative z-10 w-[900px] max-w-[95%] bg-gradient-to-b from-black/90 to-black/70 border border-yellow-700/30 rounded-2xl shadow-2xl p-6">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-yellow-400"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT PANEL */}
          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-2">
              {char.name}
            </h2>

            <div className="text-sm text-yellow-200/70 mb-4">
              {char.class} • {char.race} • {char.background}
            </div>

            <div className="mb-4">
              <span className="text-xs px-2 py-1 border rounded">
                {char.status}
              </span>
            </div>

            <div className="text-sm leading-relaxed text-yellow-100/80">
              {char.story}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex items-center justify-center">
            {char.image && (
              <img
                src={char.image}
                className="rounded-xl max-h-[400px] object-cover"
              />
            )}
          </div>

        </div>
      </div>
    </div>
  );
}