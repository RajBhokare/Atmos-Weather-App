export default function WeatherDetails({ data }) {
  if (!data) return null;

  const { humidity, wind, pressure, visibility, sunrise, sunset } = data;

  const detailsList = [
    { label: "Humidity", value: humidity },
    { label: "Wind", value: wind },
    { label: "Pressure", value: pressure },
    { label: "Visibility", value: visibility },
    { label: "Sunrise", value: sunrise },
    { label: "Sunset", value: sunset },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 max-w-md w-full mx-auto">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Details</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {detailsList.map((item) => (
          <div key={item.label} className="bg-gray-50 p-3 rounded-md">
            <div className="text-xs text-gray-500 font-medium">{item.label}</div>
            <div className="text-sm font-semibold text-gray-900 mt-1">
              {item.value !== undefined && item.value !== null ? item.value : "--"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

