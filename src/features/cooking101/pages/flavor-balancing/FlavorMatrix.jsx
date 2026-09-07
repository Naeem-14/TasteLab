export default function FlavorMatrix({
  selectedIssue,
  setSelectedIssue,
  currentFixes,
}) {
  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="border-b border-slate-100 pb-6">
        <span className="text-xs font-bold tracking-wider text-accent uppercase">
          Kitchen Rescue Tool
        </span>
        <h2 className="mt-1 text-2xl font-bold text-slate-900">
          How to Fix an Imbalanced Dish
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Select the dominant issue your dish is experiencing to view instant
          culinary solutions.
        </p>
      </div>

      {/* Issue Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "salty", label: "Too Salty 🧂" },
          { id: "acidic", label: "Too Sour / Acidic 🍋" },
          { id: "spicy", label: "Too Spicy 🌶️" },
          { id: "sweet", label: "Too Sweet 🍯" },
          { id: "bitter", label: "Too Bitter 🥬" },
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedIssue(item.id)}
            className={`rounded-2xl border px-4 py-2.5 text-xs font-semibold transition-all ${
              selectedIssue === item.id
                ? "border-accent bg-accent/10 font-bold text-slate-900"
                : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Rescue Solutions Grid */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="mb-4 text-lg font-bold text-slate-900">
          {currentFixes.title}
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {currentFixes.solutions.map((sol, idx) => (
            <div
              key={sol.method}
              className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    {idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    {sol.method}
                  </h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {sol.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
