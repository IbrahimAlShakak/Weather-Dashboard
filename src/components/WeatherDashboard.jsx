import { useContext } from "react";
import CurrentWeather from "./CurrentWeather";
import { WeatherContext } from "../context/WeatherContext";
import ForecastList from "./ForecastList";
import SearchBar from "./SearchBar";

export default function WeatherDashboard() {
  const { isLoading, weatherData, error } = useContext(WeatherContext);

  if (isLoading) {
    return (
      <p className="text-center text-blue-600 py-10">Loading weather...</p>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 px-4">
        <p className="text-red-600 font-semibold text-lg mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 px-4 py-6 max-w-5xl mx-auto">
      <SearchBar />
      {weatherData ? (
        <>
          <CurrentWeather />
          <ForecastList />
        </>
      ) : (
        <p className="text-center text-gray-500">
          Enter a city to see the weather forecast
        </p>
      )}
    </div>
  );
}
