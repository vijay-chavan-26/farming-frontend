import React from "react";
import { Link, NavLink } from "react-router-dom";
import LangDropdown from "../utils/LangDropdown";
import { useSelector } from "react-redux";
import { HomeData } from "../../language-data/HomeData";

const HomeNavbar = () => {
  const lang = useSelector((state) => state.lang.lang);
  return (
    <div className="py-4 px-10 shadow-md border-b bg-white">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="logo">
          <Link to={"/farmer"} className="text-3xl">
            Farming
          </Link>
        </div>

        <div className="flex gap-x-5 items-center">
          {/* language */}
          <LangDropdown />
          <div className="flex gap-x-5">
            <NavLink
              to={"/login"}
              className={'px-6 py-2 hover:bg-theme hover:text-white rounded-sm border border-theme text-theme duration-200'}
            >
              {HomeData[lang].loginBtn}
            </NavLink>
            <NavLink
              to={"/signup"}
              className={'px-6 py-2 bg-theme text-white rounded-sm border border-theme hover:text-theme hover:bg-transparent duration-200'}
            >
              {HomeData[lang].signupBtn}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
