import React, { useState } from "react";
import styles from "@/styles/Registration.module.css";
import { Button, message, Steps, theme } from "antd";

function StudentRegistration() {
  const BasicDetails = () => {
    return (
      <div>
        <div class="mb-4 text-start">
          <label for="name" class="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="mb-4 text-start">
          <label for="pincode" class="block text-gray-700 font-bold mb-2">
            Pincode
          </label>
          <input
            type="text"
            name="pincode"
            id="pincode"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your pincode"
            required
          />
        </div>
        <div class="mb-4 text-start">
          <label for="city" class="block text-gray-700 font-bold mb-2">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your city"
            required
          />
        </div>
        <div class="mb-4 text-start">
          <label for="address" class="block text-gray-700 font-bold mb-2">
            Address or Landmark
          </label>
          <input
            type="text"
            name="address"
            id="address"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your address or landmark"
            required
          />
        </div>
        <div class="mb-4 text-start">
          <label for="phone" class="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div class="mb-4 text-start">
          <label for="otp" class="block text-gray-700 font-bold mb-2">
            One-Time Password (OTP)
          </label>
          <input
            type="text"
            name="otp"
            id="otp"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the OTP sent to your phone number"
            required
          />
        </div>
        <div class="mb-4 text-start ">
          <label for="class" class="block text-gray-700 font-bold mb-2">
            Class
          </label>
          <input
            type="text"
            name="class"
            id="class"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your class"
            required
          />
        </div>
        <div class="mb-4 text-start">
          <label for="board" class="block text-gray-700 font-bold mb-2">
            Board
          </label>
          <input
            type="text"
            name="board"
            id="board"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your board"
            required
          />
        </div>
      </div>
    );
  };
  const EducationDetails = () => {
    return (
      <>
        <div class="mb-4 text-start">
          <label for="subject" class="block text-gray-700 font-bold mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your subject"
            required
          />
        </div>
        <div class="mb-4 text-start">
          <label
            for="mode-of-tuition"
            class="block text-gray-700 font-bold mb-2"
          >
            Mode of Tuition
          </label>
          <select
            name="mode-of-tuition"
            id="mode-of-tuition"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a mode of tuition</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div class="mb-4 text-start">
          <label
            for="teacher-gender"
            class="block text-gray-700 font-bold mb-2"
          >
            Teacher Gender
          </label>
          <select
            name="teacher-gender"
            id="teacher-gender"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a teacher gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="mt-6 text-start">
          <label
            for="hourly-rate"
            class="block text-sm font-medium text-gray-700"
          >
            Hourly Budget
          </label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              name="hourly-rate"
              id="hourly-rate"
              class="focus:ring-indigo-500 p-2 border focus:border-indigo-500 block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter hourly rate"
              required
            />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span class="text-gray-500 sm:text-sm">INR/hour</span>
            </div>
          </div>
        </div>
        <div class="mt-6 text-start">
          <label
            for="description"
            class="block text-sm font-medium text-gray-700"
          >
            Other Information
          </label>
          <div class="mt-1 mb-4">
            <textarea
              id="description"
              name="description"
              rows="3"
              class="shadow-sm p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter any additional information or description"
            ></textarea>
          </div>
        </div>
      </>
    );
  };

  const steps = [
    {
      title: "Basic Information",
      content: <BasicDetails />,
    },
    {
      title: "Education",
      content: <EducationDetails />,
    },
  ];
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    marginTop: 16,
  };
  return (
    <div className={styles.registration_page_wrapper}>
      <div className=" min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-11/12 sm:max-w-2xl">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="text-2xl font-bold mb-4">Register as Student</h2>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div
              style={{
                marginTop: 24,
              }}
            >
              {current < steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => next()}
                  className={`${styles.ant_btn_primary} `}
                >
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success("Processing complete!")}
                  className={`${styles.ant_btn_primary} `}
                >
                  Register
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentRegistration;
