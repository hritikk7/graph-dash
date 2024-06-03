import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { IoPieChartOutline } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";
import { FaRegCompass } from "react-icons/fa";
import { LuUserPlus2 } from "react-icons/lu";
import { MdOutlineErrorOutline } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
function Sidebar() {
  return (
    <div className="">
      <li className="mb-4 flex items-center justify-center">
        <a href="#" className="flex items-center text-gray-700 font-bold">
          <span className="mr-3">
            <IoBagHandleOutline />
          </span>
          UI Elements
        </a>
        <span className="ml-auto">
          <FaAngleRight />
        </span>
      </li>
      <li className="mb-4 flex items-center justify-center">
        <a href="#" className="flex items-center text-gray-700 font-bold">
          <span className="mr-3">
            <FaWpforms />
          </span>
          Form Elements
        </a>
        <span className="ml-auto">
          <FaAngleRight />
        </span>
      </li>
      <li className="mb-4 flex items-center justify-center">
        <a href="#" className="flex items-center text-gray-700 font-bold">
          <span className="mr-3">
            <IoPieChartOutline />
          </span>
          Charts
        </a>
        <span className="ml-auto">
          <FaAngleRight />
        </span>
      </li>
      <li className="mb-4 flex items-center justify-center">
        <a href="#" className="flex items-center text-gray-700 font-bold">
          <span className="mr-3">
            <CiViewTable />
          </span>
          Tables
        </a>
        <span className="ml-auto">
          <FaAngleRight />
        </span>
      </li>
      <li className="mb-4 flex items-center justify-center">
        <a href="#" className="flex items-center text-gray-700 font-bold">
          <span className="mr-3">
            <FaRegCompass />
          </span>
          Icons
        </a>
        <span className="ml-auto">
          <FaAngleRight />
        </span>
      </li>
      <li className="mb-4 flex items-center justify-center">
        <a href="#" className="flex items-center text-gray-700 font-bold">
          <span className="mr-3">
            <LuUserPlus2 />
          </span>
          User Pages
        </a>
        <span className="ml-auto">
          <FaAngleRight />
        </span>
      </li>
      <li className="mb-4 flex items-center justify-center">
        <a href="#" className="flex items-center text-gray-700 font-bold">
          <span className="mr-3">
            <MdOutlineErrorOutline />
          </span>
          Error Pages
        </a>
        <span className="ml-auto">
          <FaAngleRight />
        </span>
      </li>
      <li className="mb-4 flex items-center justify-center">
        <a href="#" className="flex items-center text-gray-700 font-bold">
          <span className="mr-3">
            <GrDocumentText />
          </span>
          Documentation
        </a>
        <span className="ml-auto">
          <FaAngleRight />
        </span>
      </li>
    </div>
  );
}

export default Sidebar;
