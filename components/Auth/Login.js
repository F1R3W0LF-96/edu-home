import React, { useState } from "react";
import { countryCodes } from "@/helper/index";
import { loginType } from "@/helper/Constant";
import { useRouter } from "next/router";
function Login({ ...props }) {
  const router = useRouter();

  const [countryCode, setCountryCode] = useState("+91");
  const [loginTypes, setLoginTypes] = useState(loginType.PHONE);
  const [otpParams, setOtpParams] = useState({
    send: false,
    verify: false,
  });
  const [otp, setOtp] = useState("");
  const handleLoginType = (e, type) => {
    if (type === loginType.PHONE) {
      setLoginTypes(loginType.EMAIL);
    } else {
      setLoginTypes(loginType.PHONE);
    }
  };
  const sendOTP = (mobileNumber) => {
    // const otp = generateOTP(4); // Generate a 6-digit OTP
    // const apiKey = "YOUR_API_KEY"; // Replace with your Fast2SMS API Key
    // const url = "https://www.fast2sms.com/dev/bulk";

    // const message = `Your OTP is ${otp}.`;
    // const data = {
    //   sender_id: "FSTSMS",
    //   language: "english",
    //   route: "qt",
    //   numbers: mobileNumber,
    //   message: message,
    // };

    // const config = {
    //   headers: {
    //     Authorization: apiKey,
    //   },
    // };

    // axios
    //   .post(url, data, config)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    setOtpParams((prevData) => ({ ...prevData, send: true }));
    alert("sms sent successfully");
  };

  const verifyOTP = () => {
    router.push("/student");
  };
  return (
    <form novalidate="" action="" className="self-stretch space-y-3">
      {loginTypes === loginType.PHONE ? (
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
          />
        </div>
      ) : (
        <>
          <div>
            <label for="name" className="text-sm sr-only">
              Your name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-md focus:ring ri border text-black border-gray-100 p-2"
            />
          </div>
          <div>
            <label for="lastname" className="text-sm sr-only">
              Email address
            </label>
            <input
              id="lastname"
              type="text"
              placeholder="Email address"
              className="w-full rounded-md focus:ring ri border text-black border-gray-100 p-2"
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
      <button
        type="button"
        className="w-full py-2 font-regular rounded bg-violet-400  text-gray-100 font-bold"
        onClick={() => {
          otp.length > 0 ? verifyOTP() : sendOTP();
        }}
      >
        {loginTypes === loginType.PHONE
          ? otp.length > 0
            ? "Verify OTP"
            : "Send OTP"
          : "Login"}
      </button>
      <button
        type="button"
        className="w-full py-2 font-regular rounded bg-white-400 text-white"
        onClick={(e) => handleLoginType(e, loginTypes)}
      >
        Login with {loginTypes === loginType.PHONE ? " Email" : "Phone No"}
      </button>
    </form>
  );
}

export default Login;
