import React, { useState } from "react";
import { countryCodes } from "@/helper/index";
import { loginType, validatePhoneNumber } from "@/helper/Constant";
import { useRouter } from "next/router";
import axios from "axios";
function Login({ ...props }) {
  const router = useRouter();

  const [countryCode, setCountryCode] = useState("+91");
  const [loginTypes, setLoginTypes] = useState(loginType.PHONE);
  const [otpParams, setOtpParams] = useState({
    send: false,
    verify: false,
  });
  const [emailDetails, setEmailDetails] = useState({
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [passwordDetails, setPasswordDetails] = useState({
    email: "",
  });
  const handleLoginType = (e, type) => {
    //
    if (type === loginType.PHONE) {
      setResetPassword(false);
      setLoginTypes(loginType.EMAIL);
      setEmailDetails({});
    } else {
      setResetPassword(false);
      setLoginTypes(loginType.PHONE);
      setOtpParams({
        send: false,
        verify: false,
      });
    }
  };
  const sendOTP = () => {
    const sendOtpUrl = `${process.env.API_URL}/api/v1/users/send-otp`;
    const data = {
      phoneNumber: phoneno,
    };
    const isValidPhoneNumber = validatePhoneNumber(phoneno);
    if (isValidPhoneNumber) {
      axios
        .post(sendOtpUrl, data)
        .then((response) => {
          console.log(response.data);
          setOtpParams((prevData) => ({ ...prevData, send: true }));
          alert("sms sent successfully");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Invalid Phone Number");
    }
  };

  const verifyOTP = () => {
    const verifyOtpUrl = `${process.env.API_URL}/v1/users/mobile-otp-verification`;
    const data = {
      countryCode: countryCode,
      phoneNumber: phoneno,
      otp: otp,
    };
    axios
      .post(verifyOtpUrl, data)
      .then((response) => {
        console.log(response.data);
        router.push("/student");
        alert("otp verified successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const emailLoginHandler = () => {
    const emailLoginHandler = `${process.env.API_URL}/v1/users/login`;
    const data = {
      email: emailDetails.email,
      password: emailDetails.password,
    };
    axios
      .post(emailLoginHandler, data)
      .then((response) => {
        console.log(response.data);
        router.push("/student");
        alert("Logged in successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleResetPassword = () => {
    const data = {
      email: passwordDetails.email,
    };

    axios
      .post(`${process.env.API_URL}/v1/users/forgot-password`, data)
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any error that occurred during the request
        console.error("Error:", error);
      });
  };
  return (
    <form novalidate="" action="" className="self-stretch space-y-3">
      {loginTypes === loginType.PHONE && !resetPassword ? (
        <div className="flex justify-between">
          <select
            className="w-1/4 rounded-md focus:ring ri border text-black border-gray-100 p-2 me-2"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            <option value="" disabled>
              Select One
            </option>
            {countryCodes.map((ele, idx) => (
              <option key={idx + "country"} value={ele.dial_code}>
                {ele.name} {ele.dial_code}
              </option>
            ))}
          </select>
          <input
            id="phoneno"
            type="number"
            placeholder="Enter Phone No"
            className="w-3/4 rounded-md focus:ring ri border text-black border-gray-100 p-2"
            onChange={(event) => setPhoneno(event.target.value)}
          />
        </div>
      ) : (
        !resetPassword && (
          <>
            <div>
              <label for="email" className="text-sm sr-only">
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="Your email address"
                className="w-full rounded-md focus:ring ri border text-black border-gray-100 p-2"
                onChange={(event) =>
                  setEmailDetails((prevData) => ({
                    ...prevData,
                    email: event.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label for="password" className="text-sm sr-only">
                Password{" "}
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full rounded-md focus:ring ri border text-black border-gray-100 p-2"
                onChange={(event) =>
                  setEmailDetails((prevData) => ({
                    ...prevData,
                    password: event.target.value,
                  }))
                }
              />
            </div>
          </>
        )
      )}
      {resetPassword && (
        <>
          <div>
            <label for="resetemail" className="text-sm sr-only">
              Email
            </label>
            <input
              id="resetemail"
              type="text"
              placeholder="Registered Email"
              className="w-full rounded-md focus:ring ri border text-black border-gray-100 p-2"
              onChange={(event) =>
                setPasswordDetails((prevData) => ({
                  ...prevData,
                  email: event.target.value,
                }))
              }
            />
          </div>
        </>
      )}
      {otpParams.send && (
        <input
          id="otp"
          type="text"
          placeholder="Enter OTP"
          className="w-full rounded-md focus:ring ri border text-black border-gray-100 p-2"
          onChange={(event) => setOtp(event.target.value)}
        />
      )}
      {!resetPassword && (
        <button
          type="button"
          className="w-full py-2 font-regular rounded bg-violet-400  text-gray-100 font-bold"
          onClick={() => {
            loginTypes === loginType.PHONE
              ? otp.length > 0
                ? verifyOTP()
                : sendOTP()
              : emailLoginHandler();
          }}
        >
          {loginTypes === loginType.PHONE
            ? otp.length > 0
              ? "Verify OTP"
              : "Send OTP"
            : "Login"}
        </button>
      )}

      <button
        type="button"
        className="w-1/2 font-regular rounded bg-white-400 text-white"
        onClick={(e) => handleLoginType(e, loginTypes)}
      >
        Login with {loginTypes === loginType.PHONE ? " Email" : "Phone No"}
      </button>
      {resetPassword && (
        <button
          type="button"
          className="w-1/2 font-regular rounded bg-white-400 text-white"
          onClick={() => handleResetPassword()}
        >
          Email Reset Password
        </button>
      )}
      {!resetPassword && (
        <span
          className="w-1/2  font-regular rounded bg-white-400 text-white"
          onClick={() => {
            setResetPassword(!resetPassword);
          }}
        >
          Forgot Password
        </span>
      )}
    </form>
  );
}

export default Login;
