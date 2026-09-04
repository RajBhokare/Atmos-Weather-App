import { useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import EmptyState from "./components/EmptyState.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import HourlyForecast from "./components/HourlyForecast.jsx";

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
          </>
        )}
      </main>
    </div>
  );
}

export default App;

