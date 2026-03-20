"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 backdrop-blur-md border-t border-blue-200 py-4 px-6">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Izquierda: versión */}
        <div className="text-[11px] font-semibold text-slate-700  tracking-widest uppercase">
          DRTC Fluvial v1.0.0
        </div>

        {/* Centro */}
        <div className="text-[11px] text-slate-700 font-medium text-center tracking-wide">
          Sistema Regional de Gestión de Transportes y Comunicaciones
          <span className="hidden md:inline text-slate-600">
            {" "}— Madre de Dios
          </span>
        </div>

        {/* Derecha */}
        <div className="text-[11px] text-slate-600 font-medium">
          © {new Date().getFullYear()} DRTC
        </div>

      </div>
    </footer>
  );
};

export default Footer;