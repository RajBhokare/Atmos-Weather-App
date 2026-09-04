import { useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import EmptyState from "./components/EmptyState.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import HourlyForecast from "./components/HourlyForecast.jsx";
import DailyForecast from "./components/DailyForecast.jsx";
import WeatherDetails from "./components/WeatherDetails.jsx";

const mockCurrentWeather = {
  locationName: "San Francisco",
  temperature: 18,
  condition: "Partly Cloudy",
  feelsLike: 17,
  high: 21,
  low: 13,
  code: "sunny",
};

const mockHourly = [
  { time: "Now", temperature: 18, precipitation: 0, code: "sunny" },
  { time: "12 PM", temperature: 19, precipitation: 10, code: "sunny" },
  { time: "1 PM", temperature: 21, precipitation: 20, code: "cloudy" },
  { time: "2 PM", temperature: 20, precipitation: 40, code: "rainy" },
  { time: "3 PM", temperature: 19, precipitation: 60, code: "rainy" },
  { time: "4 PM", temperature: 17, precipitation: 15, code: "cloudy" },
];

const mockDaily = [
  { day: "Today", code: "sunny", high: 21, low: 13 },
  { day: "Tomorrow", code: "cloudy", high: 20, low: 14 },
  { day: "Wed", code: "rainy", high: 17, low: 11 },
  { day: "Thu", code: "thunderstorm", high: 16, low: 10 },
  { day: "Fri", code: "cloudy", high: 19, low: 12 },
  { day: "Sat", code: "sunny", high: 22, low: 13 },
  { day: "Sun", code: "clear-night", high: 23, low: 15 },
];

const mockDetails = {
  humidity: "64%",
  wind: "12 mph NW",
  pressure: "1014 hPa",
  visibility: "10 mi",
  sunrise: "6:32 AM",
  sunset: "7:48 PM",
};

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = (query) => {
    console.log("Search query:", query);
    setSelectedLocation(query);
  };

  const handleUseLocation = () => {
    console.log("Use location requested");
    setSelectedLocation("Current Location");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="px-4 py-6 sm:px-6 max-w-md mx-auto space-y-6">
        <SearchBar
          onSearch={handleSearch}
          onUseLocation={handleUseLocation}
          clearSignal={null}
        />
        {selectedLocation === null ? (
          <EmptyState />
        ) : (
          <>
            <CurrentWeather data={mockCurrentWeather} />
            <HourlyForecast hours={mockHourly} />
            <DailyForecast days={mockDaily} />
            <WeatherDetails data={mockDetails} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;

