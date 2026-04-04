interface OrnateFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function OrnateFrame({ children, className = "" }: OrnateFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer border */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: "2px solid rgba(180,140,60,0.5)",
          boxShadow: "inset 0 0 30px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.4)",
        }}
      />
      {/* Inner border */}
      <div
        className="absolute inset-[5px] pointer-events-none"
        style={{ border: "1px solid rgba(180,140,60,0.2)" }}
      />
      {/* Corner ornaments */}
      <CornerOrnament position="top-0 left-0" rotation="0" />
      <CornerOrnament position="top-0 right-0" rotation="90" />
      <CornerOrnament position="bottom-0 left-0" rotation="270" />
      <CornerOrnament position="bottom-0 right-0" rotation="180" />
      {children}
    </div>
  );
}

function CornerOrnament({ position, rotation }: { position: string; rotation: string }) {
  return (
    <div
      className={`absolute ${position} w-8 h-8 pointer-events-none`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <path
          d="M2,2 L14,2 M2,2 L2,14 M2,2 L8,8"
          stroke="rgba(200,160,70,0.7)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="2" cy="2" r="2" fill="rgba(200,160,70,0.8)" />
        <circle cx="8" cy="8" r="1" fill="rgba(200,160,70,0.5)" />
      </svg>
    </div>
  );
}
