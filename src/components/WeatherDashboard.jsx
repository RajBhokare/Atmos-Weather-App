import CurrentWeather from "./CurrentWeather.jsx";
import HourlyForecast from "./HourlyForecast.jsx";
import DailyForecast from "./DailyForecast.jsx";
import WeatherDetails from "./WeatherDetails.jsx";

export default function WeatherDashboard({ currentWeather, hourly, daily, details }) {
  return (
    <div className="space-y-6">
      <CurrentWeather data={currentWeather} />
      <HourlyForecast hours={hourly} />
      <DailyForecast days={daily} />
      <WeatherDetails data={details} />
    </div>
  );
}

