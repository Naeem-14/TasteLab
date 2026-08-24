export default function AddRecipeInstructions() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <h2 className="text-base font-semibold text-slate-800">Instructions</h2>
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
            Sift together flour, baking powder, salt, and sugar in a large bowl.
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
  );
}
