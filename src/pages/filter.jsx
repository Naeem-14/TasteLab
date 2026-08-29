import Header from "../utils/header";
import Sidebar from "../utils/sidebar";
import Filtering from "../components/filter/filtering";
import RenderRecipes from "../utils/render-recipes";
import data from "../data/data";

export default function OwnRecipes({ recipes, setRecipes }) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Header />
      <Sidebar />
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
