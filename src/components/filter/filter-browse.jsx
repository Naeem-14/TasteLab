import RecipeCard from "../../utils/recipe-card";

export default function FilterPageBrowse({ filteredRecipes, addFavorite }) {
  return (
    <section className="px-4 pt-2">
      {filteredRecipes && filteredRecipes.length > 0 ? (
        <div className="mb-8 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard
              recipe={recipe}
              index={index}

              addFavorite={addFavorite}
            />
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
