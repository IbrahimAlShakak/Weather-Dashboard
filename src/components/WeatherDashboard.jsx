import { useContext } from "react";
import CurrentWeather from "./CurrentWeather";
import { WeatherContext } from "../context/WeatherContext";

export default function WeatherDashboard() {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div>
      {weatherData ? (
        <CurrentWeather />
      ) : (
        <p>Search for a city to view weather</p>
      )}
    </div>
  );
}
