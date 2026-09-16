import { useState } from "react";

import data from "./data/data";
import Home from "./pages/Home.jsx";
import AddRecipe from "./pages/AddRecipe";
import OwnRecipes from "./pages/OwnRecipes";
import Cooking101 from "./pages/Cooking101";
import Favorites from "./pages/Favorites.jsx";
import Filter from "./pages/Filter.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp";
import TemperatureConvertor from "./features/cooking101/pages/temperature-converter/TemeperatureConverter.jsx";
import Recipe from "./features/recipe/Recipe.jsx";
import BasicSauces from "./features/cooking101/pages/basic-saues/BasicSauces.jsx";
import KnifeSkills from "./features/cooking101/pages/knife-skills/KnifeSkills.jsx";
import FoodSafetyAndPrep from "./features/cooking101/pages/food-safety/FoodSafety.jsx";
import FlavorBalancing from "./features/cooking101/pages/flavor-balancing/FlavorBalancing.jsx";
import SmokePoints from "./features/cooking101/pages/smoke-point/SmokePoint.jsx";
import PantryStaples from "./features/cooking101/pages/pantry-staples/PantryStaple.jsx";
import { Routes, Route } from "react-router";
import VolumeConverter from "./features/cooking101/pages/volume-converter/VolumeConverter.jsx";
import WeightConverter from "./features/cooking101/pages/weight-converter/WeightConverter.jsx";

import "./App.css";

// home page
function App() {
  const [recipes, setRecipes] = useState(data);
  const [user, setUser] = useState({
    userName: "naeem",
    email: "naeem@gmail.com",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* <Recipe /> */}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              recipes={recipes}
              setRecipes={setRecipes}
              user={user}
              isLoggedIn={isLoggedIn}
            />
          }
        />

        <Route
          path="/filter"
          element={
            <Filter
              recipes={recipes}
              setRecipes={setRecipes}
              user={user}
              isLoggedIn={isLoggedIn}
            />
          }
        />

        <Route
          path="/cooking101"
          element={<Cooking101 user={user} isLoggedIn={isLoggedIn} />}
        />

        <Route
          path="/own-recipes"
          element={<OwnRecipes user={user} isLoggedIn={isLoggedIn} />}
        />

        <Route
          path="/favorites"
          element={<Favorites user={user} isLoggedIn={isLoggedIn} />}
        />

        <Route
          path="/add-recipe"
          element={<AddRecipe recipes={recipes} setRecipes={setRecipes} />}
        />

        <Route path="/login" element={<Login />} />
        <Route
          path="/sign-up"
          element={
            <SignUp
              user={user}
              setUser={setUser}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        <Route
          path="/temperature-converter"
          element={<TemperatureConvertor />}
        />

        <Route path="/volume-converter" element={<VolumeConverter />} />

        <Route path="/weight-converter" element={<WeightConverter />} />

        <Route path="/knife-skills-and-cuts" element={<KnifeSkills />} />

        <Route path="/food-safety-and-prep" element={<FoodSafetyAndPrep />} />

        <Route path="/flavor-balancing" element={<FlavorBalancing />} />

        <Route path="/smoke-points" element={<SmokePoints />} />

        <Route path="/pantry-staples-guide" element={<PantryStaples />} />

        <Route path="/basic-sauces" element={<BasicSauces />} />
      </Routes>
    </>
  );
}

export default App;
