import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminWrapper = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");
    console.log(token && userType)

    if (token && userType) {
      if (userType !== "Admin") {
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
      <div>AdminWrapper</div>

      <Outlet />
    </div>
  );
};

export default AdminWrapper;
