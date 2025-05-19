import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function ForecastCard({ forecast }) {
  const { unit } = useContext(WeatherContext);
const symbol = unit === "metric" ? "°C" : "°F";
  const date = new Date(forecast.dt_txt).toLocaleDateString(undefined, {
    weekday: "short",
  });

  const temp = Math.round(forecast.main.temp);
  const condition = forecast.weather[0].main;

  const iconCode = forecast.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
  <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md px-6 py-4 w-28 text-center">
    <img src={iconUrl} alt="icon" className="w-10 h-10 mb-2" />
    <p className="text-sm font-semibold text-gray-600">{date}</p>
    <p className="text-lg font-bold text-gray-900">
      {Math.round(temp)}{symbol}
    </p>
    <p className="text-sm text-gray-500">{condition}</p>
  </div>
);
}
