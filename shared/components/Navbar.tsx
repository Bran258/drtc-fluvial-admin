"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, Bell, HelpCircle } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm font-sans">
      <div className="max-w-[1920px] mx-auto flex items-center h-16 px-6 py-2">
        
        {/* 🔍 Buscador */}
        <div className="flex-grow max-w-xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-4 h-4 text-slate-400" />
            </div>
            <input 
              type="search"
              className="block w-full p-2.5 pl-11 text-sm text-slate-900 border border-gray-100 rounded-lg bg-slate-50 focus:ring-blue-200 focus:border-blue-300 outline-none transition-all placeholder:text-slate-400"
              placeholder="Buscar expedientes de permisos..."
            />
          </div>
        </div>

        {/* 🔔 Notificaciones + usuario */}
        <div className="flex items-center gap-3 ml-auto">
          
          {/* Grupo iconos */}
          <div className="flex items-center gap-1.5 mr-1 ">
            
            {/* 🔔 Notificaciones */}
            <div className="relative " ref={ref}>
              <button
                onClick={() => setOpen(!open)}
                className="relative p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer "
              >
                <Bell className="w-5 h-5 text-slate-500" />
                <span className="absolute top-2.5 right-2.5 block h-1.5 w-1.5 rounded-full bg-red-500 ring-1 ring-white"></span>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute right-0 mt-2 w-80 bg-white border border-gray-100 rounded-xl shadow-lg z-50 transform transition-all duration-200 ${
                  open
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 translate-y-2 invisible"
                }`}
              >
                <div className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-slate-800">
                    Notificaciones
                  </h3>
                </div>

                <div className="max-h-80 overflow-y-auto">
                  
                  <div className="p-3 hover:bg-slate-50 cursor-pointer border-b">
                    <p className="text-sm text-slate-700">
                      Nuevo permiso registrado
                    </p>
                    <span className="text-xs text-slate-400">
                      Hace 2 min
                    </span>
                  </div>

                  <div className="p-3 hover:bg-slate-50 cursor-pointer border-b">
                    <p className="text-sm text-slate-700">
                      Solicitud en revisión
                    </p>
                    <span className="text-xs text-slate-400">
                      Hace 10 min
                    </span>
                  </div>

                  <div className="p-3 hover:bg-slate-50 cursor-pointer border-b">
                    <p className="text-sm text-slate-700">
                      Documento observado
                    </p>
                    <span className="text-xs text-red-400">
                      Hace 1 hora
                    </span>
                  </div>

                </div>

                <div className="p-3 text-center">
                  <button className="text-sm text-blue-600 hover:underline">
                    Ver todas
                  </button>
                </div>
              </div>
            </div>

            {/* ❓ Ayuda */}
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer">
              <HelpCircle className="w-5 h-5 text-slate-500" />
            </button>

          </div>

          {/* Separador */}
          <div className="h-8 w-px bg-gray-100 mx-1"></div>

          {/* 👤 Usuario */}
          <div className="flex items-center gap-3 pl-2">
            <div className="flex flex-col text-right">
              <span className="text-sm font-semibold text-slate-900">
                Admin Regional
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Administrador
              </span>
            </div>

            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 border border-blue-200 shadow-inner">
              <span className="text-sm font-bold text-blue-700">
                AR
              </span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;