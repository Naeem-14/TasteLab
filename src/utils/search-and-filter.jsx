import { useState } from "react";
import SearchBar from "./search-bar";
import TagFilter from "./tag-filter";

export default function SearchAndFilter({ data, setRecipesToFilter }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  setRecipesToFilter(
    data.filter(
      (recipe) =>
        (recipe.foodName.toLowerCase().includes(search) ||
          recipe.madeByCreator.toLocaleLowerCase().includes(search)) &&
        recipe.category.includes(category),
    ),
  );

  return (
    <section className="flex flex-col items-center justify-between gap-3 p-4 sm:h-18 sm:flex-row sm:gap-4">
      <SearchBar setSearch={setSearch} />

      <TagFilter setCategory={setCategory} />
    </section>
  );
}
