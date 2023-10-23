import React from "react";
import { Auth } from "../language-data/Auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const lang = useSelector((state) => state.lang.lang);
  return (
    <div>
      <div className="flex">
        <div className="w-2/3 xl:w-1/2 px-20 py-10">
          <h1 className="text-3xl font-semibold text-theme">
            {Auth[lang].loginHeading}
          </h1>
          <p className="text-sm text-themeText2 mt-2">{Auth[lang].loginDesc}</p>

          <form className="p-10 rounded-xl bg-themeBg mt-10">
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
              />
            </div>
            <div className="mt-5 w-full">
              <label htmlFor="password" className="formLabel">
                {Auth[lang].loginPassword}:{" "}
              </label>
              <input
                type="text"
                id="password"
                placeholder={Auth[lang].loginPasswordPlaceholder}
                className="formInput"
              />
            </div>

            <div className="mt-5">
              <Link to={"/login"} className="text-blue-700">
                {Auth[lang].forgot}{" "}
              </Link>
            </div>

            <div className="mt-5 text-center">
              <button
                type="button"
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
