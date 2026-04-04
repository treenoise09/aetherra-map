import { useState, useCallback } from "react";
import { regions, worldInfo } from "@/data/worldData";
import type { Region } from "@/data/worldData";
import MapPin from "@/components/MapPin";
import RegionPanel from "@/components/RegionPanel";
import CompassRose from "@/components/CompassRose";

const SVGTerrain = () => (
  <svg
    viewBox="0 0 1000 700"
    className="absolute inset-0 w-full h-full"
    preserveAspectRatio="xMidYMid slice"
    style={{ opacity: 0.08 }}
  >
    <ellipse cx="620" cy="385" rx="180" ry="120" fill="rgba(212,168,67,0.6)" />
    <ellipse cx="220" cy="245" rx="130" ry="90" fill="rgba(74,158,196,0.6)" />
    <circle cx="160" cy="300" r="40" fill="rgba(74,158,196,0.5)" />
    <circle cx="290" cy="195" r="30" fill="rgba(74,158,196,0.4)" />
    <ellipse cx="380" cy="154" rx="150" ry="100" fill="rgba(74,140,92,0.6)" />
    <polygon points="550,40 650,180 450,180" fill="rgba(139,184,212,0.5)" />
    <ellipse cx="480" cy="546" rx="120" ry="70" fill="rgba(138,109,172,0.4)" />
  </svg>
);

const MapDecorations = () => (
  <>
    <div className="absolute bottom-8 left-8 flex flex-col items-start gap-1">
      <div className="w-16 h-3 flex">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex-1"
            style={{
              background:
                i % 2 === 0
                  ? "rgba(180,140,60,0.7)"
                  : "rgba(180,140,60,0.2)",
            }}
          />
        ))}
      </div>
      <span className="text-xs text-[rgba(180,140,60,0.6)]">
        100 LEAGUES
      </span>
    </div>
  </>
);

export default function MapPage() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const handlePinClick = useCallback((region: Region) => {
    setSelectedRegion((prev) =>
      prev?.id === region.id ? null : region
    );
  }, []);

  const handleClose = useCallback(() => setSelectedRegion(null), []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      
      {/* HEADER */}
      <header className="z-30 flex justify-between px-8 py-4 bg-[#140e08ee] border-b border-yellow-700/30">
        <h1 className="text-xl text-yellow-400 font-bold">Aetherra</h1>
        <span className="text-xs text-yellow-600">
          {regions.length} REGIONS
        </span>
      </header>

      {/* MAP AREA */}
      <main className="relative flex-1 overflow-hidden" style={{
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}}>
        
       <div className="relative w-full aspect-[1000/700] max-h-[calc(100vh-80px)] mx-auto">

  {/* 🗺️ MAP */}
  <img
    src="/images/contentBG.png"
    className="w-full h-full object-contain"
  />


        {/* 📍 MAP PINS */}
        {regions.map((region) => (
          <MapPin
            key={region.id}
            region={region}
            isSelected={selectedRegion?.id === region.id}
            onClick={() => handlePinClick(region)}
          />
        ))}
        
</div>

        {/* 🧭 Compass */}
        <div className="absolute bottom-8 right-8">
          <CompassRose />
        </div>
      </main>

      {/* 📖 REGION PANEL */}
      <RegionPanel region={selectedRegion} onClose={handleClose} />
    </div>

  );

}
