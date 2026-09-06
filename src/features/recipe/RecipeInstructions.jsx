export default function RecipeInstrutions({ recipe, page }) {
  return (
    <section className="flex scrollbar-none flex-col gap-8 rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm md:h-full md:max-h-full md:overflow-y-auto md:p-8 lg:col-span-3 [&::-webkit-scrollbar]:hidden">
      {/* Ingredients Section */}
      <div>
        <div className="mb-4 flex items-center justify-between border-b border-slate-200/80 pb-3">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Ingredients
          </h2>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {recipe.ingredients?.length || 0} items
          </span>
        </div>

        <ul
          className={
            page === "basicSauces"
              ? "grid gap-2.5"
              : "grid gap-2.5 sm:grid-cols-2 md:max-lg:grid-cols-1"
          }
        >
          {recipe.ingredients?.map((item, index) => (
            <li
              key={index}
              className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 transition-colors hover:border-slate-200 hover:bg-slate-50"
            >
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-slate-800 accent-slate-800 focus:ring-slate-400"
                />
                <span className="font-medium text-slate-800 capitalize transition-colors group-has-checked:text-slate-400 group-has-checked:line-through">
                  {item.name}
                </span>
              </label>

              <span className="text-sm font-semibold text-slate-500">
                {item.quantity} {item.unit}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div>
        <div className="mb-4 border-b border-slate-200/80 pb-3">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Instructions
          </h2>
        </div>

        <ol className="flex flex-col gap-3">
          {recipe.instructions?.map((step, index) => (
            <li
              key={index}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/40 p-4 transition-colors hover:border-slate-200 hover:bg-slate-50/80"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                {index + 1}
              </span>
              <p className="pt-0.5 leading-relaxed text-slate-700">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
