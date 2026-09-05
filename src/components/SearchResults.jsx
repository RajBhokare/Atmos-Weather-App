export default function SearchResults({ results, onSelect, isSearching }) {
  if (isSearching) {
    return (
      <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-sm max-w-xl w-full mx-auto px-4 py-3 text-center">
        <p className="text-xs font-medium text-slate-400 animate-pulse">Searching locations...</p>
      </div>
    );
  }

  if (!results || results.length === 0) return null;

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-md divide-y divide-slate-700 max-w-xl w-full mx-auto overflow-hidden">
      {results.map((item, index) => {
        const locationText = [item.name, item.admin1, item.country]
          .filter(Boolean)
          .join(", ");

        return (
          <button
            key={item.id || `${item.latitude}-${item.longitude}-${index}`}
            type="button"
            onClick={() => onSelect && onSelect(item)}
            className="w-full text-left px-4 py-2.5 hover:bg-slate-700 text-sm text-slate-200 transition-colors flex items-center justify-between focus:outline-none focus:bg-slate-700"
          >
            <span className="font-medium">{locationText}</span>
            <span className="text-xs text-slate-300 font-medium">Select</span>
          </button>
        );
      })}
    </div>
  );
}
