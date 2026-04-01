"use client";

import type { Item } from "@/types/item";
import { X } from "lucide-react";

type Props = {
  item: Item | null;
  onClose: () => void;
};

export default function ModalDetalle({ item, onClose }: Props) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <div>
            <h3 className="text-xl font-semibold text-[#0F172A]">
              Detalles
            </h3>
            <p className="text-sm text-[#64748B]">
              Información completa del registro
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-[#64748B] hover:text-red-500 transition cursor-pointer"
          >
            <X />
          </button>
        </div>

        {/* CONTENIDO */}
        <div className="space-y-6">

          {/* SECCIÓN: SOLICITANTE */}
          <div>
            <h4 className="text-sm font-semibold text-[#1E293B] mb-3">
              Datos del Solicitante
            </h4>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <DatosLista label="Código" value={item.codigo} />

              <DatosLista
                label="Documento"
                value={`${item.tipoDocumento} ${item.numeroDocumento}`}
              />

              {item.tipoPersona === "natural" ? (
                <DatosLista
                  label="Nombre"
                  value={item.nombreCompleto || ""}
                />
              ) : (
                <DatosLista
                  label="Razón Social"
                  value={item.razonSocial || ""}
                />
              )}

              <DatosLista label="Dirección" value={item.direccion} />
            </div>
          </div>

          {/* SECCIÓN: NAVE */}
          <div>
            <h4 className="text-sm font-semibold text-[#1E293B] mb-3">
              Datos de la Nave
            </h4>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <DatosLista label="Nombre" value={item.nombreNave} />
              <DatosLista label="Matrícula" value={item.matricula} />
              <DatosLista label="Tipo" value={item.tipo} />
              <DatosLista label="Color" value={item.color} />
              <DatosLista label="Capacidad" value={item.capacidad} />
              <DatosLista label="Material" value={item.material} />
            </div>
          </div>

          {/* SECCIÓN: MOTOR */}
          <div>
            <h4 className="text-sm font-semibold text-[#1E293B] mb-3">
              Motor
            </h4>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <DatosLista label="Marca" value={item.marcaMotor} />
              <DatosLista label="Potencia" value={item.potencia} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* 🔹 Subcomponente */
function DatosLista({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-[#64748B]">{label}</span>
      <span className="font-medium text-[#0F172A]">
        {value || "-"}
      </span>
    </div>
  );
}