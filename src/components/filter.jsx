import { search } from "./icons";

export default function SearchAndFilter() {
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
        />
      </div>

      <div className="flex w-full scrollbar-none items-center gap-1.5 overflow-x-auto pb-1 sm:w-auto sm:pb-0">
        <button className="tags-active-button">All</button>
        <button className="tags-button">Breakfast</button>
        <button className="tags-button">Main</button>
        <button className="tags-button">Desserts</button>
        <button className="tags-button">Drinks</button>
      </div>
    </section>
  );
}
