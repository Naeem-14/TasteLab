import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RenderPages from "../features/cooking101/RenderPages";
import { Routes, Route } from "react-router";
import TemperatureConvertor from "../features/cooking101/pages/temperature-converter/TemeperatureConverter";
import VolumeConverter from "../features/cooking101/pages/volume-converter/VolumeConverter";
import WeightConverter from "../features/cooking101/pages/weight-converter/WeightConverter";
import KnifeSkills from "../features/cooking101/pages/knife-skills/KnifeSkills";
import FoodSafetyAndPrep from "../features/cooking101/pages/food-safety/FoodSafety";
import FlavorBalancing from "../features/cooking101/pages/flavor-balancing/FlavorBalancing";
import SmokePoints from "../features/cooking101/pages/smoke-point/SmokePoint";
import PantryStaples from "../features/cooking101/pages/pantry-staples/PantryStaple";
import BasicSauces from "../features/cooking101/pages/basic-saues/BasicSauces";

export default function Cooking101({ user, isLoggedIn }) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Header user={user} isLoggedIn={isLoggedIn} />
      <Sidebar user={user} isLoggedIn={isLoggedIn} />
      <main className="col-span-3 grid h-[calc(100vh-48px)] scrollbar-none gap-4 overflow-y-scroll bg-bg p-5 sm:col-span-2 lg:col-span-3 xl:col-span-4">
        <Routes>
          <Route index element={<RenderPages />} />
        </Routes>
      </main>
    </div>
  );
}
