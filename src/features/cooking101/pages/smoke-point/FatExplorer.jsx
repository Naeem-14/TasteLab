export default function FatExplorer({
  selectedCategory,
  setSelectedCategory,
  setActiveOilIndex,
  filteredFats,
  activeFat,
}) {
  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Cooking Fat Guide & Selector
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Filter fats by heat range to find the ideal oil for your cooking
            technique.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Oils" },
            { id: "high", label: "High Heat (>400°F)" },
            { id: "medium", label: "Medium Heat" },
            { id: "low", label: "Low / Finishing" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveOilIndex(0);
              }}
              className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "border-accent bg-accent/10 font-bold text-slate-900"
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Fat List Buttons */}
        <div className="flex flex-col gap-2.5 lg:col-span-5">
          {filteredFats.map((fat, idx) => (
            <button
              key={fat.name}
              type="button"
              onClick={() => setActiveOilIndex(idx)}
              className={`flex items-center justify-between rounded-2xl border p-4 text-left transition-all ${
                activeFat.name === fat.name
                  ? "border-accent bg-accent/5 font-semibold text-slate-900 ring-2 ring-accent/20"
                  : "border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300 hover:bg-slate-100/60"
              }`}
            >
              <span className="text-sm font-medium">{fat.name}</span>
              <span className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-bold text-slate-700">
                {fat.smokeF}°F
              </span>
            </button>
          ))}
        </div>

        {/* Selected Fat Detail Card */}
        <div className="flex flex-col justify-between space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 lg:col-span-7">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              Smoke Threshold
            </span>
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800">
              {activeFat.badge}
            </span>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-6xl font-extrabold tracking-tight text-slate-900">
              {activeFat.smokeF}°
              <span className="text-3xl font-normal text-slate-500">F</span>
            </span>
            <span className="text-2xl font-bold text-slate-400">
              / {activeFat.smokeC}°C
            </span>
          </div>

          {/* Heat Level Bar */}
          <div className="space-y-1.5">
            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{
                  width: `${Math.min((activeFat.smokeF / 550) * 100, 100)}%`,
                }}
              />
            </div>
            <div className="flex justify-between text-xs font-medium text-slate-400">
              <span>Low (250°F)</span>
              <span>Medium (375°F)</span>
              <span>High (500°F+)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-slate-200/80 pt-4 md:grid-cols-2">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">
                Ideal Applications
              </span>
              <p className="mt-0.5 text-sm font-semibold text-slate-800">
                {activeFat.bestFor}
              </p>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">
                Flavor Profile & Notes
              </span>
              <p className="mt-0.5 text-xs text-slate-600">{activeFat.notes}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
