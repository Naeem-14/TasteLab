export default function ProfilesBreakdown({
  flavorProfiles,
  activeProfileIndex,
  setActiveProfileIndex,
}) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          The 6 Elements of Flavor
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Understand how each flavor component functions and how they counteract
          each other.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Profile List */}
        <div className="flex flex-col gap-2.5 lg:col-span-5">
          {flavorProfiles.map((p, idx) => (
            <button
              key={p.name}
              type="button"
              onClick={() => setActiveProfileIndex(idx)}
              className={`flex items-center justify-between rounded-2xl border p-4 text-left transition-all ${
                activeProfileIndex === idx
                  ? "border-accent bg-accent/5 font-semibold text-slate-900 ring-2 ring-accent/20"
                  : "border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300 hover:bg-slate-100/60"
              }`}
            >
              <span className="text-sm font-medium">{p.name}</span>
              <span className="rounded-full bg-slate-200/80 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                {p.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Card for Active Profile */}
        <div className="flex flex-col justify-between space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:col-span-7">
          <div className="space-y-2">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold tracking-wider text-accent uppercase">
              {flavorProfiles[activeProfileIndex].badge}
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900">
              {flavorProfiles[activeProfileIndex].name}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {flavorProfiles[activeProfileIndex].role}
            </p>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-4">
            <div>
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                Common Kitchen Sources
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {flavorProfiles[activeProfileIndex].sources}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                Key Balancing Partners
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {flavorProfiles[activeProfileIndex].pairsWith}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
