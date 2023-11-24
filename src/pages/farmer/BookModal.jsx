import { DatePicker, Modal, message } from "antd";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API_URL from "../../components/utils/ApiRequests";

const BookModal = ({ text, item }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    bookingDate: "",
    returnDate: "",
  });

  const user = useSelector((state) => state.user.user);

  const handleCancel = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (
      data.name === "" ||
      data.email === "" ||
      data.mobile_number === "" ||
      data.bookingDate === "" ||
      data.returnDate === ""
    ) {
      message.error("Please fill all fields!");
      return;
    }

    const formData = {
      ...data,
      itemId: item._id,
      farmerId: user._id,
      itemType: item.type,
    };

    try {
      const response = await fetch(`${API_URL}/deals/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.message) {
        message.success("Equipment/Vehicle Booked successfully!");
        console.log("Equipment/Vehicle Booked successfully:", data);
        setData({
          name: "",
          email: "",
          mobile_number: "",
          bookingDate: "",
          returnDate: "",
        });
        setOpen(false);
      } else {
        message.error("Something went wrong!");
        console.error("Error uploading:", error);
      }
    } catch (error) {
      message.error("Something went wrong!");
      console.error("Error uploading:", error);
    }
  };

  useEffect(() => {
    console.log(user);
    setData({
      ...data,
      name: user?.name,
      email: user?.email,
      mobile_number: user?.mobile_number,
      partnerId: item.partnerId
    });
  }, [user]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <button
        type="button"
        className="bg-theme3 text-white px-4 py-2 rounded-sm"
        onClick={() => setOpen(true)}
      >
        {text}
      </button>

      <Modal
        open={open}
        title="Book Vehicle Slot"
        onCancel={handleCancel}
        footer={[
          <button
            key={"cancel"}
            className="py-1 px-4 border rounded-sm text-red-500 border-red-500"
            onClick={handleCancel}
          >
            Cancel
          </button>,
          <button
            key={"submit"}
            className=" ml-5 py-1 px-4  border rounded-sm bg-blue-500 text-white"
            onClick={handleSubmit}
          >
            Book Slot
          </button>,
        ]}
      >
        <div>
          <div className=" mt-5">
            <label htmlFor="name" className="formLabel">
              Enter your name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Eg. Vijay Chavan"
              className="formInput"
              onChange={handleChange}
              value={data.name}
              
            />
          </div>

          <div className=" mt-5">
            <label htmlFor="mobile_number" className="formLabel">
              mobile number:
            </label>
            <input
              type="text"
              id="mobile_number"
              placeholder="Eg. 7775860364"
              className="formInput"
              
              onChange={(e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, "")
                  .slice(0, 10);
                handleChange(e);
              }}
              value={data.mobile_number}
            />
          </div>

          <div className=" mt-5">
            <label htmlFor="email" className="formLabel">
              Email Id:
            </label>
            <input
              type="text"
              id="number"
              placeholder="Eg. vijay@gmail.com"
              className="formInput"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.email}
            />
          </div>

          <div className=" mt-5">
            <label htmlFor="bookingDate" className="formLabel">
              Booking Date:
            </label>
            <DatePicker
            value={data.bookingDate ? moment(data.bookingDate) : null}
              onChange={(date, dateString) => {
                console.log(date, dateString);
                setData({
                  ...data,
                  bookingDate: dateString,
                });
              }}
              disabledDate={(current) =>
                current && current < moment().startOf("day")
              }
            />
          </div>

          <div className=" mt-5">
            <label htmlFor="returnDate" className="formLabel">
              Return Date:
            </label>
            <DatePicker
            value={data.returnDate ? moment(data.returnDate) : null}
              onChange={(date, dateString) => {
                console.log(date, dateString);
                setData({
                  ...data,
                  returnDate: dateString,
                });
              }}
              disabledDate={(current) =>
                current && current < moment().startOf("day")
              }
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookModal;
