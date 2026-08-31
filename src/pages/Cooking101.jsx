import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RenderPages from "../features/cooking101/RenderPages";

export default function Cooking101() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Header />
      <Sidebar />
      <main className="col-span-3 grid h-[calc(100vh-48px)] scrollbar-none gap-4 overflow-y-scroll bg-bg p-5 sm:col-span-2 lg:col-span-3 xl:col-span-4">
        <RenderPages />
      </main>
    </div>
  );
}

// ├── 🧮 Utilities
// │   ├── Temperature ($^\circ\text{F} \leftrightarrow ^\circ\text{C}$)
// │   ├── Weight (g ↔ oz)
// │   └── Volume (ml ↔ cups ↔ tbsp/tsp)
// ├── 🔪 Culinary Skills
// │   ├── Knife Skills & Cuts (Visual cards)
// │   ├── Food Safety & Prep (Internal temps & thawing)
// │   └── Seasoning & Flavor Balancing (Troubleshooting guide)
// └── 🍳 Equipment & Basics
//     ├── Cookware & Oil Smoke Points (Table)
//     ├── Pantry Staples Guide (Basic stuff every kitchen should have)
//     └── Basic Sauces (Mother sauces & quick ratios)
