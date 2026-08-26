import { useState } from "react";
import IngredientsList from "./ingredients-list";

export default function AddRecipeIngredients({
  recipeDetails,
  setRecipeDetails,
}) {
  //
  const [currentIngredient, setCurrentIngredient] = useState({
    name: "",
    quantity: "",
    unit: "",
  });

  function addIngredientInRecipe() {
    setRecipeDetails({
      ...recipeDetails,
      ingredients: [
        ...recipeDetails.ingredients,
        {
          ...currentIngredient,
        },
      ],
    });
    setCurrentIngredient({
      name: "",
      quantity: "",
      unit: "none",
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <h2 className="text-base font-semibold text-slate-800">Ingredients</h2>
        <span className="text-xs text-slate-400">Add amounts & units</span>
      </div>

      {/* Ingredient Input Controls */}
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-12 gap-2">
          {/* Ingredient Name */}
          <input
            type="text"
            value={currentIngredient.name}
            placeholder="Ingredient name (e.g. Flour)"
            className="col-span-6 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 transition duration-150 outline-none placeholder:text-slate-400 hover:border-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20"
            onChange={(e) =>
              setCurrentIngredient({
                ...currentIngredient,
                name: e.target.value,
              })
            }
          />

          {/* Amount */}
          <input
            type="number"
            value={currentIngredient.quantity}
            placeholder="Qty"
            min="0"
            step="any"
            className="col-span-3 [appearance:textfield] rounded-lg border border-slate-300 px-3 py-2 text-center text-sm text-slate-800 transition duration-150 outline-none placeholder:text-slate-400 hover:border-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            onChange={(e) =>
              setCurrentIngredient({
                ...currentIngredient,
                quantity: e.target.value,
              })
            }
          />

          {/* Unit Select */}
          <select
            value={currentIngredient.unit}

            className="col-span-3 cursor-pointer rounded-lg border border-slate-300 bg-white px-2 py-2 text-sm text-slate-700 transition duration-150 outline-none hover:border-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20"
            onChange={(e) => {
              setCurrentIngredient({
                ...currentIngredient,
                unit: e.target.value,
              });
            }}
          >
            <option value="">none</option>
            <option value="cup">cup</option>
            <option value="ml">ml</option>
            <option value="liter">liter</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="tbsp">tbsp</option>
            <option value="tsp">tsp</option>
            <option value="piece">piece</option>
            <option value="slice">slice</option>
          </select>
        </div>

        <button
          className="flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-accent/60 bg-accent/5 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/10 active:scale-[0.99]"
          onClick={addIngredientInRecipe}
          type="button"
          disabled={currentIngredient.name.length < 1}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Ingredient
        </button>
      </div>

      {/* Ingredients List (Preview) */}
      <IngredientsList
        recipeDetails={recipeDetails}
        setRecipeDetails={setRecipeDetails}
      />
    </div>
  );
}
