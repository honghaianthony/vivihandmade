import axiosInstance from "./axiosInstance";

export const postLogin = async (data) => {
  return await axiosInstance.post("/auth/login", data);
};

export const register = async (data) => {
  return await axiosInstance.post("/auth/register", data);
};
