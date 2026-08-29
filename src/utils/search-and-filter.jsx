import SearchBar from "./search-bar";
import TagFilter from "./tag-filter";

export default function SearchAndFilter({ data, setRecipesToFilter }) {
  return (
    <section className="flex flex-col items-center justify-between gap-3 p-4 sm:h-18 sm:flex-row sm:gap-4">
      <SearchBar setRecipesToSearch={setRecipesToFilter} data={data} />

      <TagFilter setRecipesToFilter={setRecipesToFilter} data={data} />
    </section>
  );
}
