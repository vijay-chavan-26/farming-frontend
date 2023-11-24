import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Farmer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/farmer")
      navigate("/farmer/home");
  }, [location.pathname]);
  return (
    <>
      <Outlet />
    </>
  );
}

export default Farmer