import React from "react";
import FarmerHeroBanner from "../../components/farmer/utils/FarmerHeroBanner";
import WantToKnowMore from "../../components/home/WantToKnowMore";
import Services from "../../components/home/Services";

const FarmerHome = () => {
  return (
    <div>
      <FarmerHeroBanner />
      <div className="mx-10">
        <Services />
      </div>
        <WantToKnowMore />
    </div>
  );
};

export default FarmerHome;
