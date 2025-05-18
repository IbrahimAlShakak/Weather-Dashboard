import { useState } from "react";
import { getCityByName } from "../utils/cityLookup";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function SearchBar() {
  const [input, setInput] = useState("");

  const { setCityId } = useContext(WeatherContext);

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
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={input}
        placeholder="Enter city name..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
