import Header from "../header";
import Sidebar from "../sidebar";
import Filtering from "./filter/filtering";
import FilterPageBrowse from "./filter/filter-browse";

export default function Filter({
  recipes,
  filteredRecipes,
  setFilteredRecipes,
  addFavorite,
}) {
  return (
    <>
      <div className="grid h-dvh grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Header />
        <Sidebar />
        <main className="col-span-3 flex scrollbar-thumb-dark flex-col gap-3 overflow-y-auto bg-bg p-4 sm:col-span-2 lg:col-span-3 xl:col-span-4">
          <Filtering />

          <FilterPageBrowse
            filteredRecipes={filteredRecipes}
            addFavorite={addFavorite}
          />
        </main>
      </div>
    </>
  );
}

// {
//   tags.map((tag) => (
//     <button
//       key={tag}
//       className={activeTag === tag ? "tags-active-button" : "tags-button"}
//       onClick={() => {
//         setActiveTag(tag);
//         filterRecipes(tag);
//       }}
//     >
//       {tag}
//     </button>
//   ));
// }
