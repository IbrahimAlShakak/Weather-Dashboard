import { useContext } from "react";
import CurrentWeather from "./CurrentWeather";
import { WeatherContext } from "../context/WeatherContext";
import ForecastList from "./ForecastList";
import SearchBar from "./SearchBar";


export default function WeatherDashboard() {
  const { isLoading } = useContext(WeatherContext);

  if (isLoading) return <p className="text-center text-blue-600">Loading weather...</p>;

  return (
    <div className="space-y-6 px-4 py-6 max-w-5xl mx-auto">
      <SearchBar />
      <CurrentWeather />
      <ForecastList />
    </div>
  );
}