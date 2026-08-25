import SearchBar from "./search-bar";
import TagFilter from "./tag-filter";

export default function SearchAndFilter({ recipes, setFilteredRecipes }) {
  return (
    <section className="flex h-18 flex-col items-center justify-between gap-4 p-4 sm:flex-row">
      <SearchBar recipes={recipes} setFilteredRecipes={setFilteredRecipes} />

      <TagFilter recipes={recipes} setFilteredRecipes={setFilteredRecipes} />
    </section>
  );
}
