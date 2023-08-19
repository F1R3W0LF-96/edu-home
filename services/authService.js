import Repository, { baseDomain } from "./httpService";
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

// export async function getProductsByIds(payload, token) {
//   const endPoint = `${baseDomain}/lists/${payload}`;
//   const response = await Repository(token)
//     .get(endPoint)
//     .then((response) => {
//       return {
//         items: response.data,
//       };
//     })
//     .catch((error) => ({ error: JSON.stringify(error) }));
//   return response;
// }

class AuthRepository {
  constructor() {}

  async login(phoneno, password) {
    const endPoint = `${baseDomain}/users/login`;
    // const endPoint = `https://api.tuitionsearch.co.in/api/v1/users/login`;
    const reponse = await axios
      .post(endPoint, { phoneno: phoneno, password: password })
      .then((response) => {
        debugger
        if (response.data) {
          return response.data.data;
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
    const endPoint = `${baseDomain}/users/${id}`;
    const reponse = await axios
      .get(endPoint)
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

  async signUp(requestBody) {
    const endPoint = `${baseDomain}/users/sign-up`;
    // const endPoint = `https://api.tuitionsearch.co.in/api/v1/users/sign-up`;

    try {
      const response = await axios.post(endPoint, requestBody);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default AuthRepository;
