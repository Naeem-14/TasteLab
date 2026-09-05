import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Filtering from "../features/filter/Filtering";
import RenderRecipes from "../components/RenderRecipes";
import data from "../data/data";

export default function OwnRecipes({ recipes, setRecipes, user, isLoggedIn }) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Header user={user} isLoggedIn={isLoggedIn} />
      <Sidebar user={user} isLoggedIn={isLoggedIn} />
      <main className="col-span-3 flex h-[calc(100vh-48px)] scrollbar-none flex-col overflow-y-auto bg-bg sm:col-span-2 lg:col-span-3 xl:col-span-4">
        <Filtering setRecipesToFilter={setRecipes} data={data} />

        <section className="flex-1 px-4 pt-2">
          <RenderRecipes
            recipesToRender={recipes}
            setRecipesToRender={setRecipes}
          />
        </section>
      </main>
    </div>
  );
}
