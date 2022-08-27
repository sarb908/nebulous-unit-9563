import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Create from "./Time/CreateTimer";
import Edit from "./Time/EditTimer";
import Products from "./Time/Timer";
import WhyHarvest from "./WhyHarvest";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/whyharvest" element={<WhyHarvest/>}/>
      <Route path='/time'   element={<Products/>} />
             <Route path='/time/create'   element={<Create/>} />
             <Route path='/time/:id/edit'   element={<Edit/>} />
    </Routes>
  );
};

export default MainRoutes;
