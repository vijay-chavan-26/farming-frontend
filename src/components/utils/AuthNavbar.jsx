import React from "react";
import LangDropdown from "./LangDropdown";
import { Link } from "react-router-dom";
import FarmingLogo from '../../assets/FarmingLogo.png'

const AuthNavbar = () => {
  return (
    <div className="py-2 px-10 shadow-md">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="logo">
          <Link to={"/"} className="text-3xl">
          <img src={FarmingLogo} alt="farming logo" width={140} />
          </Link>
        </div>
        {/* language */}
        <div>
          <LangDropdown />
        </div>
      </div>
    </div>
  );
};

export default AuthNavbar;
