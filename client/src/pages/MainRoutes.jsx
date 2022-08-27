import React from "react";
import { Routes, Route } from "react-router-dom";
import EditExpence from "../components/Expenses/EditExpence";
import { Expenses } from "../components/Expenses/Expenses";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Expenses/>}/>
      
      <Route path="expences/:id" element={<EditExpence />} />
    </Routes>
  );
};

export default MainRoutes;
