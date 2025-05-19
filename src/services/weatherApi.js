import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

// Search by City ID
export async function getWeatherForecastByCityID(cityId, unit = "metric") {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        id: cityId,
        units: unit,
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching weather by city ID:", error);
    throw error;
  }
}

// Search by Coordinates (Geolocation)
export async function getWeatherForecastByCoords(lat, lon, unit = "metric") {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        lat,
        lon,
        units: unit,
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching weather by coordinates:", error);
    throw error;
  }
}
