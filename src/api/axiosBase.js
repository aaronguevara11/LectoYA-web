import axios from "axios";

const axiosBase = axios.create({
  baseURL: "http://localhost:3000/app",
});

//  Token requests
axiosBase.defaults.headers.common.Authorization =
  localStorage.getItem("jwtdata") ?? "";

export default axiosBase;
