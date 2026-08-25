import { useState } from "react";
import RecipeImage from "./import-image";
import RecipeInfo from "./recipe-info";
import RecipePrep from "./recipe-prep";
import { add } from "../data/icons";

export default function AddRecipe({ recipes, setRecipes }) {
  const [recipeDetails, setRecipeDetails] = useState({
    foodName: "",
    madeByCreator: "",
    time: "",
    difficulty: "medium",
    image: "",
    category: "",
    origin: "own",
    ingredients: [
      { quantity: 2, unit: "slices", name: "ingredient 01" },
      { quantity: 20, unit: "ml", name: "ingredient 02" },
    ],
    instructions: ["Step 01", "Step 02", "Step 03"],
  });

  function addRecipeToData() {
    setRecipes([
      ...recipes,
      {
        ...recipeDetails,
        id: crypto.randomUUID(),
        isFavorite: false,
      },
    ]);
  }

  return (
    <form className="grid min-h-dvh gap-4 bg-bg p-6 md:h-dvh md:min-h-screen md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:p-7">
      <RecipeImage
        recipeDetails={recipeDetails}
        setRecipeDetails={setRecipeDetails}
      />

      {/* recipe inputs */}
      <section className="flex h-full scrollbar-none flex-col gap-4 rounded-xl md:overflow-y-scroll lg:col-span-2 lg:gap-6">
        <RecipeInfo
          recipeDetails={recipeDetails}
          setRecipeDetails={setRecipeDetails}
        />

        <RecipePrep
          recipeDetails={recipeDetails}
          setRecipeDetails={setRecipeDetails}
        />
      </section>

      {/* add button */}
      <button
        className="col-span-1 flex max-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent/85 active:scale-[0.98] md:col-span-2 lg:col-span-3"
        type="button"
        onClick={addRecipeToData}
      >
        {add}
        <span>Add Recipe</span>
      </button>
    </form>
  );
}
