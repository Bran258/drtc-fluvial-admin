import React from 'react';
import { Plus, BarChart3, Ship, ClipboardList, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function EmpadronamientoPage() {
  const stats = [
    {
      title: "Total Empadronados",
      value: "1,248",
      trend: "+4%",
      status: "ACTUALIZADO AHORA",
      icon: BarChart3,
      iconBg: "bg-slate-100",
      iconColor: "text-[#001f3f]",
      accent: "border-b-4 border-[#001f3f]"
    },
    {
      title: "Total de Naves",
      value: "12",
      status: "HASTA EL DIA DE HOY",
      icon: Ship, // Representando el icono "NEW" de la imagen
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      accent: ""
    },
    {
      title: "Tipo de material casco",
      value: "6",
      status: "ACTUALIZADO AHORA",
      statusColor: "text-red-500",
      icon: ClipboardList,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
      accent: "border-b-4 border-orange-800"
    }
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-medium">
        <span>Trámites</span>
        <ChevronRight size={12} />
        <span className="text-slate-600">Empadronamiento</span>
      </nav>

      {/* Header con Título y Botón */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Gestión de Empadronamiento
        </h1>
        
        <button className="bg-[#001f3f] hover:bg-[#002d5c] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-semibold text-sm transition-all shadow-md">
          <Plus size={20} strokeWidth={3} />
          Nuevo Empadronamiento
        </button>
      </div>

      {/* Grid de Tarjetas de Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between h-48 relative overflow-hidden ${stat.accent}`}
          >
            <div className="flex justify-between items-start">
              {/* Icono */}
              <div className={`p-3 rounded-xl ${stat.iconBg}`}>
                <stat.icon className={stat.iconColor} size={24} />
              </div>
              
              {/* Status Text */}
              <span className={`text-[10px] font-bold tracking-wider ${stat.statusColor || 'text-slate-400'}`}>
                {stat.status}
              </span>
            </div>

            <div className="mt-4">
              <p className="text-slate-500 text-sm font-medium mb-1">{stat.title}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-slate-900">{stat.value}</span>
                {stat.trend && (
                  <span className="text-emerald-500 text-sm font-bold flex items-center">
                    {stat.trend} <ArrowUpRight size={14} />
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}