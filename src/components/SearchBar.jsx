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
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-2">
      <div className="flex gap-2">
        <div className="relative flex-1 min-w-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a city..."
            aria-label="Search for a city"
            className="w-full min-w-0 pl-9 pr-3 py-2 bg-slate-900 border border-slate-700/80 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>
        <button
          type="submit"
          aria-label="Search city"
          className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap shadow-sm"
        >
          Search
        </button>
      </div>

      <button
        type="button"
        onClick={handleUseLocation}
        aria-label="Use my current location"
        className="w-full py-2 px-4 bg-slate-900 hover:bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-3.5 h-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Use my current location</span>
      </button>
    </form>
  );
}

