import React from "react";
import { FaTractor } from "react-icons/fa";
import { FaPersonDigging } from "react-icons/fa6";
import { GiFarmer } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FarmerData } from "../../language-data/FarmerData";

const Services = () => {
  const lang = useSelector((state) => state.lang.lang);
  return (
    <div className="mb-10 -mt-16">
      <h1 className="text-3xl font-semibold text-center">
        {FarmerData[lang].our} <span className="text-theme3">{FarmerData[lang].services}</span>
      </h1>

      <div className="flex gap-x-10 justify-between mt-16">
        <Link to={'/farmer/vehicle'} className="w-[32%] justify-between flex flex-col items-center text-center gap-y-5 cursor-pointer p-4 rounded-md shadow-md bg-theme text-white">
          <div className="bg-theme3 w-16 h-16 rounded-full flex items-center justify-center">
            <FaTractor size={35} />
          </div>
          <h1 className="text-xl font-semibold">{FarmerData[lang].transport} {FarmerData[lang].vehicle}</h1>
          <p className="text-sm">
          {FarmerData[lang].transportDesc}
          </p>
          <Link to={'/farmer/vehicle'} className="bg-theme2 text-black px-4 py-2 rounded-sm">{FarmerData[lang].bookNow}</Link>
        </Link>
        <Link to={'/farmer/helpers'} className="w-[32%] justify-between flex flex-col items-center text-center gap-y-5 cursor-pointer p-4 rounded-md shadow-md bg-theme2 text-black">
          <div className="bg-theme3 w-16 h-16 rounded-full flex items-center justify-center">
            <FaPersonDigging size={35} />
          </div>
          <h1 className="text-xl font-semibold">{FarmerData[lang].hireHelper} </h1>
          <p className="text-sm">
          {FarmerData[lang].hireHelperDesc}
          </p>

          <Link to={'/farmer/equipment'} className="bg-theme text-white px-4 py-2 rounded-sm">{FarmerData[lang].hireNow}</Link>
        </Link>
        <Link to={'/farmer/vehicle'} className="w-[32%] justify-between flex flex-col items-center text-center gap-y-5 cursor-pointer p-4 rounded-md shadow-md bg-theme text-white">
          <div className="bg-theme3 w-16 h-16 rounded-full flex items-center justify-center">
            <GiFarmer size={35} />
          </div>
          <h1 className="text-xl font-semibold">{FarmerData[lang].rentalEquipment}</h1>
          <p className="text-sm">
          {FarmerData[lang].rentalEquipmentDesc}
          </p>
          <Link to={'/farmer/equipment'} className="bg-theme2 text-black px-4 py-2 rounded-sm">{FarmerData[lang].bookNow}</Link>
        </Link> 
      </div>
    </div>
  );
};

export default Services;
