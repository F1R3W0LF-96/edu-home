import axios from "axios";
export const baseDomain = "http://143.244.128.159:8500";
export const baseUrlProduct = "http://143.244.128.159:8500";
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
