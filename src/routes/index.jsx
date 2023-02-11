import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = ({user, setUser}) => {

  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Home user={user}/>} />
    </Routes>
  );
};
export default AppRoutes;
