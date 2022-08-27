import React from "react";
import { Routes, Route } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

import Features from "./Features";
// import Features from "./Features";

import Home from "./Home";
import Login from "./Login";
import Pricing from "./Pricing";
import SignUp from "./SignUp";
import Create from "./Time/CreateTimer";
import Edit from "./Time/EditTimer";
import Products from "./Time/Timer";
import WhyHarvest from "./WhyHarvest";

import AddClient from "../ManagePages/AddClient";
import AddContact from "../ManagePages/AddContact";
import EditClient from "../ManagePages/EditClient";
import Client from "../ManagePages/Client";
import Role from "../ManagePages/Role";
import Task from "../ManagePages/Task";
import Expence_categ from "../ManagePages/Expence_categ";
import Manage from "./Manage";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

     
      <Route path='/time'   element={<Products/>} />
             <Route path='/time/create'   element={<Create/>} />
             <Route path='/time/:id/edit'   element={<Edit/>} />

      <Route path="/whyharvest" element={<WhyHarvest />} />

      <Route path="/google/auth" element={<GoogleAuth />} />
      <Route path="/manage" element={<Manage />} />

      <Route path="/price" element={<Pricing />} />
      <Route path="/feature" element={<Features />} />

      <Route
        path="/manage/client"
        element={
          <div>
            <Manage /> <Client />
          </div>
        }
      />
      <Route
        path="/manage/task"
        element={
          <div>
            <Manage />
            <Task />
          </div>
        }
      />
      <Route
        path="/manage/expence_categ"
        element={
          <div>
            <Manage />
            <Expence_categ />
          </div>
        }
      />
      <Route
        path="/manage/role"
        element={
          <div>
            <Manage />
            <Role />{" "}
          </div>
        }
      />
      <Route
        path="/manage/client/new"
        element={
          <div>
            <Manage />
            <AddClient />
          </div>
        }
      />
      <Route
        path="/manage/contact/new"
        element={
          <div>
            <Manage />
            <AddContact />
          </div>
        }
      />
      <Route
        path="/manage/client/:id/edit"
        element={
          <div>
            <Manage />
            <EditClient />{" "}
          </div>
        }
      />

    </Routes>
  );
};

export default MainRoutes;
