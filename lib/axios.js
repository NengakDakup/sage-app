import { handleLogout } from "@/common/helpers";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api/`,
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
});

const _requestInterceptor = (config) => {
    if (
      !config.headers["Authorization"] &&
      localStorage.getItem("access_token")
    ) {
      const access_token = localStorage.getItem("access_token");
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }
  
    return config;
};

const _responseInterceptor = () => ({
    
    onFulfilled(response) {
      return Promise.resolve(response);
    },
  
    onRejected(error) {
      if (error.response) {
        if (error.response.status) {
          const status = error.response.status;
          switch (status) {
            case 401:
              if (
                window.location.pathname === "/auth/login" ||
                window.location.pathname === "/auth/signup"
              ) {
                return Promise.reject(error);
              }
              return handleLogout(); // Log user out. Token has expired
            case 403:
              return; // Throw permission error. User not permitted to view this resource
            case 404:
              return; // Throw resource not found error
            case 500:
            case 503:
              return; // Internal server error.
            default:
              return Promise.reject(error);
          }
        }
      }
  
      // Throw error if internet connections is lost or unavailable
      if (!navigator.onLine) {
        // Throw network error
      }
    },
});
  
const { onFulfilled, onRejected } = _responseInterceptor();
  
axiosInstance.interceptors.request.use(_requestInterceptor);
axiosInstance.interceptors.response.use(onFulfilled, onRejected);

  