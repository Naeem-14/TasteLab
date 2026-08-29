import { search } from "../data/icons";

export default function SearchBar({ data, setRecipesToSearch }) {
  function searchRecipes(e) {
    const query = e.target.value;

    if (query === "") {
      setRecipesToSearch(data);
      return;
    }

    setRecipesToSearch(
      data.filter(
        (recipe) =>
          recipe.foodName.toLowerCase().includes(query) ||
          recipe.madeByCreator.toLocaleLowerCase().includes(query),
      ),
    );
  }

  return (
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
  );
}
