import Header from "../header";
import Sidebar from "../sidebar";
import FilterTags from "./filter-tags";

export default function Filter() {
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Header />
        <Sidebar />
        <main className="col-span-3 flex flex-col bg-bg p-4 sm:col-span-2 lg:col-span-3 xl:col-span-4">
          <FilterTags />
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
