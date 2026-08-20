import {
  home,
  about,
  contact,
  own,
  favorites,
  add,
  user,
  logOut,
} from "./icons";

export default function Sidebar() {
  return (
    <aside className="hidden sm:flex h-[calc(100vh-48px)] flex-col justify-between  bg-light px-4 py-6 text-slate-400 col-span-1">
      {/* Navigation Sections */}
      <section className="space-y-6">
        {/* Main Menu */}
        <div>
          <p className="mb-2 px-3 text-xs font-semibold uppercase text-slate-600 tracking-wider ">
            Menu
          </p>
          <nav className="space-y-1">
            <a href="#" className="sidebar-active-tab">
              {home}
              <span>Home</span>
            </a>

            <a href="#" className="sidebar-tab">
              {about}
              <span>About</span>
            </a>

            <a href="#" className="sidebar-tab">
              {contact}
              <span>Contact</span>
            </a>
          </nav>
        </div>

        <div>
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
            My Kitchen
          </p>
          <nav className="space-y-1">
            <a href="#" className="sidebar-tab">
              {own}
              <span>Own Recipes</span>
            </a>

            <a href="#" className="sidebar-tab">
              {favorites}
              <span>Favorites</span>
            </a>
          </nav>
        </div>

        {/* Primary Action Button */}
        <div>
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent/85 active:scale-[0.98]"
          >
            {add}
            <span>Add Recipe</span>
          </a>
        </div>
      </section>

      {/* Footer Profile & Logout */}
      <section className="border-t border-slate-200/80 pt-4">
        <div className="flex items-center gap-3 rounded-lg p-2">
          {/* Avatar Icon */}
          <div className="flex scale-125 shrink-0 items-center justify-center">
            {user}
          </div>

          {/* User Details */}
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-slate-800">
              User
            </p>
            <p className="truncate text-xs text-slate-400">User@gmail.com</p>
          </div>

          {/* Logout Button */}
          <button
            title="Log Out"
            className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
          >
            {logOut}
          </button>
        </div>
      </section>
    </aside>
  );
}
