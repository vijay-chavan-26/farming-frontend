import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FarmerNavbar from "./FarmerNavbar";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "../../../redux/reducers/User";
import API_URL from '../../utils/ApiRequests'

const FarmerWrapper = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const verifyUser = () => {
    const token = localStorage.getItem("token");
    fetch(`${API_URL}/auth/verify/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.message) {
          dispatch(setUser(data.user));
          console.log("Verification successful:", data);
        } else {
          localStorage.removeItem("token");
          dispatch(clearUser());
          navigate("/login");
        }
      })
      .catch((error) => {
        localStorage.removeItem("token");
        dispatch(clearUser());
        navigate("/login");
        console.error("Error during verification:", error);
      });
  };
  useEffect(() => {
    verifyUser();
  }, []);

  // useEffect(() => {
  //   console.log(user);
  //   const token = localStorage.getItem("token");
  //   const userType = localStorage.getItem("userType");
  //   console.log(token && userType);

  //   if (token && userType) {
  //     if (userType !== "Partner") {
  //       localStorage.clear();
  //       navigate("/login");
  //       return;
  //     }
  //   } else {
  //     localStorage.clear();
  //     navigate("/login");
  //     return;
  //   }
  // }, [user]);


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
      <div className="sticky top-0 z-10">
        <FarmerNavbar />
      </div>

      <Outlet />
    </div>
  );
};

export default FarmerWrapper;
