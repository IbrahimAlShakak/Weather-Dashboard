import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function CurrentWeather() {
  const { weatherData, unit } = useContext(WeatherContext);

  if (!weatherData) return null;

  const current = weatherData.list[0];
  const city = weatherData.city.name;
  const temp = Math.round(current.main.temp);
  const condition = current.weather[0].main;
  const description = current.weather[0].description;
  const iconUrl = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
  const symbol = unit === "metric" ? "°C" : "°F";

  return (
    <div className="bg-blue-100 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto text-center space-y-3">
      <h2 className="text-4xl font-bold text-blue-800">{city}</h2>
      <img src={iconUrl} alt="weather icon" className="w-24 h-24 mx-auto" />
      <p className="text-6xl font-extrabold text-gray-900">
        {temp}
        {symbol}
      </p>
      <p className="text-xl font-medium text-gray-700">{condition}</p>
      <p className="italic text-gray-500 text-sm">{description}</p>
    </div>
  );
}
