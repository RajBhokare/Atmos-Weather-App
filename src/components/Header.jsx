export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 px-4 py-3 sm:px-6 sm:py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-slate-100 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
          <h1 className="text-xl font-semibold text-slate-100">Atmos</h1>
        </div>
        <p className="text-sm text-slate-400">Weather, at a glance</p>
      </div>
    </header>
  );
}

