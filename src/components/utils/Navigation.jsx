import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Wrapper from "./Wrapper";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import PartnerSignup from "../../pages/PartnerSignup";
import FarmerSignup from "../../pages/FarmerSignup";
import AuthWrapper from "./AuthWrapper";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<AuthWrapper />}>
          <Route path="/login" element={<Login />} />
          <Route path="/farmer-signup" element={<FarmerSignup />} />
          <Route path="/partner-signup" element={<PartnerSignup />} />
        </Route>

        <Route path="*" element={<Link to={"/"}>Error page</Link>} />
      </Routes>
    </div>
  );
};

export default Navigation;
