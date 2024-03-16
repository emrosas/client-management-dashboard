import Navbar from "./components/Navbar";
import ClientCard from "./components/ClientCard";

function App() {
  return (
    <div className="grid grid-rows-[auto,1fr] h-screen">
      <Navbar />
      <main className="px-12 py-8 grid grid-cols-12 grid-rows-2 gap-8">
        <div className="col-start-1 col-span-7 row-start-1 row-span-2 bg-light-2 rounded-3xl border border-stroke-1 px-6 pt-6">
          <h1 className="text-3xl font-medium mb-4">This Month’s Services</h1>
          <ul className="flex flex-col gap-4">
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
          </ul>
        </div>
        <div className="row-span-1 col-span-5 bg-light-2 rounded-3xl border border-stroke-1 px-6 pt-6">
          <h2 className="text-xl font-medium mb-4">This Month’s Revenue</h2>
        </div>
        <div className="row-span-1 col-span-5 bg-light-2 rounded-3xl border border-stroke-1 px-6 pt-6">
          <h2 className="text-xl font-medium mb-4">All Clients</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
