export default function CalculatorAndDanger({
  weight,
  setWeight,
  setThawMethod,
  thawMethod,
  calculateThawTime,
}) {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:col-span-6">
        <div>
          <span className="text-xs font-bold tracking-wider text-accent uppercase">
            Tool & Estimator
          </span>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Safe Thawing Calculator
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Estimate safe thawing durations based on food weight and method.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-xs font-bold text-slate-700 uppercase">
              Select Thawing Method
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setThawMethod("fridge")}
                className={`rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all ${
                  thawMethod === "fridge"
                    ? "border-accent bg-accent/10 text-slate-900"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                Refrigerator (Safest)
              </button>
              <button
                type="button"
                onClick={() => setThawMethod("water")}
                className={`rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all ${
                  thawMethod === "water"
                    ? "border-accent bg-accent/10 text-slate-900"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                Cold Water Bath (Fast)
              </button>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase">
                Weight (Pounds):{" "}
                <span className="font-extrabold text-accent">{weight} lbs</span>
              </label>
            </div>
            <input
              type="range"
              min="0.5"
              max="20"
              step="0.5"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="w-full cursor-pointer accent-accent"
            />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <span className="text-xs font-bold text-slate-400 uppercase">
              Estimated Thaw Duration
            </span>
            <p className="mt-1 text-base font-bold text-slate-900">
              {calculateThawTime()}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between space-y-4 rounded-3xl border border-rose-200 bg-rose-50/50 p-6 md:p-8 lg:col-span-6">
        <div className="space-y-3">
          <div className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-bold tracking-wider text-rose-700 uppercase">
            Critical Safety Rule
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            The Temperature Danger Zone
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Bacteria grow fastest in the temperature range between{" "}
            <strong className="text-rose-700">
              40°F and 140°F (4°C – 60°C)
            </strong>
            , doubling in number in as little as 20 minutes.
          </p>
        </div>

        <div className="space-y-3 border-t border-rose-200/80 pt-4">
          <div className="flex items-start gap-3 text-sm text-slate-700">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-600 text-xs font-bold text-white">
              !
            </span>
            <p>
              <strong>2-Hour Rule:</strong> Never leave perishable food out at
              room temperature for more than 2 hours (1 hour if above 90°F /
              32°C).
            </p>
          </div>
          <div className="flex items-start gap-3 text-sm text-slate-700">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-600 text-xs font-bold text-white">
              !
            </span>
            <p>
              <strong>Never Thaw on Counter:</strong> Always thaw food in the
              refrigerator, cold water, or microwave—never at room temp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
