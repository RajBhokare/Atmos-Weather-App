export function getConditionLabel(code) {
  const c = Number(code);
  switch (c) {
    case 0:
      return "Clear sky";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
    case 48:
      return "Fog";
    case 51:
    case 53:
    case 55:
      return "Drizzle";
    case 56:
    case 57:
      return "Freezing drizzle";
    case 61:
    case 63:
    case 65:
      return "Rain";
    case 66:
    case 67:
      return "Freezing rain";
    case 71:
    case 73:
    case 75:
    case 77:
      return "Snow";
    case 80:
    case 81:
    case 82:
      return "Rain showers";
    case 85:
    case 86:
      return "Snow showers";
    case 95:
    case 96:
    case 99:
      return "Thunderstorm";
    default:
      return "Clear sky";
  }
}

export function getIconCode(code) {
  const c = Number(code);
  switch (c) {
    case 0:
      return "sunny";
    case 1:
    case 2:
    case 3:
      return "cloudy";
    case 45:
    case 48:
      return "fog";
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return "rainy";
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return "snowy";
    case 95:
    case 96:
    case 99:
      return "thunderstorm";
    default:
      return "sunny";
  }
}

