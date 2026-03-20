import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm font-sans">
      <div className="max-w-[1920px] mx-auto flex items-center h-16 px-6 py-2">
        
        {/* Sección Izquierda: Barra de Búsqueda */}
        <div className="flex-grow max-w-xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-4 h-4 text-slate-400" />
            </div>
            <input 
              type="search" 
              id="search-expedientes" 
              className="block w-full p-2.5 pl-11 text-sm text-slate-900 border border-gray-100 rounded-lg bg-slate-50 focus:ring-blue-200 focus:border-blue-300 outline-none transition-all placeholder:text-slate-400" 
              placeholder="Buscar expedientes de permisos..." 
              required 
            />
          </div>
        </div>

        {/* Sección Derecha: Iconos, Separador y Perfil */}
        <div className="flex items-center gap-3 ml-auto">
          
          {/* Grupo de Iconos de Notificación y Ayuda */}
          <div className="flex items-center gap-1.5 mr-1">
            {/* Icono de Campana con Punto de Notificación */}
            <button className="relative p-2 rounded-full hover:bg-slate-100 transition-colors">
              <Bell className="w-5 h-5 text-slate-500" />
              <span className="absolute top-2.5 right-2.5 block h-1.5 w-1.5 rounded-full bg-red-500 ring-1 ring-white"></span>
              <span className="sr-only">Ver notificaciones</span>
            </button>
            
            {/* Icono de Ayuda */}
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <HelpCircle className="w-5 h-5 text-slate-500" />
              <span className="sr-only">Centro de ayuda</span>
            </button>
          </div>

          {/* Línea Separadora Vertical */}
          <div className="h-8 w-px bg-gray-100 mx-1"></div>

          {/* Información del Usuario y Avatar */}
          <div className="flex items-center gap-3 pl-2">
            <div className="flex flex-col text-right">
              <span className="text-sm font-semibold text-slate-900">
                Admin Regional
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Loreto, Perú
              </span>
            </div>
            
            {/* Avatar Circular con Iniciales */}
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