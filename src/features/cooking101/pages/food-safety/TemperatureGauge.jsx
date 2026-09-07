export default function TemperatureGauge({
  proteins,
  selectedProteinIndex,
  setSelectedProteinIndex,
  currentProtein,
}) {
  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Safe Internal Temperatures
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Select a protein type to view required USDA safe target temperatures
            and resting times.
          </p>
        </div>
        <span className="self-start rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-500 md:self-auto">
          Always insert thermometer into thickest part
        </span>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* Protein Buttons */}
        <div className="flex flex-col gap-2.5 lg:col-span-5">
          {proteins.map((p, idx) => (
            <button
              key={p.name}
              type="button"
              onClick={() => setSelectedProteinIndex(idx)}
              className={`flex items-center justify-between rounded-2xl border p-4 text-left transition-all ${
                selectedProteinIndex === idx
                  ? "border-accent bg-accent/5 font-semibold text-slate-900 ring-2 ring-accent/20"
                  : "border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300 hover:bg-slate-100/60"
              }`}
            >
              <span className="text-sm font-medium">{p.name}</span>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                  selectedProteinIndex === idx
                    ? "bg-accent text-white"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {p.tempF}°F
              </span>
            </button>
          ))}
        </div>

        {/* Temperature Display */}
        <div className="flex flex-col justify-between space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 lg:col-span-7">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              Target Internal Temp
            </span>
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800">
              {currentProtein.badge}
            </span>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-6xl font-extrabold tracking-tight text-slate-900">
              {currentProtein.tempF}°
              <span className="text-3xl font-normal text-slate-500">F</span>
            </span>
            <span className="text-2xl font-bold text-slate-400">
              / {currentProtein.tempC}°C
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{
                  width: `${Math.min((currentProtein.tempF / 180) * 100, 100)}%`,
                }}
              />
            </div>
            <div className="flex justify-between text-xs font-medium text-slate-400">
              <span>120°F (Rare)</span>
              <span>145°F</span>
              <span>165°F (Done)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-slate-200/80 pt-2 md:grid-cols-2">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">
                Resting Time
              </span>
              <p className="mt-0.5 text-sm font-semibold text-slate-800">
                {currentProtein.restTime}
              </p>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">
                Safety Note
              </span>
              <p className="mt-0.5 text-xs text-slate-600">
                {currentProtein.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
