import Header from "../header";
import Sidebar from "../sidebar";

export default function Filter() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Header />
      <Sidebar />
      <main className="col-span-3 flex flex-col bg-bg sm:col-span-2 lg:col-span-3 xl:col-span-4">
        <div>easy, medium, hard</div>
        <div>all, breakfast, main, desserts, drinks</div>
        <div>featured, personal, favorite</div>
        <div>under 15, 15-30, 30-45, 45+</div>
      </main>
    </div>
  );
}
