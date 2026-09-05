export default function EmptyState() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center max-w-xl mx-auto shadow-sm">
      <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      </div>
      <h2 className="text-base font-semibold text-slate-200">No location selected</h2>
      <p className="mt-1 text-xs text-slate-400 max-w-xs mx-auto">
        Search for a city above or select your current location to view weather data.
      </p>
    </div>
  );
}
