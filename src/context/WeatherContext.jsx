import { createContext, useContext, useState, useEffect } from "react";
import { getWeatherForecastByCityID } from "../services/weatherApi";

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {

  const [cityId, setCityId] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!cityId) return;

    async function fetchWeather() {
      try {
        const data = await getWeatherForecastByCityID(cityId);
        setWeatherData(data);
      } catch (err) {
        console.error("Weather fetch failed:", err);
      }
    }

    fetchWeather();
  }, [cityId]);

  return (
    <WeatherContext.Provider value={{ cityId, setCityId, weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
}

