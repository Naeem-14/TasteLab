import AddRecipeNames from "./add-recipe-names";
import AddRecipeOverview from "./add-recipe-overview";
import AddRecipeDifficulty from "./add-recipe-difficulty";

export default function AddRecipeInfo() {
  return (
    <section className="grid gap-3 rounded-xl border border-slate-100 bg-white p-6 shadow-sm lg:grid-cols-2">
      {/* name and creator */}
      <AddRecipeNames />

      {/* time and category */}
      <AddRecipeOverview />

      {/* difficulty */}
      <AddRecipeDifficulty />
    </section>
  );
}
