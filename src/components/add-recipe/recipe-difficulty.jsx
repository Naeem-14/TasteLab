export default function AddRecipeDifficulty({
  recipeDetails,
  setRecipeDetails,
}) {
  function addDifficultyLevel(e) {
    const level = e.target.value;

    if (level == 0) {
      setRecipeDetails({ ...recipeDetails, difficulty: "easy" });
    } else if (level == 1) {
      setRecipeDetails({ ...recipeDetails, difficulty: "medium" });
    } else if (level == 2) {
      setRecipeDetails({ ...recipeDetails, difficulty: "hard" });
    }
  }

  return (
    <div className="mt-2 lg:col-span-2 lg:flex lg:justify-center">
      <div className="flex flex-col gap-2 lg:w-1/2">
        <div className="text-sm font-semibold text-slate-700 lg:text-center">
          Difficulty
        </div>
        <input
          type="range"
          min={0}
          max={2}
          id="difficulty"
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-accent"
          onChange={addDifficultyLevel}
        />
        <div className="flex justify-between px-0.5 text-xs font-medium text-slate-500">
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
      </div>
    </div>
  );
}
