import axios from "axios";

import Cookies from "js-cookie";
export const axiosInstance = axios.create({
  baseURL: "https://elshamelapi.js-py.me/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("token");

  if (token) {
    config.headers["Authorization"] = `${token}`;
  }

  // Add any other custom headers

  return config;
});
