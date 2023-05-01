import React, { useState } from "react";
import styles from "@/styles/Registration.module.css";
import { Button, message, Select, Steps, theme } from "antd";
import {
  BoardsTypes,
  Budget,
  Gender,
  ModeOfTeaching,
  Subjects,
} from "@/helper/Constant";
import axios from "axios";

function StudentRegistration() {
  const [selectedBoard, setSelectedBoard] = useState("");
  const BasicDetails = () => {
    const [address, setAddress] = useState([]);
    const [pincode, setPincode] = useState("");

    const handlePincodeChange = async (e) => {
      const { value } = e.target;
      if (value.length === 6) {
        try {
          const response = await axios.get(
            `https://api.postalpincode.in/pincode/${e.target.value}`
          );
          setPincode(value);
          setAddress(response.data[0].PostOffice);
        } catch (error) {
          console.log(error);
        }
      } else {
        setPincode(value);
      }
    };
    console.log(":::::pincode", pincode);
    return (
      <div>
        <div className="mb-4 text-start">
          <label for="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4 text-start">
          <label for="pincode" className="block text-gray-700 font-bold mb-2">
            Pincode
          </label>
          <input
            type="text"
            name="pincode"
            id="pincode"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your pincode"
            required
            onChange={handlePincodeChange}
            value={pincode}
          />
        </div>
        <div className="mb-4 text-start">
          <label for="city" className="block text-gray-700 font-bold mb-2">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your city"
            required
          />
        </div>
        <div className="mb-4 text-start">
          <label for="address" className="block text-gray-700 font-bold mb-2">
            Address or Landmark
          </label>

          <select className="shadow border rounded w-full py-3 px-3 text-gray-700 ">
            <option value="">Choose Address</option>
            {address.map((type, index) => {
              return (
                <option key={type.Name} value={type.Name}>
                  {type.Name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-4 text-start">
          <label for="phone" className="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-4 text-start">
          <label for="otp" className="block text-gray-700 font-bold mb-2">
            One-Time Password (OTP)
          </label>
          <input
            type="text"
            name="otp"
            id="otp"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the OTP sent to your phone number"
            required
          />
        </div>
        <div className="mb-4 text-start ">
          <label for="class" className="block text-gray-700 font-bold mb-2">
            Class
          </label>
          <input
            type="text"
            name="class"
            id="class"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your class"
            required
          />
        </div>
        <div className="mb-4 text-start">
          <label for="board" className="block text-gray-700 font-bold mb-2">
            Board
          </label>

          <select
            className="shadow border rounded w-full py-3 px-3 text-gray-700 "
            onChange={(e) => {
              setSelectedBoard(e.target.value);
            }}
            value={selectedBoard}
          >
            <option value="">Choose Board</option>
            {Object.keys(BoardsTypes).map((type, index) => {
              return (
                <option key={type} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  };
  const EducationDetails = () => {
    return (
      <>
        <div className="mb-4 text-start">
          <label for="subject" className="block text-gray-700 font-bold mb-2">
            Subject
          </label>

          <select className="shadow border appearance-none rounded w-full py-3 px-3 text-gray-700 ">
            <option value="">Choose Subject</option>
            {Subjects[selectedBoard] &&
              (Subjects[selectedBoard] || Subjects.CBSE).map((type, index) => {
                return (
                  <option key={type} value={type}>
                    {type}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="mb-4 text-start">
          <label
            for="mode-of-tuition"
            className="block text-gray-700 font-bold mb-2"
          >
            Mode of Tuition
          </label>
          <select
            name="teacher-gender"
            id="teacher-gender"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Mode of Teaching</option>
            {ModeOfTeaching.map((value, index) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-4 text-start">
          <label
            for="teacher-gender"
            className="block text-gray-700 font-bold mb-2"
          >
            Teacher Gender
          </label>
          <select
            name="teacher-gender"
            id="teacher-gender"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select gender</option>
            {Gender.map((value, index) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mt-6 text-start">
          <label
            for="hourly-rate"
            className="block text-sm font-medium text-gray-700"
          >
            Hourly Budget
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <select className="shadow border appearance-none rounded w-full py-3 px-3 text-gray-700 ">
              <option value="">Choose Budget</option>
              {Budget.map((type, index) => {
                return (
                  <option key={type} value={type}>
                    {type}
                  </option>
                );
              })}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">INR/hour</span>
            </div>
          </div>
        </div>
        <div className="mt-6 text-start">
          <label
            for="description"
            className="block text-sm font-medium text-gray-700"
          >
            Other Information
          </label>
          <div className="mt-1 mb-4">
            <textarea
              id="description"
              name="description"
              rows="3"
              className="shadow-sm p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
  console.log("seleted board items", selectedBoard);
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
                <span className="flex justify-between">
                  <Button
                    type="primary"
                    onClick={() => prev()}
                    className={`${styles.ant_btn_primary} align-center`}
                  >
                    Back
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => message.success("Processing complete!")}
                    className={`${styles.ant_btn_primary} align-center`}
                  >
                    Register
                  </Button>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentRegistration;
