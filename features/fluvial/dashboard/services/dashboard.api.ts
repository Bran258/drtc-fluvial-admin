import api from "@/shared/services/apiClient";

export async function getDashboardStats() {
  const res = await api.get("/dashboard");
  return res.data;
}