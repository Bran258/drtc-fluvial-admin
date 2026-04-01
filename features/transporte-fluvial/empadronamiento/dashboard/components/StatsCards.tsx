"use client";

import { BarChart3, Ship, ClipboardList, ArrowUpRight } from "lucide-react";

const stats = [
  {
    title: "Total Empadronados",
    value: "1,248",
    trend: "+4%",
    status: "ACTUALIZADO AHORA",
    icon: BarChart3,
    iconColor: "text-[#001f3f]",
    accent: "border-b-4 border-[#001f3f]",
  },
  {
    title: "Total de Naves",
    value: "12",
    status: "HASTA EL DIA DE HOY",
    icon: Ship,
    iconColor: "text-blue-600",
    accent: "border-b-4 border-[#0003A3]",
  },
  {
    title: "Tipo de material casco",
    value: "6",
    status: "ACTUALIZADO AHORA",
    icon: ClipboardList,
    iconColor: "text-orange-600",
    accent: "border-b-4 border-orange-800",
  },
];

export default function StatsCards() {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`
            bg-white p-6 rounded-2xl h-48 ${stat.accent}
            shadow-sm
            transition-all duration-300 ease-in-out
            hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
            cursor-pointer
          `}
        >
          <div className="flex justify-between items-start">
            <stat.icon
              className={`${stat.iconColor} transition-transform duration-300 group-hover:scale-110`}
              size={24}
            />
            <span className="text-xs text-gray-400">{stat.status}</span>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500">{stat.title}</p>

            <div className="flex gap-2 items-center">
              <span className="text-3xl font-bold text-gray-800">
                {stat.value}
              </span>

              {stat.trend && (
                <span className="text-green-500 flex items-center transition-transform duration-300 hover:scale-110">
                  {stat.trend} <ArrowUpRight size={14} />
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}