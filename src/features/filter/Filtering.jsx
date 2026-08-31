import { useEffect, useState } from "react";

import tags from "./FilterPageData";
import SearchFilter from "./FilterPageSearch";
import FilterButtons from "./FilterButtons";
import filterRecipes from "./FilterRecipes";

export default function Filtering({ setRecipesToFilter }) {
  const [activeTags, setActiveTags] = useState({
    source: "",
    category: "",
    difficulty: "",
    duration: "",
    search: "",
  });

  useEffect(() => {
    const filtered = filterRecipes(activeTags);
    setRecipesToFilter(filtered);
  }, [activeTags, setRecipesToFilter]);

  function toggleButton(categoryKey, selectedButton) {
    setActiveTags({ ...activeTags, [categoryKey]: selectedButton });
  }

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-2 p-4 lg:grid-cols-2 lg:gap-3">
      {/* Search Bar */}
      <SearchFilter activeTags={activeTags} setActiveTags={setActiveTags} />

      {tags.map((tag, index) => (
        <div
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-xs"
          key={index}
        >
          <div className="flex shrink-0 items-center gap-1.5 border-r border-slate-200 pr-3 pl-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
            <span className="scale-90">{tag.logo}</span>
            <span>{tag.text}</span>
          </div>
          <FilterButtons
            tag={tag}
            toggleButton={toggleButton}
            activeTags={activeTags}
          />
        </div>
      ))}
    </section>
  );
}
