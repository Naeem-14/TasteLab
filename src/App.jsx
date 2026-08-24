// import { useState } from "react";

// import Header from "./components/header";
// import Sidebar from "./components/sidebar";
// import Browse from "./components/browse";
// import SearchAndFilter from "./components/filter";

import AddRecipe from "./components/add-recipe";
// import AddRecipe from "./components/add-recipe-demo";

// import data from "./components/data";

import "./App.css";

// function App() {
//   const [recipes, setRecipes] = useState(data);

//   return (
//     <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//       <Header />
//       <Sidebar />
//       <main className="col-span-3 flex flex-col bg-bg sm:col-span-2 lg:col-span-3 xl:col-span-4">
//         <SearchAndFilter recipes={recipes} setRecipes={setRecipes} />
//         <Browse recipes={recipes} setRecipes={setRecipes} />
//       </main>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <AddRecipe />
    </>
  );
}

export default App;
