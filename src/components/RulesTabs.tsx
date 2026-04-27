import { useState } from "react";

type Rule = {
  name: string;
  desc: string;
};

const rulesData: Record<string, Rule[]> = {
  banned: [
    { name: "Wish", desc: "Too powerful, breaks campaign balance" },
    { name: "Silvery Barbs", desc: "Overused and disruptive" },
  ],
  restricted: [
    { name: "Counterspell", desc: "DM approval required" },
  ],
  allowed: [
    { name: "Fireball", desc: "Classic destructive spell" },
    { name: "Mage Hand", desc: "Utility cantrip" },
  ],
};

const tabs = [
  { key: "banned", label: "Banned" },
  { key: "restricted", label: "Restricted" },
  { key: "allowed", label: "Allowed" },
];

export default function RulesTabs() {
  const [activeTab, setActiveTab] = useState("banned");

  const currentRules = rulesData[activeTab] || [];

  return (
    <div className="min-h-screen px-6 py-10 text-yellow-100">
      {/* Title */}
      <h1
        className="text-3xl mb-6"
        style={{ fontFamily: "'Cinzel Decorative', serif" }}
      >
        Rules & Restrictions
      </h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="px-4 py-2 text-sm rounded transition-all"
              style={{
                fontFamily: "'Cinzel', serif",
                color: isActive
                  ? "hsl(40,70%,52%)"
                  : "rgba(180,140,60,0.5)",
                background: isActive
                  ? "rgba(180,140,60,0.1)"
                  : "transparent",
                border: isActive
                  ? "1px solid rgba(180,140,60,0.3)"
                  : "1px solid transparent",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="border border-yellow-800/20 rounded-lg overflow-hidden">
        {currentRules.length === 0 ? (
          <div className="text-center py-20 opacity-50">
            No rules in this category.
          </div>
        ) : (
          currentRules.map((rule) => (
            <div
              key={rule.name}
              className="p-4 border-b border-yellow-800/10"
            >
              <div className="text-yellow-400 font-semibold">
                {rule.name}
              </div>
              <div className="text-sm opacity-70">
                {rule.desc}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}