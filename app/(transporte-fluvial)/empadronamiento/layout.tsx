"use client";

import TitleHeader from "@/components/TitleHeader";
import SubNavbar from "@/components/SubNavbarProps";
import { BarChart3, Ship, ClipboardList, ArrowUpRight } from "lucide-react";

const subNavItems = [
  { label: "Lista", href: "/empadronamiento" },
  { label: "Naves", href: "/empadronamiento/naves" },
  { label: "Materiales", href: "/empadronamiento/materiales" },
  { label: "Reportes", href: "/empadronamiento/reportes" },
];

export default function EmpadronamientoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const stats = [
    {
      title: "Total Empadronados",
      value: "1,248",
      trend: "+4%",
      status: "ACTUALIZADO AHORA",
      icon: BarChart3,
      iconBg: "bg-slate-100",
      iconColor: "text-[#001f3f]",
      accent: "border-b-4 border-[#001f3f]",
    },
    {
      title: "Total de Naves",
      value: "12",
      status: "HASTA EL DIA DE HOY",
      icon: Ship,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      accent: "border-b-4 border-[#0003A3]",
    },
    {
      title: "Tipo de material casco",
      value: "6",
      status: "ACTUALIZADO AHORA",
      statusColor: "text-red-500",
      icon: ClipboardList,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
      accent: "border-b-4 border-orange-800",
    },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">

      {/* Header */}
      <TitleHeader title="Empadronamiento" />

      {/* Cards (SIEMPRE visibles con diseño completo) */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`
              bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between h-48 relative overflow-hidden
              ${stat.accent}
              transition-all duration-300 ease-out
              hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
              group cursor-pointer
            `}
          >
            {/* Top */}
            <div className="flex justify-between items-start">

              {/* Icono */}
              <div className={`
                p-3 rounded-xl ${stat.iconBg}
                transition-all duration-300
                group-hover:scale-110 group-hover:rotate-3
              `}>
                <stat.icon
                  className={`${stat.iconColor} transition-all duration-300 group-hover:scale-110`}
                  size={24}
                />
              </div>

              {/* Status */}
              <span className={`
                text-[10px] font-bold tracking-wider
                ${stat.statusColor || "text-slate-400"}
              `}>
                {stat.status}
              </span>
            </div>

            {/* Bottom */}
            <div className="mt-4">
              <p className="text-slate-500 text-sm font-medium mb-1">
                {stat.title}
              </p>

              <div className="flex items-baseline gap-2">

                {/* Valor */}
                <span className="
                  text-4xl font-bold text-slate-900
                  transition-all duration-300
                  group-hover:text-blue-700
                ">
                  {stat.value}
                </span>

                {/* Trend */}
                {stat.trend && (
                  <span className="
                    text-emerald-500 text-sm font-bold flex items-center gap-1
                    transition-all duration-300 group-hover:translate-x-1
                  ">
                    {stat.trend}
                    <ArrowUpRight size={14} />
                  </span>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* SubNavbar */}
      <div className="mt-6">
        <SubNavbar items={subNavItems} />
      </div>

      {/* Contenido dinámico */}
      <div className="mt-6">
        {children}
      </div>

    </div>
  );
}