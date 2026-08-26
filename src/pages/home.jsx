import { useEffect } from "react";

import Header from "../global/header";
import Sidebar from "../global/sidebar";
import RenderRecipes from "../components/home/render-recipes";
import SearchAndFilter from "../components/home/search-and-filter";

export default function Home({
  recipes,
  setRecipes,
  filteredRecipes,
  setFilteredRecipes,
}) {
  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Header />
      <Sidebar />
      <main className="col-span-3 flex flex-col bg-bg sm:col-span-2 lg:col-span-3 xl:col-span-4">
        <SearchAndFilter
          recipes={recipes}
          setFilteredRecipes={setFilteredRecipes}
        />
        <RenderRecipes
          filteredRecipes={filteredRecipes}
          setFilteredRecipes={setFilteredRecipes}
        />
      </main>
    </div>
  );
}
