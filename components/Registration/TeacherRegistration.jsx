import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Registration.module.css";
import { Button, message, Steps, theme, Checkbox, Col, Row } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Budget, Education, Gender, Subjects } from "@/helper/Constant";
import deleteicon from "../../public/Images/deletebin.svg";

import plus from "../../public/Images/plus.svg";

import Image from "next/image";
import CreatableSelect from "react-select/creatable";

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
          className="p-2 shadow appearance-none border  focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
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
            className="block text-sm font-medium text-gray-700 mb-2  "
          >
            Email Id
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2 shadow appearance-none border"
            placeholder="yourname@abc.com"
            value={basicDetails.email}
            onChange={handleBasicDetailsChange}
            required
          />
        </div>
        <div className=" text-start">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2 shadow appearance-none border "
            placeholder="Enter your phone number"
            value={basicDetails.phone}
            onChange={handleBasicDetailsChange}
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
            name="gender"
            id="gender"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            value={basicDetails.gender}
            onChange={handleBasicDetailsChange}
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
            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2 shadow appearance-none border"
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

        <select
          className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2 shadow appearance-none border "
          value={JSON.stringify(basicDetails.address)}
          onChange={handleAddressChange}
        >
          <option value="" disabled>
            Select One
          </option>
          {address?.map((ele, idx) => (
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
  const [educationDetail, setEducationDetail] = useState([]);
  const [qualificationDetail, setQualificationDetail] = useState([]);

  useEffect(() => {
    addEducationDetail();
    addQualificationDetail();
  }, []);

  const addEducationDetail = () => {
    const newEducationDetail = {
      category: "",
      sub_category: "",
      year: "",
    };
    setEducationDetail([...educationDetail, newEducationDetail]);
  };
  const removeEducationDetail = (index) => {
    const updatedEducationDetail = [...educationDetail];
    updatedEducationDetail.splice(index, 1);
    setEducationDetail(updatedEducationDetail);
  };
  const addQualificationDetail = () => {
    const newQualificationDetail = {
      designation: "",
      company: "",
      year: "",
    };
    setQualificationDetail([...qualificationDetail, newQualificationDetail]);
  };
  const removeQualificationDetail = (index) => {
    const updatedQualificationDetail = [...qualificationDetail];
    updatedQualificationDetail.splice(index, 1);
    setQualificationDetail(updatedQualificationDetail);
  };
  const subjectOptions = [
    ...Subjects.ICSE.map((subject) => {
      return { name: subject, label: subject };
    }),
  ];
  return (
    <div className="m-5">
      <div className=" text-start">
        <label
          htmlFor="education"
          className=" text-sm font-medium text-gray-700 mb-2 flex"
        >
          Education
          <Image
            className="ml-5"
            alt={"plus"}
            src={plus}
            width={20}
            onClick={() => addEducationDetail()}
          />
        </label>
        {educationDetail &&
          educationDetail?.map((edetail, idx) => {
            return (
              <div className="flex justify-between" key={idx}>
                <select
                  className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-40 sm:text-sm rounded-md mb-2 shadow appearance-none border "
                  onChange={(e) =>
                    handleProfessionalDetailsChange(
                      e.target.value,
                      "Degree",
                      "education",
                      idx
                    )
                  }
                >
                  <option value="">Choose Education</option>
                  {Education.map((education) => {
                    return <option key={education}>{education}</option>;
                  })}
                </select>
                <input
                  type="text"
                  name="education"
                  id="education"
                  className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm rounded-md mb-2 ml-4"
                  placeholder="Engineering,doctor etc..."
                  value={edetail.category}
                  onChange={(e) =>
                    handleProfessionalDetailsChange(
                      e.target.value,
                      "degreeType",
                      "education",
                      idx
                    )
                  }
                  required
                />
                <input
                  type="text"
                  name="batch"
                  id="batch"
                  className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm rounded-md mb-2 ml-4"
                  placeholder="2014-2018"
                  value={edetail.sub_category}
                  onChange={(e) =>
                    handleProfessionalDetailsChange(
                      e.target.value,
                      "batch",
                      "education",
                      idx
                    )
                  }
                  required
                />
                <Image
                  className="ml-5"
                  alt={"deleteicon"}
                  src={deleteicon}
                  width={20}
                  height={1}
                  onClick={() => removeEducationDetail(idx)}
                />
              </div>
            );
          })}
      </div>

      <div className=" text-start">
        <label
          htmlFor="qualification"
          className="flex text-sm font-medium text-gray-700 mb-2"
        >
          Qualification
          <Image
            className="ml-5"
            alt={"plus"}
            src={plus}
            width={20}
            onClick={() => addQualificationDetail()}
          />
        </label>
        {qualificationDetail &&
          qualificationDetail?.map((qual, idx) => {
            return (
              <>
                <div className="flex justify-between">
                  <input
                    type="text"
                    name="designation"
                    id="designation"
                    className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm rounded-md mb-2"
                    placeholder="designation"
                    value={qual.designation}
                    onChange={(e) =>
                      handleProfessionalDetailsChange(
                        e.target.value,
                        "Qualification",
                        idx
                      )
                    }
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm rounded-md mb-2"
                    placeholder="company"
                    value={qual.company}
                    onChange={(e) =>
                      handleProfessionalDetailsChange(
                        e.target.value,
                        "Qualification",
                        idx
                      )
                    }
                    required
                  />
                  <input
                    type="text"
                    name="year"
                    id="year"
                    className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm rounded-md mb-2"
                    placeholder="year"
                    value={qual.year}
                    onChange={(e) =>
                      handleProfessionalDetailsChange(
                        e.target.value,
                        "Qualification",
                        idx
                      )
                    }
                    required
                  />
                  <Image
                    className="ml-5"
                    alt={"deleteicon"}
                    src={deleteicon}
                    width={20}
                    height={1}
                    onClick={() => removeQualificationDetail(idx)}
                  />
                </div>
              </>
            );
          })}
      </div>
      <div className=" text-start">
        <label
          htmlFor="subjects"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Subjects you can teach
        </label>
        <CreatableSelect isMulti options={subjectOptions} />
        {/* <textarea
          id="subjects"
          name="subjects"
          rows="3"
          className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md mb-2"
          placeholder="Enter the subjects you can teach"
          value={professionalDetails.subjects}
          onChange={handleProfessionalDetailsChange}
          required
        ></textarea> */}
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
  const [current, setCurrent] = useState(1);

  const [basicDetails, setBasicDetails] = useState({
    name: "",
    email: "",
    gender: "",
    pincode: "",
    city: "",
    address: {},
    phone: "",
  });
  const [address, setAddress] = useState([]);
  const [professionalDetails, setProfessionalDetails] = useState({
    education: [],
    qualification: [],
    subjects: "",
    stream: "",
  });
  const [otherDetails, setOtherDetails] = useState({
    hourly_rate: 0,
    other_description: "",
  });
  const [modeOfTeaching, setModeOfTeaching] = useState(null);

  const handleBasicDetailsChange = (e) => {
    const { name, value } = e.target;
    setBasicDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProfessionalDetailsChange = (value, name, type, index) => {
    const updatedEducationDetails = { ...professionalDetails };
    if (type === "education") {
      const education = [...updatedEducationDetails.education];
      education[index] = {
        ...education[index],
        [name]: value,
      };
      debugger;
      setProfessionalDetails({
        ...updatedEducationDetails,
        education: education,
      });
    }

    console.log("updatedEducationDetails", updatedEducationDetails);
    // setProfessionalDetails({
    //   ...professionalDetails,
    //   [name]: value,
    // });
  };

  const handlePincodeChange = async (e) => {
    const { value } = e.target;
    if (value.length === 6) {
      try {
        const response = await axios.get(
          `https://api.postalpincode.in/pincode/${e.target.value}`
        );
        debugger;
        setBasicDetails((ps) => ({
          ...ps,
          pincode: value,
          address: response.data[0].PostOffice[0],
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
    registerUser(current);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const registerUser = (step) => {
    const apiUrl = process.env.API_URL;
    const body =
      step === 0
        ? {
            fullName: basicDetails.name,
            email: basicDetails.email,
            password: "Rozer@123",
            phoneno: basicDetails.phone,
            user_role: "TEACHER",
            gender: basicDetails.gender,
            status: 1,
            coins: 300,

            image:
              "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
            isProfileComplete: false,
            isDeleted: false,
            address: basicDetails.address,
            qualifications: [],
            subjects: [],
            experiences: [],
          }
        : {};
    if (step === 0) {
      axios.post(`${apiUrl}/api/v1/users/sign-up`, body).then((response) => {
        localStorage.setItem("accessToken", response.data.meta.accessToken);
      });
    }
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
