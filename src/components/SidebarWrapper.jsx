import React , {useState}from 'react'
import Sidebar from './Sidebar'
import { LuMonitorUp } from 'react-icons/lu'
function SidebarWrapper() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div style={{}}
        className={`fixed inset-y-0 left-0 w-64 bg-white p-4 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
      >
        <div className="mb-8">
          <div className="flex items-center">
            <div className="bg-pink-600 h-10 w-10 mr-2 flex items-center justify-center text-white text-2xl font-bold rounded-full">
              C
            </div>
            <span className="text-2xl font-bold text-pink-600">Celestial</span>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-gray-300 h-10 w-10 rounded-full mr-2"></div>
            <div>
              <p className="font-bold">Kenneth Osborne</p>
              <p className="text-sm text-gray-600">Welcome</p>
            </div>
          </div>
          <input
            type="text"
            placeholder="Type to search..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-700 font-bold">
                <span className="mr-2">
                  {" "}
                  <LuMonitorUp />
                </span>
                Dashboard
                <span className="ml-auto bg-red-500 text-white rounded px-2 py-1 text-xs">
                  New
                </span>
              </a>
            </li>
            <Sidebar />

            {/* Add more navigation items here */}
          </ul>
        </nav>
      </div>
  )
}

export default SidebarWrapper