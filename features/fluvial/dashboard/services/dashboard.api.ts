import axiosInstance from "@/lib/axios";

const api = axiosInstance;

export async function getDashboardStats() {
  const res = await api.get("/dashboard");
  return res.data;
}