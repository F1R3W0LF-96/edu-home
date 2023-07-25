import React, { useState } from "react";
import validator from "validator";
import { countryCodes } from "@/helper/index";
import { useRouter } from "next/router";
import AuthRepository from "@/services/authService";
function Auth({ ...props }) {
  const Auth = new AuthRepository();
  const [loginDetails, setLoginDetails] = useState({
    phoneno: {
      valid: false,
      value: "",
      validFunc: (val) => validator.isMobilePhone(val),
      errorText: "",
    },
    password: {
      valid: false,
      value: "",
      validFunc: (val) => validator.isStrongPassword(val),
      errorText: "",
    },
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginDetails.phoneno.valid && loginDetails.password.valid) {
      let loginData = await Auth.login(
        loginDetails.phoneno.value,
        loginDetails.password.value
      );
      console.log("successfuly logedin");
    } else {
      if (!loginDetails.phoneno.valid) {
        setLoginDetails((ps) => ({
          ...ps,
          phoneno: {
            ...ps.phoneno,
            errorText: "not a valid phone no",
          },
        }));
      }
      if (!loginDetails.password.valid) {
        setLoginDetails((ps) => ({
          ...ps,
          password: {
            ...ps.password,
            errorText: "wrong password",
          },
        }));
      }
    }
  };
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setLoginDetails((ps) => ({
      ...ps,
      [name]: {
        ...ps[name],
        value: value,
        valid: ps[name].validFunc(value),
      },
    }));
  };
  return (
    <>
      <form
        novalidate=""
        action=""
        className="self-stretch space-y-3"
        onSubmit={handleLogin}
      >
        <h1 className="text-3xl text-white font-bold"> Login Details</h1>
        <div>
          <label for="phoneno" className="text-sm sr-only">
            Phone No
          </label>
          <input
            name="phoneno"
            id="phoneno"
            type="text"
            placeholder="Your phone no"
            className="w-full rounded-md focus:ring ri border text-black border-gray-400 p-2"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label for="password" className="text-sm sr-only">
            Password{" "}
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            className="w-full rounded-md focus:ring ri border text-black border-gray-400 p-2"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className="w-full py-2 font-regular rounded bg-teal-600 hover:bg-teal-900 text-gray-100 font-bold"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
      <button
        type="button"
        className="w-full py-2 mt-4 font-regular rounded bg-teal-600 hover:bg-teal-900 text-gray-100 font-bold"
        onClick={handleLogin}
      >
        Forgot Password
      </button>
    </>
  );
}

export default Auth;
