import { axiosInstance } from "@/lib/axios";


export const loginUser = (credentials) => {
  const { email, password } = credentials;
  return axiosInstance.post("/auth/login/", { email, password });
};

export const createAccount = (credentials) => {
  return axiosInstance.post("/auth/signup/", { ...credentials });
};


