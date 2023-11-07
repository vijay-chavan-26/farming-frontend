import React, { useState } from "react";
import Dropdown from "../../components/utils/Dropdown";

const AddEquipments = () => {
  const [status, setStatus] = useState(true);
  const [selectedType, setSelectedType] = useState(null);
  return (
    <div className="p-4">
      <h1 className="font-semibold text-xl text-theme">Add Equipment</h1>
      <div>
        <form>
          <div className="w-2/3 mt-5">
            <label htmlFor="name" className="formLabel">
              Equipment/Vehicle Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Eg. Tractor"
              className="formInput"
            />
          </div>

          <div className="w-2/3 mt-5">
            <label htmlFor="desc" className="formLabel">
              Add Description:
            </label>
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="3"
              className="formInput"
              placeholder="Eg. tractor with trolley and its implements"
            ></textarea>
          </div>

          <div className="w-2/3 mt-5">
            <label htmlFor="images" className="formLabel">
              Select Type:
            </label>
            <Dropdown
              options={[
                { label: "Equipment", value: "equipment" },
                { label: "Vehicle", value: "vehicle" },
              ]}
              selectedOption={selectedType}
              setSelectedOption={setSelectedType}
            />
          </div>

          <div className="w-2/3 mt-5">
            <label htmlFor="price" className="formLabel">
              Price Per Day:
            </label>
            <input
              type="text"
              id="price"
              placeholder="Eg. 1299"
              className="formInput"
              onChange={(e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, "")
                  .slice(0, 10);
              }}
            />
          </div>

          <div className="w-2/3 mt-5">
            <label htmlFor="images" className="formLabel">
              Choose Images:
            </label>
            <input
              type="file"
              accept="image/*"
              id="images"
              className="formInput"
            />
          </div>

          <div className="w-2/3 mt-5">
            <label htmlFor="status" className="formLabel">
              Status:
            </label>
            <div className={`mt-3`}>
              <div className="border rounded inline-flex  text-white">
                <span
                  className={`${
                    status ? "text-themeText1" : "bg-red-500"
                  } px-5 py-2 rounded-l cursor-pointer text-sm`}
                  onClick={() => setStatus(false)}
                >
                  Inactive
                </span>
                <span
                  className={`${
                    status ? "bg-green-500" : "text-themeText1"
                  } px-5 py-2 rounded-r cursor-pointer text-sm`}
                  onClick={() => setStatus(true)}
                >
                  Active
                </span>
              </div>
            </div>
          </div>

          <div className="my-10">
            <button className="px-6 py-2 border bg-theme rounded-sm text-white hover:border-theme hover:text-theme hover:bg-transparent duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipments;
