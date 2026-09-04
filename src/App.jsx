import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SearchResults from "./components/SearchResults.jsx";
import EmptyState from "./components/EmptyState.jsx";
import WeatherDashboard from "./components/WeatherDashboard.jsx";
import { geocodeCity, getForecast } from "./services/weatherApi.js";
import {
  transformCurrentWeather,
  transformHourly,
  transformDaily,
  transformDetails,
} from "./utils/transformWeather.js";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (!selectedLocation || selectedLocation.latitude === undefined || selectedLocation.longitude === undefined) {
      // oxlint-disable-next-line react/set-state-in-effect
      setForecastData(null);
      return;
    }

    let isMounted = true;
    getForecast(selectedLocation.latitude, selectedLocation.longitude)
      .then((data) => {
        if (isMounted) {
          setForecastData(data);
        }
      })
      .catch((err) => {
        console.error("Forecast fetch error:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedLocation]);

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

  const locationName = selectedLocation
    ? [selectedLocation.name, selectedLocation.admin1, selectedLocation.country]
        .filter(Boolean)
        .join(", ")
    : "";

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
            currentWeather={transformCurrentWeather(forecastData, locationName)}
            hourly={transformHourly(forecastData)}
            daily={transformDaily(forecastData)}
            details={transformDetails(forecastData)}
          />
        )}
      </main>
    </div>
  );
}

export default App;

