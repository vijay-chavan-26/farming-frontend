import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="px-4">
      <div className="my-5">
        <h1 className="font-semibold text-xl ">Hello {user.name}, </h1>
      </div>

      <div className="flex flex-wrap gap-y-5 w-full mt-10">
        <div className="flex gap-x-5 w-full">
          <div className="w-full bg-[#3A76EF] rounded-xl text-white">
            <div className="text-center py-5">
              <h4>Equipments</h4>
              <h1 className="font-semibold text-3xl mt-4">100</h1>
            </div>
          </div>
          <div className="w-full bg-[#A66DD4] rounded-xl text-white">

            <div className="text-center py-5">
              <h4>Vehicles</h4>
              <h1 className="font-semibold text-3xl mt-4">100</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-x-5 w-full">
          <div className="w-full bg-[#6ED3B2] rounded-xl text-white">
             <div className='text-center py-5'>
            <h4>Total Deals</h4>
            <h1 className='font-semibold text-3xl mt-4'>100</h1>
          </div>
          </div>
          <div className="w-full bg-[#63C7FF] rounded-xl text-white">
             <div className='text-center py-5'>
            <h4>Accepted Deals</h4>
            <h1 className='font-semibold text-3xl mt-4'>100</h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
