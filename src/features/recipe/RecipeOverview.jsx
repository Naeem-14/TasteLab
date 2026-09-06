import { clock, difficulty, category } from "../../data/icons";

export default function RecipeOverview({ recipe, page }) {
  return (
    <section className="relative flex flex-col rounded-3xl border border-slate-200/60 bg-white p-2 shadow-sm lg:col-span-2">
      {/* Hero Image Container: Fills full available height on all screens */}
      <div className="relative min-h-80 w-full flex-1 overflow-hidden rounded-2xl md:min-h-100">
        <img
          src={recipe.image}
          alt={recipe.foodName}
          className="mx-lg:aspect-video absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105 max-sm:aspect-square"
        />
      </div>

      {/* Floating Card Overlay */}
      <div
        className={
          page === "basicSauces"
            ? "z-10 mx-auto -mt-12 flex w-[92%] flex-col items-center gap-3 rounded-2xl border border-white/80 bg-white/85 p-5 text-slate-800 shadow-xl backdrop-blur-md transition-all hover:bg-white"
            : "z-10 mx-auto -mt-12 flex w-[92%] flex-col items-center gap-3 rounded-2xl border border-white/80 bg-white/85 p-5 text-slate-800 shadow-xl backdrop-blur-md transition-all hover:bg-white sm:-mt-16 md:mt-2 md:w-full md:shadow-md md:max-lg:bg-bg md:max-lg:hover:bg-bg lg:absolute lg:bottom-6 lg:left-1/2 lg:mt-0 lg:w-[90%] lg:-translate-x-1/2 lg:shadow-xl"
        }
      >
        {/* Header Info */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
            {recipe.foodName}
          </h1>
          <p className="mt-1 text-sm font-medium text-slate-500">
            By <span className="text-slate-700">{recipe.madeByCreator}</span>
          </p>
        </div>

        {/* Metadata Chips Bar */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold sm:text-sm">
          <span className="flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-slate-100 px-3 py-1.5 text-slate-700 md:max-lg:bg-white md:max-lg:shadow-xs">
            {clock} {recipe.time} mins
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-slate-100 px-3 py-1.5 text-slate-700 md:max-lg:bg-white md:max-lg:shadow-xs">
            {difficulty} {recipe.difficulty}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-slate-100 px-3 py-1.5 text-slate-700 md:max-lg:bg-white md:max-lg:shadow-xs">
            {category} {recipe.category}
          </span>
        </div>
      </div>
    </section>
  );
}
