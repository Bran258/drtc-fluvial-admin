import axiosInstance from "@/lib/axios";

export const dashboardService = {
    async getStats() {
        const res = await axiosInstance.get("/dashboard/stats");
        return res.data.data;
    },
};