import recipes from "../../data/data";
import RecipeOverview from "./RecipeOverview";
import RecipeInstrutions from "./RecipeInstructions";

const recipe = recipes[14];

export default function Recipe() {
  return (
    <main className="box-border flex max-h-screen flex-col gap-6 bg-bg p-4 pb-7 md:grid md:h-screen md:max-h-screen md:grid-cols-2 md:overflow-hidden md:p-6 md:pb-7 lg:grid-cols-5 lg:gap-8 lg:p-8 lg:pb-10">
      {/* Left Column: Image + Overlay */}
      <RecipeOverview recipe={recipe} />

      {/* Right Column: Recipe Main Content */}
      <RecipeInstrutions recipe={recipe} />
    </main>
  );
}
