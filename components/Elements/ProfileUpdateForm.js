import React, { useEffect, useState } from "react";
import { Modal } from "antd";
const ProfileUpdateForm = ({
  isModalOpen,
  handleOk,
  handleCancel,
  data,
  handleUpdate,
}) => {
  console.log(data);
  useEffect(() => {
    setProfileDetails((ps) => ({
      ...ps,
      firstname: {
        ...ps.firstname,
        value: data?.firstName,
      },
      lastname: {
        ...ps.lastname,
        value: data?.LastName,
      },
      email: {
        ...ps.email,
        value: data?.email,
      },
      phoneno: {
        ...ps.phoneno,
        value: data?.phoneno,
      },
    }));
    setGender(data?.gender);
  }, [data]);
  const [updating, setUpdating] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    firstname: {
      type: "text",
      value: "",
      valid: false,
      label: "First Name",
      placeholder: "Enter the first name",
    },
    lastname: {
      type: "text",
      value: "",
      valid: false,
      label: "Last Name",
      placeholder: "Enter the last name",
    },
    email: {
      type: "email",
      value: "",
      valid: false,
      label: "Email",
      placeholder: "Enter the email",
    },
    phoneno: {
      type: "number",
      value: "",
      valid: false,
      label: "Phone no",
      placeholder: "Enter the phone no",
    },
    birthday: {
      type: "date",
      value: "",
      valid: false,
      label: "Birthday",
      placeholder: "Enter the text",
    },
  });

  const [gender, setGender] = useState("");
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setProfileDetails((ps) => ({
      ...ps,
      [name]: { ...ps[name], value: value },
    }));
  };
  return (
    <Modal
      title="Update Profile"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okButtonProps={{
        type: "default",
      }}
      cancelButtonProps={{
        type: "link",
      }}
    >
      <form onSubmit={() => {}}>
        {Object.keys(profileDetails).map((key, idx) => (
          <div className="mb-5" key={idx}>
            <label htmlFor="" className="text-xs font-semibold px-1">
              {profileDetails[key].label}
            </label>
            <div className="flex">
              <input
                value={profileDetails[key].value}
                type={profileDetails[key].type}
                className="w-full px-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder={profileDetails[key].placeholder}
                name={key}
                onChange={handleInputChange}
              />
            </div>
          </div>
        ))}
        <div className="mb-5">
          <label htmlFor="" className="text-xs font-semibold px-1">
            Gender
          </label>
          <div className="flex">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            >
              <option value={"MALE"}>MALE</option>
              <option value={"FEMALE"}>FEMALE</option>
              <option value={"TRANSGENDER"}>TRANSGENDER</option>
            </select>
          </div>
        </div>
      </form>
    </Modal>
  );
};
export default ProfileUpdateForm;
