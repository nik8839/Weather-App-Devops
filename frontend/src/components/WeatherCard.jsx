import React from "react";

function WeatherCard({ data }) {
  return (
    <div className="mt-6 p-6 bg-gray-800 bg-opacity-80 rounded-xl shadow-lg text-gray-300">
      <h3 className="text-2xl font-bold mb-4 text-teal-400">{data.name}</h3>
      <p className="text-lg">Temperature: {data.main.temp}°C</p>
      <p className="text-lg">Weather: {data.weather[0].description}</p>
      <p className="text-lg">Humidity: {data.main.humidity}%</p>
      <p className="text-lg">Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
