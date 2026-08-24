export default function AddRecipeOverview() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="time" className="text-sm font-semibold text-slate-700">
          Time (minutes)
        </label>
        <input
          type="number"
          id="time"
          placeholder="Preparation time in minutes"
          className="add-recipe-number-input"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <span className="text-sm font-semibold text-slate-700">Category</span>

        <div className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-2 2xl:grid-cols-4">
          {/* Breakfast */}
          <label htmlFor="breakfast" className="difficulty-label">
            <input
              type="radio"
              id="breakfast"
              value="breakfast"
              name="category"
              className="h-4 w-4 cursor-pointer accent-accent"
            />
            <span>Breakfast</span>
          </label>

          {/* Main */}
          <label htmlFor="main" className="difficulty-label">
            <input
              type="radio"
              id="main"
              value="main"
              name="category"
              className="h-4 w-4 cursor-pointer accent-accent"
            />
            <span>Main</span>
          </label>

          {/* Desserts */}
          <label htmlFor="desserts" className="difficulty-label">
            <input
              type="radio"
              id="desserts"
              value="desserts"
              name="category"
              className="h-4 w-4 cursor-pointer accent-accent"
            />
            <span>Desserts</span>
          </label>

          {/* Drinks */}
          <label htmlFor="drinks" className="difficulty-label">
            <input
              type="radio"
              id="drinks"
              value="drinks"
              name="category"
              className="h-4 w-4 cursor-pointer accent-accent"
            />
            <span>Drinks</span>
          </label>
        </div>
      </div>
    </div>
  );
}
