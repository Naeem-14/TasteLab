import { menu, logo, user } from "./data/icons";

export default function Header() {
  return (
    <header className="col-span-3 flex h-12 w-full items-center bg-dark px-4 text-light lg:col-span-4 xl:col-span-5">
      {/* menu */}
      <div className="flex flex-1 justify-start">
        <div>{menu}</div>
      </div>
      {/* logo */}
      <div className="flex items-center gap-1.5">
        <div className="text-accent">{logo}</div>
        <div className="font-sans text-xl font-bold">
          Taste<span className="text-accent">Lab</span>
        </div>
      </div>

      {/* user profile */}
      <div className="flex flex-1 items-center justify-end">
        <button
          type="button"
          className="flex items-center gap-4 rounded-full border border-emerald-800/80 bg-emerald-900/40 py-1 pr-3 pl-1 transition-colors hover:border-emerald-700 hover:bg-emerald-900/70"
        >
          <div className="-mr-2 flex h-6 w-6 items-center justify-center rounded-full text-accent">
            {user}
          </div>
          <span className="hidden font-light text-slate-200 sm:inline">
            User
          </span>
        </button>
      </div>
    </header>
  );
}
