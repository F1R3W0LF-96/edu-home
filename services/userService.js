import Repository, { baseDomain, customHeaders } from "./httpService";

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

class UserRepository {
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
}

export default UserRepository;
