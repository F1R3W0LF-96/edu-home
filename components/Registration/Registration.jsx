import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TextChanger from "../Elements/TextChanger";
import { proverbs } from "@/helper";
import useAuthentication from "@/hooks/useAuthentication";
import { RegistrationTypes } from "@/helper/Constant";
import { addDetails, isAuthenticated } from "@/redux/userReducer";
import { toast } from "react-toastify";
function Registration({ registrationType, ...props }) {
  const {
    signUp,
    loading,
    validateEmail,
    validateStrongPassword,
    validatePhoneNo,
  } = useAuthentication();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true);
  const [formData, setFormData] = useState({
    firstName: {
      value: "",
      valid: false,
      errorText: "Atleat 3 characters or can't be blank",
      validFunc: (val) => val.length >= 3,
      touched: false,
    },
    lastName: {
      value: "",
      valid: false,
      errorText: "Atleat 3 characters or can't be blank",
      validFunc: (val) => val.length >= 3,
      touched: false,
    },
    phoneNumber: {
      value: "",
      valid: false,
      errorText: "Exact 10 digits Number or can't be blank",
      validFunc: (val) => validatePhoneNo(val),
      touched: false,
    },
    cnfPhNumber: {
      value: "",
      valid: false,
      errorText: "Exact 10 digits Number or can't be blank",
      validFunc: (val) => validatePhoneNo(val),
      touched: false,
    },
    password: {
      value: "",
      valid: false,
      errorText:
        "min length 8, atleast 1 uppercase (A-Z), atleast 1 lowercase (a-z), atleast one number (0-9), 1 special character. or can't be blank",
      validFunc: (val) => validateStrongPassword(val),
      touched: false,
    },
    email: {
      value: "",
      valid: false,
      errorText: "Invalid email address or can't be blank",
      validFunc: (val) => validateEmail(val),
      touched: false,
    },
  });

  // Your component code here

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: {
        ...prevFormData[name],
        value: value,
        valid: prevFormData[name].validFunc(value),
      },
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (formData.phoneNumber !== formData.cnfPhNumber) {
      toast.error("Phone number didn't match");
      return;
    }
    const apiData = {
      fullname: `${formData.firstName} ${formData.lastName}`,
      firstName: formData.firstName,
      LastName: formData.lastName,
      name: formData.firstName.toLowerCase(),
      email: `${formData.email}`,
      password: formData.password,
      phoneno: formData.phoneNumber,
      user_role:
        registrationType.toLowerCase() === RegistrationTypes.TEACHER_TYPE
          ? RegistrationTypes.TEACHER_TYPE
          : RegistrationTypes.STUDENT_TYPE,
    };
    const { data, success, error, message } = await signUp(
      apiData.fullname,
      apiData.name,
      apiData.email,
      apiData.password,
      apiData.phoneno,
      apiData.user_role
    );
    // console.log(data, success, error, message);
    if (success) {
      dispatch(addDetails({ data, success, error, message }));
      dispatch(isAuthenticated(true));
      const success_msg =
        message ||
        data?.data?.message ||
        data?.message ||
        "Successfully Registered";
      toast.success(success_msg);
      window.location.href = "https://tuitionsearch.co.in";
    } else {
      toast.error(message);
      dispatch(isAuthenticated(false));
    }
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    setFormData((ps) => ({ ...ps, [name]: { ...ps[name], touched: true } }));
  };

  useEffect(() => {
    let validBtn = false;
    Object.keys(formData).map((key, idx) => {
      if ((key, idx, formData[key].valid === false)) {
        validBtn = true;
      }
    });
    setSubmitBtnDisabled(validBtn);
  }, [formData]);

  return (
    <>
      <div className="min-w-screen min-h-screen bg-transparent flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: 1000 }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:flex w-1/2 bg-teal-500 py-10 px-10 flex items-center justify-items-center text-center">
              <TextChanger texts_arr={proverbs} />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">
                  REGISTER {"("}
                  {registrationType}
                  {")"}
                </h1>
                <p>Enter your information to register</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      First name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 ${
                          formData.firstName.value !== "" &&
                          formData.firstName.valid
                            ? "border-gray-200"
                            : formData.firstName.value === "" &&
                              !formData.firstName.valid
                            ? "border-gray-200"
                            : "border-red-200"
                        } outline-none focus:border-indigo-500`}
                        placeholder="John"
                        name="firstName"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    {formData.firstName.touched &&
                    formData.firstName.value === "" ? (
                      <div className="text-xs text-red-400">
                        Firstname is required
                      </div>
                    ) : formData.firstName.value !== "" &&
                      !formData.firstName.valid ? (
                      <div className="text-xs text-red-400">
                        {formData.firstName.errorText}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Last name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 ${
                          formData.lastName.value !== "" &&
                          formData.lastName.valid
                            ? "border-gray-200"
                            : formData.lastName.value === "" &&
                              !formData.lastName.valid
                            ? "border-gray-200"
                            : "border-red-200"
                        } outline-none focus:border-indigo-500`}
                        placeholder="Smith"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    {formData.lastName.touched &&
                    formData.lastName.value === "" ? (
                      <div className="text-xs text-red-400">
                        Lastname is required
                      </div>
                    ) : formData.lastName.value !== "" &&
                      !formData.lastName.valid ? (
                      <div className="text-xs text-red-400">
                        {formData.lastName.errorText}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Phone No
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-phone-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="number"
                        name="phoneNumber"
                        className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 ${
                          formData.phoneNumber.value !== "" &&
                          formData.phoneNumber.valid
                            ? "border-gray-200"
                            : formData.phoneNumber.value === "" &&
                              !formData.phoneNumber.valid
                            ? "border-gray-200"
                            : "border-red-200"
                        } outline-none focus:border-indigo-500`}
                        placeholder="9900881234"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    {formData.phoneNumber.touched &&
                    formData.phoneNumber.value === "" ? (
                      <div className="text-xs text-red-400">
                        Phone is required
                      </div>
                    ) : formData.phoneNumber.value !== "" &&
                      !formData.phoneNumber.valid ? (
                      <div className="text-xs text-red-400">
                        {formData.phoneNumber.errorText}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Confirm Phone No
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-phone-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="number"
                        name="cnfPhNumber"
                        className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 ${
                          formData.cnfPhNumber.value !== "" &&
                          formData.cnfPhNumber.valid
                            ? "border-gray-200"
                            : formData.cnfPhNumber.value === "" &&
                              !formData.cnfPhNumber.valid
                            ? "border-gray-200"
                            : "border-red-200"
                        } outline-none focus:border-indigo-500`}
                        placeholder="9900881234"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    {formData.cnfPhNumber.touched &&
                    formData.cnfPhNumber.value === "" ? (
                      <div className="text-xs text-red-400">
                        Confirm Phone is required
                      </div>
                    ) : formData.cnfPhNumber.value !== "" &&
                      !formData.cnfPhNumber.valid ? (
                      <div className="text-xs text-red-400">
                        {formData.cnfPhNumber.errorText}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 ${
                          formData.email.value !== "" && formData.email.valid
                            ? "border-gray-200"
                            : formData.email.value === "" &&
                              !formData.email.valid
                            ? "border-gray-200"
                            : "border-red-200"
                        } outline-none focus:border-indigo-500`}
                        placeholder="name@gmail.com"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    {formData.email.touched && formData.email.value === "" ? (
                      <div className="text-xs text-red-400">
                        Email is required
                      </div>
                    ) : formData.email.value !== "" && !formData.email.valid ? (
                      <div className="text-xs text-red-400">
                        {formData.email.errorText}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-1">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 ${
                          formData.password.value !== "" &&
                          formData.password.valid
                            ? "border-gray-200"
                            : formData.password.value === "" &&
                              !formData.password.valid
                            ? "border-gray-200"
                            : "border-red-200"
                        } outline-none focus:border-indigo-500`}
                        placeholder="************"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    {formData.password.touched &&
                    formData.password.value === "" ? (
                      <div className="text-xs text-red-400">
                        Passowrd is required
                      </div>
                    ) : formData.password.value !== "" &&
                      !formData.password.valid ? (
                      <div className="text-xs text-red-400">
                        {formData.password.errorText}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="mx-3 mb-4">
                  <input
                    type="checkbox"
                    name="showpassword"
                    onChange={() => {
                      setShowPassword((ps) => !ps);
                    }}
                  />
                  &nbsp;Show Password
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      disabled={submitBtnDisabled}
                      className={`block w-full max-w-xs mx-auto cursor-pointer ${
                        submitBtnDisabled
                          ? "bg-teal-100 hover:bg-teal-100 text-gray-400"
                          : "bg-teal-500 hover:bg-teal-700 text-white"
                      } focus:bg-teal-700 rounded-lg px-3 py-3 font-semibold`}
                      onClick={(e) => handleFormSubmit(e)}
                    >
                      REGISTER NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
