import RecipeCard from "./recipe-card";

export default function RenderRecipes({ recipesToRender, setRecipesToRender }) {
  function addFavorite(indexToFavorite) {
    setRecipesToRender(
      recipesToRender.map((recipe, index) =>
        index === indexToFavorite
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe,
      ),
    );
  }

  return (
    <>
      {recipesToRender && recipesToRender.length > 0 ? (
        <div className="mb-8 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipesToRender.map((recipe, index) => (
            <RecipeCard
              recipe={recipe}
              index={index}
              key={recipe.id}
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
    </>
  );
}
