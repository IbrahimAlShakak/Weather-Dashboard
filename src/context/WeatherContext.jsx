import { createContext, useContext, useState, useEffect } from "react";
import { getWeatherForecastByCityID } from "../services/weatherApi";

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [cityId, setCityId] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    if (!cityId) return;

    setIsLoading(true);

    async function fetchWeather() {
      try {
        const data = await getWeatherForecastByCityID(cityId, unit);
        setWeatherData(data);
      } catch (err) {
        console.error("Weather fetch failed:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeather();
  }, [cityId, unit]);

  return (
    <WeatherContext.Provider
      value={{
        cityId,
        setCityId,
        weatherData,
        isLoading,
        unit,
        setUnit,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
