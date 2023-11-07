import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthNavbar from './AuthNavbar'

const AuthWrapper = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");

    if (token || userType) {
      if(userType==="Farmer"){
        navigate("/farmer");
        return;
      }else if(userType==="Partner"){
        navigate("/partner");
        return;
      }else if(userType==="Admin"){
        navigate("/Admin");
        return;
      }
    } 
  }, []);
  return (
    <div>
        <div>
            <AuthNavbar />
        </div>

        <Outlet />
    </div>
  )
}

export default AuthWrapper