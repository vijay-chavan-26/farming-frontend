import { Dropdown } from "antd";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

const ActionDropdown = ({ item }) => {
  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  const items = [
    {
      key: "viewDetails",
      label: <button>View Details</button>,
    },
    {
      key: "edit",
      label: <button>Edit</button>,
    },
    {
      key: "delete",
      label: <button className="text-red-500">Delete</button>,
    },
    {
      key: "status",
      label: (
        <button
          className={`text-white w-full px-4 rounded-sm ${
            !item.status ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {item.status ? "Deactivate Item" : "Activate Item"}
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

export default ActionDropdown;
