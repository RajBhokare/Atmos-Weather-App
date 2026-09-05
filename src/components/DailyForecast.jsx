import WeatherIcon from "./WeatherIcon.jsx";

export default function DailyForecast({ days }) {
  if (!days || days.length === 0) return null;

  const formatTemp = (val) => {
    if (val === undefined || val === null) return "";
    return typeof val === "number" ? `${Math.round(val)}\u00b0` : val;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-md p-5 sm:p-6 max-w-md w-full mx-auto">
      <h2 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">7-Day Forecast</h2>
      <div className="divide-y divide-gray-100">
        {days.map((item, index) => (
          <div
            key={item.day || index}
            className="flex items-center justify-between py-2.5 sm:py-3"
          >
            <span className="w-20 sm:w-24 text-sm font-medium text-gray-900 truncate">
              {item.day}
            </span>
            <div className="flex justify-center flex-1">
              <WeatherIcon code={item.code} className="w-6 h-6 text-amber-500" />
            </div>
            <div className="w-20 sm:w-24 text-right space-x-2">
              <span className="text-sm font-medium text-gray-900">
                {formatTemp(item.high)}
              </span>
              <span className="text-sm text-gray-400">
                {formatTemp(item.low)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

