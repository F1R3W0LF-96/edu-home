import axios from "axios";
import React, { useState } from "react";
import styles from "@/styles/Registration.module.css";
import { Button, message, Steps, theme, Checkbox, Col, Row } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
const BasicSection = ({
  basicDetails,
  address,
  handleAddressChange,
  handleBasicDetailsChange,
  handlePincodeChange,
}) => {
  return (
    <div className="m-5 ">
      <div className=" text-start">
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
          className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
          placeholder="Enter your full name"
          value={basicDetails.name || ""}
          onChange={handleBasicDetailsChange}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className=" text-start">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Id
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
            placeholder="yourname@abc.com"
            value={basicDetails.email}
            onChange={handleBasicDetailsChange}
            required
          />
        </div>
        <div className=" text-start">
          <label
            htmlFor="pincode"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
            placeholder="Enter your pincode"
            value={basicDetails.phone}
            // onChange={handlePincodeChange}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className=" text-start">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
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
        <div className=" text-start">
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
            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
            placeholder="Enter your pincode"
            // value={basicDetails.pincode}
            onChange={handlePincodeChange}
            required
          />
        </div>
      </div>
      <div className=" text-start">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select Your Address
        </label>
        {/* <input
          type="text"
          name="city"
          id="city"
          className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
          placeholder="City"
          value={basicDetails.city}
          readOnly
          required
          disabled
        /> */}
        <select
          className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
          value={JSON.stringify(basicDetails.address)}
          onChange={handleAddressChange}
        >
          <option value="" disabled>
            Select One
          </option>
          {address.map((ele, idx) => (
            <option key={idx + "_address"} value={JSON.stringify(ele)}>
              {ele.Name},{ele.Block},{ele.District},{ele.Pincode}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
const ProfessionalSection = ({
  professionalDetails,
  handleProfessionalDetailsChange,
}) => {
  return (
    <div className="m-5">
      <div className=" text-start">
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
          className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
          placeholder="Education"
          value={professionalDetails.education}
          onChange={handleProfessionalDetailsChange}
          required
        />
      </div>
      <div className=" text-start">
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
          className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
          placeholder="Qualification"
          value={professionalDetails.qualification}
          onChange={handleProfessionalDetailsChange}
          required
        />
      </div>
      <div className=" text-start">
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
          className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
          placeholder="Enter the subjects you can teach"
          value={professionalDetails.subjects}
          onChange={handleProfessionalDetailsChange}
          required
        ></textarea>
      </div>
      <div className=" text-start">
        <label
          htmlFor="experience"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Experience
        </label>
        <select
          id="experience"
          name="experience"
          className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
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
  );
};
const OtherDetails = ({ othersDetails, handleChange }) => {
  return (
    <div className="m-5">
      <div className="mt-6 text-start">
        <label
          for="hourly-rate"
          className="block text-sm font-medium text-gray-700"
        >
          Hourly Rate
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="number"
            name="hourly_rate"
            id={othersDetails.hourly_rate}
            onChange={handleChange}
            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
            required
          />
        </div>
      </div>

      <div className="mt-6 text-start">
        <label
          for="description"
          className="block text-sm font-medium text-gray-700"
        >
          Other Information
        </label>
        <div className="mt-1">
          <textarea
            id="description"
            name="other_description"
            rows="3"
            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
            placeholder="Enter any additional information or description"
            value={othersDetails.other_description}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
function TeacherRegistration() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const [basicDetails, setBasicDetails] = useState({
    name: "",
    email: "",
    gender: "",
    pincode: "",
    city: "",
    address: {},
  });
  const [address, setAddress] = useState([]);
  const [professionalDetails, setProfessionalDetails] = useState({
    education: "",
    qualification: "",
    subjects: "",
  });
  const [otherDetails, setOtherDetails] = useState({
    hourly_rate: 0,
    other_description: "",
  });
  const [modeOfTeaching, setModeOfTeaching] = useState(null);

  const handleBasicDetailsChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, ":::::: name and value :::::::");
    setBasicDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProfessionalDetailsChange = (e) => {
    const { name, value } = e.target;
    setProfessionalDetails({
      ...professionalDetails,
      [name]: value,
    });
  };

  const handlePincodeChange = async (e) => {
    const { value } = e.target;
    if (value.length === 6) {
      try {
        const response = await axios.get(
          `https://api.postalpincode.in/pincode/${e.target.value}`
        );
        setBasicDetails((ps) => ({
          ...ps,
          pincode: value,
        }));
        setAddress(response.data[0].PostOffice);
      } catch (error) {
        console.log(error);
      }
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
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(basicDetails, professionalDetails);
    // Submit the form data to the server
  };

  const steps = [
    {
      title: "Basic Details",
      content: (
        <BasicSection
          address={address}
          handleAddressChange={(e) => {
            const { value } = e.target;
            const _addr = JSON.parse(value);
            setBasicDetails((ps) => ({
              ...ps,
              address: _addr,
            }));
          }}
          basicDetails={basicDetails}
          handleBasicDetailsChange={handleBasicDetailsChange}
          handlePincodeChange={handlePincodeChange}
        />
      ),
    },
    {
      title: "Professional Details",
      content: (
        <ProfessionalSection
          professionalDetails={professionalDetails}
          handleProfessionalDetailsChange={handleProfessionalDetailsChange}
        />
      ),
    },
    {
      title: "Other Information",
      content: (
        <OtherDetails
          othersDetails={otherDetails}
          handleChange={(e) => {
            const { name, value } = e.target;
            setOtherDetails((prevState) => ({
              ...prevState,
              [name]: [value],
            }));
          }}
        />
      ),
    },
  ];
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
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div className={styles.registration_page_wrapper}>
      <div className=" min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-11/12 sm:max-w-2xl">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="text-2xl font-bold mb-4">Register as Teacher</h2>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <Row>
              <Col span={4}>
                {current > 0 && (
                  <Button
                    style={{
                      margin: "0 8px",
                    }}
                    onClick={() => prev()}
                    type="link"
                  >
                    <LeftOutlined />
                    Previous
                  </Button>
                )}
              </Col>
              <Col span={16}></Col>
              <Col span={4}>
                {current < steps.length - 1 && (
                  <Button onClick={() => next()} type="link">
                    <span style={{ display: "flex", alignItems: "center" }}>
                      Next <RightOutlined />
                    </span>
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    type="link"
                    onClick={() => message.success("Processing complete!")}
                  >
                    Finish
                  </Button>
                )}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherRegistration;
