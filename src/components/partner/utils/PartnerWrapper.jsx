import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PartnerSidebar from "./PartnerSidebar";

const PartnerWrapper = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");
    console.log(token && userType)

    if (token && userType) {
      if (userType !== "Partner") {
        localStorage.clear();
        navigate("/login");
        return;
      }
    } else {
      localStorage.clear();
      navigate("/login");
      return;
    }
  }, []);

  return (
    <div>
      <div className="grid grid-cols-[auto,1fr]">
      <PartnerSidebar />
      <div className="flex flex-col bg-themeBg min-w-0">
        <div className="h-16 shadow-md bg-theme2 w-full sticky top-0 z-10"></div>
        <div className="bg-white m-3 h-full">
          <Outlet />
        </div>
      </div>
    </div>
    </div>
  );
};

export default PartnerWrapper;
