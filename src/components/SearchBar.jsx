import { useState, useEffect } from "react";

export default function SearchBar({ onSearch, onUseLocation, clearSignal }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect
    setQuery("");
  }, [clearSignal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed && onSearch) {
      onSearch(trimmed);
    }
  };

  const handleUseLocation = () => {
    if (onUseLocation) {
      onUseLocation();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-2.5">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city..."
          aria-label="Search for a city"
          className="flex-1 min-w-0 px-3.5 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 placeholder-gray-400 bg-white"
        />
        <button
          type="submit"
          aria-label="Search city"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors whitespace-nowrap"
        >
          Search
        </button>
      </div>
      <button
        type="button"
        onClick={handleUseLocation}
        aria-label="Use my current location"
        className="w-full px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-md transition-colors"
      >
        Use my location
      </button>
    </form>
  );
}

