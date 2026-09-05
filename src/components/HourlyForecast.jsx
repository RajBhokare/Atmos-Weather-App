import WeatherIcon from "./WeatherIcon.jsx";

export default function HourlyForecast({ hours }) {
  if (!hours || hours.length === 0) return null;

  const formatTemp = (val) => {
    if (val === undefined || val === null) return "";
    return typeof val === "number" ? `${Math.round(val)}\u00b0` : val;
  };

  const formatPrecip = (val) => {
    if (val === undefined || val === null) return "";
    return typeof val === "number" ? `${val}%` : val;
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-full shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Hourly Forecast</h2>
        <span className="text-[11px] text-slate-400 font-medium">8 Hours</span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {hours.map((item, index) => (
          <div
            key={item.time || index}
            className="flex flex-col items-center flex-1 min-w-[72px] flex-shrink-0 text-center py-2.5 px-2 rounded-lg bg-slate-900 border border-slate-700"
          >
            <span className="text-xs font-medium text-slate-400">{item.time}</span>
            <div className="my-2 text-slate-300">
              <WeatherIcon code={item.code} className="w-6 h-6 text-slate-300" />
            </div>
            <span className="text-xs font-bold text-slate-100">
              {formatTemp(item.temperature)}
            </span>
            <span className="text-[10px] text-slate-400 font-medium mt-1">
              {formatPrecip(item.precipitation)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
