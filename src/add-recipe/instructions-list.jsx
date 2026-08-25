export default function InstructionsList({ recipeDetails, setRecipeDetails }) {
  function removeInstruction(indexToRemove) {
    setRecipeDetails({
      ...recipeDetails,
      instructions: recipeDetails.instructions.filter(
        (_, index) => index !== indexToRemove,
      ),
    });
  }

  return (
    <ol className="flex flex-col gap-2.5">
      {recipeDetails.instructions.map((instruction, index) => (
        <li
          className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50/50 p-3.5 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-white hover:shadow-xs"
          key={index}
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
            {index + 1}
          </span>
          <p className="flex-1 leading-relaxed">{instruction}</p>
          <button
            className="text-slate-400 transition-all hover:text-red-500"
            title="Delete step"
            type="button"
            onClick={() => removeInstruction(index)}
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
      ))}
    </ol>
  );
}
