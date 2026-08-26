import AddRecipeIngredients from "./recipe-ingredients";
import AddRecipeInstructions from "./recipe-instructions";

export default function RecipePrep({ recipeDetails, setRecipeDetails }) {
  return (
    <section className="grid gap-3 rounded-xl border border-slate-100 bg-white p-6 shadow-sm lg:grid-cols-2 lg:gap-5">
      <AddRecipeIngredients
        recipeDetails={recipeDetails}
        setRecipeDetails={setRecipeDetails}
      />

      <AddRecipeInstructions
        recipeDetails={recipeDetails}
        setRecipeDetails={setRecipeDetails}
      />
    </section>
  );
}
