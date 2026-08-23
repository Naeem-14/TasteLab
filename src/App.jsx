import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Browse from "./components/browse";
import SearchAndFilter from "./components/filter";
import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Header />
      <Sidebar />
      <main className="col-span-3 flex flex-col bg-bg sm:col-span-2 lg:col-span-3 xl:col-span-4">
        <SearchAndFilter />
        <Browse />
      </main>
    </div>
  );
}

export default App;
