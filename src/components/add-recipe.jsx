// import { useState } from "react";
import AddRecipeImage from "./add-recipe-image";
import AddRecipeInfo from "./add-recipe-info";
import AddRecipePrep from "./add-recipe-prep";
import { add } from "./icons";

export default function AddRecipe() {
  // const [recipeDetails, setRecipeDetails] = useState({
  //   foodName: "",
  //   madeByCreator: "",
  //   time: "",
  //   difficulty: "",
  //   ingredients: [],
  //   instructions: [],
  //   category: "",
  //   image: "",
  // });

  // const [currentIngredient, setCurrentIngredient] = useState("");
  // const [currentInstruction, setCurrentInstruction] = useState("");

  return (
    <form className="grid h-dvh min-h-screen gap-4 bg-bg p-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:p-7">
      <AddRecipeImage />

      <section className="flex scrollbar-none flex-col gap-4 rounded-xl md:overflow-y-scroll lg:col-span-2 lg:gap-6">
        <AddRecipeInfo />

        <AddRecipePrep />
      </section>

      <button
        href="#"
        className="flex max-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent/85 active:scale-[0.98] md:col-span-2 lg:col-span-3"
      >
        {add}
        <span>Add Recipe</span>
      </button>
    </form>
  );
}

// food name
// creator name
// prep time
// difficulty
// category
// ingredients
// instructions
