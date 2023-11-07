import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LangDropdown from '../../utils/LangDropdown';

const FarmerNavbar = () => {
    const navigate= useNavigate()
    const handleLogout = () =>{
        localStorage.clear()
        navigate('/')
    }
    return (
        <div className="py-4 px-10 shadow-md">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div className="logo">
              <Link to={"/farmer"} className="text-3xl">
                Farming
              </Link>
            </div>
            {/* language */}
            <div className='flex gap-x-5'>
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