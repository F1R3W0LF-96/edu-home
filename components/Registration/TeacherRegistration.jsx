import axios from "axios";
import React, { useState } from "react";
import styles from "@/styles/Registration.module.css";

function TeacherRegistration() {
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    gender: "",
    pincode: "",
    city: "",
  });

  const [professionalDetails, setProfessionalDetails] = useState({
    education: "",
    qualification: "",
    subjects: "",
  });
  const [modeOfTeaching, setModeOfTeaching] = useState(null);

  const handleBasicDetailsChange = (e) => {
    setBasicDetails({
      ...basicDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfessionalDetailsChange = (e) => {
    setProfessionalDetails({
      ...professionalDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePincodeChange = async (e) => {
    setBasicDetails({
      ...basicDetails,
      pincode: e.target.value,
    });

    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${e.target.value}`
      );
      const city = response.data[0].PostOffice[0].District;
      setBasicDetails({
        ...basicDetails,
        city,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleModeOfTeachingChange = (event) => {
    const { name, checked } = event.target;
    setModeOfTeaching((prevState) => {
      return {
        ...prevState,
        [name]: checked,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(basicDetails, professionalDetails);
    // Submit the form data to the server
  };
  console.log("modeOfTeaching", modeOfTeaching);
  return (
    <div className={styles.registration_page_wrapper}>
      <div className=" min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-full">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="text-2xl font-bold mb-4">Register as Teacher</h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {/* Basic Details */}
              <div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md mb-2"
                    placeholder="Enter your full name"
                    value={basicDetails.name}
                    onChange={handleBasicDetailsChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md mb-2"
                      value={basicDetails.gender}
                      onChange={handleBasicDetailsChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="pincode"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Pincode
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      id="pincode"
                      className="p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md mb-2"
                      placeholder="Enter your pincode"
                      value={basicDetails.pincode}
                      onChange={handlePincodeChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className=" p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md mb-2"
                    placeholder="City"
                    value={basicDetails.city}
                    readOnly
                    required
                  />
                </div>
                <h3 className="text-lg font-bold mt-6 mb-2">
                  Professional Details
                </h3>
                <div>
                  <label
                    htmlFor="education"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Education
                  </label>
                  <input
                    type="text"
                    name="education"
                    id="education"
                    className=" p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md mb-2"
                    placeholder="Education"
                    value={professionalDetails.education}
                    onChange={handleProfessionalDetailsChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="qualification"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Qualification
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    id="qualification"
                    className="p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md mb-2"
                    placeholder="Qualification"
                    value={professionalDetails.qualification}
                    onChange={handleProfessionalDetailsChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subjects"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subjects you can teach
                  </label>
                  <textarea
                    id="subjects"
                    name="subjects"
                    rows="3"
                    className="p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md mb-2"
                    placeholder="Enter the subjects you can teach"
                    value={professionalDetails.subjects}
                    onChange={handleProfessionalDetailsChange}
                    required
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    className=" p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md mb-2"
                    value={professionalDetails.experience}
                    onChange={handleProfessionalDetailsChange}
                    required
                  >
                    <option value="">Select Experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="2-4">2-4 years</option>
                    <option value="4-6">4-6 years</option>
                  </select>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mt-6 mb-2">
                  Mode of Teaching
                </h3>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="mode-online"
                    name="modeOnline"
                    className="mr-2"
                    onChange={handleModeOfTeachingChange}
                  />
                  <label htmlFor="mode-online">Online</label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="mode-offline"
                    name="modeOffline"
                    className="mr-2"
                    onChange={handleModeOfTeachingChange}
                  />
                  <label htmlFor="mode-offline">Offline</label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="mode-both"
                    name="modeBoth"
                    className="mr-2"
                    onChange={handleModeOfTeachingChange}
                  />
                  <label htmlFor="mode-both">Both</label>
                </div>
                <div class="mt-6">
                  <label
                    for="hourly-rate"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Hourly Rate
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
                <div class="mt-6">
                  <label
                    for="description"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Other Information
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows="3"
                      class="shadow-sm p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter any additional information or description"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherRegistration;
