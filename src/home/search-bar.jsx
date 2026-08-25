import { search } from "../data/icons";

export default function SearchBar({ recipes, setFilteredRecipes }) {
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
