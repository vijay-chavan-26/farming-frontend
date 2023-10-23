import React from "react";
import LangDropdown from "./LangDropdown";

const AuthNavbar = () => {
  return (
    <div className="py-4 px-10 shadow-md">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="logo">
          <h1 className="text-3xl">Farming</h1>
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
