import React from "react";
import { Auth } from "../language-data/Auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FarmerSignup = () => {
  const lang = useSelector((state) => state.lang.lang);
  return (
    <div>
      <div className="flex">
        <div className="flex-grow bg-theme text-white">vjfb</div>
        <div className="w-2/3 px-20 py-10">
          <h1 className="text-3xl font-semibold text-theme">
            {Auth[lang].signupHeading}
          </h1>
          <p className="text-sm text-themeText2 mt-2">{Auth[lang].signupDesc}</p>

          <form className="p-10 rounded-xl bg-themeBg mt-10">
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
                />
              </div>
              <div className="mt-5 w-full">
                <label htmlFor="phone" className="formLabel">
                  {Auth[lang].phone}:{" "}
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder={Auth[lang].phonePlaceholder}
                  className="formInput"
                />
              </div>
            </div>
            <div className="xl:flex xl:gap-x-5 ">
              <div className="mt-5 w-full">
                <label htmlFor="password" className="formLabel">
                  {Auth[lang].password}:{" "}
                </label>
                <input
                  type="text"
                  id="password"
                  placeholder={Auth[lang].passwordPlaceholder}
                  className="formInput"
                />
              </div>
              <div className="mt-5 w-full">
                <label htmlFor="conPassword" className="formLabel">
                  {Auth[lang].conPassword}:{" "}
                </label>
                <input
                  type="text"
                  id="conPassword"
                  placeholder={Auth[lang].conPasswordPlaceholder}
                  className="formInput"
                />
              </div>
            </div>

            <div className="mt-10 text-center">
              <button
                type="button"
                className="px-10  py-2 bg-theme rounded-sm text-white"
              >
                {Auth[lang].signupBtn}
              </button>
            </div>
            <div className="mt-5">
              <p>
                {Auth[lang].alreadyAc}{" "}
                <Link to={"/login"} className="text-blue-700">
                  Login now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FarmerSignup;
