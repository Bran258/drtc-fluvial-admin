import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white/40 backdrop-blur-lg border-t border-slate-200/50 py-4 px-6">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Izquierda: versión */}
        <div className="text-[11px] font-semibold text-slate-400 tracking-widest uppercase">
          DRTC Fluvial v1.0.0
        </div>

        {/* Centro: nombre del sistema */}
        <div className="text-[11px] text-slate-500 font-medium text-center tracking-wide">
          Sistema Regional de Gestión de Transportes y Comunicaciones
          <span className="hidden md:inline"> — Madre de Dios</span>
        </div>

        {/* Derecha: año */}
        <div className="text-[11px] text-slate-400 font-medium">
          © {new Date().getFullYear()} DRTC
        </div>

      </div>
    </footer>
  );
};

export default Footer;