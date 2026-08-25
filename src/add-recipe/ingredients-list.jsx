export default function IngredienstList({ recipeDetails, setRecipeDetails }) {
  function removeIngredient(indexToRemove) {
    setRecipeDetails({
      ...recipeDetails,
      ingredients: recipeDetails.ingredients.filter(
        (_, index) => index !== indexToRemove,
      ),
    });
  }

  return (
    <ul className="mt-1 flex flex-col gap-2">
      {recipeDetails.ingredients.map((ingredient, index) => (
        <li
          className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-3.5 py-2 text-sm text-slate-700"
          key={index}
        >
          <span>
            <strong className="mr-2 font-semibold text-slate-900">
              {ingredient.quantity} {ingredient.unit}
            </strong>
            {ingredient.name}
          </span>
          <button
            className="text-slate-400 transition-colors hover:text-red-500"
            title="Remove ingredient"
            type="button"
            onClick={() => removeIngredient(index)}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}
