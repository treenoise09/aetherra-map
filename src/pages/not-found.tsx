import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen map-grid flex items-center justify-center">
      <div className="text-center px-6">
        <div
          className="text-8xl mb-6 opacity-20 select-none"
          style={{ filter: "sepia(1) brightness(0.4)" }}
        >
          🗺️
        </div>
        <h1
          className="text-4xl font-bold mb-3"
          style={{ fontFamily: "'Cinzel Decorative', serif", color: "hsl(40,60%,45%)" }}
        >
          Uncharted Territory
        </h1>
        <p
          className="text-sm italic mb-6"
          style={{ color: "rgba(220,190,130,0.55)", fontFamily: "'IM Fell English', Georgia, serif" }}
        >
          This land has not yet been mapped by any cartographer.
        </p>
        <Link href="/">
          <button
            className="px-6 py-2.5 rounded text-sm transition-all hover:opacity-80"
            style={{
              fontFamily: "'Cinzel', serif",
              background: "rgba(180,140,60,0.12)",
              border: "1px solid rgba(180,140,60,0.35)",
              color: "hsl(40,70%,52%)",
            }}
          >
            ◀ Return to Aetherra
          </button>
        </Link>
      </div>
    </div>
  );
}
