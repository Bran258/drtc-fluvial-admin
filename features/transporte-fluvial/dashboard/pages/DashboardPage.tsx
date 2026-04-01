"use client";

import { StatsCard } from "../components/StatsCard";
import { useDashboardData } from "../hooks/useDashboardData";

export default function DashboardPage() {
  const { stats } = useDashboardData();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((item, i) => (
          <StatsCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}