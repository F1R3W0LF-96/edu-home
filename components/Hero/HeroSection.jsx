import useAuthentication from "@/hooks/useAuthentication";
import { addDetails } from "@/redux/userReducer";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RegistrationTypes } from "@/helper/Constant";

const HeroSection = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userReducer = useSelector((state) => state).user;

  const { getlogin } = useAuthentication();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const loginWithMobileNumber = async (e) => {
    e.preventDefault();
    const { phoneNumber, password } = formData;
    const response = await getlogin(phoneNumber, password);
    if (response.success) {
      dispatch(addDetails(response));
      if (
        response.data.user_role ===
        RegistrationTypes.TEACHER_TYPE.toLocaleUpperCase()
      ) {
        router.push("/userListing/teacher"); // Replace 'new-page' with the actual page path
      }
    }
  };
  console.log("userReducer", userReducer);

  return (
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/6437841/pexels-photo-6437841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-60 bg-teal-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h1 className="mb-2 font-sans text-4xl font-bold tracking-tight text-white lg:text-6xl sm:leading-none">
                Tuition Search
              </h1>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Learning at Doorsteps
              </p>
              <h3 className="text-white">Register as !</h3>
              <Link
                href="/register/teacher"
                aria-label=""
                className="mr-3 inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-100 hover:text-white"
              >
                Teacher
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
              <Link
                href="/register/student"
                aria-label=""
                className="mr-3 inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-100 hover:text-white"
              >
                Student
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign in
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Phone No
                    </label>
                    <input
                      placeholder="Enter your Phone.no"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="phoneNumber"
                      name="phoneNumber"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      required
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-teal-400 focus:outline-none focus:shadow-outline"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      // type="submit"
                      onClick={(e) => loginWithMobileNumber(e)}
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                    >
                      Login
                    </button>
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      // type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                    >
                      Forgot password
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
