import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/tailwind.css";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import ErrorPage, { ERROR_CONFIG } from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />

        {/* Error Routes */}
        <Route
          path="/error/400"
          element={<ErrorPage {...ERROR_CONFIG[400]} />}
        />
        <Route
          path="/error/401"
          element={<ErrorPage {...ERROR_CONFIG[401]} />}
        />
        <Route
          path="/error/403"
          element={<ErrorPage {...ERROR_CONFIG[403]} />}
        />
        <Route
          path="/error/404"
          element={<ErrorPage {...ERROR_CONFIG[404]} />}
        />
      </Route>
      <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>
    </Routes>
  );
}

export default App;
