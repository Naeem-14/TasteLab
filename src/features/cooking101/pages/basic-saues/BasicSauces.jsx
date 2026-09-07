import sauces from "./saucesData";
import RecipeOverview from "../../../recipe/RecipeOverview";
import RecipeInstrutions from "../../../recipe/RecipeInstructions";
import BackButton from "../../../../components/BackButton";
import PagesHeader from "../PagesHeader";

export default function KnifeSkills() {
  return (
    <main className="mx-auto p-4 md:p-8">
      <BackButton />

      <PagesHeader
        category="Equipment & Basics"
        title="Basic Sauces"
        description="Master classic mother sauces, smooth emulsification, and versatile pan
          sauces to elevate any dish."
      />

      <div className="mt-10 columns-1 gap-6 md:columns-2 lg:columns-3 2xl:columns-4">
        {sauces.map((sauce) => (
          <article
            className="mb-6 inline-block w-full break-inside-avoid rounded-3xl border border-gray-100 bg-bg p-2 shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-300"
            key={sauce.id}
          >
            <div className="flex flex-col gap-3">
              <RecipeOverview recipe={sauce} page="basicSauces" />
              <RecipeInstrutions recipe={sauce} page="basicSauces" />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
