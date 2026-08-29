import { back } from "../data/icons";

export default function BackButton() {
  return (
    <button className="fixed top-3 left-3 z-10 flex h-9 w-9 cursor-pointer items-center rounded-full bg-slate-800 pr-2 pl-0.5 font-semibold text-white shadow-sm backdrop-blur-xs transition-colors hover:bg-accent lg:top-4 lg:left-4">
      <span className="ml-1">{back}</span>
    </button>
  );
}
