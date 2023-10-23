import React from "react";
import { FarmerAuth } from "../language-data/FarmerAuth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FarmerSignup = () => {
  const lang = useSelector((state) => state.lang.lang);
  return (
    <div>
      <div className="flex">
        <div className="flex-grow bg-theme text-white">vjfb</div>
        <div className="w-2/3 p-10">
          <h1 className="text-3xl font-semibold text-theme">
            {FarmerAuth[lang].signupHeading}
          </h1>

          <form className="p-10 rounded-xl bg-themeBg mt-5">
            <div>
              <label htmlFor="name" className="formLabel">
                {FarmerAuth[lang].name}:{" "}
              </label>
              <input
                type="text"
                id="name"
                placeholder={FarmerAuth[lang].namePlaceholder}
                className="formInput"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="email" className="formLabel">
                {FarmerAuth[lang].email}:{" "}
              </label>
              <input
                type="text"
                id="email"
                placeholder={FarmerAuth[lang].emailPlaceholder}
                className="formInput"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="phone" className="formLabel">
                {FarmerAuth[lang].phone}:{" "}
              </label>
              <input
                type="text"
                id="phone"
                placeholder={FarmerAuth[lang].phonePlaceholder}
                className="formInput"
              />
            </div>
            </div>
            <div className="lg:flex lg:gap-x-5 ">
            <div className="mt-5 w-full">
              <label htmlFor="password" className="formLabel">
                {FarmerAuth[lang].password}:{" "}
              </label>
              <input
                type="text"
                id="password"
                placeholder={FarmerAuth[lang].passwordPlaceholder}
                className="formInput"
              />
            </div>
            <div className="mt-5 w-full">
              <label htmlFor="conPassword" className="formLabel">
                {FarmerAuth[lang].conPassword}:{" "}
              </label>
              <input
                type="text"
                id="conPassword"
                placeholder={FarmerAuth[lang].conPasswordPlaceholder}
                className="formInput"
              />
            </div>
            </div>

            <div className="mt-5">
              <button
                type="button"
                className="px-4 py-2 w-full bg-theme rounded-md text-white"
              >
                {FarmerAuth[lang].signupBtn}
              </button>
            </div>
            <div className="mt-5">
              <p>
                {FarmerAuth[lang].alreadyAc}{" "}
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
