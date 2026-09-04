import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="px-4 py-6 sm:px-6">
        <SearchBar />
      </main>
    </div>
  );
}

export default App;

