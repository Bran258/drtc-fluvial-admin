"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Users,
  RefreshCw,
  Building2,
  BarChart3,
  Settings,
  PlusCircle,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  ChevronDown,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const [openSections, setOpenSections] = useState<string[]>([
    "SERVICIOS FLUVIALES",
  ]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const menuItems = [
    {
      section: "PRINCIPAL",
      items: [
        { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
      ],
    },
    {
      section: "SERVICIOS FLUVIALES",
      items: [
        { name: "Empadronamiento", icon: Users, href: "/empadronamiento" },
        {
          name: "Permisos de Operación",
          icon: FileText,
          href: "/permiso-operacion",
          disabled: true,
        },
        {
          name: "Renovación",
          icon: RefreshCw,
          href: "/renovacion",
          disabled: true,
        },
        {
          name: "Cambio de Razón Social",
          icon: Building2,
          href: "/cambio-razon-social",
          disabled: true,
        },
      ],
    },
    {
      section: "ADMINISTRAR LANDING",
      items: [
        {
          name: "Reportes",
          icon: BarChart3,
          href: "/reportes",
          disabled: true,
        },
        {
          name: "Configuración",
          icon: Settings,
          href: "/configuracion",
          disabled: true,
        },
      ],
    },
    {
      section: "ADMINISTRACIÓN",
      items: [
        {
          name: "Reportes",
          icon: BarChart3,
          href: "/reportes",
          disabled: true,
        },
        {
          name: "Configuración",
          icon: Settings,
          href: "/configuracion",
          disabled: true,
        },
      ],
    },
  ];

  return (
    <div
      className={`flex flex-col h-screen ${
        collapsed ? "w-20" : "w-64"
      } bg-slate-50 border-r border-gray-200 transition-all duration-300`}
    >
      {/* Header */}
      <div
        className={`p-4 flex ${
          collapsed ? "justify-center" : "justify-between"
        } items-center`}
      >
        {!collapsed && (
          <div>
            <h1 className="text-xl font-bold text-[#001f3f]">
              DRTC Fluvial
            </h1>
            <p className="text-[10px] text-slate-400 uppercase">
              Gestión fluvial
            </p>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition-all duration-200"
        >
          {collapsed ? (
            <PanelLeftOpen size={18} />
          ) : (
            <PanelLeftClose size={18} />
          )}
        </button>
      </div>

      {/* CONTENIDO */}
      <div
        className={
          collapsed
            ? "flex flex-col items-center px-2"
            : "px-4"
        }
      >
        <nav className="space-y-4 w-full">
          {menuItems.map((group) => {
            const isPrincipal = group.section === "PRINCIPAL";
            const isOpen =
              isPrincipal || openSections.includes(group.section);

            return (
              <div key={group.section} className="w-full">
                {/* HEADER */}
                {!collapsed && (
                  <button
                    onClick={() => {
                      if (!isPrincipal) toggleSection(group.section);
                    }}
                    className={`w-full flex items-center justify-between px-3 mb-2 ${
                      isPrincipal
                        ? "text-[11px] font-bold text-[#001f3f]"
                        : "text-[11px] font-bold text-slate-400"
                    }`}
                  >
                    {group.section}

                    {!isPrincipal && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          isOpen ? "rotate-0" : "-rotate-90"
                        }`}
                      />
                    )}
                  </button>
                )}

                {/* ITEMS */}
                {isOpen && (
                  <div
                    className={`space-y-1 ${
                      collapsed ? "flex flex-col items-center" : ""
                    }`}
                  >
                    {group.items.map((item) => {
                      const isActive = pathname === item.href;
                      const isDisabled = item.disabled ?? false;

                      return (
                        <Link
                          key={item.name}
                          href={isDisabled ? "#" : item.href}
                          onClick={(e) => {
                            if (isDisabled) e.preventDefault();
                          }}
                          className={`flex items-center ${
                            collapsed
                              ? "justify-center w-12 h-12"
                              : "gap-3 px-3 w-full"
                          } py-2.5 rounded-xl text-sm transition-all ${
                            isDisabled
                              ? "text-slate-300 cursor-not-allowed"
                              : isActive
                              ? "bg-white text-[#001f3f]"
                              : "text-slate-500 hover:bg-slate-100"
                          }`}
                        >
                          <item.icon
                            size={20}
                            className={
                              isDisabled
                                ? "text-slate-300"
                                : isActive
                                ? "text-[#001f3f]"
                                : "text-slate-400"
                            }
                          />

                          {!collapsed && (
                            <>
                              <span className="flex-1">
                                {item.name}
                              </span>

                              {isDisabled && (
                                <span className="text-[10px] text-slate-400">
                                  Próx
                                </span>
                              )}
                            </>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 space-y-4 mt-auto">
        {!collapsed ? (
          <>
            <button className="w-full bg-[#001f3f] text-white flex items-center justify-center gap-2 py-3 rounded-xl">
              <PlusCircle size={18} />
              Nuevo
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500">
              <LogOut size={18} />
              Cerrar Sesión
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <PlusCircle />
            <LogOut />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;