import { useEffect, useState } from "react";

import Header from "./header";
import Sidebar from "./sidebar";
import Browse from "./home/browse";
import SearchAndFilter from "./home/search-and-filter";

import AddRecipe from "./add-recipe/add-recipe";

import data from "./data/data";

import "./App.css";

// home page
function App() {
  const [recipes, setRecipes] = useState(data);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Header />
      <Sidebar />
      <main className="col-span-3 flex flex-col bg-bg sm:col-span-2 lg:col-span-3 xl:col-span-4">
        <SearchAndFilter
          recipes={recipes}
          setFilteredRecipes={setFilteredRecipes}
        />
        <Browse
          filteredRecipes={filteredRecipes}
          setFilteredRecipes={setFilteredRecipes}
        />
      </main>
    </div>
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

export default App;
