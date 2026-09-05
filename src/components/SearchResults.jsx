export default function SearchResults({ results, onSelect, isSearching }) {
  if (isSearching) {
    return (
      <div className="bg-white border border-gray-200 rounded-md shadow-sm max-w-md w-full mx-auto px-4 py-3 text-center">
        <p className="text-sm font-medium text-gray-500 animate-pulse">Searching...</p>
      </div>
    );
  }

  if (!results || results.length === 0) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm divide-y divide-gray-100 max-w-md w-full mx-auto overflow-hidden">
      {results.map((item, index) => {
        const locationText = [item.name, item.admin1, item.country]
          .filter(Boolean)
          .join(", ");

        return (
          <button
            key={item.id || `${item.latitude}-${item.longitude}-${index}`}
            type="button"
            onClick={() => onSelect && onSelect(item)}
            className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-800 transition-colors flex items-center justify-between focus:outline-none focus:bg-gray-50"
          >
            <span className="font-medium text-gray-900">{locationText}</span>
          </button>
        );
      })}
    </div>
  );
}

