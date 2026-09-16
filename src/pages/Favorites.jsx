import { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RenderRecipes from "../components/RenderRecipes";
import SearchAndFilter from "../components/SearchAndFilter";
import recipes from "../data/data";

export default function Favorites({ user, isLoggedIn }) {
  const [favoriteRecipes, setFavoriteRecipes] = useState(
    recipes.filter((recipe) => recipe.isFavorite),
  );
  const data = recipes.filter((recipe) => recipe.isFavorite);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Header user={user} isLoggedIn={isLoggedIn} />
      <Sidebar user={user} isLoggedIn={isLoggedIn} />
      <main className="col-span-3 flex h-[calc(100vh-48px)] flex-col bg-bg sm:col-span-2 lg:col-span-3 xl:col-span-4">
        <SearchAndFilter setRecipesToFilter={setFavoriteRecipes} data={data} />

        <section className="flex-1 scrollbar-none overflow-y-auto px-4 pt-2">
          <RenderRecipes
            recipesToRender={favoriteRecipes}
            setRecipesToRender={setFavoriteRecipes}
          />
        </section>
      </main>
    </div>
  );
}
