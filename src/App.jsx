import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/tailwind.css";

import React from "react";
import { Route, Routes } from "react-router-dom";
// import { ERROR_CONFIG } from "./pages/ErrorPage";

// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import NotFound from "./pages/NotFound";
// import ErrorPage, { ERROR_CONFIG } from "./pages/ErrorPage";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));


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
          element={
            <ErrorPage
              kodeError="400"
              deskripsiError="Bad Request! Ada yang salah dengan permintaanmu."
              gambarError="https://illustrations.popsy.co/blue/crashed-error.svg"
            />
          }
        />
        <Route
          path="/error/401"
          element={
            <ErrorPage
              kodeError="401"
              deskripsiError="Unauthorized! Kamu tidak punya izin untuk mengakses halaman ini."
              gambarError="https://illustrations.popsy.co/blue/access-denied.svg"
            />
          }
        />
        <Route
          path="/error/403"
          element={
            <ErrorPage
              kodeError="403"
              deskripsiError="Forbidden! Akses ke sumber daya ini dilarang."
              gambarError="https://illustrations.popsy.co/blue/forbidden.svg"
            />
          }
        />
        <Route
          path="/error/404"
          element={
            <ErrorPage
              kodeError="404"
              deskripsiError="Not Found! Halaman yang kamu cari tidak dapat ditemukan."
              gambarError="https://illustrations.popsy.co/blue/page-not-found.svg"
            />
          }
        />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>
    </Routes>
  );
}

export default App;
