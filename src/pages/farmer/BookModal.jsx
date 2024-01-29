import { DatePicker, Modal, Steps, message } from "antd";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API_URL from "../../components/utils/ApiRequests";
import dayjs from "dayjs";
import Dropdown from "../../components/utils/Dropdown";
import Cash from "../../assets/Cash.svg";
import Card from "../../assets/Card.svg";
import Gpay from "../../assets/Gpay.svg";
import NetBanking from "../../assets/NetBanking.svg";
import UPI from "../../assets/UPI.svg";

const BookModal = ({ text, item, onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [selectedQty, setSelectedQty] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [options, setOptions] = useState(null);
  const [payment, setPayment] = useState("");
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
    setCurrentStep(0);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleNextStep = () => {
    if (
      data.name === "" ||
      data.email === "" ||
      data.mobile_number === "" ||
      data.bookingDate === "" ||
      data.returnDate === ""
    ) {
      message.error("Please fill all fields!");
      return;
    } else if (selectedQty === null) {
      message.error("Please select quantity!");
      return;
    }

    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = async (e) => {
    console.log(item)
    e.preventDefault();
    if (selectedQty === null) {
      message.error("Please select quantity!");
      return;
    }
    onSubmit(data, item, selectedQty);
    setData({
      ...data,
      bookingDate: "",
      returnDate: "",
    });
    setOpen(false);
    setSelectedQty(null);
    setCurrentStep(0);
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

  const renderBookingDetailsStep = () => (
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
            e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
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
          value={data.returnDate ? dayjs(data.returnDate, "YYYY/MM/DD") : null}
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
  );

  const renderPaymentStep = () => (
    <div>
      <div>
        <h1 className="mt-2 font-medium text-green-700">Order Summary</h1>

        <div className="mt-3 border-b pb-5 border-themeText2">
          <div className="text-sm flex items-center gap-x-5">
            <p className="font-medium w-1/2">Booking days:</p>
            <p>
              {Math.round(
                (new Date(data.returnDate) - new Date(data.bookingDate)) /
                  (1000 * 60 * 60 * 24)
              ) + 1}{" "}
              day
            </p>
          </div>
          <div className="text-sm flex items-center gap-x-5">
            <p className="font-medium w-1/2">Price per day:</p>
            <p>₹{item.price}/day</p>
          </div>
          <div className="text-sm flex items-center gap-x-5">
            <p className="font-medium w-1/2">Quantity:</p>
            <p>{selectedQty?.value}</p>
          </div>
        </div>
        <div className="text-sm flex items-center gap-x-5">
          <p className="font-medium w-1/2">Total Price:</p>
          <p>
            ₹
            {(Math.round(
              (new Date(data.returnDate) - new Date(data.bookingDate)) /
                (1000 * 60 * 60 * 24)
            ) +
              1) *
              parseInt(selectedQty?.value) *
              parseInt(item.price)}
            /-
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="mt-2 font-medium text-green-700">Payment Maythods</h1>

        <button type="button" onClick={()=>setPayment("cash")} className="mt-3 w-full">
          <div className={`flex gap-x-5 items-center border rounded-md px-5 py-1 cursor-pointer ${payment==="cash" && 'border-green-700 duration-300'}`}>
            <div className="w-10 h-10">
              <img src={Cash} alt="Cash" className="inline-block w-full h-full" />
            </div>
            <h3 className="font-medium">Pay In Cash</h3>
          </div>
        </button>
        <button type="button" onClick={()=>setPayment("upi")} className="mt-3 w-full">
          <div className={`flex gap-x-5 items-center border rounded-md px-5 py-1 cursor-pointer ${payment==="upi" && 'border-green-700 duration-300'}`}>
            <div className="w-10 h-10">
              <img src={UPI} alt="UPI" className="inline-block w-full h-full" />
            </div>
            <h3 className="font-medium">PhonePe/Paytm/BHIM/UPI</h3>
          </div>
        </button>
        <button type="button" onClick={()=>setPayment("card")} className="mt-3 w-full">
          <div className={`flex gap-x-5 items-center border rounded-md px-5 py-1 cursor-pointer ${payment==="card" && 'border-green-700 duration-300'}`}>
            <div className="w-10 h-10">
              <img src={Card} alt="Card" className="inline-block w-full h-full" />
            </div>
            <h3 className="font-medium">Credit/Debit Card</h3>
          </div>
        </button>
        <button type="button" onClick={()=>setPayment("netBanking")} className="mt-3 w-full">
          <div className={`flex gap-x-5 items-center border rounded-md px-5 py-1 cursor-pointer ${payment==="netBanking" && 'border-green-700 duration-300'}`}>
            <div className="w-10 h-10">
              <img src={NetBanking} alt="NetBanking" className="inline-block w-full h-full" />
            </div>
            <h3 className="font-medium">Net Banking</h3>
          </div>
        </button>
        <button type="button" onClick={()=>setPayment("gpay")} className="mt-3 w-full">
          <div className={`flex gap-x-5 items-center border rounded-md px-5 py-1 cursor-pointer ${payment==="gpay" && 'border-green-700 duration-300'}`}>
            <div className="w-10 h-10">
              <img src={Gpay} alt="Gpay" className="inline-block w-full h-full" />
            </div>
            <h3 className="font-medium">Google pay</h3>
          </div>
        </button>
      </div>
    </div>
  );

  const { Step } = Steps;
  const steps = [
    {
      title: "Booking Details",
      content: renderBookingDetailsStep(),
    },
    {
      title: "Payment",
      content: renderPaymentStep(),
    },
  ];

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
            className="px-4 py-1 border rounded-sm border-red-500 mr-5 text-red-500"
            onClick={handleCancel}
          >
            Cancel
          </button>,
          currentStep === steps.length - 1 ? (
            <button
              key={"submit"}
              type="primary"
              className="px-4 py-1 border rounded-sm border-blue-500 bg-blue-500 text-white"
              onClick={handleSubmit}
            >
              Place Booking
            </button>
          ) : (
            <button
              key={"next"}
              className="px-4 py-1 border rounded-sm border-blue-500 bg-blue-500 text-white"
              type="primary"
              onClick={handleNextStep}
            >
              Next
            </button>
          ),
        ]}
      >
        <Steps current={currentStep} size="small">
          {steps.map((step) => (
            <Step key={step.title} title={step.title} />
          ))}
        </Steps>
        <div>{steps[currentStep].content}</div>
      </Modal>
    </>
  );
};

export default BookModal;
