import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const Base_URL = "https://api.openweathermap.org/data/2.5/forecast";

export async function getWeatherForecastByCityID(cityId, unit = "metric") {
  try {
    const res = await axios.get(`${Base_URL}?id=${cityId}&appid=${API_KEY}&units=${unit}`);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
