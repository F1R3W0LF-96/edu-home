import axios from "axios";
// export const baseDomain = `${process.env.BASE_URL}/api/v1`;
export const baseDomain = "https://api.tuitionsearch.co.in/api/v1";
export const baseUrl = `${baseDomain}`;
// export const baseUrlProduct = process.env.BASE_URL || "process.env.BASE_URL";
export const baseUrlProduct = "https://api.tuitionsearch.co.in/api/v1";
export const customHeaders = (token) =>
  token === null
    ? {
        Accept: "application/json",
      }
    : {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      };

export const serializeQuery = (query) => {
  return Object.keys(query)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
    )
    .join("&");
};
const customAxios = (token) =>
  axios.create({
    baseUrl,
    headers: customHeaders(token),
  });
export default customAxios;
