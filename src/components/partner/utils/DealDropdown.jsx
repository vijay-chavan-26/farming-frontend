import { Dropdown } from "antd";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

const DealDropdown = ({ item, onReject, onAccept }) => {
  const handleMenuClick = (e) => {
    console.log("click", e);
    if(e.key === 'accept'){
        console.log("Accept")
        onAccept(item)
    }else if(e.key === 'reject'){
        console.log("Reject")
        onReject(item)
    }
  };

  let items = [
    {
      key: "accept",
      label: (
        <button className={`text-green-500 w-full px-4 rounded-sm `}>
          Accept
        </button>
      ),
    },
    {
      key: "reject",
      label: (
        <button className={`text-red-500 w-full px-4 rounded-sm `}>
          Reject
        </button>
      ),
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <Dropdown menu={menuProps} trigger={["click"]}>
      <div className="text-center">
        <button type="button">
          <BiDotsVerticalRounded className="table-edit-dots" />
        </button>
      </div>
    </Dropdown>
  );
};

export default DealDropdown;
