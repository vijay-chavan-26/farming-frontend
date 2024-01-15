import React, { useEffect, useState } from "react";
import Dropdown from "../../components/utils/Dropdown";
import { message } from "antd";
import API_URL from "../../components/utils/ApiRequests";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddEquipments = () => {
  const [status, setStatus] = useState(true);
  const [selectedType, setSelectedType] = useState(null);
  const user = useSelector((state) => state.user.user);
  const navigate= useNavigate()

  const [data, setData] = useState({
    name: "",
    desc: "",
    type: "",
    price: "",
    totalQuantity: "",
    status: true,
    img: {},
  });

  useEffect(() => {
    setData({ ...data, status: status });
  }, [status]);

  useEffect(() => {
    setData({ ...data, type: selectedType?.label });
  }, [selectedType]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleFileChange = (e) => {
    // console.log(e.target.files[0])
    setData({ ...data, img: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.name === "" ||
      data.desc === "" ||
      data.type === "" ||
      data.price === "" ||
      data.totalQuantity === "" ||
      data.img === ""
    ) {
      message.error("Please fill all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("file", data.img);
    formData.append("name", data.name);
    formData.append("desc", data.desc);
    formData.append("type", data.type);
    formData.append("price", data.price);
    formData.append("totalQuantity", data.totalQuantity);
    formData.append("status", data.status);
    formData.append("partnerId", user?._id);

    try {
      // Use fetch or your preferred HTTP library to send the file to the server
      const response = await fetch(`${API_URL}/partner/create-equipment`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.message) {
        message.success("Added successfully!");
        console.log("File uploaded successfully:", data);
        setData({
          name: "",
          desc: "",
          type: "",
          price: "",
          totalQuantity: "",
          status: true,
          img: {},
        });
        setSelectedType(null)
        navigate(-1)
      } else {
        message.error("Something went wrong!");
        console.error("Error uploading file:", error);
      }
    } catch (error) {
      message.error("Something went wrong!");
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div className="p-4">
      <h1 className="font-semibold text-xl text-theme">Add Equipment</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="w-2/3 mt-5">
            <label htmlFor="name" className="formLabel">
              Equipment/Vehicle Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Eg. Tractor"
              className="formInput"
              onChange={handleChange}
              value={data.name}
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
              onChange={handleChange}
              value={data.desc}
            ></textarea>
          </div>

          <div className="w-2/3 mt-5">
            <label htmlFor="images" className="formLabel">
              Select Type:
            </label>
            <Dropdown
              options={[
                { label: "Equipment", value: "Equipment" },
                { label: "Vehicle", value: "Vehicle" },
              ]}
              selectedOption={selectedType}
              setSelectedOption={setSelectedType}
            />
          </div>

          <div className="w-2/3 mt-5">
            <label htmlFor="totalQuantity" className="formLabel">
            Total Quantity:
            </label>
            <input
              type="text"
              id="totalQuantity"
              placeholder="Eg. 5"
              className="formInput"
              value={data.totalQuantity}
              onChange={(e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, "")
                  .slice(0, 10);
                handleChange(e);
              }}
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
              value={data.price}
              onChange={(e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, "")
                  .slice(0, 10);
                handleChange(e);
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
              id="img"
              className="formInput"
              onChange={handleFileChange}
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
            <button
              type="submit"
              className="px-6 py-2 border bg-theme rounded-sm text-white hover:border-theme hover:text-theme hover:bg-transparent duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipments;
