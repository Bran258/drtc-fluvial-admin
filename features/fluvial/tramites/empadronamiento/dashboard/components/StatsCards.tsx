"use client";

import {
  BarChart3,
  Ship,
  ClipboardList,
  ArrowUpRight,
} from "lucide-react";
import { useDashboard } from "../hooks/useDashboard";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

export default function StatsCards() {
  const { data, loading } = useDashboard();

  const mockChart = [
    { value: 10 },
    { value: 20 },
    { value: 15 },
    { value: 30 },
    { value: 25 },
    { value: 40 },
  ];

  const stats = [
    {
      title: "Total de Propietarios",
      value: loading ? "..." : data?.propietarios?.total ?? 0,
      trend: data?.propietarios?.trend,
      status: "ACTUALIZADO AHORA",
      icon: BarChart3,
      iconColor: "text-[#001f3f]",
      accent: "border-b-4 border-[#001f3f]",
      chartColor: "#001f3f",
    },
    {
      title: "Total de Naves",
      value: loading ? "..." : data?.naves?.total ?? 0,
      trend: data?.naves?.trend,
      status: "HASTA EL DIA DE HOY",
      icon: Ship,
      iconColor: "text-blue-600",
      accent: "border-b-4 border-[#0003A3]",
      chartColor: "#0003A3",
    },
    {
      title: "Materiales de casco",
      value: loading ? "..." : data?.catalogos?.materiales ?? 0,
      status: "ACTUALIZADO AHORA",
      icon: ClipboardList,
      iconColor: "text-orange-600",
      accent: "border-b-4 border-orange-800",
      chartColor: "#c2410c",
    },
  ];

  return (
    <div className="
      mt-6
      grid gap-4
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-3
    ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`
            bg-white
            p-4 sm:p-5 lg:p-6
            rounded-2xl
            min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]
            ${stat.accent}
            shadow-sm
            transition-all duration-300
            hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
            cursor-pointer
          `}
        >
          {/* HEADER */}
          <div className="flex justify-between items-start">
            <stat.icon
              className={`${stat.iconColor} w-5 h-5 sm:w-6 sm:h-6`}
            />
            <span className="text-[10px] sm:text-xs text-gray-400 text-right">
              {stat.status}
            </span>
          </div>

          {/* INFO */}
          <div className="mt-3 sm:mt-4">
            <p className="text-xs sm:text-sm text-gray-500">
              {stat.title}
            </p>

            <div className="flex gap-2 items-center mt-1">
              <span className="
                text-xl sm:text-2xl lg:text-3xl
                font-bold text-gray-800
              ">
                {stat.value}
              </span>

              {stat.trend !== undefined && (
                <span className="
                  text-green-500
                  flex items-center
                  text-xs sm:text-sm
                ">
                  {stat.trend}% <ArrowUpRight size={12} />
                </span>
              )}
            </div>
          </div>

          {/* GRÁFICO */}
          <div className="mt-2 sm:mt-3 h-12 sm:h-14 lg:h-16">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockChart}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={stat.chartColor}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  );
}