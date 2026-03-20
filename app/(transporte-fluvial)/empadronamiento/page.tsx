"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import ModalDetalle from "@/components/ModalDetalle";
import { Item } from "@/types/item";

export default function Page() {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const data: Item[] = [
    {
      codigo: "EMP001",
      solicitante: "Juan Pérez",
      dni: "12345678",
      direccion: "Puerto Maldonado",
      matricula: "MAT-001",
      capacidad: "10 TN",
      color: "Azul",
      nombreNave: "El Navegante",
      tipo: "Lancha",
      marcaMotor: "Yamaha",
      potencia: "150 HP",
      material: "Fibra",
    },
    {
      codigo: "EMP002",
      solicitante: "María López",
      dni: "87654321",
      direccion: "Madre de Dios",
      matricula: "MAT-002",
      capacidad: "8 TN",
      color: "Blanco",
      nombreNave: "Río Azul",
      tipo: "Bote",
      marcaMotor: "Honda",
      potencia: "90 HP",
      material: "Madera",
    },
  ];

  const filteredData = data.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h2 className="text-lg font-semibold text-[#003366]">
            Lista de Empadronamiento
          </h2>
          <p className="text-sm text-[#6B788F]">
            {filteredData.length} registros encontrados
          </p>
        </div>

        {/* BUSCADOR */}
        <div className="relative w-full md:w-80">
          <div className="flex items-center gap-2 bg-white border border-[#E2E8F0] rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#003366]">
            <Search size={18} className="text-[#6B788F]" />

            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm focus:outline-none text-[#6B788F]"
            />
          </div>
        </div>
      </div>

      {/* TABLA */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">

            {/* HEADER */}
            <thead className="bg-[#F4F7F9] text-[#6B788F] text-xs uppercase">
              <tr>
                <th className="px-6 py-4 text-left">Código</th>
                <th className="px-6 py-4 text-left">Solicitante</th>
                <th className="px-6 py-4 text-left">Documento</th>
                <th className="px-6 py-4 text-left">Nave</th>
                <th className="px-6 py-4 text-left">Tipo</th>
                <th className="px-6 py-4 text-left">Motor</th>
                <th className="px-6 py-4 text-left">Capacidad</th>
                <th className="px-6 py-4 text-left">Material</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="divide-y divide-[#F1F5F9]">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => setSelectedItem(item)}
                    className="group hover:bg-[#F9FBFC] transition cursor-pointer"
                  >
                    <td className="px-6 py-4 font-semibold text-[#003366]">
                      {item.codigo}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-medium">{item.solicitante}</span>
                        <span className="text-xs text-[#6B788F]">
                          {item.direccion}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-[#6B788F]">
                      {item.dni}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span>{item.nombreNave}</span>
                        <span className="text-xs text-[#6B788F]">
                          {item.matricula}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-md bg-[#F4F7F9] text-[#003366]">
                        {item.tipo}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span>{item.marcaMotor}</span>
                        <span className="text-xs text-[#003366] font-medium">
                          {item.potencia}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-[#6B788F]">
                      {item.capacidad}
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-md bg-[#F4F7F9] text-[#592300]">
                        {item.material}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-12 text-[#6B788F]">
                    No se encontraron resultados
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

      {/* MODAL */}
      <ModalDetalle
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

    </div>
  );
}