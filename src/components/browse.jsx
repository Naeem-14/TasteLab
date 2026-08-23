import { clock, favorites, favoritesFilled } from "./icons";

export default function Browse({ recipes, setRecipes }) {
  function addFavorite(indexToFavorite) {
    setRecipes(
      recipes.map((recipe, index) =>
        index === indexToFavorite
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe,
      ),
    );
  }

  return (
    <section className="mx-auto h-[calc(100vh-120px)] max-w-7xl scrollbar-thumb-dark overflow-y-auto px-4 sm:px-6 lg:px-8">
      {recipes && recipes.length > 0 ? (
        <div className="mb-8 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.map((recipe, index) => (
            <article
              key={recipe.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-slate-300"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                <img
                  src={recipe.images?.thumbnail || recipe.image}
                  alt={recipe.foodName}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Time Pill */}
                <div className="py- absolute top-2 left-2 flex items-center gap-1 rounded-full border-t border-white bg-white/70 pr-2 pl-0.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-xs transition-colors group-hover:bg-white">
                  <span className="shrink-0 scale-75 text-slate-500">
                    {clock}
                  </span>
                  <span>{recipe.time} mins</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="relative flex flex-1 flex-col justify-between p-4">
                {/* add favorite */}
                <button
                  className="absolute -top-5 right-1 scale-90 rounded-full bg-bg p-2 text-slate-600 shadow-sm"
                  onClick={() => addFavorite(index)}
                >
                  {recipe.isFavorite ? favoritesFilled : favorites}
                </button>

                <div>
                  <h3 className="line-clamp-1 text-sm font-bold text-slate-800 transition-colors group-hover:text-accent">
                    {recipe.foodName}
                  </h3>
                  <p className="mt-1 line-clamp-1 text-xs text-slate-500">
                    By{" "}
                    <span className="font-medium text-slate-500">
                      {recipe.madeByCreator}
                    </span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State Fallback */
        <div className="py-12 text-center text-slate-400">
          <p className="text-sm font-medium">
            No recipes found matching your search.
          </p>
        </div>
      )}
    </section>
  );
}
