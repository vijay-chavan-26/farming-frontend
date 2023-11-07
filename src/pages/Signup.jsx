import React, { useState } from "react";
import { Auth } from "../language-data/Auth";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { post_request } from "../components/utils/ApiRequests";
import API_URL from "../components/utils/ApiRequests";
import Dropdown from "../components/utils/Dropdown";

const Signup = () => {
  const lang = useSelector((state) => state.lang.lang);
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedType, setSelectedType] = useState(null)
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    password: "",
    conPassword: "",
    type: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    const emailRegex =
      /^[a-zA-Z][a-zA-Z0-9]*([.][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+([.][a-zA-Z0-9]+)*$/;
    if (
      !data.name.trim() ||
      !data.email.trim() ||
      !data.mobile_number.trim() ||
      !data.password.trim() ||
      !data.conPassword.trim()
    ) {
      message.error(Auth[lang].allRequiredMsg);
      return;
    } else if (!emailRegex.test(data.email.trim())) {
      message.error(Auth[lang].invalidEmailMsg);
      return;
    } else if(!selectedType){
      message.error(Auth[lang].typeRequiredMsg);
      return;
    }else if (data.mobile_number.trim().length < 10) {
      message.error(Auth[lang].invalidMobMsg);
      return;
    } else if (data.password.trim() !== data.conPassword.trim()) {
      message.error(Auth[lang].invalidPassMsg);
      return;
    }

    try {
      const res = await post_request(`${API_URL}/auth/signup/create`, {
        ...data,
        type: selectedType.value
      });
      if (res.error) {
        message.error(res.error);
        return;
      }
      console.log(res);
      console.log(res.user.type);
      localStorage.setItem("token", res.token);
      localStorage.setItem("userType", res.user.type);
      message.success(Auth[lang].createdSuccessMsg);
      setIsDisabled(false);
      setData({
        name: "",
        email: "",
        mobile_number: "",
        password: "",
        conPassword: "",
        type: "",
      });
      if (res.user.type === "Farmer") {
        navigate("/farmer");
      }
      else if(res.user.type === "Partner"){
        navigate("/partner");
      }else if(res.user.type === "Admin"){
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
      message.error(Auth[lang].somethingWrongMsg);
      setIsDisabled(false);
      return;
    }
  };
  return (
    <div>
      <div className="flex">
        <div className="flex-grow bg-theme text-white">vjfb</div>
        <div className="w-2/3 px-20 py-10">
          <h1 className="text-3xl font-semibold text-theme">
            {Auth[lang].signupHeading}
          </h1>
          <p className="text-sm text-themeText2 mt-2">
            {Auth[lang].signupDesc}
          </p>

          <form
            className="p-10 rounded-xl bg-themeBg mt-10"
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl mb-5 font-semibold text-theme">
              {Auth[lang].signupTitle}
            </h1>
            <div>
              <label htmlFor="name" className="formLabel">
                {Auth[lang].name}:{" "}
              </label>
              <input
                type="text"
                id="name"
                placeholder={Auth[lang].namePlaceholder}
                className="formInput"
                onChange={handleChange}
                value={data.name}
              />
            </div>
            <div className="xl:flex xl:gap-x-5 ">
              <div className="mt-5 w-full">
                <label htmlFor="email" className="formLabel">
                  {Auth[lang].email}:{" "}
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder={Auth[lang].emailPlaceholder}
                  className="formInput"
                  onChange={handleChange}
                  value={data.email}
                />
              </div>
              <div className="mt-5 w-full">
                <label htmlFor="mobile_number" className="formLabel">
                  {Auth[lang].mobile_number}:{" "}
                </label>
                <input
                  type="text"
                  id="mobile_number"
                  placeholder={Auth[lang].mobile_numberPlaceholder}
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
            </div>

            <div className="mt-5">
            <label htmlFor="type" className="formLabel">
                  {Auth[lang].type}:{" "}
                </label>
              <Dropdown options={Auth[lang].options} selectedOption={selectedType} setSelectedOption={setSelectedType}/>
            </div>
            <div className="xl:flex xl:gap-x-5 ">
              <div className="mt-5 w-full">
                <label htmlFor="password" className="formLabel">
                  {Auth[lang].password}:{" "}
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder={Auth[lang].passwordPlaceholder}
                  className="formInput"
                  onChange={handleChange}
                  value={data.password}
                />
              </div>
              <div className="mt-5 w-full">
                <label htmlFor="conPassword" className="formLabel">
                  {Auth[lang].conPassword}:{" "}
                </label>
                <input
                  type="password"
                  id="conPassword"
                  placeholder={Auth[lang].conPasswordPlaceholder}
                  className="formInput"
                  onChange={handleChange}
                  value={data.conPassword}
                />
              </div>
            </div>

            <div className="mt-10 text-center">
              <button
                type="submit"
                disabled={isDisabled}
                className="px-10  py-2 bg-theme rounded-sm text-white"
              >
                {Auth[lang].signupBtn}
              </button>
            </div>
            <div className="mt-5">
              <p>
                {Auth[lang].alreadyAc}{" "}
                <Link to={"/login"} className="text-blue-700">
                  {Auth[lang].loginNowLink}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
