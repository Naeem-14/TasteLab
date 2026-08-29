import Header from "../utils/header";
import Sidebar from "../utils/sidebar";

export default function Cooking101() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Header />
      <Sidebar />
      <main className="col-span-3 flex h-[calc(100vh-48px)] flex-col bg-bg sm:col-span-2 lg:col-span-3 xl:col-span-4">
        Cooking 101
      </main>
    </div>
  );
}
