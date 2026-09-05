# Atmos Weather App

Atmos Weather App is a clean, responsive weather application built with React, Vite, and Tailwind CSS. It allows users to search for cities or use their device's geolocation to view current weather conditions, an 8-hour forecast, a 7-day forecast, and environmental metrics such as humidity, wind speed, pressure, visibility, sunrise, and sunset times.

## Tech Stack

- **Frontend Library**: React 19 (JavaScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **API**: Open-Meteo Weather & Geocoding API (free, no API key required)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

> **Note**: No API key is required to run this application. Weather and geocoding data are fetched directly from Open-Meteo's open-access endpoints.

## Project Structure

```
src/
+-- components/    # UI components (Header, SearchBar, SearchResults, WeatherDashboard, etc.)
+-- services/      # API integration functions (weatherApi.js)
+-- hooks/         # Custom React hooks
+-- utils/         # Helper functions for data transformation, geolocation, and weather codes
```

