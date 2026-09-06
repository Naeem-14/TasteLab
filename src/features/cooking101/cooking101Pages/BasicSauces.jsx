import sauces from "../../../data/saucesData";
import RecipeOverview from "../../recipe/RecipeOverview";
import RecipeInstrutions from "../../recipe/RecipeInstructions";
import BackButton from "../../../components/BackButton";
import { sauceIcon } from "../../../data/icons";

export default function BasicSauces() {
  return (
    <main className="mx-auto p-4 md:p-8">
      <BackButton />
      <h1 className="mb-8 flex items-center justify-center gap-2 font-sans text-5xl font-extrabold text-dark md:text-6xl">
        <span className="mt-2 mr-2 scale-200 text-accent">{sauceIcon}</span>
        <span>Basic</span>
        <span className="text-accent">Sauces</span>
      </h1>

      <div className="columns-1 gap-6 md:columns-2 lg:columns-3 2xl:columns-4">
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
