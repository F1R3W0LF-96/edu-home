import Repository, { baseDomain } from "./httpService";
import axios from "axios";
export async function getTotalRecords() {
  const reponse = await Repository(null)
    .get(`${baseDomain}/lists/count`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => ({ error: JSON.stringify(error) }));
  return reponse;
}

export async function getProductsByIds(payload, token) {
  const endPoint = `${baseDomain}/lists/${payload}`;
  const response = await Repository(token)
    .get(endPoint)
    .then((response) => {
      return {
        items: response.data,
      };
    })
    .catch((error) => ({ error: JSON.stringify(error) }));
  return response;
}

class AuthRepository {
  constructor() {}

  async login(email, password) {
    const endPoint = `${baseDomain}/login`;
    const reponse = await axios
      .post(endPoint, { email: email, password: password })
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
  async sendotp(phone) {
    const endPoint = `${baseDomain}/send-otp`;
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
    const endPoint = `${baseDomain}/user/${id}`;
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
}

export default AuthRepository;
