import React, { useEffect, useState, useRef } from "react";
import Wrapper from "@/components/Layouts/Wrapper";
import useAuthentication from "@/hooks/useAuthentication";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function ForgotPaswword() {
  const { sendMailForgotPassword, verifyOTP, verifyingOTP, loading } =
    useAuthentication();
  const router = useRouter();

  const emailRef = useRef(null);
  const otpref = useRef(null);
  const [emailSent, setEmailSent] = useState(false);
  const handleSendEmail = async (e) => {
    e.preventDefault();
    const value = emailRef.current.value;
    const { response, message } = await sendMailForgotPassword(value);
    if (response.success) {
      console.log(response);
      setEmailSent(true);
    } else {
      setEmailSent(false);
    }
  };
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    const value = otpref.current.value;
    const { response, message } = await verifyOTP({
      email: emailRef.current.value,
      otp: otpref.current.value,
    });
    if (response.success) {
      // Redirect to /reset-password on success
      router.push(`/reset-password?${emailRef.current.value}`);
    } else {
      // Handle the case when OTP verification fails
      toast.error(response.message || "Somtehing went wrong");
      setEmailSent(false);
    }

    console.log(value);
  };
  return (
    <Wrapper>
      <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-center xl:flex-row">
          {/* <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12"></div> */}
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Forgot Password
              </h3>
              <form>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="lastName"
                    className="inline-block mb-1 font-medium"
                  >
                    Enter email
                  </label>
                  <input
                    placeholder="Enter your Email"
                    required
                    type="email"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    ref={emailRef}
                  />
                </div>
                {emailSent && (
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="inline-block mb-1 font-medium"
                    >
                      Enter OTP
                    </label>
                    <input
                      name="otp"
                      id="otp"
                      type="text"
                      placeholder="Enter your OTP"
                      required
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-teal-400 focus:outline-none focus:shadow-outline"
                      ref={otpref}
                    />
                  </div>
                )}
                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    disabled={loading}
                    type="submit"
                    onClick={(e) =>
                      emailSent ? handleVerifyOTP(e) : handleSendEmail(e)
                    }
                    // type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                  >
                    {emailSent ? "Verify OTP" : "Send OTP"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ForgotPaswword;
