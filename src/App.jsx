import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import SidebarData from "./Data/SidebarData";
import { LuMonitorUp } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import DeviceStats from "./components/DeviceStats";
import CanvasJSReact from "@canvasjs/react-charts";
import SessionsByChannel from "./components/SessionsByChannel";
import SalesAnalytics from "./components/SalesAnalytics";
import CardTitle from "./components/CardTitle";
import Events from "./components/Events";
import Sessions from "./components/Sessions";
import SidebarWrapper from "./components/SidebarWrapper";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const App = () => {
 
  return (
    <div className="min-h-screen flex bg-gray-100">
      <SidebarWrapper />
      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center bg-white p-4 shadow-lg lg:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <span className="text-xl font-bold text-pink-600">Celestial</span>
        </header>
        <main className="flex-1 p-6">
          <header className="flex justify-between items-center mb-6">
            <nav className="flex space-x-32">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Calendar
              </a>
              <a
                href="#"
                className="text-blue-600 border-b-2 border-blue-600 hover:border-blue-700"
              >
                Statistic
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Employee
              </a>
            </nav>
            <div className="flex items-center space-x-16">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Help
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <MdOutlineMessage />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <FaRegBell />
              </a>

              <a href="#" className="text-gray-700 hover:text-blue-600">
                Evan Morales
              </a>
            </div>
          </header>
          <div className="flex flex-col min-h-screen  px-4 mb-4 -mx-4">
            <div className="w-full  ">
              <div className="flex  -mx-4">
                <Sessions />
                <Events />
                <DeviceStats />
              </div>
            </div>
            <div className="flex space-x-5 ">
              <SessionsByChannel />
              <SalesAnalytics />
              <CardTitle />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
