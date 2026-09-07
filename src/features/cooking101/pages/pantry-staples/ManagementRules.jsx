export default function ManagementRules() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-dark p-6 text-white shadow-sm md:p-8">
      <div className="max-w-2xl space-y-2">
        <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold tracking-wider text-emerald-400 uppercase">
          Inventory Strategy
        </span>
        <h2 className="mt-2 text-2xl font-bold">Pantry Management Rules</h2>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="space-y-2 rounded-2xl border border-slate-700/50 bg-accent/5 p-5">
          <span className="text-xl font-extrabold text-emerald-400">01</span>
          <h3 className="text-base font-bold">The FIFO Principle</h3>
          <p className="text-xs leading-relaxed text-slate-300">
            "First In, First Out." Always place newly purchased groceries behind
            older ones to ensure older stock gets used first.
          </p>
        </div>

        <div className="space-y-2 rounded-2xl border border-slate-700/50 bg-accent/5 p-5">
          <span className="text-xl font-extrabold text-emerald-400">02</span>
          <h3 className="text-base font-bold">Ditch Cardboard Bags</h3>
          <p className="text-xs leading-relaxed text-slate-300">
            Transfer grains, cereals, and flour into airtight glass or heavy
            plastic containers to lock out humidity and pests.
          </p>
        </div>

        <div className="space-y-2 rounded-2xl border border-slate-700/50 bg-accent/5 p-5">
          <span className="text-xl font-extrabold text-emerald-400">03</span>
          <h3 className="text-base font-bold">Dark & Cool Climate</h3>
          <p className="text-xs leading-relaxed text-slate-300">
            Ideal pantry temperature is between 50°F and 70°F. Keep
            heat-generating appliances (like ovens or fridges) away from dry
            storage areas.
          </p>
        </div>
      </div>
    </section>
  );
}
