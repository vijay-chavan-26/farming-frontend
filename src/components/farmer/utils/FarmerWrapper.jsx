import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FarmerNavbar from "./FarmerNavbar";

const FarmerWrapper = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");
    console.log(token && userType)

    if (token && userType) {
      if (userType !== "Farmer") {
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
      <div className="sticky top-0">
        <FarmerNavbar />
      </div>

      <Outlet />
    </div>
  );
};

export default FarmerWrapper;
