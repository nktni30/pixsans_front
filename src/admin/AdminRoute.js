import React from "react";
import { Routes as BrowserRouter, Routes ,Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";

const AdminRoute = () => {
  return (
    <>
    <Routes>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/admin" element={<Dashboard/>} />
    </Routes>
    </>
  );
}

export default AdminRoute;