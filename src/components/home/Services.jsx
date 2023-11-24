import React from "react";
import { FaTractor } from "react-icons/fa";
import { FaPersonDigging } from "react-icons/fa6";
import { GiFarmer } from "react-icons/gi";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="mb-10 -mt-16">
      <h1 className="text-3xl font-semibold text-center">
        Our <span className="text-theme3">Services</span>
      </h1>

      <div className="flex gap-x-10 justify-between mt-16">
        <Link to={'/farmer/vehicle'} className="flex flex-col items-center text-center gap-y-5 cursor-pointer p-4 rounded-md shadow-md bg-theme text-white">
          <div className="bg-theme3 w-16 h-16 rounded-full flex items-center justify-center">
            <FaTractor size={35} />
          </div>
          <h1 className="text-xl font-semibold">Transport Vehicles</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            magni tenetur perferendis quis autem? Animi?
          </p>
          <Link to={'/farmer/vehicle'} className="bg-theme2 text-black px-4 py-2 rounded-sm">Book Now</Link>
        </Link>
        <Link to={'/farmer/vehicle'} className="flex flex-col items-center text-center gap-y-5 cursor-pointer p-4 rounded-md shadow-md bg-theme2 text-black">
          <div className="bg-theme3 w-16 h-16 rounded-full flex items-center justify-center">
            <FaPersonDigging size={35} />
          </div>
          <h1 className="text-xl font-semibold">Hire Helpers</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            magni tenetur perferendis quis autem? Animi?
          </p>

          <Link to={'/farmer/helper'} className="bg-theme text-white px-4 py-2 rounded-sm">Hire Now</Link>
        </Link>
        <Link to={'/farmer/vehicle'} className="flex flex-col items-center text-center gap-y-5 cursor-pointer p-4 rounded-md shadow-md bg-theme text-white">
          <div className="bg-theme3 w-16 h-16 rounded-full flex items-center justify-center">
            <GiFarmer size={35} />
          </div>
          <h1 className="text-xl font-semibold">Rent Farming Equipments</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            magni tenetur perferendis quis autem? Animi?
          </p>
          <Link to={'/farmer/equipment'} className="bg-theme2 text-black px-4 py-2 rounded-sm">Rent Now</Link>
        </Link> 
      </div>
    </div>
  );
};

export default Services;
