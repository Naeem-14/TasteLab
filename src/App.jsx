import { useState } from "react";
import data from "./data/data";
import Home from "./pages/home";
import AddRecipe from "./pages/add-recipe";
import OwnRecipes from "./pages/own-recipes";
import Cooking101 from "./pages/cooking-101";
import Favorites from "./pages/favorites";
import Filter from "./pages/filter";

import "./App.css";

// home page
function App() {
  const [recipes, setRecipes] = useState(data);

  return (
    <>
      {/* <Home recipes={recipes} setRecipes={setRecipes} /> */}
      {/* <AddRecipe recipes={recipes} setRecipes={setRecipes} /> */}
      {/* <OwnRecipes /> */}
      <Favorites />
      {/* <Cooking101 /> */}
      {/* <Filter recipes={recipes} setRecipes={setRecipes} /> */}
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
