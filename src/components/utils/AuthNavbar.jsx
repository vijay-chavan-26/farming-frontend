import React from "react";
import LangDropdown from "./LangDropdown";
import { Link } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <div className="py-4 px-10 shadow-md">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="logo">
          <Link to={"/"} className="text-3xl">
            Farming
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
