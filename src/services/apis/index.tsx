
import { create } from "apisauce";
import { apiMonitor } from "./monitor";

// const BASE_URL = "http://localhost:3005";
const BASE_URL = "https://blog-website-node.onrender.com/";

export const URIS = {
  GET_ALL_POSTS: "/post/all",
  GET_POST: "/post",
  GET_POPULAR_POSTS: "/post/popular"
};

let api = create({
  baseURL: BASE_URL,
  headers: {
    // Accept: "application/json",
    // "Cache-Control": "no-cache",
    // "Content-Type": "application/json",
    // "ngrok-skip-browser-warning": "69420"
  },
  timeout: 600000,
});
api.addMonitor(apiMonitor);

api.axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    //   let originalRequest = error.config;
    //   let isunauth = error.response && error.response.status === 401;
    //   if (isunauth && !originalRequest._retry && !originalRequest.headers._retry) {
    //     originalRequest._retry = true;
    //   } else {
    return Promise.resolve(error);
    //   }
  }
);

// export const setAuthorizationHeader = (access_token) => {
//   if (!access_token) delete api.headers["Authorization"];
//   else api.setHeader("Authorization", "Bearer " + access_token);
// };

// export const setSchoolHeader = (schoolId) => {
//   if (!schoolId) delete api.headers["schoolId"];
//   else api.setHeader("schoolId", schoolId);
// };
// export const setSessionHeader = (session) => {
//   if (!session) delete api.headers["session"];
//   else api.setHeader("session", session);
// };

// export const removeAuthorizationHeader = () => {
//   delete api.headers["Authorization"];
// };

// export const setUserAgent = (info) => api.setHeader("device", info);

export { api as apiClient };
