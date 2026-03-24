"use client";

import React from "react";
import { User, Ship, ChevronDown, FileText, Hash, ChevronLeft, Info, Save } from "lucide-react";
import TitleHeader from "@/components/TitleHeader";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";

const EmpadronamientoForm = () => {
  const [tipoPersona, setTipoPersona] = React.useState<"natural" | "juridica">("natural");

  return (
    <div className="min-h-screen bg-[#f8fafc] p-8 font-sans text-slate-700">
      {/* Navegación Superior */}
      <BackButton
        backHref="/empadronamiento"
        backLabel="regresar"
        stepText="Paso 1 de 3 completar el formulario"
      />
      {/* Cabecera */}
      <div className="max-w-4xl mx-auto mb-8">
        <TitleHeader title="Formulario de Empadronamiento Fluvial" />
        <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
          Complete el formulario oficial para el registro y actualización de datos de embarcaciones ante la Dirección Regional de Transportes.
        </p>
      </div>

      <form className="max-w-4xl mx-auto space-y-8">

        {/* SECCIÓN 1 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">

          <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
            <div className="bg-[#001f3f] p-1.5 rounded-lg text-white">
              <User size={18} />
            </div>
            <h2 className="font-bold text-[#001f3f]">Datos del Titular</h2>
          </div>

          <div className="p-8 space-y-8">

            {/* Tipo Persona */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Tipo de Persona
              </label>

              <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
                <button
                  type="button"
                  onClick={() => setTipoPersona("natural")}
                  className={`px-6 py-2 rounded-lg text-xs font-bold ${tipoPersona === "natural"
                    ? "bg-white shadow-sm text-[#001f3f]"
                    : "text-slate-400"
                    }`}
                >
                  Persona Natural
                </button>

                <button
                  type="button"
                  onClick={() => setTipoPersona("juridica")}
                  className={`px-6 py-2 rounded-lg text-xs font-bold ${tipoPersona === "juridica"
                    ? "bg-white shadow-sm text-[#001f3f]"
                    : "text-slate-400"
                    }`}
                >
                  Persona Jurídica
                </button>
              </div>
            </div>

            {/* CAMPOS DINÁMICOS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

              <CustomInput
                label={tipoPersona === "natural" ? "DNI" : "RUC"}
                placeholder={tipoPersona === "natural" ? "Ingrese DNI" : "Ingrese RUC"}
                type="text" // importante (no number)
                maxLength={tipoPersona === "natural" ? 8 : 11}
              />

              <CustomInput
                label={tipoPersona === "natural" ? "Nombre Completo" : "Razón Social"}
                placeholder={tipoPersona === "natural" ? "Nombre completo" : "Razón Social"}
              />

              <CustomInput
                label="Código del Expediente"
                placeholder="EXP-2024-000"
                icon={<FileText size={14} />}
              />

              <CustomInput
                label="Dirección Legal"
                placeholder="Av. Principal 123, Iquitos"
              />

            </div>
          </div>
        </div>

        {/* SECCIÓN 2 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">

          <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
            <div className="bg-[#001f3f] p-1.5 rounded-lg text-white">
              <Ship size={18} />
            </div>
            <h2 className="font-bold text-[#001f3f]">Datos de la Nave</h2>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">

            <CustomInput label="Nombre de la Nave" placeholder="Ej. El Amazónico II" />
            <CustomInput label="Matrícula" placeholder="PM-12345-BF" />
            <CustomInput label="Capacidad de la nave A.B" placeholder="N° Pasajeros / TM Carga" type="number" />
            <CustomInput label="Color" placeholder="Ej. Azul y Blanco" />

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Tipo de Nave
              </label>
              <div className="relative">
                <select className="w-full py-2 bg-slate-100 rounded-lg px-4 text-sm font-medium appearance-none outline-none focus:ring-2 focus:ring-blue-100">
                  <option>Seleccione tipo</option>
                  <option value="Tipo_simple">Simple</option>
                  <option value="No_definido">No definido</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Servicio de la Nave
              </label>

              <div className="relative">
                <select className="w-full py-2 bg-slate-100 rounded-lg px-4 text-sm font-medium appearance-none outline-none focus:ring-2 focus:ring-blue-100">
                  <option value="">Seleccione servicio</option>
                  <option value="transporte_comercial">Transporte Comercial</option>
                  <option value="transporte_turistico">Transporte Turístico</option>
                </select>

                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={16}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Modalidad de Servicio
              </label>

              <div className="relative">
                <select className="w-full py-2 bg-slate-100 rounded-lg px-4 text-sm font-medium appearance-none outline-none focus:ring-2 focus:ring-blue-100">
                  <option value="">Seleccione modalidad</option>

                  <option value="carga_pasajeros_menor_2ab">
                    De carga y pasajeros menor a 2 A.B
                  </option>

                  <option value="carga_pasajeros_mayor_2ab">
                    De carga y pasajeros mayor a 2 A.B
                  </option>

                  <option value="pasajeros_menor_2ab">
                    De pasajeros menor a 2 A.B
                  </option>

                  <option value="carga_mayor_2ab">
                    De carga mayor a 2 A.B
                  </option>

                  <option value="uso_exclusivo_personal">
                    De uso exclusivo de personal
                  </option>
                </select>

                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={16}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Material del Casco
              </label>
              <div className="relative">
                <select className="w-full py-2 bg-slate-100 rounded-lg px-4 text-sm font-medium appearance-none outline-none focus:ring-2 focus:ring-blue-100">
                  <option>Seleccione material</option>
                  <option value="Fibra_vidrio">Fibra de Vidrio</option>
                  <option value="Madera">Madera</option>
                  <option value="Acero_naval">Acero Naval</option>
                  <option value="Aluminio">Aluminio</option>
                  <option value="Aluminio_naval">Aluminio Naval</option>
                  <option value="No_especificado">No especificado</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              </div>
            </div>

          </div>
        </div>

        {/* SECCIÓN 3 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">

          <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
            <div className="bg-[#5d4037] p-1.5 rounded-lg text-white">
              <Hash size={18} />
            </div>
            <h2 className="font-bold text-[#001f3f]">Datos del Motor</h2>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <CustomInput label="Marca del Motor" placeholder="Ej. Yamaha, Volvo Penta" />
            <CustomInput label="Potencia (HP)" placeholder="Ej. 250" type="number" />
          </div>
        </div>

        {/* BOTONES */}
        <div className="flex justify-end items-center gap-6 pt-4 pb-12">
          <button type="button" className="text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors">
            Cancelar
          </button>
          <Button

            icon={<Save size={16} />}
            variant="primary"
          >
            Guardar Datos
          </Button>
        </div>

      </form>
    </div>
  );
};

/* INPUT */
const CustomInput = ({
  label,
  placeholder,
  error,
  icon,
  type = "text",
  maxLength,
}: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
      {label}
    </label>

    <div className="relative">
      {icon && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>
      )}

      <input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={type === "number" ? "numeric" : "text"}
        onInput={(e: any) => {
          // si tiene maxLength tipo DNI/RUC → solo números
          if (maxLength) {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }
        }}
        className={`w-full py-2 ${icon ? "pl-6" : "pl-0"} bg-transparent border-b-2 ${error
          ? "border-red-200 focus:border-red-400"
          : "border-slate-200 focus:border-[#001f3f]"
          } outline-none text-sm font-medium placeholder:text-slate-300`}
      />
    </div>

    {error && (
      <span className="text-[9px] font-bold text-red-500 italic">{error}</span>
    )}
  </div>
);

export default EmpadronamientoForm;