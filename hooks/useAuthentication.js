import { useState } from "react";
import useValidation from "./useValidation";
import AuthRepositors from "../services/authService";
export default function useAuthentication() {
  const AuthRepositor = new AuthRepositors();
  const { isEmail, validateStrongPassword, validatePhoneNo } = useValidation();
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
          setTimeout(
            function () {
              setLoading(false);
            }.bind(this),
            250
          );
        }
        return true;
      } else {
        return false;
      }
    },
    getlogin: async (phoneno, password) => {
      setLoading(true);
      const response = await AuthRepositor.login(email, password);
      if (response) {
        setLoginResponse(response);
        setIsAuthenticated(true);
        setTimeout(
          function () {
            setLoading(false);
          }.bind(this),
          250
        );
      }
      return response;
    },
    getUserDetails: async (id) => {
      setLoading(true);
      const response = await AuthRepositor.getUserDetails(id);
      if (response) {
        setUserDetails(response);
      } else {
        return null;
      }
    },
    signUp: async (fullname, name, email, password, phoneno, user_role) => {
      setLoading(true);
      const isValidEmail = validateEmail(email);
      // const isStrongPassword = validateStrongPassword(password);
      // debugger;

      if (
        isValidEmail
        // && isStrongPassword
      ) {
        try {
          const requestBody = {
            fullname: fullname,
            name: name,
            email: email,
            password: password,
            phoneno: phoneno,
            user_role: user_role,
          };

          const response = await AuthRepositor.signUp(requestBody);
          setLoginResponse(response.data);
          setIsAuthenticated(true);
          setTimeout(() => setLoading(false), 250);
          return response.data; // Return the response data on successful sign-up
        } catch (error) {
          console.error(error);
          setLoading(false);
          return { error: "An error occurred during sign-up." }; // Return an error object if the API call fails
        }
      } else {
        setLoading(false);
        return { error: "Invalid email or password." }; // Return an error object for validation errors
      }
    },
  };
}
