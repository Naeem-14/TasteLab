import { useEffect } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RenderRecipes from "../components/RenderRecipes";
import SearchAndFilter from "../components/SearchAndFilter";
import data from "../data/data";

export default function Home({ recipes, setRecipes, isLoggedIn, user }) {
  useEffect(() => {
    setRecipes(recipes);
  }, [recipes, setRecipes]);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Header user={user} isLoggedIn={isLoggedIn} />
      <Sidebar user={user} isLoggedIn={isLoggedIn} />
      <main className="col-span-3 flex h-[calc(100vh-48px)] flex-col bg-bg sm:col-span-2 lg:col-span-3 xl:col-span-4">
        <SearchAndFilter setRecipesToFilter={setRecipes} data={data} />
        <section className="flex-1 scrollbar-none overflow-y-auto px-4 pt-2">
          <RenderRecipes
            recipesToRender={recipes}
            setRecipesToRender={setRecipes}
          />
        </section>
      </main>
    </div>
  );
}
