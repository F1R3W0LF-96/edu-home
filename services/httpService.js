import axios from "axios";
export const baseDomain = `${process.env.BASE_URL}/api/v1`;
console.log(baseDomain);
export const baseUrlProduct = process.env.BASE_URL || "process.env.BASE_URL";
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
export const baseUrl = `${baseDomain}`;
const customAxios = (token) =>
  axios.create({
    baseUrl,
    headers: customHeaders(token),
  });
export default customAxios;
