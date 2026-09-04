import { fetchJson } from "../utils/fetchJson.js";

const GEOCODING_BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_BASE_URL = "https://api.open-meteo.com/v1/forecast";

// Suppress unused imports/variables warning until exported functions are added
// oxlint-disable-next-line no-unused-vars
const _dummy = { fetchJson, GEOCODING_BASE_URL, FORECAST_BASE_URL };

