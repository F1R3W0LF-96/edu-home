import React, { useState } from "react";
import validator from "validator";
import useAuthentication from "@/hooks/useAuthentication";
function Auth({ ...props }) {
  const { getlogin, loginResponse, loading } = useAuthentication();
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
      let loginData = await getlogin(
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
      <form onSubmit={handleLogin}>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="lastName" className="inline-block mb-1 font-medium">
            Phone No
          </label>
          <input
            placeholder="Enter your Phoneno"
            required
            type="number"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="phoneno"
            name="phoneno"
            value={loginDetails.phoneno}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="password" className="inline-block mb-1 font-medium">
            Password
          </label>
          <input
            onChange={handleInputChange}
            value={loginDetails.password}
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-teal-400 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-4 mb-2 sm:mb-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
      <div className="mt-4 mb-2 sm:mb-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
        >
          Forgot password
        </button>
      </div>
      <p className="text-xs text-gray-600 sm:text-sm">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </>
  );
}

export default Auth;
