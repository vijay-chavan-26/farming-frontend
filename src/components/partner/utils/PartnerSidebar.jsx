import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SideBarImg from "../../../assets/sidebarimg.svg";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdDashboard, MdAssignmentAdd } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import { IoExit } from "react-icons/io5";
import { clearUser } from "../../../redux/reducers/User";
import { useDispatch } from "react-redux";
import FarmingLogo from '../../../assets/FarmingLogo.png'

const SidebarMenuList = [
  {
    link: "/partner/dashboard",
    label: "Dashboard",
    icon: <MdDashboard size={22} />,
  },
  {
    link: "/partner/deal-requests",
    label: "Deal Requests",
    icon: <FaHandshake size={23} />,
  },
  {
    link: "/partner/equipments",
    label: "Equipments",
    icon: <GiFarmTractor size={23} />,
  },
  {
    link: "/partner/add-equipment",
    label: "Add Equipment",
    icon: <MdAssignmentAdd size={22} />,
  },
];

const PartnerSidebar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  // const [openDropdown, setOpenDropdown] = useState<string>("");
  // const [openSubMenuDropdown, setOpenSubMenuDropdown] = useState<string>("");

  const navigate = useNavigate();

  const currentLocation = useLocation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <div
      className={`${
        openMenu ? "w-64" : "w-20"
      } duration-300 h-screen sticky top-0 z-20 shadow-md`}
    >
      <div className="bg-theme2 h-full">
        <div className="flex flex-col h-full">
          <div className="mt-2 flex justify-between items-center">
            <NavLink
              className={`${
                !openMenu && "hidden"
              } mx-5 duration-300 text-decoration-none whitespace-nowrap text-3xl`}
              to="/partner/dashboard"
            >
              <img src={FarmingLogo} alt="farming logo" width={120} />
            </NavLink>
            <div className={`flex justify-center ${!openMenu ? 'w-full mt-2': 'mr-4' }`}><BiMenuAltLeft
              size={28}
              className="cursor-pointer"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            /></div>
          </div>

          <div className="flex justify-between flex-col h-full ">
            <div
              className={`mt-5 flex flex-col gap-y-2 duration-300 ${
                !openMenu
                  ? "h-full"
                  : "overflow-y-auto overflow-x-hidden h-[28rem]"
              }`}
            >
              {SidebarMenuList.map((item, index) => (
                <React.Fragment key={index}>
                  <NavLink
                    key={index}
                    className={({ isActive }) =>
                      isActive
                        ? "active sidebar-links flex items-center gap-x-4"
                        : "sidebar-links flex items-center gap-x-4"
                    }
                    to={item.link}
                  >
                    <span className="ml-2">{item.icon}</span>
                    <span className={`${!openMenu && "hidden"} duration-300`}>
                      {item.label}
                    </span>
                  </NavLink>
                </React.Fragment>
              ))}
              <div>
                <button
                  className="pending  w-full sidebar-links flex items-center cursor-pointer gap-x-4"
                  onClick={handleLogout}
                >
                  <span className="ml-2">
                    {/* <img src={SideBarImg} alt="icons" /> */}
                    <IoExit size={22} />
                  </span>
                  <span className={`${!openMenu && "hidden"} duration-300`}>
                    Logout
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PartnerSidebar;
