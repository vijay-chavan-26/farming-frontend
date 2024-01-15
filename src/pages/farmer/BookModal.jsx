import { DatePicker, Modal, message } from "antd";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API_URL from "../../components/utils/ApiRequests";
import dayjs from "dayjs";
import Dropdown from "../../components/utils/Dropdown";

const BookModal = ({ text, item, onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [selectedQty, setSelectedQty] = useState(null);
  const [options, setOptions] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    bookingDate: "",
    returnDate: "",
    bookedQuantity: "",
    partnerId: "",
  });

  const user = useSelector((state) => state.user.user);

  const handleCancel = () => {
    setOpen(false);
    setData({
      ...data,
      bookingDate: "",
      returnDate: "",
    });
    setSelectedQty(null);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(data, item, selectedQty);
    setData({
      ...data,
      bookingDate: "",
      returnDate: "",
    });
    setOpen(false);
    setSelectedQty(null);
    // console.log(user);
  };

  useEffect(() => {
    console.log(user);
    setData({
      ...data,
      name: user?.name,
      email: user?.email,
      mobile_number: user.mobile_number,
      partnerId: item.partnerId._id,
    });
  }, [user]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    const options = Array.from(
      { length: parseInt(item.availableQuantity) },
      (_, index) => ({
        label: (index + 1).toString(),
        value: index + 1,
      })
    );

    setOptions(options);
  }, [item]);

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
        title="Make a Booking"
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
            <label htmlFor="bookedQuantity" className="formLabel">
              Booking Quantity:
            </label>

            <Dropdown
              options={options}
              selectedOption={selectedQty}
              setSelectedOption={setSelectedQty}
            />
          </div>

          <div className=" mt-5">
            <label htmlFor="bookingDate" className="formLabel">
              Booking Date:
            </label>
            <DatePicker
              format={"DD/MM/YYYY"}
              value={
                data.bookingDate ? dayjs(data.bookingDate, "YYYY/MM/DD") : null
              }
              onChange={(date, dateString) => {
                console.log(date, dateString);
                setData({
                  ...data,
                  bookingDate: date.format("YYYY/MM/DD"),
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
              format={"DD/MM/YYYY"}
              value={
                data.returnDate ? dayjs(data.returnDate, "YYYY/MM/DD") : null
              }
              onChange={(date, dateString) => {
                if (!data.bookingDate) {
                  message.error("First select booking date!");
                  return;
                }
                console.log(date, dateString);
                setData({
                  ...data,
                  returnDate: date.format("YYYY/MM/DD"),
                });
              }}
              disabledDate={(current) =>
                current && current < dayjs(data.bookingDate).startOf("day")
              }
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookModal;
