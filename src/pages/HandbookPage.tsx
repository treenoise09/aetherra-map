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
      heading: "A New Beginning",
      text: "Aetherra เป็นโลกที่กว้างใหญ่และเต็มไปด้วยเส้นทางที่ยังไม่ถูกค้นพบ เมือง อาณาจักร และผู้คนดำเนินชีวิตของตนไปในแบบที่คุ้นเคย แต่สำหรับผู้ที่เลือกออกเดินทาง โลกใบนี้ยังมีอีกมากให้เรียนรู้"
    },

    {
      heading: "A Living World",
      text: "แต่ละภูมิภาคของ Aetherra มีเอกลักษณ์ของตัวเอง—บางแห่งรุ่งเรืองด้วยการค้า บางแห่งยึดมั่นในศรัทธา ขณะที่บางแห่งยังคงอยู่ร่วมกับธรรมชาติอย่างระมัดระวัง ไม่มีที่ใดเหมือนกัน และทุกที่ล้วนมีเรื่องราวของตัวเอง"
    },

    {
      heading: "Magic in Everyday Life",
      text: "เวทมนตร์มีอยู่ในโลกนี้ แม้จะไม่ใช่สิ่งที่พบได้ทั่วไปสำหรับทุกคน บางคนใช้มันเป็นเครื่องมือ บางคนศึกษาเพื่อเข้าใจมัน และอีกหลายคนเลือกที่จะอยู่ห่างจากมัน สิ่งที่แน่ชัดคือ—มันยังคงเป็นสิ่งที่ไม่ถูกเข้าใจอย่างสมบูรณ์"
    },

    {
      heading: "Quiet Changes",
      text: "ในช่วงหลัง มีเหตุการณ์เล็กๆ ที่เริ่มถูกพูดถึง—ธรรมชาติบางแห่งเงียบลง คริสตัลบางชิ้นเปลี่ยนแปลงโดยไม่มีสาเหตุ และสภาพอากาศบางครั้งก็ไม่เป็นไปตามที่ควรจะเป็น สิ่งเหล่านี้อาจไม่มีความหมาย…หรืออาจเป็นจุดเริ่มต้นของบางสิ่ง"
    },

    {
      heading: "Aetherra Veyl",
      text: "มีชื่อหนึ่งที่ปรากฏขึ้นในเรื่องเล่าและบันทึกเก่า—Aetherra Veyl ไม่มีใครสามารถอธิบายได้ชัดเจนว่ามันคืออะไร บางคนมองว่าเป็นเพียงตำนาน แต่บางคนก็ยังคงเฝ้าสังเกตโลกนี้…เผื่อว่ามันอาจเป็นมากกว่านั้น"
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
      heading: "What Magic Really Is",
      text: "ใน Aetherra เวทมนตร์ไม่ใช่สิ่งที่ทุกคนใช้ได้ และไม่ใช่พลังที่เข้าใจอย่างแท้จริง มันถูกมองว่าเป็นปรากฏการณ์ที่สามารถควบคุมได้บางส่วนผ่านการฝึกฝน เครื่องมือ หรือทรัพยากรเฉพาะ ผู้ใช้เวทจึงมีจำนวนน้อย และมักอยู่ภายใต้การฝึกหรือองค์กรบางอย่าง"
    },

    {
      heading: "Sources of Power",
      text: "เวทมนตร์ในโลกนี้มักต้องพึ่งพา 'แหล่งพลัง' บางรูปแบบ เช่น คริสตัล สภาพแวดล้อม หรืออุปกรณ์เฉพาะ สิ่งเหล่านี้ช่วยให้ผู้ใช้สามารถเรียกใช้พลังได้อย่างเสถียรมากขึ้น แต่ก็ทำให้เวทมนตร์กลายเป็นทรัพยากรที่มีค่า และไม่สามารถใช้ได้อย่างอิสระ"
    },

    {
      heading: "Crystal Usage",
      text: "คริสตัลเป็นหนึ่งในแหล่งพลังที่พบได้บ่อยที่สุด โดยเฉพาะใน Saraketh Dominion บางชนิดสามารถเก็บหรือถ่ายเทพลังงานได้ ทำให้ถูกนำไปใช้ในอุปกรณ์ เวทสนับสนุน หรือการรักษา อย่างไรก็ตาม การใช้งานยังมีข้อจำกัด และคริสตัลบางประเภทมีความไม่เสถียรที่ยังอธิบายไม่ได้"
    },

    {
      heading: "Natural Affinity",
      text: "ในบางภูมิภาค เช่น Elthanir Verdancy ผู้คนเชื่อว่าสภาพแวดล้อมมีผลต่อการใช้เวทมนตร์ ผู้ที่ฝึกฝนในพื้นที่เหล่านี้อาจสามารถใช้พลังได้ดีขึ้น แต่สิ่งนี้ดูเหมือนจะขึ้นอยู่กับประสบการณ์และความเข้าใจ มากกว่าจะเป็นพรจากสิ่งเหนือธรรมชาติ"
    },

    {
      heading: "Magitek",
      text: "Ironwald Imperium พัฒนาแนวทางที่ต่างออกไป โดยพยายามเปลี่ยนเวทมนตร์ให้กลายเป็นพลังงานที่ควบคุมได้ผ่านเทคโนโลยี ระบบเหล่านี้ช่วยให้คนที่ไม่สามารถใช้เวทได้โดยตรงยังสามารถเข้าถึงพลังบางส่วนได้ แต่ก็มาพร้อมกับต้นทุนสูงและความเสี่ยงที่ยังไม่ถูกเข้าใจทั้งหมด"
    },
  ],
},
{
  id: "classes",
  title: "Classes & Magic Users",
  icon: "🧭",
  content: [
    {
      heading: "Adventurers in Aetherra",
      text: "ใน Aetherra ผู้คนไม่ได้ถูกแบ่งออกเป็น 'คลาส' อย่างชัดเจนเหมือนในตำรา แต่คำเหล่านี้ถูกใช้โดยนักผจญภัยและกิลด์เพื่ออธิบายความสามารถของแต่ละคน อาชีพส่วนใหญ่เกิดจากการฝึกฝน ประสบการณ์ และสภาพแวดล้อม มากกว่าพรสวรรค์เพียงอย่างเดียว"
    },

    {
      heading: "Martial Paths",
      text: "นักรบ ทหารรับจ้าง และนักล่าค่าหัวเป็นสิ่งที่พบได้ทั่วไปในทุกภูมิภาค คนกลุ่มนี้พึ่งพาทักษะร่างกาย อาวุธ และประสบการณ์มากกว่าเวทมนตร์ พวกเขาเป็นกำลังหลักของกองทัพ คาราวาน และกองเรือ\n\nตัวอย่าง: Fighter, Rogue, Barbarian, Monk"
    },

    {
      heading: "Trained Magic Users",
      text: "ผู้ใช้เวทมนตร์โดยตรงมีจำนวนน้อย และมักต้องผ่านการฝึกฝนอย่างจริงจัง ไม่ว่าจะเป็นการเรียนรู้จากสำนัก การทดลองด้วยตนเอง หรือการทำงานกับทรัพยากรอย่างคริสตัล ผู้ใช้เวทส่วนใหญ่จะมีขอบเขตความสามารถที่ชัดเจน และไม่สามารถใช้พลังได้อย่างไม่จำกัด\n\nตัวอย่าง: Wizard, Sorcerer, Warlock"
    },

    {
      heading: "Faith and Discipline",
      text: "ในบางภูมิภาค เช่น Frostspire ผู้ใช้เวทมนตร์เชื่อมโยงกับศรัทธาและหน้าที่ Cleric และ Paladin ไม่ได้เป็นเพียงผู้ใช้เวท แต่เป็นตัวแทนของความเชื่อและระเบียบในสังคม พลังของพวกเขามักถูกมองว่าเป็นผลของความศรัทธา มากกว่าสิ่งเหนือธรรมชาติที่อธิบายไม่ได้\n\nตัวอย่าง: Cleric, Paladin"
    },

    {
      heading: "Natural Practitioners",
      text: "ผู้ที่อาศัยอยู่ใกล้ชิดกับธรรมชาติ เช่นใน Elthanir อาจพัฒนาความสามารถในการใช้เวทที่สอดคล้องกับสภาพแวดล้อม พลังของพวกเขามักมาในรูปแบบที่เรียบง่ายและมีข้อจำกัด แต่มีความยืดหยุ่นสูง\n\nตัวอย่าง: Druid, Ranger"
    },

    {
      heading: "Magitek Specialists",
      text: "ใน Ironwald มีผู้เชี่ยวชาญที่ใช้เทคโนโลยีเพื่อทดแทนเวทมนตร์ อุปกรณ์ Magitek ช่วยให้ผู้ที่ไม่สามารถใช้เวทได้โดยตรงสามารถเข้าถึงพลังบางส่วนได้ แต่ต้องอาศัยความรู้ เครื่องมือ และทรัพยากรจำนวนมาก\n\nตัวอย่าง: Artificer"
    },

    {
      heading: "Limits of Power",
      text: "ไม่ว่าคุณจะอยู่ในเส้นทางใด พลังใน Aetherra มีขีดจำกัด ผู้ใช้เวทไม่สามารถร่ายคาถาได้อย่างต่อเนื่องโดยไม่มีผลกระทบ และนักรบก็ไม่สามารถต่อสู้ได้โดยไม่พักผ่อน ความแข็งแกร่งมักมาจากการวางแผน ทรัพยากร และการร่วมมือมากกว่าพลังเพียงอย่างเดียว"
    },

    {
      heading: "Reputation Matters",
      text: "ในโลกนี้ สิ่งที่ผู้คนมองเห็นสำคัญพอ ๆ กับความสามารถจริง นักผจญภัยที่มีชื่อเสียงจะได้รับความไว้วางใจ โอกาส และทรัพยากรที่มากขึ้น ขณะที่ผู้ใช้เวทมนตร์ที่ไม่เป็นที่รู้จักอาจถูกระแวงหรือหลีกเลี่ยง"
    },
  ],
},
  {
  id: "fareast",
  title: "Far East Quarter",
  icon: "🏮",
  content: [
    {
      heading: "ย่านที่มีอยู่ทุกแห่ง",
      text: "Far East Quarter ไม่ใช่สถานที่ที่ปรากฏอยู่บนแผนที่ใด ๆ แต่มันคือย่านที่สามารถพบได้ในทุกเมืองใหญ่ ไม่ว่าจะเป็นเมืองท่า ศูนย์กลางการค้า หรือเมืองหลวง ที่นั่นมักมีผู้คนจากดินแดนตะวันออกมาตั้งถิ่นฐาน ค้าขาย และสร้างชุมชนของตนเอง",
    },
    {
      heading: "สิ่งที่คุณจะพบ",
      text: "อาหารและเครื่องเทศที่ไม่คุ้นเคย ภาษาและตัวอักษรแปลกตา นักดาบพเนจรที่ถ่ายทอดวิชาการต่อสู้แบบโบราณ และพ่อค้าที่นำสินค้าซึ่งคนท้องถิ่นไม่เคยเห็นมาก่อน Far East จึงเปรียบเสมือนโลกอีกใบที่ซ่อนอยู่ภายในโลกเดิม",
    },
    {
      heading: "ชุมชนและวัฒนธรรม",
      text: "ผู้คนจาก Far East มักรวมตัวกันเป็นชุมชนที่แน่นแฟ้น คอยช่วยเหลือกันในดินแดนที่ไม่ใช่บ้านเกิด พวกเขาอาจมีรูปลักษณ์ ภาษา หรือธรรมเนียมที่แตกต่างจากคนท้องถิ่น แต่ก็กลายเป็นส่วนหนึ่งของชีวิตในเมืองใหญ่ของ Aetherra อย่างแยกไม่ออก",
    },
    {
      heading: "การสร้างตัวละครจาก Far East",
      text: "ผู้เล่นสามารถเลือกให้ตัวละครมีต้นกำเนิดจาก Far East Quarter ได้ โดยไม่จำเป็นต้องระบุหรือสร้างทวีปต้นกำเนิดอย่างละเอียด(วัฒนธรรมเอเชียอาคเนย์ ไทย,จีน,ญี่ปุ่น,เกาหลี,ฯลฯ) ตัวละครของคุณเพียงมาจาก 'ดินแดนตะวันออก' ซึ่งเปิดโอกาสให้มีทั้งพื้นฐานทางวัฒนธรรม วิชาการต่อสู้ และเครือข่ายการค้าที่เป็นเอกลักษณ์",
    },
  ],
},
  {
  id: "rules",
  title: "แนวทางสำหรับผู้เล่น",
  icon: "📜",
  content: [
    {
      heading: "พื้นหลังตัวละคร",
      text: "แต่ละภูมิภาคมีที่มาของตัวละครที่แตกต่างกัน พื้นหลังของคุณไม่ได้กำหนดแค่ทักษะหรือความสามารถเท่านั้น แต่ยังมีผลต่อวิธีที่โลกตอบสนองต่อคุณด้วย พ่อค้าจาก Saraketh และนักล่าจาก Elthanir อาจได้รับการปฏิบัติแตกต่างกันอย่างชัดเจน แม้อยู่ในสถานที่เดียวกัน"
    },
    {
      heading: "โลกมีการตอบสนอง",
      text: "Aetherra เป็นโลกที่มีการเคลื่อนไหวและเปลี่ยนแปลงอยู่เสมอ การกระทำของคุณส่งผลต่อทั้งผู้คนและสิ่งแวดล้อมรอบตัว มีรายงานถึงปรากฏการณ์แปลก ๆ เช่น คริสตัลที่ตอบสนองต่อผู้ใช้เวท ป่าที่เงียบผิดปกติเมื่อมีคนนอกเข้าไป หรือพายุที่เกิดขึ้นโดยไม่มีรูปแบบแน่นอน"
    },
    {
      heading: "ไม่จำเป็นต้องมีต้นกำเนิดเดียว",
      text: "ตัวละครไม่จำเป็นต้องยึดติดกับภูมิภาคใดภูมิภาคหนึ่ง คุณอาจเป็นนักเดินทาง ผู้ลี้ภัย หรือคนที่ใช้ชีวิตข้ามหลายดินแดน ย่าน Far East Quarter ก็เป็นอีกทางเลือกที่ยืดหยุ่นและสามารถใช้เป็นต้นกำเนิดได้ในทุกเมืองใหญ่"
    },
    {
      heading: "ดินแดนที่ยังไม่ถูกค้นพบ",
      text: "ยังมีสถานที่อีกมากที่ไม่ปรากฏบนแผนที่ ข่าวลือกล่าวถึงดินแดนไกลออกไปทางตะวันออก สิ่งโบราณใต้ดินลึก และพื้นที่ที่แม้แต่ Ironwald ก็ยังไม่สามารถสำรวจได้ สิ่งเหล่านี้รอให้ถูกค้นพบภายในแคมเปญ"
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
