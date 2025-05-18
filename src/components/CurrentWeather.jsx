import { useContext } from "react";
import  {WeatherContext}  from "../context/WeatherContext";

export default function CurrentWeather() {

  const  {weatherData}  = useContext(WeatherContext);
  const current = weatherData.list[0];

  return (
    <div>
      <h2>{weatherData.city.name}</h2>
      <p>{Math.round(current.main.temp)}°C</p>
      <p>{current.weather[0].main}</p>
      <p>{current.weather[0].description}</p>
    </div>
  );
}
