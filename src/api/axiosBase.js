import axios from "axios";
import { useEffect } from "react";

const axiosBase = axios.create({
  
  baseURL: "https://lectoya-back.onrender.com/app",
});

//  Token requests
axiosBase.defaults.headers.common.Authorization =
  localStorage.getItem("jwtdata") ?? "";



export default axiosBase;
