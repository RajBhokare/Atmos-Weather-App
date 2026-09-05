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
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-full h-full shadow-sm flex flex-col justify-between">
      <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">Details</h2>
      <div className="grid grid-cols-2 gap-3 flex-1">
        {detailsList.map((item) => (
          <div key={item.label} className="bg-slate-900 border border-slate-700 p-3 rounded-lg flex flex-col justify-center">
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">{item.label}</div>
            <div className="text-sm font-semibold text-slate-100 mt-1 truncate">
              {item.value !== undefined && item.value !== null ? item.value : "--"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
