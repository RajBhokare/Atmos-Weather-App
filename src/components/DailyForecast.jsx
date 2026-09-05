import WeatherIcon from "./WeatherIcon.jsx";

export default function DailyForecast({ days }) {
  if (!days || days.length === 0) return null;

  const formatTemp = (val) => {
    if (val === undefined || val === null) return "";
    return typeof val === "number" ? `${Math.round(val)}\u00b0` : val;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full shadow-sm">
      <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">7-Day Forecast</h2>
      <div className="divide-y divide-slate-800">
        {days.map((item, index) => (
          <div
            key={item.day || index}
            className="flex items-center justify-between py-2.5 px-1"
          >
            <span className="w-24 text-xs font-medium text-slate-200 truncate">
              {item.day}
            </span>
            <div className="flex justify-center flex-1 text-amber-400">
              <WeatherIcon code={item.code} className="w-5 h-5" />
            </div>
            <div className="w-24 text-right flex items-center justify-end gap-2 text-xs">
              <span className="font-bold text-slate-100">
                {formatTemp(item.high)}
              </span>
              <span className="font-medium text-slate-400">
                {formatTemp(item.low)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

