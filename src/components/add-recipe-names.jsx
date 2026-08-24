export default function AddRecipeNames({ setRecipeDetails, recipeDetails }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="foodName"
          className="text-sm font-semibold text-slate-700"
        >
          Food Name
        </label>
        <input
          type="text"
          id="foodName"
          placeholder="e.g., Spicy Pepperoni Pizza"
          className="add-recipe-text-input"
          onChange={(e) =>
            setRecipeDetails({ ...recipeDetails, foodName: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="creatorName"
          className="text-sm font-semibold text-slate-700"
        >
          Creator Name
        </label>
        <input
          type="text"
          id="creatorName"
          placeholder="e.g., Gordon Ramsay"
          className="add-recipe-text-input"
          onChange={(e) =>
            setRecipeDetails({
              ...recipeDetails,
              madeByCreator: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}
