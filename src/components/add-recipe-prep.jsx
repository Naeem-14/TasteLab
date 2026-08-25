import AddRecipeIngredients from "./add-recipe-ingredients";
import AddRecipeInstructions from "./add-recipe-instructions";

export default function AddRecipePrep({ recipeDetails, setRecipeDetails }) {
  return (
    <section className="grid gap-3 rounded-xl border border-slate-100 bg-white p-6 shadow-sm lg:grid-cols-2">
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
