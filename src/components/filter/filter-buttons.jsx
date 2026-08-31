export default function FilterButtons({ tag, toggleButton, activeTags }) {
  return (
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
            {button === "" ? "all" : button}
          </button>
        );
      })}
    </div>
  );
}
