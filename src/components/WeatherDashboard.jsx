import CurrentWeather from "./CurrentWeather.jsx";
import HourlyForecast from "./HourlyForecast.jsx";
import DailyForecast from "./DailyForecast.jsx";
import WeatherDetails from "./WeatherDetails.jsx";

export default function WeatherDashboard({ currentWeather, hourly, daily, details }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <CurrentWeather data={currentWeather} />
      </div>
      <div className="lg:col-span-1 order-last lg:order-none">
        <WeatherDetails data={details} />
      </div>
      <div className="lg:col-span-3 order-1 lg:order-none">
        <HourlyForecast hours={hourly} />
      </div>
      <div className="lg:col-span-3 order-2 lg:order-none">
        <DailyForecast days={daily} />
      </div>
    </div>
  );
}

