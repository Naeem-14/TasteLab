import recipes from "./data";
import { clock, favorites } from "./icons";

export default function Recipes() {
  return (
    // <section className="mx-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    //   {recipes.map((recipe) => (
    //     <div
    //       className="group overflow-hidden rounded-md bg-light shadow-sm"
    //       key={recipe.id}
    //     >
    //       <div className="relative">
    //         <img
    //           src={recipe.image}
    //           className="aspect-5/3 object-cover object-center"
    //         />
    //         <div className="absolute top-2 left-2 flex items-center gap-0.5 rounded-full border-t border-white bg-white/60 px-1 py-0.5 pr-2 text-sm text-slate-500 backdrop-blur-xs transition duration-200 group-hover:bg-white">
    //           <span className="scale-75">{clock}</span>
    //           <span>{recipe.time.totalMinutes} mins</span>
    //         </div>
    //       </div>

    //       <div className="p-4">
    //         <div className="mb-1 text-sm font-semibold text-slate-600">
    //           {recipe.foodName}
    //         </div>
    //         <div className="text-xs text-slate-400">{recipe.madeByCreator}</div>
    //       </div>
    //     </div>
    //   ))}
    // </section>

    <section className="mx-auto h-[calc(100vh-120px)] max-w-7xl scrollbar-thumb-dark overflow-y-auto px-4 sm:px-6 lg:px-8">
      {recipes && recipes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {recipes.map((recipe) => (
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
                  <span>{recipe.time.totalMinutes} mins</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="relative flex flex-1 flex-col justify-between p-4">
                {/* add favorite */}
                <div className="absolute -top-5 right-0 scale-75 rounded-full bg-bg p-2 text-slate-600 shadow-sm">
                  {favorites}
                </div>

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
