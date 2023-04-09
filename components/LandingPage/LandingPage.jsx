import React from "react";
import styles from "@/styles/LandingPage.module.css";
import { useRouter } from "next/router";
function LandingPage() {
  const router = useRouter();

  return (
    <section className={styles.landing_page_wrapper}>
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="">
            <div class="flex  items-center h-screen">
              <div class="bg-white p-8 rounded shadow-lg">
                <h2 class="text-2xl font-bold mb-4">Register AS</h2>
                <div class="grid grid-cols-2 gap-4">
                  <button
                    class="bg-blue-500 text-white rounded py-2 px-4"
                    onClick={() => router.push("/register/teacher")}
                  >
                    Teacher
                  </button>
                  <br />
                  <button
                    class="bg-green-500 text-white rounded py-2 px-4"
                    onClick={() => router.push("/register/student")}
                  >
                    Student
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div class="flex flex-col justify-center items-center h-screen">
              <form class="bg-white p-8 rounded shadow-lg">
                <h2 class="text-2xl font-bold mb-4">Login with Phone Number</h2>
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2" for="phone">
                    Phone Number
                  </label>
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2" for="otp">
                    OTP
                  </label>
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="otp"
                    type="text"
                    placeholder="One-time password"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Get OTP
                  </button>
                  <a
                    class="block text-gray-700 font-bold hover:underline"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
