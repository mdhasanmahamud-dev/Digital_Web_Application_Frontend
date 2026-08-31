// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000/api",
//   withCredentials: true,
// });

// // Response Interceptor
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (
//       error.response &&
//       (error.response.status === 401 || error.response.status === 403)
//     ) {
//       window.location.href = "/";
//     }
//     return Promise.reject(error);
//   },
// );

// export default axiosInstance;
import axios from "axios";
import { showError } from "../utils/showAlert";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      // window.location.href = "/login";
      // showError("Only Super Admin can chage the role")
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
