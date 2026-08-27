import { useEffect } from "react";

import Header from "../utils/header";
import Sidebar from "../utils/sidebar";
import RenderRecipes from "../utils/render-recipes";
import SearchAndFilter from "../components/home/search-and-filter";

export default function Home({ recipes, filteredRecipes, setFilteredRecipes }) {
  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Header />
      <Sidebar />
      <main className="col-span-3 flex h-[calc(100vh-48px)] flex-col bg-bg sm:col-span-2 lg:col-span-3 xl:col-span-4">
        <SearchAndFilter
          recipes={recipes}
          setFilteredRecipes={setFilteredRecipes}
        />
        <section className="flex-1 scrollbar-none overflow-y-auto px-4 pt-2">
          <RenderRecipes
            filteredRecipes={filteredRecipes}
            setFilteredRecipes={setFilteredRecipes}
          />
        </section>
      </main>
    </div>
  );
}
