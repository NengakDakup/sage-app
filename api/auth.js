import { axiosInstance } from "@/lib/axios";


export const loginUser = (credentials) => {
  const { email, password } = credentials;
  return axiosInstance.post("/auth/login/", { email, password });
};

export const createUser = (credentials) => {
  return axiosInstance.post("/auth/register/", { ...credentials });
};


