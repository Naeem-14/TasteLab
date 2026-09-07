export default function ItemInspector({
  selectedCategory,
  setSelectedCategory,
  setActiveItemIndex,
  filteredItems,
  activeItem,
}) {
  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Staple Ingredient Inspector
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Filter pantry items to explore unopened shelf life, opened
            stability, and optimal storage environments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Items" },
            { id: "grains", label: "Grains & Pasta 🌾" },
            { id: "canned", label: "Canned Goods 🥫" },
            { id: "condiments", label: "Oils & Sauces 🫒" },
            { id: "baking", label: "Baking & Sweet 🍯" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveItemIndex(0);
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
        {/* List Selection Column */}
        <div className="flex flex-col gap-2.5 lg:col-span-5">
          {filteredItems.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveItemIndex(idx)}
              className={`flex items-center justify-between rounded-2xl border p-4 text-left transition-all ${
                activeItem.name === item.name
                  ? "border-accent bg-accent/5 font-semibold text-slate-900 ring-2 ring-accent/20"
                  : "border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300 hover:bg-slate-100/60"
              }`}
            >
              <span className="text-sm font-medium">{item.name}</span>
              <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                {item.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Info Card */}
        <div className="flex flex-col justify-between space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 lg:col-span-7">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              Storage & Longevity
            </span>
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
              {activeItem.badge}
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-3xl font-extrabold text-slate-900">
              {activeItem.name}
            </h3>
            <p className="text-xs font-semibold text-slate-500 uppercase">
              Ideal Setup: {activeItem.storageType}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 border-y border-slate-200/80 py-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase">
                Unopened Pantry Life
              </span>
              <p className="mt-1 text-lg font-extrabold text-slate-900">
                {activeItem.shelfLifePantry}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase">
                Once Opened
              </span>
              <p className="mt-1 text-lg font-extrabold text-slate-900">
                {activeItem.shelfLifeOpened}
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 uppercase">
              Chef Tips & Prevention
            </span>
            <p className="mt-1 text-xs leading-relaxed text-slate-700">
              {activeItem.tips}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
