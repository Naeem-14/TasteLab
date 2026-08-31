import { useState } from "react";

import data from "./data/data";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import OwnRecipes from "./pages/OwnRecipes";
import Cooking101 from "./pages/Cooking101";
import Favorites from "./pages/Favorites";
import Filter from "./pages/Filter";

import "./App.css";

// home page
function App() {
  const [recipes, setRecipes] = useState(data);

  return (
    <>
      {/* <Home recipes={recipes} setRecipes={setRecipes} /> */}
      {/* <Filter recipes={recipes} setRecipes={setRecipes} /> */}
      {/* <Cooking101 /> */}
      {/* <OwnRecipes /> */}
      {/* <Favorites /> */}
      {/* <AddRecipe recipes={recipes} setRecipes={setRecipes} /> */}
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
