import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // 🔥 IMPORTANTE: proxy
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;