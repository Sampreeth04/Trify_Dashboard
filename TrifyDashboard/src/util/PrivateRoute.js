import { Route, redirect, Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

import Sidebar from "../components/Sidebar/Sidebar";

// import React from "react";

const PrivateRoute = () => {
  console.log("private route");
  let isAuth = false;
  let { user } = useContext(AuthContext);
  if (user) isAuth = true;

  return isAuth ? (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
