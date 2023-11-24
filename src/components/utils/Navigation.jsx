import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Wrapper from "../home/Wrapper";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import AuthWrapper from "./AuthWrapper";
import FarmerWrapper from "../farmer/utils/FarmerWrapper";
import FarmerHome from "../../pages/farmer/FarmerHome";
import PartnerWrapper from "../partner/utils/PartnerWrapper";
import PartnerHome from "../../pages/Partner/PartnerHome";
import AdminWrapper from "../admin/utils/AdminWrapper";
import AdminHome from "../../pages/admin/AdminHome";
import DealRequest from "../../pages/Partner/DealRequest";
import Equipments from "../../pages/Partner/Equipments";
import AddEquipments from "../../pages/Partner/AddEquipments";
import Dashboard from "../../pages/Partner/Dashboard";
import Farmer from "../../pages/farmer/Farmer";
import Vehicle from "../../pages/farmer/Vehicle";
import Equipment from "../../pages/farmer/Equipment";
import Helper from "../../pages/farmer/Helper";
import Deals from "../../pages/farmer/Deals";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<AuthWrapper />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<FarmerWrapper />}>
        <Route path="/farmer" element={<Farmer />}>

          <Route path="home" element={<FarmerHome />} />
          <Route path="vehicle" element={<Vehicle />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="helper" element={<Helper />} />
          <Route path="deals" element={<Deals />} />
        </Route>
        </Route>

        <Route element={<PartnerWrapper />}>
          <Route path="/partner" element={<PartnerHome />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="deal-requests" element={<DealRequest />} />
            <Route path="equipments" element={<Equipments />} />
            <Route path="add-equipment" element={<AddEquipments />} />
          </Route>
        </Route>

        <Route element={<AdminWrapper />}>
          <Route path="/admin" element={<AdminHome />} />
        </Route>

        <Route path="*" element={<Link to={"/"}>Error page</Link>} />
      </Routes>
    </div>
  );
};

export default Navigation;
