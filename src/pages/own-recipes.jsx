import Header from "../utils/header";
import Sidebar from "../utils/sidebar";
import RenderRecipes from "../utils/render-recipes";
import SearchAndFilter from "../utils/search-and-filter";
import { useState } from "react";
import recipes from "../data/data";

export default function OwnRecipes() {
  const [ownRecipes, setOwnRecipes] = useState(
    recipes.filter((recipe) => recipe.origin === "own"),
  );
  const data = recipes.filter((recipe) => recipe.origin === "own");

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Header />
      <Sidebar />
      <main className="col-span-3 flex h-[calc(100vh-48px)] flex-col bg-bg sm:col-span-2 lg:col-span-3 xl:col-span-4">
        <SearchAndFilter setRecipesToFilter={setOwnRecipes} data={data} />

        <section className="flex-1 scrollbar-none overflow-y-auto px-4 pt-2">
          <RenderRecipes
            recipesToRender={ownRecipes}
            setRecipesToRender={setOwnRecipes}
          />
        </section>
      </main>
    </div>
  );
}
