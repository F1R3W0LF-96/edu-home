import Repository, { baseDomain, customHeaders } from "./httpService";
import axios from "axios";
// export async function getTotalRecords() {
//   const reponse = await Repository(null)
//     .get(`${baseDomain}/lists/count`)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => ({ error: JSON.stringify(error) }));
//   return reponse;
// }

export async function updateUserDetails(body, token) {
  const endPoint = `${baseDomain}/users/update-user`;
  const response = await Repository(token)
    .patch(endPoint, body)
    .then((response) => {
      return {
        success: true,
        data: response.data,
        error: false,
      };
    })
    .catch((error) => ({
      success: false,
      data: error?.response?.data,
      error: true,
    }));
  return response;
}

class AuthRepository {
  token = "";
  headers = customHeaders("");
  constructor(_token, _headers) {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Accept: "application/json",
      authorization: token,
    };
    this.token = _token ? _token : token;
    this.headers = _headers ? _headers : headers;
  }

  async login(phoneno, password) {
    const endPoint = `${baseDomain}/users/login`;
    const response = await axios
      .post(endPoint, { phoneno: phoneno, password: password })
      .then((response) => {
        if (response.data && response.data.success) {
          return {
            success: true,
            data: response.data.data,
            error: false,
          };
        } else {
          return {
            success: false,
            data: null,
            error: false,
          };
        }
      })
      .catch((error) => {
        return {
          success: false,
          data: error?.response?.data || error,
          error: true,
        };
      });
    return response;
  }
  async sendotp(phone) {
    const endPoint = `${baseDomain}/users/send-otp`;
    const reponse = await axios
      .post(endPoint, { phoneno: phone })
      .then((response) => {
        if (response.data) {
          return response.data;
        } else {
          return null;
        }
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
      });
    return reponse;
  }
  async getUserDetails(id) {
    const endPoint = `${baseDomain}/users/profile?id=${id}`;
    console.log(this.headers);
    const reponse = await axios
      .get(endPoint, { headers: { ...this.headers } })
      .then((response) => {
        if (response.data) {
          return {
            success: true,
            data: response.data,
            error: false,
          };
        } else {
          return {
            success: false,
            data: error?.response?.data || error,
            error: true,
          };
        }
      })
      .catch((error) => {
        return {
          success: false,
          data: error?.response?.data || error,
          error: true,
        };
      });
    return reponse;
  }

  async signUp(requestBody) {
    const endPoint = `${baseDomain}/users/sign-up`;
    try {
      const response = await axios.post(endPoint, requestBody);
      return response.data;
    } catch (error) {
      console.log(error?.response?.data?.message);
      return error?.response?.data || error;
    }
  }
  async getUsersByRole(role) {
    const endpoint = `${baseDomain}/users/listing-by-role?user_role=${role}`;
    try {
      const response = await axios.get(endpoint);
      return response.data; // Return the data from the response
    } catch (error) {
      console.error("Error:", error);
      return error?.response?.data || error; // Return null in case of an error
    }
  }
}

export default AuthRepository;
