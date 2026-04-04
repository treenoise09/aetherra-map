import { useState } from "react";
import { Link } from "wouter";
import { worldInfo } from "@/data/worldData";

const sections = [
  {
    id: "overview",
    title: "World Overview",
    icon: "🌌",
    content: [
      {
        heading: "What is Aetherra?",
        text: "Aetherra คือโลกที่เวทมนตร์ไหลเวียนอยู่ในทุกสรรพสิ่ง—ตั้งแต่รากไม้ใต้ผืนป่า ไปจนถึงคริสตัลใต้ทะเลทราย และเครื่องจักรเวทในโลกใต้ดิน ผู้คนเชื่อว่าโลกนี้ยังไม่เคย \"สมบูรณ์\" และเวทมนตร์ที่ไหลอยู่คือลมหายใจของสิ่งมีชีวิตขนาดยักษ์ที่เรียกว่า Aetherra Veyl",
      },
      {
        heading: "The World's Heartbeat",
        text: "ทวีปหลักถูกแบ่งออกเป็นภูมิภาคที่แตกต่างกันอย่างชัดเจน ทั้งอาณาจักรทะเลทรายที่ขับเคลื่อนด้วยความมั่งคั่ง เมืองท่าหมู่เกาะที่เต็มไปด้วยอิสระและอำนาจของกองเรือ ป่าลึกที่มีชีวิตในรากไม้ทุกเส้น ดินแดนน้ำแข็งที่ขับเคลื่อนด้วยศรัทธา และอาณาจักรใต้ดินที่ผสานเครื่องจักรกับเวทมนตร์จนแยกไม่ออก",
      },
      {
        heading: "Something Stirs...",
        text: "แม้ผู้คนจะใช้ชีวิต ดำเนินการค้า หรือทำสงครามกันตามปกติ แต่ก็มีข่าวลือเล่าขานถึง 'บางสิ่ง' ที่เริ่มเปลี่ยนแปลง—เสียงที่เงียบลงของป่า คริสตัลที่ผิดปกติ พายุที่ไม่เป็นธรรมชาติ บางคนบอกว่า Aetherra Veyl กำลังตื่น",
      },
      {
        heading: "Your Role",
        text: "ในโลกนี้ คุณสามารถเป็นได้ทุกอย่าง—นักผจญภัย พ่อค้า ทหารรับจ้าง หรือผู้แสวงหาความจริง แต่ไม่ว่าคุณจะเลือกเส้นทางใด… โลกนี้จะ 'ตอบสนอง' ต่อคุณเสมอ",
      },
    ],
  },
  {
    id: "magic",
    title: "Magic in Aetherra",
    icon: "✨",
    content: [
      {
        heading: "The Flow of Magic",
        text: "Magic in Aetherra is not simply a tool — it is the lifeblood of the world itself. Every crystal, every root, every stone has some trace of magical energy running through it. Those who learn to listen can hear the world breathe.",
      },
      {
        heading: "Crystal Magic",
        text: "The most common and visible form of magic manifests through crystals found deep in desert sands. These crystals store, amplify, and transmit magical energy across vast distances. The Saraketh Dominion has built its entire economy on their harvest and trade.",
      },
      {
        heading: "Nature Magic",
        text: "In Elthanir Verdancy, magic flows through roots and living things. The trees themselves are ancient conduits of power. Those blessed by the forest can communicate with spirits, grow plants in moments, and hear the whispers of things long past.",
      },
      {
        heading: "Magitek",
        text: "The Ironwald Imperium has taken a different path — fusing magical principles with mechanical engineering to create Magitek. Their machines run on extracted magical energy, and their artificers are considered the most dangerous minds on (or under) the continent.",
      },
    ],
  },
  {
    id: "fareast",
    title: "Far East Quarter",
    icon: "🏮",
    content: [
      {
        heading: "A District Found Everywhere",
        text: "The Far East Quarter is not a place on any map — it is a presence in every major city. In every port, trade hub, and capital you will find a district where travelers from distant Eastern lands have settled, traded, and built community.",
      },
      {
        heading: "What You'll Find",
        text: "Exotic foods and spices, unfamiliar languages and scripts, wandering swordmasters teaching ancient martial traditions, and merchants dealing in goods no local trader has ever seen. The Far East is a world within the world.",
      },
      {
        heading: "Community & Culture",
        text: "Those from the Far East tend to form tight-knit communities, supporting each other in foreign lands. They may look different, speak differently, and follow customs unfamiliar to locals — but they are woven into the fabric of every major city in Aetherra.",
      },
      {
        heading: "Playing a Far Eastern Character",
        text: "Players may choose to originate from the Far East Quarter without needing to define or name a home continent. Your character simply comes from 'the East' — a background as rich as any other, with unique martial training, cultural knowledge, and trade connections.",
      },
    ],
  },
  {
    id: "rules",
    title: "Player Guidelines",
    icon: "📜",
    content: [
      {
        heading: "Character Backgrounds",
        text: "Each region offers distinct character origins. Your background shapes not just your skills and abilities, but how the world reacts to you. A Saraketh merchant and an Elthanir ranger will be treated very differently in the same tavern.",
      },
      {
        heading: "The World Responds",
        text: "Aetherra is a living world. Your actions have consequences not just with NPCs, but potentially with the land itself. Strange things have been noticed: crystals reacting to nearby magic users, forests growing silent when outsiders approach, storms breaking at unusual intervals.",
      },
      {
        heading: "Multiple Origins Accepted",
        text: "Not every character needs a specific regional origin. You may be a wanderer, a refugee, a traveler who has spent years between all regions. The Far East Quarter also provides a flexible origin that works in any city.",
      },
      {
        heading: "Unknown Regions",
        text: "There are places not on this map. Rumors speak of lands beyond the eastern sea, of something ancient beneath the Underdark, and of territories even the Ironwald Imperium has never mapped. These are for the campaign to discover.",
      },
    ],
  },
];

