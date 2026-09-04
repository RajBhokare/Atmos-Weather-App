import { fetchJson } from "../utils/fetchJson.js";

const GEOCODING_BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function geocodeCity(query) {
  if (!query) return [];
  const url = `${GEOCODING_BASE_URL}?name=${encodeURIComponent(query)}&count=5&language=en&format=json`;
  const data = await fetchJson(url);
  return data?.results || [];
}

export async function getForecast(latitude, longitude) {
  const url = `${FORECAST_BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weather_code,relative_humidity_2m,wind_speed_10m,surface_pressure,visibility&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`;
  return await fetchJson(url);
}

