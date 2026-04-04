import type { Region } from "@/data/worldData";

interface MapPinProps {
  region: Region;
  isSelected: boolean;
  onClick: () => void;
}

const terrainIcons: Record<string, string> = {
  "Desert": "🏜️",
  "Archipelago / Ocean": "⛵",
  "Ancient Forest": "🌲",
  "Ice Mountains & Blizzards": "🏔️",
  "Underground / Underdark": "⚙️",
};

export default function MapPin({ region, isSelected, onClick }: MapPinProps) {
  const icon = terrainIcons[region.terrain] || "📍";

  return (
    <div
      className="absolute group cursor-pointer"
      style={{
        left: `${region.x}%`,
        top: `${region.y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: isSelected ? 20 : 10,
      }}
      onClick={onClick}
      data-testid={`map-pin-${region.id}`}
    >
      {/* Pulse ring */}
      {isSelected && (
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(ellipse, ${region.color}20 0%, transparent 70%)`,
            width: "120px",
            height: "120px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Outer glow ring */}
      <div
        className={`absolute rounded-full pointer-events-none transition-all duration-300 ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-70"}`}
        style={{
          width: `${region.size * 3.5}px`,
          height: `${region.size * 3.5}px`,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          border: `1px solid ${region.color}40`,
          boxShadow: `0 0 20px ${region.color}30`,
        }}
      />

      {/* Main pin circle */}
      <div
        className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
          isSelected ? "pin-pulse" : "group-hover:scale-110"
        }`}
        style={{
          width: `${region.size * 2.2}px`,
          height: `${region.size * 2.2}px`,
          background: `radial-gradient(ellipse at 35% 35%, ${region.color}dd, ${region.color}88)`,
          border: `2px solid ${region.color}`,
          boxShadow: `0 0 ${isSelected ? 20 : 8}px ${region.color}60, inset 0 0 10px rgba(0,0,0,0.3)`,
          fontSize: `${region.size * 0.9}px`,
        }}
      >
        {icon}
      </div>

      {/* Underground indicator */}
      {region.isUnderground && (
        <div
          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs border"
          style={{
            background: "hsl(36,28%,12%)",
            borderColor: region.color,
            fontSize: "8px",
          }}
        >
          ↓
        </div>
      )}

      {/* Tooltip */}
      <div
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 transition-all duration-200 pointer-events-none
          ${isSelected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"}`}
      >
        <div
          className="whitespace-nowrap px-3 py-1.5 rounded text-center"
          style={{
            background: "rgba(20,15,10,0.95)",
            border: `1px solid ${region.color}50`,
            boxShadow: `0 4px 20px rgba(0,0,0,0.7), 0 0 10px ${region.color}20`,
          }}
        >
          <div
            className="text-xs font-bold"
            style={{ fontFamily: "'Cinzel', serif", color: region.color }}
          >
            {region.name}
          </div>
          <div
            className="text-xs mt-0.5"
            style={{ color: "rgba(220,190,130,0.6)", fontSize: "0.6rem" }}
          >
            {region.terrain}
          </div>
        </div>
        {/* Arrow */}
        <div
          className="w-2 h-2 mx-auto rotate-45 -mt-1"
          style={{ background: `${region.color}30`, borderRight: `1px solid ${region.color}40`, borderBottom: `1px solid ${region.color}40` }}
        />
      </div>
    </div>
  );
}
