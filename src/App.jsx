import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import ErrorPage, { ERROR_CONFIG } from "./pages/ErrorPage";

function App() {
  return (
    <>
      <div id="app-container" className="bg-gray-100 h-screen flex w-full">
        <div
          id="layout-wrapper"
          className="flex flex-row flex-1 w-full overflow-hidden"
        >
          <Sidebar />
          <div
            id="main-content"
            className="flex-1 p-4 flex flex-col overflow-y-auto"
          >
            <Header />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              
              {/* Error Routes */}
              <Route path="/error/400" element={
                <ErrorPage {...ERROR_CONFIG[400]} />
              } />
              <Route path="/error/401" element={
                <ErrorPage {...ERROR_CONFIG[401]} />
              } />
              <Route path="/error/403" element={
                <ErrorPage {...ERROR_CONFIG[403]} />
              } />
              <Route path="/error/404" element={
                <ErrorPage {...ERROR_CONFIG[404]} />
              } />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
