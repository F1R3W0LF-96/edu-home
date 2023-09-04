import { useState } from "react";
import useValidation from "./useValidation";
import AuthRepositors, { updateUserDetails } from "../services/authService";
export default function useAuthentication() {
  const AuthRepositor = new AuthRepositors();
  const { isEmail, validateEmail, validateStrongPassword, validatePhoneNo } =
    useValidation();
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginResponse, setLoginResponse] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  return {
    loading,
    isAuthenticated,
    loginResponse,
    userDetails,
    isEmail,
    setUserDetails,
    updateUserDetails,
    setLoading: (payload) => {
      setLoading(payload);
    },
    getotp: async (phoneno) => {
      setLoading(true);
      const isValidPhone = validatePhoneNo(phoneno);
      if (isValidPhone) {
        const response = await AuthRepositor.sendotp(phoneno);
        if (response) {
          setLoginResponse(response);
          setIsAuthenticated(true);
          setLoading(false);
        }
        return true;
      } else {
        return false;
      }
    },
    getlogin: async (phoneno, password) => {
      setLoading(true);
      const response = await AuthRepositor.login(phoneno, password);
      if (response.success) {
        setLoginResponse(response);
        setIsAuthenticated(true);
        setLoading(false);
      } else {
        setLoginResponse(null);
        setIsAuthenticated(false);
        setLoading(false);
      }
      return response;
    },
    getUserDetails: async (id) => {
      setLoading(true);
      const response = await AuthRepositor.getUserDetails(id);
      console.log(response.data, ":::: getUserDetails ::::");
      if (response) {
        setUserDetails(response.data.data);
        setLoading(false);
      } else {
        setLoading(false);
        return null;
      }
      return response;
    },
    signUp: async (fullname, name, email, password, phoneno, user_role) => {
      setLoading(true);
      const isValidEmail = validateEmail(email);
      const isStrongPassword = validateStrongPassword(password);
      const isPhone = validatePhoneNo(phoneno);
      if (isValidEmail && isStrongPassword && isPhone) {
        try {
          const requestBody = {
            fullname: fullname,
            name: name,
            email: email,
            password: password,
            phoneno: phoneno,
            user_role: user_role === "teacher" ? "TEACHER" : "STUDENT",
          };

          const response = await AuthRepositor.signUp(requestBody);
          setLoginResponse(response.data);
          setIsAuthenticated(true);
          setLoading(false);
          return {
            data: response,
            success: response?.success,
            error: false,
            message: response?.message,
          };
        } catch (error) {
          setLoading(false);
          return {
            data: error,
            success: false,
            error: true,
            message: error?.message || "Something went wrong.",
          };
        }
      } else {
        let errostr = "";
        if (!isStrongPassword) {
          errostr =
            errostr +
            "min length 8, atleast 1 uppercase (A-Z), atleast 1 lowercase (a-z), atleast one number (0-9), 1 special character.";
        }
        if (!isValidEmail) {
          errostr = errostr + "\n Not valid email";
        }
        if (isPhone) {
          errostr = errostr + "\n Not valid phone no";
        }
        setLoading(false);
        return {
          data: null,
          success: false,
          error: true,
          message: errostr === "" ? "Invalid email or password." : errostr,
        };
      }
    },
    getUserBtRole: async (role) => {
      setLoading(true);
      const response = await AuthRepositor.getUsersByRole(role);
      return response;
    },
  };
}
