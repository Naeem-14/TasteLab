export default function ExpirationDates () {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-xs font-extrabold text-blue-800 uppercase">
          BEST
        </div>
        <h3 className="text-lg font-bold text-slate-900">"Best If Used By"</h3>
        <p className="text-xs leading-relaxed text-slate-600">
          Refers to peak quality and flavor, NOT safety. Food is typically
          completely safe to consume past this date if stored properly.
        </p>
      </div>

      <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-xs font-extrabold text-amber-800 uppercase">
          SELL
        </div>
        <h3 className="text-lg font-bold text-slate-900">"Sell By"</h3>
        <p className="text-xs leading-relaxed text-slate-600">
          A store inventory date indicating how long items should stay on
          display. Usually valid for days or weeks past this mark.
        </p>
      </div>

      <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-xs font-extrabold text-rose-800 uppercase">
          USE
        </div>
        <h3 className="text-lg font-bold text-slate-900">"Use By"</h3>
        <p className="text-xs leading-relaxed text-slate-600">
          The last date recommended for product use while at peak quality.
          Strictly follow this for highly perishable items like infant formula.
        </p>
      </div>
    </section>
  );
}