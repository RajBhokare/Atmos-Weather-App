import { useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SearchResults from "./components/SearchResults.jsx";
import EmptyState from "./components/EmptyState.jsx";
import WeatherDashboard from "./components/WeatherDashboard.jsx";
import { geocodeCity } from "./services/weatherApi.js";

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
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const results = await geocodeCity(query);
      console.log("Geocoding results:", results);
      setSearchResults(results);
    } catch (error) {
      console.error("Geocoding error:", error);
    }
  };

  const handleUseLocation = () => {
    console.log("Use location requested");
  };

  const handleSelectResult = (result) => {
    setSelectedLocation(result);
    setSearchResults([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-6 sm:px-6 space-y-6">
        <SearchBar
          onSearch={handleSearch}
          onUseLocation={handleUseLocation}
          clearSignal={selectedLocation}
        />
        {searchResults.length > 0 && (
          <SearchResults
            results={searchResults}
            onSelect={handleSelectResult}
          />
        )}
        {selectedLocation === null ? (
          <EmptyState />
        ) : (
          <WeatherDashboard
            currentWeather={mockCurrentWeather}
            hourly={mockHourly}
            daily={mockDaily}
            details={mockDetails}
          />
        )}
      </main>
    </div>
  );
}

export default App;

