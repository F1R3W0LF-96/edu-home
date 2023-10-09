import React, { useEffect, useState, useRef } from "react";
import Wrapper from "@/components/Layouts/Wrapper";
import useAuthentication from "@/hooks/useAuthentication";
import { useRouter } from "next/router";

function ResetPassword() {
  const passwordRef = useRef(null);
  const cnfpasswordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const { resetPassword, loading } = useAuthentication();
  const router = useRouter();
  const { query } = router;
  console.log(query.email);
  const handleResetPassword = async (e) => {
    e.preventDefault();
    const value_pwd = passwordRef.current.value;
    const value_cnfpwd = cnfpasswordRef.current.value;
    const email = query.email; // Replace "paramName" with the name of your query parameter
    if (value_pwd === value_cnfpwd) {
      const request = {
        email: email,
        password: value_pwd,
      };
      const { response, message } = await resetPassword(request);
      if (response.success) {
        console.log(response);
        // Redirect to /reset-password on success
        router.push(`/`);
      }
    }
  };
  return (
    <Wrapper>
      <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-center xl:flex-row">
          {/* <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12"></div> */}
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Reset Password
              </h3>
              <form>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="lastName"
                    className="inline-block mb-1 font-medium"
                  >
                    Enter Password
                  </label>
                  <input
                    placeholder="Enter your Password"
                    required
                    type={showPassword ? "text" : "password"}
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="password"
                    name="password"
                    ref={passwordRef}
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="password"
                    className="inline-block mb-1 font-medium"
                  >
                    Confirm Password
                  </label>
                  <input
                    name="cnfpassword"
                    id="cnfpassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    required
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-teal-400 focus:outline-none focus:shadow-outline"
                    ref={cnfpasswordRef}
                  />
                </div>
                <div className="mx-3 mb-4">
                  <input
                    type="checkbox"
                    name="showpassword"
                    placeholder="************"
                    onChange={() => {
                      setShowPassword((ps) => !ps);
                    }}
                  />
                  &nbsp;Show Password
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    onClick={handleResetPassword}
                    // type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                  >
                    Reset Password
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

export default ResetPassword;
