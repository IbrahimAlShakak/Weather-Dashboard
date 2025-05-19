import { useState, useContext } from "react";
import { getCityByName } from "../utils/cityLookup";
import { WeatherContext } from "../context/WeatherContext";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const { setCityId, unit, setUnit } = useContext(WeatherContext);

  function handleSearch(e) {
    e.preventDefault();
    const city = getCityByName(input.trim());

    if (!city) {
      alert("City not found 😕");
      return;
    }

    setCityId(city.id);
    setInput(""); // clear input
  }

  return (
  <div className="flex flex-col items-center gap-6 py-10 w-full">
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-4 max-w-lg w-full"
    >
      <input
        type="text"
        value={input}
        placeholder="Enter city name..."
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow rounded-full px-6 py-3 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-700"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow"
      >
        Search
      </button>
    </form>

    <div className="flex gap-3">
      <button
        onClick={() => setUnit("metric")}
        className={`px-4 py-2 rounded-full font-medium text-sm ${
          unit === "metric"
            ? "bg-blue-600 text-white shadow"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        °C
      </button>
      <button
        onClick={() => setUnit("imperial")}
        className={`px-4 py-2 rounded-full font-medium text-sm ${
          unit === "imperial"
            ? "bg-blue-600 text-white shadow"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        °F
      </button>
    </div>
  </div>
);

}
