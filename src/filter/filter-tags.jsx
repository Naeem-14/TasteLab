import { useState } from "react";
import tags from "./filter-page-data";
import { source, category, difficulty, clock, search } from "../data/icons";

export default function FilterTags() {
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
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
      {/* Search Bar */}
      <div className="mx-auto flex w-full items-center gap-2.5 rounded-full border border-slate-300 bg-white px-3 py-2 transition-all focus-within:border-slate-500 focus-within:ring-2 focus-within:ring-slate-200 lg:col-span-2 lg:max-w-1/2">
        <span className="flex shrink-0 items-center justify-center text-slate-400">
          {search}
        </span>
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search items"
          className="w-full bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none"
        />
      </div>

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
