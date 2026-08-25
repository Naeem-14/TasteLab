import { search } from "../data/icons";
import { useState } from "react";

export default function SearchAndFilter({ recipes, setFilteredRecipes }) {
  const [activeTag, setActiveTag] = useState("All");
  const tags = ["All", "Breakfast", "Main", "Desserts", "Drinks"];

  function filterRecipes(tag) {
    if (tag === "All") {
      setFilteredRecipes(recipes);
    } else {
      setFilteredRecipes(recipes.filter((recipe) => recipe.category === tag));
    }
  }

  function searchRecipes(e) {
    const search = e.target.value;

    setFilteredRecipes(
      recipes.filter(
        (recipe) =>
          recipe.foodName.toLowerCase().includes(search) ||
          recipe.madeByCreator.toLocaleLowerCase().includes(search),
      ),
    );
  }

  return (
    <section className="flex h-18 flex-col items-center justify-between gap-4 p-4 sm:flex-row">
      <div className="flex w-full items-center gap-2.5 rounded-full border border-slate-300 bg-white px-3 py-2 transition-all focus-within:border-slate-500 focus-within:ring-2 focus-within:ring-slate-200 sm:max-w-xs">
        <span className="flex shrink-0 items-center justify-center text-slate-400">
          {search}
        </span>
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search items"
          className="w-full bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none"
          onChange={searchRecipes}
        />
      </div>

      <div className="flex w-full scrollbar-none items-center gap-1.5 overflow-x-auto rounded-full pb-1 sm:w-auto sm:pb-0">
        {tags.map((tag) => (
          <button
            key={tag}
            className={activeTag === tag ? "tags-active-button" : "tags-button"}
            onClick={() => {
              setActiveTag(tag);
              filterRecipes(tag);
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}
