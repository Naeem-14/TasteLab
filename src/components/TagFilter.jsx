import { useState } from "react";

export default function TagFilter({ filter, setFilter }) {
  const tags = [
    { text: "All", value: "" },
    { text: "Breakfast", value: "Breakfast" },
    { text: "Main", value: "Main" },
    { text: "Desserts", value: "Desserts" },
    { text: "Drinks", value: "Drinks" },
  ];
  const [activeTag, setActiveTag] = useState("All");

  return (
    <div className="flex w-full scrollbar-none items-center gap-1.5 overflow-x-auto rounded-full pb-1 sm:w-auto sm:pb-0">
      {tags.map((tag) => (
        <button
          key={tag.text}
          value={tag.value}
          className={
            activeTag === tag.text ? "tags-active-button" : "tags-button"
          }
          onClick={(e) => {
            setActiveTag(tag.text);
            setFilter({ ...filter, category: e.target.value });
          }}
        >
          {tag.text}
        </button>
      ))}
    </div>
  );
}
