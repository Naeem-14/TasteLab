import SearchBar from "./search-bar";
import TagFilter from "./tag-filter";

export default function SearchAndFilter({ recipes, setFilteredRecipes }) {
  return (
    <section className="flex flex-col items-center justify-between gap-3 p-4 sm:h-18 sm:flex-row sm:gap-4">
      <SearchBar recipes={recipes} setFilteredRecipes={setFilteredRecipes} />

      <TagFilter recipes={recipes} setFilteredRecipes={setFilteredRecipes} />
    </section>
  );
}
