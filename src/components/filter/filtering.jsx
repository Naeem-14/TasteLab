import { useState } from "react";
import tags from "./filter-page-data";
import SearchFilter from "./filter-page-search";

export default function Filtering({ recipes, setFilteredRecipes }) {
  const [activeTags, setActiveTags] = useState({
    source: "All",
    category: "All",
    difficulty: "All",
    duration: "All",
  });

  function toggleButton(categoryKey, selectedButton) {
    setActiveTags({ ...activeTags, [categoryKey]: selectedButton });
  }

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-2 p-4 lg:grid-cols-2 lg:gap-3">
      {/* Search Bar */}
      <SearchFilter recipes={recipes} setFilteredRecipes={setFilteredRecipes} />

      {tags.map((tag, index) => (
        <div
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-xs"
          key={index}
        >
          <div className="flex shrink-0 items-center gap-1.5 border-r border-slate-200 pr-3 pl-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
            <span className="scale-90">{tag.logo}</span>
            <span>{tag.text}</span>
          </div>
          <div className="flex scrollbar-none items-center gap-1.5 overflow-x-auto rounded-full py-0.5 pr-2">
            {tag.buttons.map((button, index) => {
              const isActive =
                activeTags[tag.text].toLowerCase() === button.toLowerCase();

              return (
                <button
                  key={index}
                  className={
                    isActive
                      ? "filter-button-active capitalize"
                      : "filter-button capitalize"
                  }
                  onClick={() => toggleButton(tag.text, button)}
                >
                  {button}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
