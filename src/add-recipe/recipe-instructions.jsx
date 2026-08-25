import { useState } from "react";
import InstructionsList from "./instructions-list";

export default function AddRecipeInstructions({
  recipeDetails,
  setRecipeDetails,
}) {
  const [currentInstruction, setCurrentInstruction] = useState("");

  function addInstructionInRecipe() {
    setRecipeDetails({
      ...recipeDetails,
      instructions: [...recipeDetails.instructions, currentInstruction],
    });
    setCurrentInstruction("");
  }

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
          value={currentInstruction}
          onChange={(e) => setCurrentInstruction(e.target.value)}
        />

        <button
          className="rounded-lg bg-slate-800 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800/95 active:scale-[0.98]"
          onClick={addInstructionInRecipe}
          type="button"
          disabled={currentInstruction.length < 1}
        >
          Add Instruction Step
        </button>
      </div>

      {/* Instructions Ordered List */}
      <InstructionsList
        recipeDetails={recipeDetails}
        setRecipeDetails={setRecipeDetails}
      />
    </div>
  );
}
