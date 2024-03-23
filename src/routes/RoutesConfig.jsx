import React from "react";
import { Routes, Route } from "react-router-dom";
import Weather from "../pages/Weather";
import Home from "../pages/Home";
import Fun from "../pages/Fun";
import Error from "../pages/Error";
import News from "../pages/News";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/fun" element={<Fun />} />
      <Route path="/news" element={<News />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesConfig;
