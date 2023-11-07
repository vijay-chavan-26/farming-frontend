import React, { useState } from "react";
import { Auth } from "../language-data/Auth";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { post_request } from "../components/utils/ApiRequests";
import API_URL from "../components/utils/ApiRequests";
import { message } from "antd";

const Login = () => {
  const lang = useSelector((state) => state.lang.lang);
  const [isDisabled, setIsDisabled] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
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
    e.preventDefault();
    if (!data.username.trim() || !data.password.trim()) {
      message.error(Auth[lang].allRequiredMsg);
      return;
    }

    try {
      const res = await post_request(`${API_URL}/auth/login/create`, data);
      if (res.error) {
        message.error(Auth[lang].invalidUserMsg);
        return;
      }
      localStorage.setItem("token", res.token);
      localStorage.setItem("userType", res.type);
      message.success(Auth[lang].loginSuccess);
      setIsDisabled(false);
      setData({
        username: "",
        password: "",
      });
      if (res.type === "Farmer") {
        navigate("/farmer");
      } else if (res.type === "Partner") {
        navigate("/partner");
      } else if (res.type === "Admin") {
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
        <div className="w-2/3 xl:w-1/2 px-20 py-10">
          <h1 className="text-3xl font-semibold text-theme">
            {Auth[lang].loginHeading}
          </h1>
          <p className="text-sm text-themeText2 mt-2">{Auth[lang].loginDesc}</p>

          <form
            className="p-10 rounded-xl bg-themeBg mt-10"
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl mb-5 font-semibold text-theme">
              {Auth[lang].loginTitle}
            </h1>
            <div>
              <label htmlFor="username" className="formLabel">
                {Auth[lang].username}:{" "}
              </label>
              <input
                type="text"
                id="username"
                placeholder={Auth[lang].usernamePlaceholder}
                className="formInput"
                onChange={handleChange}
                value={data.username}
              />
            </div>
            <div className="mt-5 w-full">
              <label htmlFor="password" className="formLabel">
                {Auth[lang].loginPassword}:{" "}
              </label>
              <input
                type="password"
                id="password"
                placeholder={Auth[lang].loginPasswordPlaceholder}
                className="formInput"
                onChange={handleChange}
                value={data.password}
              />
            </div>

            <div className="mt-5">
              <Link to={"/login"} className="text-blue-700">
                {Auth[lang].forgot}{" "}
              </Link>
            </div>

            <div className="mt-5 text-center">
              <button
                type="submit"
                disabled={isDisabled}
                className="px-10  py-2 bg-theme rounded-sm text-white"
              >
                {Auth[lang].loginBtn}
              </button>
            </div>
          </form>
        </div>
        <div className="flex-grow bg-theme text-white">vjfb</div>
      </div>
    </div>
  );
};

export default Login;
