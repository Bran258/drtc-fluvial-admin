import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/dashboard.api";

export function useDashboardData() {
  const [stats, setStats] = useState<any[]>([]);

  useEffect(() => {
    getDashboardStats().then(setStats);
  }, []);

  return { stats };
}