import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainBody = () => {
  return (
    <div className="flex pt-20 h-full">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainBody;
