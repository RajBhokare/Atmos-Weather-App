import { fetchJson } from "../utils/fetchJson.js";

const GEOCODING_BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_BASE_URL = "https://api.open-meteo.com/v1/forecast";

// oxlint-disable-next-line no-unused-vars
const _dummy = { FORECAST_BASE_URL };

export async function geocodeCity(query) {
  if (!query) return [];
  const url = `${GEOCODING_BASE_URL}?name=${encodeURIComponent(query)}&count=5&language=en&format=json`;
  const data = await fetchJson(url);
  return data?.results || [];
}

