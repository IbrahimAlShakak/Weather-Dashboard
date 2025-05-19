import { useContext } from "react";
import CurrentWeather from "./CurrentWeather";
import { WeatherContext } from "../context/WeatherContext";
import ForecastList from "./ForecastList";

export default function WeatherDashboard() {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div>
      {weatherData ? (
        <>
        <CurrentWeather />
        <ForecastList />
        </>
      ) : (
        <p>Search for a city to view weather</p>
      )}
    </div>
  );
}
