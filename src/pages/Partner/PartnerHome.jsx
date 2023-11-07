import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const PartnerHome = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/partner")
      navigate("/partner/dashboard");
  }, [location.pathname]);
  return (
    <>
      <Outlet />
    </>
  );
}

export default PartnerHome