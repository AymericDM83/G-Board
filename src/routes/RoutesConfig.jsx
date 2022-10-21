import React from "react";
import { Routes, Route } from "react-router-dom";
import Weather from "../pages/Weather";
import News from "../pages/News";
import Fun from "../pages/Fun";
import Error from "../pages/Error";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Weather />} />
      <Route path="/news" element={<News />} />
      <Route path="/fun" element={<Fun />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesConfig;
