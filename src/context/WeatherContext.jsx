import { createContext, useEffect, useState } from "react";
import {
  getWeatherForecastByCityID,
  getWeatherForecastByCoords,
} from "../services/weatherApi";

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [cityId, setCityId] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [unit, setUnit] = useState("metric");
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          console.warn("Geolocation error:", err.message);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (!cityId) return;

    setIsLoading(true);
    setError(null);

    async function fetchWeather() {
      try {
        const data = await getWeatherForecastByCityID(cityId, unit);
        setWeatherData(data);
      } catch (err) {
        console.error("Fetch by coordinates failed:", err);
        setError("Failed to fetch weather data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeather();
  }, [cityId, unit]);

  const fetchWeatherByCoords = async (lat, lon, unit) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getWeatherForecastByCoords(lat, lon, unit);
      setWeatherData(data);
      setCityId(data.city.id);
    } catch (err) {
      console.error("Fetch by coordinates failed:", err);
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates.lat, coordinates.lon, unit);
    }
  }, [coordinates, unit]);

  return (
    <WeatherContext.Provider
      value={{
        cityId,
        setCityId,
        weatherData,
        isLoading,
        unit,
        setUnit,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
