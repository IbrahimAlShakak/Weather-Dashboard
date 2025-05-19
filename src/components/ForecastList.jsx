
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import ForecastCard from "./ForecastCard";

export default function ForecastList() {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) return null;

  // Filter forecasts to 12:00pm each day
  const dailyForecasts = weatherData.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
        Extended Forecast
      </h3>

      <div className="flex flex-wrap justify-center gap-6">
        {dailyForecasts.map((forecast, index) => (
          <ForecastCard key={index} forecast={forecast} />
        ))}
      </div>
    </div>
  );
}
