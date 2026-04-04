export default function CompassRose() {
  return (
    <div className="relative w-20 h-20 select-none">
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: "drop-shadow(0 0 8px rgba(220, 170, 60, 0.5))" }}>
        {/* Outer ring */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(180,140,60,0.5)" strokeWidth="1"/>
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(180,140,60,0.3)" strokeWidth="0.5"/>
        
        {/* North arrow */}
        <polygon points="50,4 54,46 50,42 46,46" fill="hsl(40,70%,52%)" opacity="0.95"/>
        {/* South arrow */}
        <polygon points="50,96 46,54 50,58 54,54" fill="hsl(40,40%,35%)" opacity="0.8"/>
        {/* East arrow */}
        <polygon points="96,50 54,54 58,50 54,46" fill="hsl(40,40%,35%)" opacity="0.8"/>
        {/* West arrow */}
        <polygon points="4,50 46,46 42,50 46,54" fill="hsl(40,40%,35%)" opacity="0.8"/>

        {/* Diagonal arrows */}
        <polygon points="79,21 56,47 53,44 57,41" fill="rgba(180,140,60,0.4)" opacity="0.7" transform="rotate(0,50,50)"/>
        <polygon points="79,79 53,56 56,53 59,57" fill="rgba(180,140,60,0.4)" opacity="0.7"/>
        <polygon points="21,79 44,53 47,56 43,59" fill="rgba(180,140,60,0.4)" opacity="0.7"/>
        <polygon points="21,21 47,47 44,50 41,47" fill="rgba(180,140,60,0.4)" opacity="0.7"/>

        {/* Center */}
        <circle cx="50" cy="50" r="5" fill="hsl(40,70%,52%)" stroke="rgba(180,140,60,0.8)" strokeWidth="1"/>
        <circle cx="50" cy="50" r="2" fill="hsl(35,20%,10%)"/>

        {/* Cardinal letters */}
        <text x="50" y="14" textAnchor="middle" fontSize="8" fontFamily="Cinzel, serif" fill="hsl(40,70%,60%)" fontWeight="700">N</text>
        <text x="50" y="92" textAnchor="middle" fontSize="7" fontFamily="Cinzel, serif" fill="hsl(40,50%,45%)" fontWeight="600">S</text>
        <text x="90" y="53" textAnchor="middle" fontSize="7" fontFamily="Cinzel, serif" fill="hsl(40,50%,45%)" fontWeight="600">E</text>
        <text x="10" y="53" textAnchor="middle" fontSize="7" fontFamily="Cinzel, serif" fill="hsl(40,50%,45%)" fontWeight="600">W</text>
      </svg>
    </div>
  );
}
