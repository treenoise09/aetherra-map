import { useState, useEffect } from "react";

type Rule = {
  name: string;
  desc: string;
  link?: string;
};

type RulesState = {
  banned: Rule[];
  restricted: Rule[];
};

const STORAGE_KEY = "aetherra_rules";

export default function RulesTabs() {
  const [activeTab, setActiveTab] = useState<keyof RulesState>("banned");
  const [rules, setRules] = useState<RulesState>({
    banned: [],
    restricted: [],
  });

  const [form, setForm] = useState<Rule>({
    name: "",
    desc: "",
    link: "",
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setRules(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rules));
  }, [rules]);

  const addRule = () => {
    if (!form.name.trim()) return;

    setRules((prev) => ({
      ...prev,
      [activeTab]: [...prev[activeTab], form],
    }));

    setForm({ name: "", desc: "", link: "" });
  };

  const deleteRule = (index: number) => {
    setRules((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].filter((_, i) => i !== index),
    }));
  };

  const currentRules = rules[activeTab];

  return (
    <div className="min-h-screen px-6 py-10 text-yellow-100">
      <h1 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
        Rules & Restrictions
      </h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {["banned", "restricted"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as keyof RulesState)}
            className="px-4 py-2 text-sm rounded"
            style={{
              color:
                activeTab === tab
                  ? "hsl(40,70%,52%)"
                  : "rgba(180,140,60,0.5)",
              border:
                activeTab === tab
                  ? "1px solid rgba(180,140,60,0.3)"
                  : "1px solid transparent",
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="mb-6 space-y-2">
        <input
          placeholder="Name (e.g. Fireball)"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-3 py-2 bg-black/20 border border-yellow-800/20 rounded"
        />
        <input
          placeholder="Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          className="w-full px-3 py-2 bg-black/20 border border-yellow-800/20 rounded"
        />
        <input
          placeholder="Reference Link (optional)"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          className="w-full px-3 py-2 bg-black/20 border border-yellow-800/20 rounded"
        />

        <button
          onClick={addRule}
          className="px-4 py-2 bg-yellow-700/20 border border-yellow-600/30 rounded"
        >
          + Add Rule
        </button>
      </div>

      {/* List */}
      <div className="border border-yellow-800/20 rounded-lg overflow-hidden">
        {currentRules.length === 0 ? (
          <div className="text-center py-10 opacity-50">
            No rules yet.
          </div>
        ) : (
          currentRules.map((rule, index) => (
            <div
              key={index}
              className="p-4 border-b border-yellow-800/10 flex justify-between items-start"
            >
              <div>
                <div className="text-yellow-400 font-semibold">
                  {rule.name}
                </div>
                <div className="text-sm opacity-70">
                  {rule.desc}
                </div>

                {rule.link && (
                  <a
                    href={rule.link}
                    target="_blank"
                    className="text-xs text-blue-400 underline"
                  >
                    View Reference
                  </a>
                )}
              </div>

              <button
                onClick={() => deleteRule(index)}
                className="text-red-400 text-xs"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}