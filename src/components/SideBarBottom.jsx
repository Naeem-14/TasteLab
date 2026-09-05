import { pfp, logOut } from "../data/icons";

export default function SidebarBottom({ isLoggedIn, user }) {
  return (
    <section className="border-t border-slate-200/80 pt-4">
      {isLoggedIn ? (
        <div className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-slate-50">
          {/* Avatar Icon */}
          <div className="flex shrink-0 scale-135 items-center justify-center text-slate-600">
            {pfp}
          </div>

          {/* User Details */}
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-slate-800 capitalize">
              {user?.userName || "User"}
            </p>
            <p className="truncate text-xs text-slate-400">
              {user?.email || "No email provided"}
            </p>
          </div>

          {/* Logout Button */}
          <button
            type="button"
            title="Log Out"
            className="cursor-pointer rounded-lg p-1.5 text-slate-400 transition-all hover:bg-rose-50 hover:text-rose-600 focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
          >
            {logOut}
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {/* Primary Action */}
          <button
            type="button"
            className="flex-1 cursor-pointer rounded-lg bg-accent px-3 py-2 text-center text-sm font-semibold text-white shadow-xs transition-all hover:bg-accent/85 active:scale-[0.98]"
          >
            Sign Up
          </button>

          {/* Secondary Action */}
          <button
            type="button"
            className="flex-1 cursor-pointer rounded-lg border border-slate-200 bg-slate-200 px-3 py-2 text-center text-sm font-semibold text-slate-700 shadow-2xs transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98]"
          >
            Log In
          </button>
        </div>
      )}
    </section>
  );
}
