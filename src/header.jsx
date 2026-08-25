import { menu, logo, user } from "./data/icons";

export default function Header() {
  return (
    <header className="col-span-3 flex h-12 w-full items-center bg-dark px-4 text-light lg:col-span-4 xl:col-span-5">
      <div className="flex flex-1 justify-start">
        <div>{menu}</div>
      </div>

      <div className="flex items-center gap-1.5">
        <div className="text-accent">{logo}</div>
        <div className="font-sans text-xl font-bold">
          Taste<span className="text-accent">Lab</span>
        </div>
      </div>

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

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-30 flex h-12 w-full col-span-3 items-center justify-between border-b border-emerald-900/60 bg-dark px-4 text-light shadow-sm">
//       {/* Left Section: Menu Toggle Button */}
//       <div className="flex flex-1 items-center justify-start">
//         <button
//           type="button"
//           aria-label="Toggle Navigation Sidebar"
//           className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-emerald-900/50 hover:text-white active:scale-95"
//         >
//           {menu}
//         </button>
//       </div>

//       {/* Center Section: Logo & Brand Name */}
//       <div className="flex items-center gap-2">
//         <div className="flex items-center justify-center text-accent transition-transform hover:scale-105">
//           {logo}
//         </div>
//         <span className="font-sans text-xl font-extrabold tracking-tight text-white">
//           Taste<span className="text-accent">Lab</span>
//         </span>
//       </div>

//       {/* Right Section: User Profile Pill */}
//       <div className="flex flex-1 items-center justify-end">
//         <button
//           type="button"
//           className="flex items-center gap-2 rounded-full border border-emerald-800/60 bg-emerald-900/30 py-1 pl-1 pr-3 transition-colors hover:border-emerald-700 hover:bg-emerald-900/60 active:scale-98"
//         >
//           {/* Avatar Container */}
//           <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-accent">
//             {user}
//           </div>
//           <span className="hidden text-xs font-semibold text-slate-200 sm:inline">
//             Robin
//           </span>
//         </button>
//       </div>
//     </header>
//   );
// }
