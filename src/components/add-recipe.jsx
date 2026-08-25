import { useState } from "react";
import AddRecipeImage from "./add-recipe-image";
import AddRecipeInfo from "./add-recipe-info";
import AddRecipePrep from "./add-recipe-prep";
import { add } from "./icons";

export default function AddRecipe() {
  const [recipeDetails, setRecipeDetails] = useState({
    foodName: "",
    madeByCreator: "",
    time: "",
    difficulty: "medium",
    ingredients: [],
    instructions: [],
    category: "",
    image: "",
  });

  return (
    <form className="grid min-h-dvh gap-4 bg-bg p-6 md:h-dvh md:min-h-screen md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:p-7">
      <AddRecipeImage />

      <section className="flex h-full scrollbar-none flex-col gap-4 rounded-xl md:overflow-y-scroll lg:col-span-2 lg:gap-6">
        <AddRecipeInfo
          recipeDetails={recipeDetails}
          setRecipeDetails={setRecipeDetails}
        />

        <AddRecipePrep
          recipeDetails={recipeDetails}
          setRecipeDetails={setRecipeDetails}
        />
      </section>

      <button className="col-span-1 flex max-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent/85 active:scale-[0.98] md:col-span-2 lg:col-span-3">
        {add}
        <span>Add Recipe</span>
      </button>
    </form>
  );
}
