import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import ForecastCard from "./ForecastCard";

export default function ForecastList() {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) return null;

  // Filter forecasts to 12:00pm each day
  const dailyForecasts = weatherData.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div>
      <h3>Extended Forecast</h3>
      <div>
        {dailyForecasts.map((forecast, index) => (
          <ForecastCard key={index} forecast={forecast} />
        ))}
      </div>
    </div>
  );
}
