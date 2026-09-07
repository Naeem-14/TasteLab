export default  function SafetyRules () {
  return (
    <section className="rounded-3xl border border-slate-200 bg-dark p-6 text-white shadow-sm md:p-8">
      <div className="max-w-2xl space-y-2">
        <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold tracking-wider text-accent uppercase">
          Safety & Best Practices
        </span>
        <h2 className="mt-2 text-2xl font-bold">Oil Safety & Storage Rules</h2>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="space-y-2 rounded-2xl border border-slate-700/50 bg-accent/5 p-5">
          <span className="text-xl font-extrabold text-accent">01</span>
          <h3 className="text-base font-bold">
            Never Use Water on Grease Fires
          </h3>
          <p className="text-xs leading-relaxed text-slate-300">
            Water vaporizes instantly in hot oil, scattering burning fat into a
            massive fireball. Smother oil fires with a metal lid or baking soda.
          </p>
        </div>

        <div className="space-y-2 rounded-2xl border border-slate-700/50 bg-accent/5 p-5">
          <span className="text-xl font-extrabold text-accent">02</span>
          <h3 className="text-base font-bold">Reusing Frying Oil</h3>
          <p className="text-xs leading-relaxed text-slate-300">
            Filter cooled frying oil through cheesecloth or a fine sieve. Reused
            oil loses its high smoke point and breaks down faster with each use.
          </p>
        </div>

        <div className="space-y-2 rounded-2xl border border-slate-700/50 bg-accent/5 p-5">
          <span className="text-xl font-extrabold text-accent">03</span>
          <h3 className="text-base font-bold">Store Away from Light & Heat</h3>
          <p className="text-xs leading-relaxed text-slate-300">
            Light and ambient kitchen heat speed up oxidation and rancidity.
            Keep delicate unrefined oils in dark glass bottles in cool cabinets.
          </p>
        </div>
      </div>
    </section>
  );
}