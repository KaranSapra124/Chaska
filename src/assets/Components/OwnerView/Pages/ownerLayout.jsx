import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const OwnerLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => {
          // console.log("Clicked");
          setIsSidebarOpen(!isSidebarOpen);
          console.log(isSidebarOpen);
        }}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <div className="flex ">
        <aside
          id="sidebar-multi-level-sidebar"
          // className={
          //   isSidebarOpen &&
          //   `bg-black text-white left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0`
          // }
          className=""
          aria-label="Sidebar"
        >
          {/* Sidebar content */}
          <div
            className={` ${
              isSidebarOpen &&
              "bg-transparent bg-black text-white flex flex-col w-full md:w-fit p-2"
            } ${
              !isSidebarOpen &&
              " bg-black text-white w-full md:w-auto flex flex-col p-2 text-xl font-semibold h-lvh"
            }`}
          >
            <button className="pb-4">Orders</button>
            <button
              className="pb-4"
              onClick={() => {
                navigate("/owner/dashboard/products");
              }}
            >
              Products
            </button>
          </div>
        </aside>
        <Outlet />
      </div>
    </>
  );
};

export default OwnerLayout;
