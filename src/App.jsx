import { useState } from "react";
import data from "./data/data";
import Home from "./pages/home";
import AddRecipe from "./pages/add-recipe";

import "./App.css";

// home page
function App() {
  const [recipes, setRecipes] = useState(data);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  return (
    <>
      <Home
        recipes={recipes}
        filteredRecipes={filteredRecipes}
        setFilteredRecipes={setFilteredRecipes}
      />
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
