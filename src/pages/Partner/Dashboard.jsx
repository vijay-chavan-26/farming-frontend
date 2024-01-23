import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { get_request } from "../../components/utils/ApiRequests";
import API_URL from "../../components/utils/ApiRequests";

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const [equipment, setEquipment] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [totalDeals, setTotalDeals] = useState([]);
  const [acceptedDeals, setAcceptedDeals] = useState([]);

  const fetchUserEquipmentData = async () => {
    console.log(user);
    try {
      const res = await get_request(
        `${API_URL}/partner/get-equipments/by-id/${user._id}`
      );
      if (res) {
        const updatedRes = res.filter((item) => item.type === "Equipment");
        return updatedRes;
      } else {
        message.error("Something went wrong!");
        return;
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong!");
      return;
    }
  };

  const fetchUserVehicleData = async () => {
    console.log(user)
    try {
      const res = await get_request(`${API_URL}/partner/get-equipments/by-id/${user._id}`);
      if (res) {
        console.log(res)
        const updatedRes = res.filter((item)=>item.type==="Vehicle")
        return updatedRes;
      } else {
        message.error("Something went wrong!");
        return;
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong!");
      return;
    }
  };

  const fetchDealsData = async () => {
    try {
      const res = await get_request(`${API_URL}/deals/get-deals-user/${user._id}`);
      console.log(res)
      if (res.message) {
        // const updatedData = res.deals.filter(
        //   (item) => item.status === activeTable
        // );
        return res.deals;
      } else {
        // message.error("Something went wrong!");
        return;
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong!");
      return;
    }
  };

  useEffect(() => {
    if (user._id) {
      fetchUserEquipmentData().then((res) => {
        setEquipment(res);
      });
      fetchUserVehicleData().then((res) => {
        setVehicle(res);
      });
      fetchDealsData().then((res) => {
        setTotalDeals(res);
        setAcceptedDeals(res.filter((item)=>item.status==="Accepted"));
      });
    }
  }, [user]);
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
              <h1 className="font-semibold text-3xl mt-4">{equipment.length}</h1>
            </div>
          </div>
          <div className="w-full bg-[#A66DD4] rounded-xl text-white">
            <div className="text-center py-5">
              <h4>Vehicles</h4>
              <h1 className="font-semibold text-3xl mt-4">{vehicle.length}</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-x-5 w-full">
          <div className="w-full bg-[#6ED3B2] rounded-xl text-white">
            <div className="text-center py-5">
              <h4>Total Deals</h4>
              <h1 className="font-semibold text-3xl mt-4">{totalDeals.length}</h1>
            </div>
          </div>
          <div className="w-full bg-[#63C7FF] rounded-xl text-white">
            <div className="text-center py-5">
              <h4>Accepted Deals</h4>
              <h1 className="font-semibold text-3xl mt-4">{acceptedDeals.length}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
