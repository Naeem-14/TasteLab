export default function AddRecipe() {
  return (
    <form className="grid grid-cols-1 gap-4 bg-bg p-8 lg:grid-cols-3">
      <section className="col-span-1">
        <label
          htmlFor="file-upload"
          className="group flex aspect-video w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-400 bg-white p-4 text-center text-slate-500 transition-colors duration-200 hover:bg-slate-200 hover:text-slate-700"
        >
          <svg
            className="mb-2 h-8 w-8 text-slate-400 transition-transform duration-200 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>

          <span className="text-sm font-semibold">
            Click to upload or drag and drop
          </span>
          <span className="mt-1 text-xs">PNG, JPG</span>

          <input id="file-upload" type="file" className="sr-only" />
        </label>
      </section>

      <section className="col-span-2 overflow-y-scroll">
        <section className="flex-col gap-6 rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-3">
            {/* Food Name */}
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
              />
            </div>

            {/* Creator Name */}
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
              />
            </div>
          </div>

          <div className="col-span-2 gap-3">
            {/* Time */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="time"
                className="text-sm font-semibold text-slate-700"
              >
                Time (minutes)
              </label>
              <input
                type="number"
                id="time"
                placeholder="Preparation time in minutes"
                className="add-recipe-number-input"
              />
            </div>

            {/* Category Radio Group */}
            <div className="flex flex-col gap-2.5">
              <span className="text-sm font-semibold text-slate-700">
                Category
              </span>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
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

          {/* Difficulty Range Slider */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="difficulty"
              className="text-sm font-semibold text-slate-700"
            >
              Difficulty
            </label>
            <input
              type="range"
              min={0}
              max={2}
              id="difficulty"
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-accent"
            />
            <div className="flex justify-between px-0.5 text-xs font-medium text-slate-500">
              <span>Easy</span>
              <span>Medium</span>
              <span>Hard</span>
            </div>
          </div>
        </section>

        <section className="flex max-w-lg flex-col gap-8 rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          {/* Ingredients Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h2 className="text-base font-semibold text-slate-800">
                Ingredients
              </h2>
              <span className="text-xs text-slate-400">
                Add amounts & units
              </span>
            </div>

            {/* Ingredient Input Controls */}
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-12 gap-2">
                {/* Ingredient Name */}
                <input
                  type="text"
                  placeholder="Ingredient name (e.g. Flour)"
                  className="col-span-6 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 transition duration-150 outline-none placeholder:text-slate-400 hover:border-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20"
                />

                {/* Amount */}
                <input
                  type="number"
                  placeholder="Qty"
                  min="0"
                  step="any"
                  className="col-span-3 [appearance:textfield] rounded-lg border border-slate-300 px-3 py-2 text-center text-sm text-slate-800 transition duration-150 outline-none placeholder:text-slate-400 hover:border-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />

                {/* Unit Select */}
                <select
                  defaultValue="cup"
                  className="col-span-3 cursor-pointer rounded-lg border border-slate-300 bg-white px-2 py-2 text-sm text-slate-700 transition duration-150 outline-none hover:border-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20"
                >
                  <option value="tbsp">tbsp</option>
                  <option value="tsp">tsp</option>
                  <option value="slice">slice</option>
                  <option value="piece">piece</option>
                  <option value="g">g</option>
                  <option value="kg">kg</option>
                  <option value="cup">cup</option>
                  <option value="ml">ml</option>
                  <option value="liter">liter</option>
                </select>
              </div>

              <button className="flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-accent/60 bg-accent/5 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/10 active:scale-[0.99]">
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
            <ul className="mt-1 flex flex-col gap-2">
              <li className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-3.5 py-2 text-sm text-slate-700">
                <span>
                  <strong className="font-semibold text-slate-900">
                    2 cups
                  </strong>{" "}
                  All-purpose flour
                </span>
                <button
                  className="text-slate-400 transition-colors hover:text-red-500"
                  title="Remove ingredient"
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
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h2 className="text-base font-semibold text-slate-800">
                Instructions
              </h2>
              <span className="text-xs text-slate-400">Step-by-step guide</span>
            </div>

            <div className="flex flex-col gap-2">
              <textarea
                rows={2}
                placeholder="Add a step (e.g. Sift together flour and baking powder...)"
                className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 transition duration-150 outline-none placeholder:text-slate-400 hover:border-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20"
              />

              <button className="rounded-lg bg-slate-800 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800/95 active:scale-[0.98]">
                Add Instruction Step
              </button>
            </div>

            {/* Instructions Ordered List */}
            <ol className="flex flex-col gap-2.5">
              <li className="group flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50/50 p-3.5 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-white hover:shadow-xs">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  1
                </span>
                <p className="flex-1 leading-relaxed">
                  Sift together flour, baking powder, salt, and sugar in a large
                  bowl.
                </p>
                <button
                  className="text-slate-400 opacity-0 transition-all group-hover:opacity-100 hover:text-red-500"
                  title="Delete step"
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </li>

              <li className="group flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50/50 p-3.5 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-white hover:shadow-xs">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  2
                </span>
                <p className="flex-1 leading-relaxed">
                  Whisk in milk, egg, and melted butter until smooth.
                </p>
                <button
                  className="text-slate-400 opacity-0 transition-all group-hover:opacity-100 hover:text-red-500"
                  title="Delete step"
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </li>
            </ol>
          </div>
        </section>

        <button className="rounded-lg bg-accent py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent/85 active:scale-[0.98]">
          Add Recipe
        </button>
      </section>
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
