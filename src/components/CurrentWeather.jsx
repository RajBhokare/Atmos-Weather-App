import WeatherIcon from "./WeatherIcon.jsx";

export default function CurrentWeather({ data }) {
  if (!data) return null;

  const { locationName, temperature, condition, feelsLike, high, low, code } = data;

  const formatTemp = (val) => {
    if (val === undefined || val === null) return "";
    return typeof val === "number" ? `${Math.round(val)}\u00b0` : val;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-md p-5 sm:p-6 max-w-md w-full mx-auto text-center sm:text-left flex flex-col items-center sm:items-start">
      <h2 className="text-xl font-semibold text-gray-900">{locationName}</h2>
      <div className="flex items-center justify-center sm:justify-start gap-3 my-2">
        <span className="text-4xl sm:text-5xl font-bold text-gray-900">
          {formatTemp(temperature)}
        </span>
        <WeatherIcon code={code} className="w-10 h-10 text-amber-500 flex-shrink-0" />
      </div>
      <p className="text-base font-medium text-gray-700">{condition}</p>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 justify-center sm:justify-start">
        {feelsLike !== undefined && <span>Feels like {formatTemp(feelsLike)}</span>}
        {(high !== undefined || low !== undefined) && (
          <span>
            H: {formatTemp(high)} &nbsp; L: {formatTemp(low)}
          </span>
        )}
      </div>
    </div>
  );
}

