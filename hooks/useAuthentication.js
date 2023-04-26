import { useState } from "react";
import useValidation from "./useValidation";
import AuthRepositors from "../services/authService";
export default function useAuthentication() {
  const AuthRepositor = new AuthRepositors();
  const { isEmail, validateEmail, validateStrongPassword } = useValidation();
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
    getlogin: async (email, password) => {
      setLoading(true);
      const isValidEmail = validateEmail(email);
      const isStrongPassword = validateStrongPassword(password);
      if (isValidEmail && isStrongPassword) {
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
        return true;
      } else {
        return false;
      }
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
  };
}
