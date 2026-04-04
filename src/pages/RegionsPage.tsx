import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, ChevronDown, Users, Sword } from "lucide-react";
import { regions } from "@/data/worldData";
import type { Region } from "@/data/worldData";

function RegionCard({ region }: { region: Region }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="region-card rounded-sm overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(35,25%,15%) 0%, hsl(36,22%,13%) 100%)",
        border: `1px solid ${region.color}30`,
        boxShadow: `0 2px 12px rgba(0,0,0,0.5), inset 0 0 30px rgba(0,0,0,0.2)`,
      }}
      data-testid={`region-card-${region.id}`}
    >
      {/* Card header */}
      <div
        className="relative p-5 pb-4"
        style={{ borderBottom: expanded ? `1px solid ${region.color}20` : "none" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{ background: `radial-gradient(ellipse at top left, ${region.color}, transparent 70%)` }}
        />
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shrink-0 relative"
            style={{
              background: `radial-gradient(ellipse, ${region.color}40 0%, ${region.color}15 100%)`,
              border: `1.5px solid ${region.color}50`,
              boxShadow: `0 0 15px ${region.color}30`,
            }}
          >
            {region.emoji}
            {region.isUnderground && (
              <div
                className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs"
                style={{ background: "hsl(36,28%,12%)", border: `1px solid ${region.color}`, fontSize: "8px" }}
              >
                ↓
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3
              className="text-lg font-bold leading-tight"
              style={{ fontFamily: "'Cinzel', serif", color: region.color }}
            >
              {region.name}
            </h3>
            <p className="text-xs mt-0.5 italic" style={{ color: "rgba(220,190,130,0.6)" }}>
              {region.subtitle}
            </p>
            <div
              className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded text-xs border"
              style={{
                background: `${region.color}12`,
                borderColor: `${region.color}30`,
                color: region.color,
                fontFamily: "'Cinzel', serif",
                fontSize: "0.65rem",
              }}
            >
              {region.terrain}
            </div>
          </div>
        </div>

        <p
          className="mt-3 text-sm italic"
          style={{ color: "rgba(220,190,130,0.75)", fontFamily: "'IM Fell English', Georgia, serif" }}
        >
          "{region.summary}"
        </p>
      </div>

      {/* Expandable content */}
      {expanded && (
        <div className="p-5 space-y-4">
          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-3">
            <StatBox label="Capital" value={region.capital} color={region.color} />
            <StatBox label="Ruler" value={region.ruler} color={region.color} />
            <StatBox label="Economy" value={region.economy} color={region.color} />
            <StatBox label="Best For" value={region.suitedFor} color={region.color} />
          </div>

          {/* Danger */}
          <div
            className="flex items-start gap-2 p-2.5 rounded text-sm"
            style={{ background: "rgba(180,60,60,0.08)", border: "1px solid rgba(180,60,60,0.2)" }}
          >
            <Sword size={13} className="mt-0.5 shrink-0" style={{ color: "rgba(220,120,100,0.8)" }} />
            <div>
              <span className="text-xs" style={{ color: "rgba(220,120,100,0.7)", fontFamily: "'Cinzel', serif" }}>DANGER: </span>
              <span className="text-xs" style={{ color: "rgba(220,190,130,0.8)" }}>{region.danger}</span>
            </div>
          </div>

          {/* Population */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users size={12} style={{ color: `${region.color}70` }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: `${region.color}80`, fontFamily: "'Cinzel', serif" }}>
                Population
              </span>
            </div>
            <div className="space-y-1.5">
              {region.population.map((pop, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${pop.percent}%`,
                      maxWidth: "120px",
                      background: `linear-gradient(90deg, ${region.color}60, ${region.color})`,
                    }}
                  />
                  <span style={{ color: "rgba(220,190,130,0.7)" }}>
                    {pop.race} <span style={{ color: region.color }}>~{pop.percent}%</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Traits */}
          <div className="flex flex-wrap gap-1.5">
            {region.traits.map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-full text-xs border"
                style={{
                  background: `${region.color}10`,
                  borderColor: `${region.color}25`,
                  color: "rgba(220,190,130,0.7)",
                  fontSize: "0.65rem",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs transition-all hover:opacity-80"
        style={{
          color: `${region.color}70`,
          fontFamily: "'Cinzel', serif",
          borderTop: `1px solid ${region.color}15`,
          background: `${region.color}05`,
        }}
        data-testid={`expand-${region.id}`}
      >
        {expanded ? (
          <>
            <ChevronDown size={12} /> Collapse
          </>
        ) : (
          <>
            <ChevronRight size={12} /> Learn More
          </>
        )}
      </button>
    </div>
  );
}

function StatBox({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div
      className="p-2.5 rounded"
      style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(180,140,60,0.12)" }}
    >
      <div className="text-xs mb-0.5" style={{ color: `${color}70`, fontFamily: "'Cinzel', serif", fontSize: "0.6rem" }}>
        {label}
      </div>
      <div className="text-xs" style={{ color: "rgba(220,190,130,0.85)" }}>
        {value}
      </div>
    </div>
  );
}

export default function RegionsPage() {
  const surfaceRegions = regions.filter((r) => !r.isUnderground);
  const undergroundRegions = regions.filter((r) => r.isUnderground);

  return (
    <div className="min-h-screen map-grid">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: "rgba(180,140,60,0.5)", fontFamily: "'Cinzel', serif" }}
          >
            Aetherra World Atlas
          </p>
          <h1
            className="text-4xl font-bold mb-3 glow-text"
            style={{ fontFamily: "'Cinzel Decorative', serif", color: "hsl(40,70%,52%)" }}
          >
            Known Regions
          </h1>
          <div className="ornate-divider max-w-64 mx-auto mt-4">
            <span className="text-xs italic" style={{ color: "rgba(180,140,60,0.5)", fontFamily: "'IM Fell English', serif" }}>
              Surface Lands
            </span>
          </div>
        </div>

        {/* Surface Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {surfaceRegions.map((region) => (
            <RegionCard key={region.id} region={region} />
          ))}
        </div>

        {/* Underground Separator */}
        <div className="text-center my-8">
          <div className="ornate-divider max-w-80 mx-auto">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "rgba(138,109,172,0.6)", fontFamily: "'Cinzel', serif" }}
            >
              Below the Surface
            </span>
          </div>
        </div>

        {/* Underground regions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {undergroundRegions.map((region) => (
            <RegionCard key={region.id} region={region} />
          ))}
        </div>

        {/* Back to map */}
        <div className="text-center mt-10">
          <Link href="/">
            <button
              className="px-6 py-2.5 rounded text-sm transition-all hover:opacity-80"
              style={{
                fontFamily: "'Cinzel', serif",
                background: "rgba(180,140,60,0.12)",
                border: "1px solid rgba(180,140,60,0.35)",
                color: "hsl(40,70%,52%)",
              }}
              data-testid="back-to-map"
            >
              ◀ Return to the Map
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