export default function HandbookPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const active = sections.find((s) => s.id === activeSection) ?? sections[0];

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
            Player Handbook
          </h1>
          <p className="text-sm italic max-w-lg mx-auto" style={{ color: "rgba(220,190,130,0.6)", fontFamily: "'IM Fell English', serif" }}>
            Essential knowledge for adventurers setting foot in Aetherra Veyl
          </p>
        </div>

        <div className="flex gap-6">
          {/* Sidebar nav */}
          <div className="w-48 shrink-0 space-y-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className="w-full text-left px-3 py-2.5 rounded text-sm transition-all flex items-center gap-2.5"
                style={{
                  background: activeSection === s.id ? "rgba(180,140,60,0.12)" : "transparent",
                  border: activeSection === s.id ? "1px solid rgba(180,140,60,0.3)" : "1px solid transparent",
                  color: activeSection === s.id ? "hsl(40,70%,52%)" : "rgba(220,190,130,0.55)",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.7rem",
                }}
                data-testid={`handbook-tab-${s.id}`}
              >
                <span>{s.icon}</span>
                <span>{s.title}</span>
              </button>
            ))}

            <div className="pt-4">
              <div className="h-px" style={{ background: "rgba(180,140,60,0.15)" }} />
              <Link href="/">
                <button
                  className="w-full text-left px-3 py-2.5 rounded text-sm transition-all hover:opacity-80 mt-2"
                  style={{
                    color: "rgba(180,140,60,0.5)",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.7rem",
                  }}
                  data-testid="back-to-map-handbook"
                >
                  ◀ Back to Map
                </button>
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div
              className="rounded-sm overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(35,25%,15%) 0%, hsl(36,22%,13%) 100%)",
                border: "1px solid rgba(180,140,60,0.2)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              {/* Section header */}
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ borderBottom: "1px solid rgba(180,140,60,0.15)" }}
              >
                <span className="text-2xl">{active.icon}</span>
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: "'Cinzel', serif", color: "hsl(40,70%,52%)" }}
                >
                  {active.title}
                </h2>
              </div>

              {/* Section content */}
              <div className="p-6 space-y-6">
                {active.content.map((block, i) => (
                  <div key={i}>
                    <h3
                      className="text-sm font-semibold mb-2 uppercase tracking-wider"
                      style={{ color: "rgba(180,140,60,0.8)", fontFamily: "'Cinzel', serif", fontSize: "0.7rem" }}
                    >
                      {block.heading}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "rgba(220,190,130,0.82)",
                        fontFamily: "'IM Fell English', Georgia, serif",
                        lineHeight: "1.85",
                      }}
                    >
                      {block.text}
                    </p>
                    {i < active.content.length - 1 && (
                      <div className="mt-5 h-px" style={{ background: "rgba(180,140,60,0.08)" }} />
                    )}
                  </div>
                ))}
              </div>

              {/* Footer quote */}
              <div
                className="px-6 py-3 text-center text-xs italic"
                style={{
                  borderTop: "1px solid rgba(180,140,60,0.1)",
                  color: "rgba(180,140,60,0.4)",
                  fontFamily: "'IM Fell English', Georgia, serif",
                }}
              >
                "Whatever path you choose... the world will respond."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
