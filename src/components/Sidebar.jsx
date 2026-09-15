import { home, cooking101, own, favorites, add, filter } from "../data/icons";
import SidebarBottom from "./SideBarBottom";
import { NavLink } from "react-router";

export default function Sidebar({ isLoggedIn, user }) {
  function linkStyle({ isActive }) {
    return isActive
      ? "flex items-center gap-3 rounded-lg bg-accent/20 px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors"
      : "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-slate-200/60 hover:text-slate-500";
  }

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
            <NavLink to="/" className={linkStyle}>
              {home}
              <span>Home</span>
            </NavLink>

            <NavLink to="/filter" className={linkStyle}>
              {filter}
              <span>Filter</span>
            </NavLink>

            <NavLink to="/cooking101" className={linkStyle}>
              {cooking101}
              <span>Cooking 101</span>
            </NavLink>
          </nav>
        </div>

        {/* My kitchen */}
        <div>
          <p className="mb-2 px-3 text-xs font-semibold tracking-wider text-slate-600 uppercase">
            My Kitchen
          </p>
          <nav className="space-y-1">
            <NavLink to="/own-recipes" className={linkStyle}>
              {own}
              <span>Own Recipes</span>
            </NavLink>

            <NavLink to="/favorites" className={linkStyle}>
              {favorites}
              <span>Favorites</span>
            </NavLink>
          </nav>
        </div>

        {/* Add Recipe Button */}
        <div>
          <NavLink
            to="/add-recipe"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent/85 active:scale-[0.98]"
          >
            {add}
            <span>Add Recipe</span>
          </NavLink>
        </div>
      </section>

      {/* Bottom Section Profile & Logout */}
      <SidebarBottom isLoggedIn={isLoggedIn} user={user} />
    </aside>
  );
}
