import { useState } from "react";
import { X, Users, Sword, Crown, Coins, MapPin, Star } from "lucide-react";
import type { Region } from "@/data/worldData";

interface RegionPanelProps {
  region: Region | null;
  onClose: () => void;
}

const terrainBadgeColors: Record<string, string> = {
  Desert: "bg-amber-900/60 text-amber-300 border-amber-700/50",
  "Archipelago / Ocean": "bg-blue-900/60 text-blue-300 border-blue-700/50",
  "Ancient Forest": "bg-green-900/60 text-green-300 border-green-700/50",
  "Ice Mountains & Blizzards": "bg-slate-800/60 text-slate-200 border-slate-500/50",
  "Underground / Underdark": "bg-purple-900/60 text-purple-300 border-purple-700/50",
};

export default function RegionPanel({ region, onClose }: RegionPanelProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "people" | "lore">("overview");

  if (!region) return null;

  const terrainClass = terrainBadgeColors[region.terrain] || "bg-amber-900/60 text-amber-300 border-amber-700/50";

  return (
    <div
      className="fixed right-0 top-0 h-full w-[420px] z-50 panel-slide-in flex flex-col"
      style={{
        background: "linear-gradient(180deg, hsl(35,25%,12%) 0%, hsl(36,22%,10%) 100%)",
        borderLeft: "2px solid rgba(180,140,60,0.4)",
        boxShadow: "-8px 0 40px rgba(0,0,0,0.7)",
      }}
      data-testid={`region-panel-${region.id}`}
    >
      {/* Header */}
      <div
        className="relative flex items-start justify-between p-6 pb-4"
        style={{ borderBottom: "1px solid rgba(180,140,60,0.2)" }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ background: `radial-gradient(ellipse at top right, ${region.color}, transparent 70%)` }}
        />

        <div className="flex-1 pr-4">
          <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs border mb-2 ${terrainClass}`}>
            <span>{region.terrain}</span>
          </div>
          <h2
            className="text-xl font-bold leading-tight mb-1"
            style={{ fontFamily: "'Cinzel', serif", color: region.color }}
            data-testid="region-panel-name"
          >
            {region.name}
          </h2>
          <p className="text-sm italic" style={{ color: "rgba(220,190,130,0.7)" }}>
            {region.subtitle}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded transition-colors hover:bg-white/10"
          style={{ color: "rgba(220,190,130,0.6)" }}
          data-testid="region-panel-close"
        >
          <X size={18} />
        </button>
      </div>

      {/* Tabs */}
      <div
        className="flex px-4 pt-3 gap-1"
        style={{ borderBottom: "1px solid rgba(180,140,60,0.15)" }}
      >
        {(["overview", "people", "lore"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs rounded-t transition-all capitalize ${
              activeTab === tab
                ? "border-b-2 font-semibold"
                : "opacity-50 hover:opacity-75"
            }`}
            style={{
              fontFamily: "'Cinzel', serif",
              color: activeTab === tab ? region.color : "rgba(220,190,130,0.7)",
              borderColor: activeTab === tab ? region.color : "transparent",
            }}
            data-testid={`tab-${tab}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {activeTab === "overview" && (
          <>
            {/* Summary */}
            <div
              className="p-3 rounded text-sm italic text-center"
              style={{
                background: `${region.color}15`,
                border: `1px solid ${region.color}30`,
                color: "rgba(220,190,130,0.9)",
                fontFamily: "'IM Fell English', Georgia, serif",
              }}
            >
              "{region.summary}"
            </div>

            {/* Key Info */}
            <div className="space-y-2.5">
              <InfoRow icon={<MapPin size={13} />} label="Capital" value={region.capital} color={region.color} />
              <InfoRow icon={<Crown size={13} />} label="Ruler" value={region.ruler} color={region.color} />
              <InfoRow icon={<Star size={13} />} label="Government" value={region.government} color={region.color} />
              <InfoRow icon={<Coins size={13} />} label="Economy" value={region.economy} color={region.color} />
              <InfoRow icon={<Sword size={13} />} label="Main Danger" value={region.danger} color={region.color} />
            </div>

            {/* Traits */}
            <div>
              <SectionHeader color={region.color}>Known Traits</SectionHeader>
              <div className="space-y-1.5 mt-2">
                {region.traits.map((trait, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "rgba(220,190,130,0.8)" }}
                  >
                    <span style={{ color: region.color }} className="mt-0.5 shrink-0">◆</span>
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Known Locations */}
            <div>
              <SectionHeader color={region.color}>Notable Locations</SectionHeader>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {region.knownFor.map((loc, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-xs border"
                    style={{
                      background: `${region.color}12`,
                      borderColor: `${region.color}35`,
                      color: region.color,
                      fontFamily: "'Cinzel', serif",
                    }}
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Suited For */}
            <div
              className="p-3 rounded text-xs"
              style={{ background: "rgba(180,140,60,0.08)", border: "1px solid rgba(180,140,60,0.2)" }}
            >
              <span style={{ color: "rgba(180,140,60,0.7)" }}>Best suited for: </span>
              <span style={{ color: "rgba(220,190,130,0.9)", fontFamily: "'Cinzel', serif" }}>
                {region.suitedFor}
              </span>
            </div>
          </>
        )}

        {activeTab === "people" && (
          <>
            <div>
              <SectionHeader color={region.color}>Population</SectionHeader>
              <div className="space-y-3 mt-3">
                {region.population.map((pop, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Users size={12} style={{ color: region.color }} />
                        <span style={{ color: "rgba(220,190,130,0.9)" }}>{pop.race}</span>
                      </div>
                      <span style={{ color: region.color, fontFamily: "'Cinzel', serif" }} className="text-xs">
                        ~{pop.percent}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(180,140,60,0.15)" }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${pop.percent}%`,
                          background: `linear-gradient(90deg, ${region.color}80, ${region.color})`,
                        }}
                      />
                    </div>
                    <p className="text-xs" style={{ color: "rgba(180,140,60,0.6)" }}>
                      {pop.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader color={region.color}>Culture</SectionHeader>
              <p
                className="text-sm mt-2 leading-relaxed"
                style={{ color: "rgba(220,190,130,0.8)", fontFamily: "'IM Fell English', Georgia, serif" }}
              >
                {region.culture}
              </p>
            </div>
          </>
        )}

        {activeTab === "lore" && (
          <div>
            <SectionHeader color={region.color}>Ancient Lore</SectionHeader>
            <div
              className="mt-3 p-4 rounded text-sm leading-relaxed"
              style={{
                background: "rgba(0,0,0,0.3)",
                border: "1px solid rgba(180,140,60,0.15)",
                color: "rgba(220,190,130,0.85)",
                fontFamily: "'IM Fell English', Georgia, serif",
                lineHeight: "1.8",
              }}
            >
              {region.lore}
            </div>
            {region.isUnderground && (
              <div
                className="mt-4 p-3 rounded text-xs"
                style={{
                  background: "rgba(138,109,172,0.1)",
                  border: "1px solid rgba(138,109,172,0.3)",
                  color: "rgba(180,160,220,0.9)",
                }}
              >
                ⚠️ <strong>RESTRICTED KNOWLEDGE</strong> — Surface dwellers know little of this region. What is known is feared.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className="px-5 py-3 flex items-center justify-between text-xs"
        style={{
          borderTop: "1px solid rgba(180,140,60,0.15)",
          color: "rgba(180,140,60,0.5)",
          fontFamily: "'Cinzel', serif",
        }}
      >
        <span>Aetherra World Atlas</span>
        <span style={{ color: region.color }}>◆ {region.emoji}</span>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) {
  return (
    <div className="flex items-start gap-2.5 text-sm">
      <div className="mt-0.5 shrink-0" style={{ color: `${color}80` }}>
        {icon}
      </div>
      <div className="flex-1 flex items-start gap-2">
        <span className="shrink-0" style={{ color: "rgba(180,140,60,0.6)", minWidth: "80px", fontFamily: "'Cinzel', serif", fontSize: "0.7rem" }}>
          {label}
        </span>
        <span style={{ color: "rgba(220,190,130,0.85)" }}>{value}</span>
      </div>
    </div>
  );
}

function SectionHeader({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: `${color}90`, fontFamily: "'Cinzel', serif" }}
      >
        {children}
      </span>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${color}40, transparent)` }} />
    </div>
  );
}
