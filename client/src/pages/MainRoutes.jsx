import React from "react";
import { Routes, Route } from "react-router-dom";

import Customer from "./Customer";


import GoogleAuth from "./GoogleAuth";


import Features from "./Features";
// import Features from "./Features";

import Home from "./Home";
import Integration from "./Integration";
import Login from "./Login";
import Pricing from "./Pricing";
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

      <Route path="/price" element={<Pricing />} />
      <Route path="/feature" element={<Features />} />

      <Route path="/customer" element={<Customer />} />
      <Route path="/integration" element={<Integration />} />
    </Routes>
  );
};

export default MainRoutes;
