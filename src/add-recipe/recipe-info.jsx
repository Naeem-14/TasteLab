import AddRecipeNames from "./recipe-names";
import AddRecipeOverview from "./recipe-overview";
import AddRecipeDifficulty from "./recipe-difficulty";

export default function RecipeInfo({ recipeDetails, setRecipeDetails }) {
  return (
    <section className="grid gap-3 rounded-xl border border-slate-100 bg-white p-6 shadow-sm lg:grid-cols-2 lg:gap-x-5">
      {/* name and creator */}
      <AddRecipeNames
        recipeDetails={recipeDetails}
        setRecipeDetails={setRecipeDetails}
      />

      {/* time and category */}
      <AddRecipeOverview
        recipeDetails={recipeDetails}
        setRecipeDetails={setRecipeDetails} 
      />

      {/* difficulty */}
      <AddRecipeDifficulty
        recipeDetails={recipeDetails}
        setRecipeDetails={setRecipeDetails}
      />
    </section>
  );
}
