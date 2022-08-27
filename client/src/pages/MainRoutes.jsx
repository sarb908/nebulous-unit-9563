import React from "react";
import { Routes, Route } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import WhyHarvest from "./WhyHarvest";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/whyharvest" element={<WhyHarvest />} />
      <Route path="/google/auth" element={<GoogleAuth />} />
    </Routes>
  );
};

export default MainRoutes;
