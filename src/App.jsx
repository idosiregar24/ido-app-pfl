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
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
