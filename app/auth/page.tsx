"use client";
import { useState } from "react";
import { User, Lock, Eye, Ship, LogIn, Mail } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      }
    );

    if (!res.ok) {
      alert("Error login");
      return;
    }

    window.location.href = "/dashboard";
  };
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans">

      {/* Tarjeta de Login Principal */}
      <div className="bg-white p-10 rounded-[32px] shadow-lg shadow-gray-100/70 w-full max-w-lg border border-gray-100/50">

        {/* Header: Logo e Institución */}
        <div className="flex flex-col items-center mb-12">
          {/* Contenedor del Icono del Barco */}
          <div className="bg-[#e9f0f6] p-4 rounded-2xl mb-5 shadow-inner">
            <Ship className="w-10 h-10 text-[#001f3f]" />
          </div>
          {/* Título */}
          <h1 className="text-3xl font-extrabold text-[#001f3f] tracking-tight mb-1">
            DRTC FLUVIAL
          </h1>
          {/* Subtítulo */}
          <p className="text-center text-slate-600 text-[13px] leading-relaxed max-w-[280px]">
            Dirección Regional de Transportes y Comunicaciones
          </p>
        </div>

        {/* Formulario */}
        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Campo: Usuario */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-bold text-slate-500 tracking-wider uppercase pl-1">
              Correo electrónico
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-slate-400" />
              </div>
              <input
                id="email"
                name="email"
                type="text"
                value={form.email}
                onChange={handleChange}
                placeholder="Ingresa tu email"
                className="w-full pl-12 pr-4 py-3.5 bg-slate-100/70 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 focus:border-blue-300 focus:bg-white outline-none transition"
              />
            </div>
          </div>

          {/* Campo: Contraseña */}
          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-xs font-bold text-slate-500 tracking-wider uppercase pl-1">
              Contraseña
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-slate-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full pl-12 pr-12 py-3.5 bg-slate-100/70 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 focus:border-blue-300 focus:bg-white outline-none transition"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Botón: Iniciar Sesión */}
          <div className="pt-2">
            <button
              type="submit"
              className="cursor-pointer w-full bg-[#001f3f] hover:bg-[#002a54] text-white py-3.5 rounded-xl font-bold text-sm shadow-md shadow-black/10 flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.01]"
            >
              Iniciar Sesión
              <LogIn className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        </form>

        {/* Separador y Enlaces de Soporte */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <Link
            href="/olvide-contrasena"
            className="text-xs font-semibold text-slate-500 hover:text-[#001f3f] transition-colors"
          >
            Olvidé mi contraseña
          </Link>

          <div className="w-full flex items-center gap-3">
            <div className="flex-grow h-px bg-slate-200"></div>
            <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">SOPORTE</span>
            <div className="flex-grow h-px bg-slate-200"></div>
          </div>

          <button className=" cursor-pointer flex items-center gap-2.5 px-6 py-2.5 border border-slate-200 rounded-full text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all text-xs font-semibold shadow-sm">
            <Mail className="w-4 h-4 text-slate-400" />
            Ayuda y Contacto
          </button>
        </div>
      </div>

      {/* Footer Fuera de la Tarjeta */}
      <div className="mt-8 flex flex-col items-center gap-1.5 text-center px-4">
        <p className="text-[10px] font-bold text-slate-400 tracking-[0.15em] uppercase">
          © {new Date().getFullYear()} GOBIERNO REGIONAL - DRTC AMAZONAS
        </p>
        <p className="text-[10px] font-medium text-slate-400 tracking-[0.05em]">
          SISTEMA DE GESTIÓN FLUVIAL v1.0.0
        </p>
      </div>

    </div>
  );
}