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
    <div className="bg-white border border-gray-200 rounded-md p-5 sm:p-6 max-w-md w-full mx-auto">
      <h2 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Hourly Forecast</h2>
      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2">
        {hours.map((item, index) => (
          <div
            key={item.time || index}
            className="flex flex-col items-center min-w-[64px] sm:min-w-[70px] flex-shrink-0 text-center"
          >
            <span className="text-xs font-medium text-gray-500">{item.time}</span>
            <WeatherIcon code={item.code} className="w-7 h-7 sm:w-8 sm:h-8 my-2 text-amber-500" />
            <span className="text-sm font-semibold text-gray-900">
              {formatTemp(item.temperature)}
            </span>
            <span className="text-xs text-blue-500 font-medium mt-1">
              {formatPrecip(item.precipitation)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

