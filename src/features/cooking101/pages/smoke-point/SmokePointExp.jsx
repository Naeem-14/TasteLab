export default function SmokePointsExplanation () {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-lg font-extrabold text-amber-800">
          🔥
        </div>
        <h3 className="text-lg font-bold text-slate-900">Flavor Degradation</h3>
        <p className="text-xs leading-relaxed text-slate-600">
          When oil passes its smoke point, fats break down into acrolein, giving
          your food an acrid, bitter, and metallic burnt taste.
        </p>
      </div>

      <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-lg font-extrabold text-rose-800">
          ⚠️
        </div>
        <h3 className="text-lg font-bold text-slate-900">
          Free Radicals & Toxins
        </h3>
        <p className="text-xs leading-relaxed text-slate-600">
          Overheated oils release free radicals and carcinogenic compounds.
          Refined oils tolerate heat better because impurites are removed.
        </p>
      </div>

      <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-lg font-extrabold text-emerald-800">
          ✨
        </div>
        <h3 className="text-lg font-bold text-slate-900">Nutritional Value</h3>
        <p className="text-xs leading-relaxed text-slate-600">
          Unrefined oils like extra virgin olive oil retain beneficial
          antioxidants, but high heat neutralizes these health benefits rapidly.
        </p>
      </div>
    </section>
  );
}