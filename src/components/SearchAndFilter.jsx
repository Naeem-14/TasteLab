import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import TagFilter from "./TagFilter";

export default function SearchAndFilter({ data, setRecipesToFilter }) {
  const [filter, setFilter] = useState({ search: "", category: "" });

  useEffect(() => {
    setRecipesToFilter(
      data.filter(
        (recipe) =>
          (recipe.foodName
            .toLowerCase()
            .includes(filter.search.toLowerCase()) ||
            recipe.madeByCreator
              .toLocaleLowerCase()
              .includes(filter.search.toLowerCase())) &&
          recipe.category.includes(filter.category),
      ),
    );
  }, [filter, data, setRecipesToFilter]);

  return (
    <section className="flex flex-col items-center justify-between gap-3 p-4 sm:h-18 sm:flex-row sm:gap-4">
      <SearchBar filter={filter} setFilter={setFilter} />

      <TagFilter filter={filter} setFilter={setFilter} />
    </section>
  );
}
