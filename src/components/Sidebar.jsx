import { home, cooking101, own, favorites, add, filter } from "../data/icons";
import SidebarBottom from "./SideBarBottom";

export default function Sidebar({ isLoggedIn, user }) {
  return (
    <aside className="col-span-1 hidden h-[calc(100vh-48px)] flex-col justify-between bg-light px-4 py-6 text-slate-400 sm:flex">
      {/* Navigation Sections */}
      <section className="space-y-6">
        {/* Main Menu */}
        <div>
          <p className="mb-2 px-3 text-xs font-semibold tracking-wider text-slate-600 uppercase">
            Menu
          </p>
          <nav className="space-y-1">
            <a href="#" className="sidebar-active-tab">
              {home}
              <span>Home</span>
            </a>

            <a href="#" className="sidebar-tab">
              {filter}
              <span>Filter</span>
            </a>

            <a href="#" className="sidebar-tab">
              {cooking101}
              <span>Cooking 101</span>
            </a>
          </nav>
        </div>

        {/* My kitchen */}
        <div>
          <p className="mb-2 px-3 text-xs font-semibold tracking-wider text-slate-600 uppercase">
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

        {/* Add Recipe Button */}
        <div>
          <a
            href="#"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent/85 active:scale-[0.98]"
          >
            {add}
            <span>Add Recipe</span>
          </a>
        </div>
      </section>

      {/* Bottom Section Profile & Logout */}
      <SidebarBottom isLoggedIn={isLoggedIn} user={user} />
    </aside>
  );
}
