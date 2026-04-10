"use client";

import React, { useState, useEffect } from "react";
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
  CalendarDays,
  LucideIcon,
} from "lucide-react";

/* ================= TYPES ================= */
type MenuItem = {
  name: string;
  icon: LucideIcon;
  href: string;
  base?: string;
  disabled?: boolean;
};

type MenuGroup = {
  section: string;
  items: MenuItem[];
};

/* ================= COMPONENT ================= */
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

  /* ================= MENU ================= */
  const menuItems: MenuGroup[] = [
    {
      section: "PRINCIPAL",
      items: [
        {
          name: "Dashboard",
          icon: LayoutDashboard,
          href: "/fluvial/dashboard",
          base: "/fluvial/dashboard",
        },
        {
          name: "Citas",
          icon: CalendarDays,
          href: "/fluvial/citas/agenda",
          base: "/fluvial/citas",
        },
      ],
    },
    {
      section: "RECEPCIÓN DOCUMENTARIA",
      items: [
        {
          name: "Recepción de documentos",
          icon: Users,
          href: "/fluvial/recepcion",
          base: "/fluvial/recepcion",
        },
        {
          name: "Bandeja de revisión",
          icon: FileText,
          href: "/fluvial/recepcion/revision",
          base: "/fluvial/recepcion",
        },
        {
          name: "Observados y Rechazados",
          icon: RefreshCw,
          href: "/fluvial/recepcion/observados",
          base: "/fluvial/recepcion",
        },
      ],
    },
    {
      section: "SERVICIOS FLUVIALES",
      items: [
        {
          name: "Empadronamiento",
          icon: Users,
          href: "/fluvial/tramites/empadronamiento/dashboard",
          base: "/fluvial/tramites/empadronamiento",
        },
        {
          name: "Permisos de Operación",
          icon: FileText,
          href: "/fluvial/tramites/permiso-operacion",
          base: "/fluvial/tramites/permiso-operacion",
          disabled: true,
        },
        {
          name: "Renovación",
          icon: RefreshCw,
          href: "/fluvial/tramites/renovacion",
          base: "/fluvial/tramites/renovacion",
        },
        {
          name: "Cambio de Razón Social",
          icon: Building2,
          href: "/fluvial/tramites/cambio-razon-social",
          base: "/fluvial/tramites/cambio-razon-social",
          disabled: true,
        },
      ],
    },
    {
      section: "ADMINISTRAR PORTAL WEB",
      items: [
        {
          name: "Tipos de Trámites",
          icon: BarChart3,
          href: "/portal-web/tramites",
          base: "/portal-web/tramites",
        },
        {
          name: "Noticias",
          icon: Settings,
          href: "/portal-web/noticias",
          base: "/portal-web/noticias",
        },
      ],
    },
  ];

  /* ================= ACTIVE LOGIC ================= */
  const isActive = (item: MenuItem) => {
    const base = item.base || item.href;
    return pathname === item.href || pathname.startsWith(base);
  };

  /* ================= AUTO OPEN ================= */
  useEffect(() => {
    menuItems.forEach((group) => {
      group.items.forEach((item) => {
        const base = item.base || item.href;

        if (pathname.startsWith(base)) {
          setOpenSections((prev) =>
            prev.includes(group.section)
              ? prev
              : [...prev, group.section]
          );
        }
      });
    });
  }, [pathname]);

  /* ================= LOGOUT ================= */
  const handleLogout = async () => {
    try {
      const res = await fetch(`/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) {
        alert("Error al cerrar sesión");
        return;
      }

      window.location.href = "/auth";
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión");
    }
  };

  /* ================= UI ================= */
  return (
    <div
      className={`flex flex-col h-screen ${collapsed ? "w-20" : "w-64"
        } bg-slate-50 border-r border-gray-200 transition-all duration-300`}
    >
      {/* HEADER */}
      <div
        className={`p-4 flex ${collapsed ? "justify-center" : "justify-between"
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
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700"
        >
          {collapsed ? (
            <PanelLeftOpen size={18} />
          ) : (
            <PanelLeftClose size={18} />
          )}
        </button>
      </div>

      {/* NAV */}
      <div className={collapsed ? "flex flex-col items-center px-2" : "px-4"}>
        <nav className="space-y-4 w-full">
          {menuItems.map((group) => {
            const isPrincipal = group.section === "PRINCIPAL";
            const isOpen =
              isPrincipal || openSections.includes(group.section);

            return (
              <div key={group.section}>
                {!collapsed && (
                  <button
                    onClick={() => {
                      if (!isPrincipal) toggleSection(group.section);
                    }}
                    className="w-full flex justify-between px-3 mb-2 text-[11px] font-bold text-slate-400"
                  >
                    {group.section}

                    {!isPrincipal && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${isOpen ? "rotate-0" : "-rotate-90"
                          }`}
                      />
                    )}
                  </button>
                )}

                {isOpen && (
                  <div className="space-y-1 flex flex-col items-center">
                    {group.items.map((item) => {
                      const active = isActive(item);
                      const isDisabled = item.disabled ?? false;

                      return (
                        <Link
                          key={item.name}
                          href={isDisabled ? "#" : item.href}
                          onClick={(e) => {
                            if (isDisabled) e.preventDefault();
                          }}
                          className={`flex items-center ${collapsed
                            ? "justify-center w-12 h-12 p-0"
                            : "justify-start gap-3 px-3 w-full"
                            } py-2.5 rounded-xl text-sm transition-all ${isDisabled
                              ? "text-slate-400 cursor-not-allowed opacity-70"
                              : active
                                ? "bg-[#001f3f] text-white shadow-md shadow-[#001f3f]/20 scale-[1.01]"
                                : "text-slate-500 hover:bg-slate-100 hover:translate-x-[2px]"
                            }`}
                        >
                          <item.icon
                            size={20}
                            className={
                              isDisabled
                                ? "text-slate-300"
                                : active
                                  ? "text-white"
                                  : "text-slate-400"
                            }
                          />

                          {!collapsed && (
                            <>
                              <span>{item.name}</span>

                              {isDisabled && (
                                <span className="ml-auto text-[10px] px-2 py-[2px] rounded-full bg-slate-200 text-slate-500 border border-slate-300">
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

      {/* FOOTER */}
      <div className="p-4 border-t border-gray-200 mt-auto space-y-3">
        {!collapsed ? (
          <>
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#001f3f] text-white hover:bg-[#003366]">
              <PlusCircle size={18} />
              Nuevo
            </button>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-500 hover:bg-red-600 hover:text-white"
            >
              <LogOut size={18} />
              <span>Cerrar Sesión</span>
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#001f3f] text-white hover:bg-[#003366]">
              <PlusCircle size={18} />
            </button>

            <button
              onClick={handleLogout}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:bg-red-600 hover:text-white"
            >
              <LogOut size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;