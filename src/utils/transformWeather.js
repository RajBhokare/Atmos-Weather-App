import { getConditionLabel, getIconCode } from "./weatherCodes.js";

export function transformCurrentWeather(forecastData, locationName) {
  if (!forecastData || !forecastData.current || !forecastData.daily) {
    return null;
  }

  const current = forecastData.current;
  const daily = forecastData.daily;

  return {
    locationName: locationName || "Selected Location",
    temperature: `${Math.round(current.temperature_2m)}\u00b0`,
    condition: getConditionLabel(current.weather_code),
    feelsLike: `${Math.round(current.apparent_temperature)}\u00b0`,
    high: `${Math.round(daily.temperature_2m_max[0])}\u00b0`,
    low: `${Math.round(daily.temperature_2m_min[0])}\u00b0`,
    code: getIconCode(current.weather_code),
  };
}

export function transformHourly(forecastData) {
  if (!forecastData || !forecastData.hourly || !Array.isArray(forecastData.hourly.time)) {
    return [];
  }

  const { time, temperature_2m, precipitation_probability, weather_code } = forecastData.hourly;
  const currentTime = forecastData.current?.time;

  let startIndex = 0;
  if (currentTime) {
    const hourPrefix = currentTime.slice(0, 13);
    const foundIdx = time.findIndex((t) => t.startsWith(hourPrefix));
    if (foundIdx !== -1) {
      startIndex = foundIdx;
    }
  }

  const sliceEnd = Math.min(startIndex + 8, time.length);
  const selectedTimes = time.slice(startIndex, sliceEnd);

  return selectedTimes.map((isoStr, idx) => {
    const actualIdx = startIndex + idx;
    const hourNum = parseInt(isoStr.slice(11, 13), 10);
    const ampm = hourNum >= 12 ? "PM" : "AM";
    const h = hourNum % 12 || 12;
    const timeLabel = idx === 0 ? "Now" : `${h} ${ampm}`;

    return {
      time: timeLabel,
      temperature: `${Math.round(temperature_2m[actualIdx])}\u00b0`,
      precipitation: `${precipitation_probability ? precipitation_probability[actualIdx] : 0}%`,
      code: getIconCode(weather_code ? weather_code[actualIdx] : 0),
    };
  });
}

export function transformDaily(forecastData) {
  if (!forecastData || !forecastData.daily || !Array.isArray(forecastData.daily.time)) {
    return [];
  }

  const { time, weather_code, temperature_2m_max, temperature_2m_min } = forecastData.daily;

  const count = Math.min(7, time.length);
  const result = [];

  for (let i = 0; i < count; i++) {
    const dateStr = time[i];
    let dayLabel = "Today";

    if (i > 0) {
      const [year, month, day] = dateStr.split("-").map(Number);
      const date = new Date(year, month - 1, day);
      dayLabel = date.toLocaleDateString("en-US", { weekday: "short" });
    }

    result.push({
      day: dayLabel,
      code: getIconCode(weather_code ? weather_code[i] : 0),
      high: `${Math.round(temperature_2m_max[i])}\u00b0`,
      low: `${Math.round(temperature_2m_min[i])}\u00b0`,
    });
  }

  return result;
}

export function transformDetails(forecastData) {
  if (!forecastData || !forecastData.current || !forecastData.daily) {
    return null;
  }

  const current = forecastData.current;
  const daily = forecastData.daily;
  const units = forecastData.current_units || {};

  const formatTimeLabel = (isoString) => {
    if (!isoString) return "--";
    const timePart = isoString.split("T")[1] || isoString;
    const [hStr, mStr] = timePart.split(":");
    const hours = parseInt(hStr, 10);
    const minutes = mStr || "00";
    const ampm = hours >= 12 ? "PM" : "AM";
    const h = hours % 12 || 12;
    return `${h}:${minutes} ${ampm}`;
  };

  const windSpeed = current.wind_speed_10m !== undefined ? Math.round(current.wind_speed_10m) : "--";
  const windUnit = units.wind_speed_10m || "km/h";

  const visibilityKm = current.visibility !== undefined
    ? `${(current.visibility / 1000).toFixed(1)} km`
    : "--";

  return {
    humidity: current.relative_humidity_2m !== undefined ? `${Math.round(current.relative_humidity_2m)}%` : "--",
    wind: `${windSpeed} ${windUnit}`,
    pressure: current.surface_pressure !== undefined ? `${Math.round(current.surface_pressure)} hPa` : "--",
    visibility: visibilityKm,
    sunrise: formatTimeLabel(daily.sunrise?.[0]),
    sunset: formatTimeLabel(daily.sunset?.[0]),
  };
}

