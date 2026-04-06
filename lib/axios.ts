// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "/api", // IMPORTANTE: proxy
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("access_token");

//   if (token) {
//     config.headers = {
//       ...config.headers,
//       Authorization: `Bearer ${token}`,
//     };
//   }

//   return config;
// });

// export default axiosInstance;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================
   STATE REFRESH
========================= */
let isRefreshing = false;
let failedQueue: any[] = [];

/* =========================
   PROCESS QUEUE
========================= */
const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

/* =========================
   REQUEST INTERCEPTOR
========================= */
axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

/* =========================
   RESPONSE INTERCEPTOR (REFRESH LOGIC)
========================= */
axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // si no es 401 o ya fue reintentado → salir
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    // si ya se está refrescando → encolar request
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then((token) => {
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axiosInstance(originalRequest);
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      // 🔥 REFRESH TOKEN ENDPOINT
      const res = await axios.post(
        "/api/auth/refresh",
        {},
        { withCredentials: true }
      );

      const newToken = res.data.access_token;

      if (!newToken) throw new Error("No access token returned");

      localStorage.setItem("access_token", newToken);

      axiosInstance.defaults.headers.common.Authorization =
        `Bearer ${newToken}`;

      processQueue(null, newToken);

      return axiosInstance(originalRequest);
    } catch (err) {
      processQueue(err, null);

      localStorage.removeItem("access_token");

      window.location.href = "/login";

      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  }
);

export default axiosInstance;