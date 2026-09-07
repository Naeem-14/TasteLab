export default  function GoldenRule () {
  return (
    <section className="rounded-3xl border border-slate-200 bg-dark p-6 text-white shadow-sm md:p-8">
      <div className="max-w-2xl space-y-2">
        <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold tracking-wider text-accent uppercase">
          Chef Guidelines
        </span>
        <h2 className="mt-2 text-2xl font-bold">Golden Rules for Seasoning</h2>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="space-y-2 rounded-2xl border border-slate-700/50 bg-accent/5 p-5">
          <span className="text-xl font-extrabold text-accent">01</span>
          <h3 className="text-base font-bold">Season in Layers</h3>
          <p className="text-xs leading-relaxed text-slate-300">
            Add salt at every stage of cooking (sweating onions, searing meat,
            simmering sauce) rather than all at the end.
          </p>
        </div>

        <div className="space-y-2 rounded-2xl border border-slate-700/50 bg-accent/5 p-5">
          <span className="text-xl font-extrabold text-accent">02</span>
          <h3 className="text-base font-bold">Finish with Acid</h3>
          <p className="text-xs leading-relaxed text-slate-300">
            If a soup or sauce feels flat right before serving, a dash of lemon
            juice or vinegar brightens it without needing more salt.
          </p>
        </div>

        <div className="space-y-2 rounded-2xl border border-slate-700/50 bg-accent/5 p-5">
          <span className="text-xl font-extrabold text-accent">03</span>
          <h3 className="text-base font-bold">Taste at Temperature</h3>
          <p className="text-xs leading-relaxed text-slate-300">
            Cold foods dull taste buds. Always taste soups, sauces, and stews at
            their intended serving temperature.
          </p>
        </div>
      </div>
    </section>
  );
}