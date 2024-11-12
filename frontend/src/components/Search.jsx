import React, { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import WeatherCard from "./WeatherCard";

export default function WeatherSearch() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "c58fa2786420402b64b8c3cd87c06793";

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!location) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      console.log(response);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gray-900 bg-opacity-80 p-10 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600">
          Weather App
        </h2>
        <form onSubmit={handleSearch} className="flex items-center space-x-4">
          <div className="relative w-full">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full rounded-lg bg-gray-800 p-4 pl-10 text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
            />
            <FaSearchLocation
              className="absolute left-3 top-5 text-teal-400"
              size={20}
            />
          </div>
          <button
            type="submit"
            className="p-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg transition shadow-lg hover:shadow-xl"
          >
            Search
          </button>
        </form>
        {weatherData && <WeatherCard data={weatherData} />}

        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
  );
}
