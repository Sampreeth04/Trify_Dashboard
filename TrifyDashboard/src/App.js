import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Signup from "./components/Signup";
import Dashboard from "./Body/pages/dashboard/dashboard";
import Pages from "./Body/pages/dashboard/pages";
import Products from "./Body/pages/dashboard/products";
import Settings from "./Body/pages/dashboard/settings";
import Statistics from "./Body/pages/dashboard/statistics";
import User from "./Body/profile/signup";
import Logout from "./Body/pages/dashboard/logout";
import JourneyView from "./Body/pages/dashboard/JourneyView";
import AggregateView from "./Body/pages/dashboard/AggregateView";
import Bike from "./Body/pages/dashboard/bike";

import PrivateRoute from "./util/PrivateRoute";
import AuthContext from "./context/AuthContext";

export default function App() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      {user && <Sidebar />}
      <Routes>
        <Route exact path="/login" element={<Signup />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/pages" element={<Pages />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/statistics" element={<Statistics />} />
          <Route exact path="/bike" element={<Bike />} />
          <Route exact path="/mapping-journey" element={<JourneyView />} />
          <Route exact path="/mapping-aggregate" element={<AggregateView />} />
        </Route>
      </Routes>
    </div>
  );
}
