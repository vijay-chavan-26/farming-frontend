import React from "react";
import HomeNavbar from "./HomeNavbar";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <div>
      <div className="sticky top-0">
        <HomeNavbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Wrapper;
