import React from "react";
import { Routes, Route } from "react-router-dom";
import Weather from "../pages/Weather";
import Fun from "../pages/Fun";
import Error from "../pages/Error";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Weather />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/fun" element={<Fun />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesConfig;
