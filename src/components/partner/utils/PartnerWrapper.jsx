import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PartnerSidebar from "./PartnerSidebar";
import API_URL from "../../utils/ApiRequests";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "../../../redux/reducers/User";
import { IoPersonCircle } from "react-icons/io5";

const PartnerWrapper = () => {
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

  useEffect(() => {
    console.log(user);
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");
    console.log(token && userType);

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
  }, [user]);

  return (
    <div>
      <div className="grid grid-cols-[auto,1fr]">
        <PartnerSidebar />
        <div className="flex flex-col bg-themeBg min-w-0">
          <div className="h-16 shadow-md bg-theme2 w-full sticky py-3 top-0 z-10">
            <div className="flex items-center h-full justify-end pr-5 gap-x-2 text-themeText1">
              <IoPersonCircle size={40} className="text-theme" />
              <p>{user.name}</p>
            </div>
          </div>
          <div className="bg-white m-3 h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWrapper;
