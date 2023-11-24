import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import LangDropdown from '../../utils/LangDropdown';
import FarmingLogo from '../../../assets/FarmingLogo.png'

const FarmerNavbar = () => {
    const navigate= useNavigate()
    const handleLogout = () =>{
        localStorage.clear()
        navigate('/')
    }
    return (
        <div className="py-2 px-10 shadow-md bg-white">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div className="logo">
              <Link to={"/farmer"} className="text-3xl">
              <img src={FarmingLogo} alt="farming logo" width={140} />

              </Link>
            </div>
            
            {/* language */}
            <div className='flex gap-x-5'>
            <div className='flex items-center gap-x-5 mt-2'>
            <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "active navbar-links flex items-center gap-x-4"
                        : "navbar-links flex items-center gap-x-4"
                    }
                    to={'/farmer/home'}
                  >
                      Home
                  </NavLink>
            <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "active navbar-links flex items-center gap-x-4"
                        : "navbar-links flex items-center gap-x-4"
                    }
                    to={'/farmer/equipment'}
                  >
                      Equipments
                  </NavLink>
            <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "active navbar-links flex items-center gap-x-4"
                        : "navbar-links flex items-center gap-x-4"
                    }
                    to={'/farmer/vehicle'}
                  >
                      Vehicle
                  </NavLink>
            <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "active navbar-links flex items-center gap-x-4"
                        : "navbar-links flex items-center gap-x-4"
                    }
                    to={'/farmer/deals'}
                  >
                      Deals
                  </NavLink>
            </div>
              <LangDropdown />
              <div>
                <button type='button' onClick={handleLogout} className='px-6 py-2 border bg-black text-white'>Logout</button>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default FarmerNavbar