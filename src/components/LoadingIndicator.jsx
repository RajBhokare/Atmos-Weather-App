export default function LoadingIndicator() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-xl w-full mx-auto space-y-4 shadow-sm animate-pulse">
      <div className="h-4 bg-slate-800 rounded w-1/3"></div>
      <div className="h-12 bg-slate-800 rounded w-1/2"></div>
      <div className="h-4 bg-slate-800 rounded w-2/3"></div>
    </div>
  );
}

