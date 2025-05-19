import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function TemperatureToggle() {
  const { unit, setUnit } = useContext(WeatherContext);

  return (
    <div className="flex justify-center gap-4 my-4">
      <button
        onClick={() => setUnit("metric")}
        className={`px-3 py-1 rounded ${
          unit === "metric" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        °C
      </button>
      <button
        onClick={() => setUnit("imperial")}
        className={`px-3 py-1 rounded ${
          unit === "imperial" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        °F
      </button>
    </div>
  );
}
