import { useState } from "react";

export default function TagFilter({ data, setRecipesToFilter }) {
  const tags = ["All", "Breakfast", "Main", "Desserts", "Drinks"];
  const [activeTag, setActiveTag] = useState("All");

  function filterRecipes(tag) {
    if (tag === "All") {
      setRecipesToFilter(data);
    } else {
      setRecipesToFilter(data.filter((recipe) => recipe.category === tag));
    }
  }

  return (
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
  );
}
