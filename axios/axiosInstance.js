import axios from "axios";
import cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${cookies.get(
  "token"
)}`;

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
