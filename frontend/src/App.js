import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import WeatherSearch from "./components/Search";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login isRegister={false} />} />
        <Route path="/register" element={<Login isRegister={true} />} />
        <Route path="/weather" element={<WeatherSearch />} />
      </Routes>
    </Router>
  );
}
