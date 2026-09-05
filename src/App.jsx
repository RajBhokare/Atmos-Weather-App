import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SearchResults from "./components/SearchResults.jsx";
import EmptyState from "./components/EmptyState.jsx";
import LoadingIndicator from "./components/LoadingIndicator.jsx";
import WeatherDashboard from "./components/WeatherDashboard.jsx";
import { geocodeCity, getForecast } from "./services/weatherApi.js";
import { getCurrentPosition } from "./utils/geolocation.js";
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
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    if (!selectedLocation || selectedLocation.latitude === undefined || selectedLocation.longitude === undefined) {
      // oxlint-disable-next-line react/set-state-in-effect
      setForecastData(null);
      return;
    }

    let isMounted = true;
    setIsLoadingWeather(true);

    getForecast(selectedLocation.latitude, selectedLocation.longitude)
      .then((data) => {
        if (isMounted) {
          setForecastData(data);
        }
      })
      .catch((err) => {
        console.error("Forecast fetch error:", err);
      })
      .finally(() => {
        if (isMounted) {
          setIsLoadingWeather(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [selectedLocation]);

  const handleSearch = async (query) => {
    setIsSearching(true);
    setSearchError(null);
    try {
      const results = await geocodeCity(query);
      console.log("Geocoding results:", results);
      if (results && results.length > 0) {
        setSearchError(null);
        setSearchResults(results);
      } else {
        setSearchError("No results found for that location.");
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Geocoding error:", error);
      setSearchError("Something went wrong while searching. Please try again.");
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleUseLocation = async () => {
    setLocationError(null);
    try {
      const coords = await getCurrentPosition();
      setSelectedLocation({
        name: "Current Location",
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
      setSearchResults([]);
      setLocationError(null);
    } catch (error) {
      console.error("Geolocation error:", error);
      if (error && (error.code === 1 || error.code === error?.PERMISSION_DENIED || (error.message && error.message.toLowerCase().includes("denied")))) {
        setLocationError("Location access was denied. Please allow location access or search manually.");
      } else {
        setLocationError("Unable to determine your location. Please search manually.");
      }
    }
  };

  const handleSelectResult = (result) => {
    setSelectedLocation(result);
    setSearchResults([]);
    setSearchError(null);
    setLocationError(null);
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
        {searchError && (
          <p className="text-xs text-red-700 text-center max-w-md mx-auto">
            {searchError}
          </p>
        )}
        {locationError && (
          <p className="text-xs text-red-700 text-center max-w-md mx-auto">
            {locationError}
          </p>
        )}
        {(isSearching || searchResults.length > 0) && (
          <SearchResults
            results={searchResults}
            onSelect={handleSelectResult}
            isSearching={isSearching}
          />
        )}
        {selectedLocation === null ? (
          <EmptyState />
        ) : isLoadingWeather ? (
          <LoadingIndicator />
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

