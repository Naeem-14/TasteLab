import { useState } from "react";

import data from "./data/data";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import OwnRecipes from "./pages/OwnRecipes";
import Cooking101 from "./pages/Cooking101";
import Favorites from "./pages/Favorites";
import Filter from "./pages/Filter";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import TemperatureConvertor from "./features/cooking101/pages/temperature-converter/TemeperatureConverter.jsx";
import Recipe from "./features/recipe/Recipe.jsx";
import BasicSauces from "./features/cooking101/pages/basic-saues/BasicSauces.jsx";
import KnifeSkills from "./features/cooking101/pages/knife-skills/KnifeSkills.jsx";
import FoodSafetyAndPrep from "./features/cooking101/pages/food-safety/FoodSafety.jsx";
import FlavorBalancing from "./features/cooking101/pages/flavor-balancing/FlavorBalancing.jsx";
import SmokePoints from "./features/cooking101/pages/smoke-point/SmokePoint.jsx";
import PantryStaples from "./features/cooking101/pages/pantry-staples/PantryStaple.jsx";

import "./App.css";

// home page
function App() {
  const [recipes, setRecipes] = useState(data);
  const [user, setUser] = useState({
    userName: "naeem",
    email: "naeem@gmail.com",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      {/* <Home
        recipes={recipes}
        setRecipes={setRecipes}
        user={user}
        isLoggedIn={isLoggedIn}
      /> */}
      {/* <Filter
        recipes={recipes}
        setRecipes={setRecipes}
        user={user}
        isLoggedIn={isLoggedIn}
      /> */}
      <Cooking101 user={user} isLoggedIn={isLoggedIn} />
      {/* <OwnRecipes user={user} isLoggedIn={isLoggedIn}/> */}
      {/* <Favorites user={user} isLoggedIn={isLoggedIn}/> */}
      {/* <AddRecipe recipes={recipes} setRecipes={setRecipes} /> */}
      {/* <Login /> */}
      {/* <SignUp user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} /> */}

      {/* <TemperatureConvertor /> */}
      {/* <BasicSauces /> */}
      {/* <KnifeSkills /> */}
      {/* <FoodSafetyAndPrep /> */}
      {/* <FlavorBalancing /> */}
      {/* <SmokePoints /> */}
      {/* <PantryStaples /> */}
      {/* <Recipe /> */}
    </>
  );
}

// add recipe page
// function App() {
//   const [recipes, setRecipes] = useState(data);
//   const [filteredRecipes, setFilteredRecipes] = useState(recipes);

//   return (
//     <>
//       <AddRecipe recipes={recipes} setRecipes={setRecipes} />
//     </>
//   );
// }

// filter page
// function App() {
//   const [recipes, setRecipes] = useState(data);
//   const [filteredRecipes, setFilteredRecipes] = useState(recipes);

//   useEffect(() => {
//     setFilteredRecipes(recipes);
//   }, [recipes]);

//   function addFavorite(indexToFavorite) {
//     setFilteredRecipes(
//       filteredRecipes.map((recipe, index) =>
//         index === indexToFavorite
//           ? { ...recipe, isFavorite: !recipe.isFavorite }
//           : recipe,
//       ),
//     );
//   }

//   return (
//     <>
//       <Filter
//         filteredRecipes={filteredRecipes}
//         setFilteredRecipes={setFilteredRecipes}
//         recipes={recipes}
//         addFavorite={addFavorite}
//       />
//     </>
//   );
// }

export default App;
