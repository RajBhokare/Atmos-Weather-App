import WeatherIcon from "./WeatherIcon.jsx";

export default function CurrentWeather({ data }) {
  if (!data) return null;

  const { locationName, temperature, condition, feelsLike, high, low, code } = data;

  const formatTemp = (val) => {
    if (val === undefined || val === null) return "";
    return typeof val === "number" ? `${Math.round(val)}\u00b0` : val;
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-full h-full shadow-sm flex flex-col justify-between">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Current Weather</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mt-1">{locationName}</h2>
          <p className="text-sm text-slate-400 mt-0.5">{condition}</p>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 self-start">
          <WeatherIcon code={code} className="w-9 h-9 text-slate-300" />
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-700 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div className="text-5xl sm:text-6xl font-extrabold text-slate-100 tracking-tight">
          {formatTemp(temperature)}
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-300">
          {feelsLike !== undefined && (
            <span className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-700">
              Feels like <strong className="text-slate-100 font-semibold">{formatTemp(feelsLike)}</strong>
            </span>
          )}
          {(high !== undefined || low !== undefined) && (
            <span className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-700">
              H: <strong className="text-slate-100 font-semibold">{formatTemp(high)}</strong> &nbsp; L: <strong className="text-slate-300 font-semibold">{formatTemp(low)}</strong>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
