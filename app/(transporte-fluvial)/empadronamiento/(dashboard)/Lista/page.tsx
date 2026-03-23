"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import ModalDetalle from "@/components/ModalDetalle";
import { Item } from "@/types/item";

type SearchType = "codigo" | "dni" | "ruc";

export default function Page() {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [searchType, setSearchType] = useState<SearchType>("codigo");
  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

  // 🔹 DATA MOCK (solo maqueta)
  const data: Item[] = useMemo(() => [
    {
      codigo: "001-2025",
      tipoPersona: "natural",
      tipoDocumento: "DNI",
      numeroDocumento: "12345678",
      nombreCompleto: "Juan Pérez",
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
      codigo: "002-2026",
      tipoPersona: "juridica",
      tipoDocumento: "RUC",
      numeroDocumento: "20123456789",
      razonSocial: "Empresa SAC",
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
    {
      codigo: "003-2025",
      tipoPersona: "natural",
      tipoDocumento: "DNI",
      numeroDocumento: "44556677",
      nombreCompleto: "Carlos Ruiz",
      direccion: "Cusco",
      matricula: "MAT-003",
      capacidad: "12 TN",
      color: "Rojo",
      nombreNave: "El Rápido",
      tipo: "Lancha",
      marcaMotor: "Suzuki",
      potencia: "200 HP",
      material: "Fibra",
    },
  ], []);

  // 🔥 SORT (año DESC, correlativo DESC)
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const [numA, yearA] = a.codigo.split("-").map(Number);
      const [numB, yearB] = b.codigo.split("-").map(Number);

      if (yearA !== yearB) return yearB - yearA;
      return numB - numA;
    });
  }, [data]);

  // 🔥 FILTER
  const filteredData = useMemo(() => {
    const value = search.toLowerCase();

    if (!value) return sortedData;

    return sortedData.filter((item) => {
      switch (searchType) {
        case "dni":
          return (
            item.tipoDocumento === "DNI" &&
            item.numeroDocumento.toLowerCase().includes(value)
          );

        case "ruc":
          return (
            item.tipoDocumento === "RUC" &&
            item.numeroDocumento.toLowerCase().includes(value)
          );

        case "codigo":
          return item.codigo.toLowerCase().includes(value);

        default:
          return true;
      }
    });
  }, [search, searchType, sortedData]);

  // 🔥 PAGINATION
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    return filteredData.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
  }, [filteredData, page]);

  return (
    <div className="space-y-6 p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-[#0F172A]">
            Lista de Empadronamiento
          </h2>
          <p className="text-sm text-[#64748B]">
            {filteredData.length} registros encontrados
          </p>
        </div>

        {/* BUSCADOR */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

          {/* SELECT */}
          <div className="relative cursos">
            <select
              value={searchType}
              onChange={(e) => {
                setSearchType(e.target.value as SearchType);
                setSearch("");
                setPage(1);
              }}
              className="cursor-pointer appearance-none bg-white border border-gray-300 text-gray-800 text-sm rounded-xl px-4 py-2 pr-8 shadow-sm
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                 hover:border-gray-400 transition"
            >
              <option className="cursor-pointer" value="codigo">Código</option>
              <option value="dni">DNI</option>
              <option value="ruc">RUC</option>
            </select>

            {/* Flecha */}
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
              ▼
            </div>
          </div>

          {/* INPUT */}
          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm w-full md:w-80
                  focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500
                  hover:border-gray-400 transition">

            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder={
                searchType === "dni"
                  ? "Buscar por DNI..."
                  : searchType === "ruc"
                    ? "Buscar por RUC..."
                    : "Buscar código (ej: 001-2025)"
              }
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
            />
          </div>

        </div>
      </div>

      {/* TABLA */}
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">

            <thead className="bg-[#0F172A] text-white text-xs uppercase">
              <tr>
                <th className="px-6 py-4 text-center">Código</th>
                <th className="px-6 py-4 text-left">Solicitante</th>
                <th className="px-6 py-4 text-left">Documento</th>
                <th className="px-6 py-4 text-left">Nave</th>
                <th className="px-6 py-4 text-left">Tipo</th>
                <th className="px-6 py-4 text-left">Motor</th>
                <th className="px-6 py-4 text-left">Capacidad</th>
                <th className="px-6 py-4 text-left">Material</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {paginatedData.map((item) => (
                <tr
                  key={item.codigo}
                  onClick={() => setSelectedItem(item)}
                  className="hover:bg-[#F9FBFC] cursor-pointer transition"
                >
                  <td className="px-6 py-4 font-semibold text-[#2563EB] text-center">
                    {item.codigo}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-[#0F172A] ">
                        {item.tipoPersona === "natural"
                          ? item.nombreCompleto
                          : item.razonSocial}
                      </span>
                      <span className="text-xs text-[#64748B]">
                        {item.direccion}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 font-medium text-[#059669]">
                    {item.tipoDocumento} {item.numeroDocumento}
                  </td>

                  <td className="px-6 py-4 text-black">{item.nombreNave}</td>
                  <td className="px-6 py-4 text-black">{item.tipo}</td>
                  <td className="px-6 py-4 text-black">
                    {item.marcaMotor} ({item.potencia})
                  </td>
                  <td className="px-6 py-4 text-black">{item.capacidad}</td>
                  <td className="px-6 py-4 text-black">{item.material}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* PAGINACIÓN */}
      <div className="flex justify-center items-center gap-2 flex-wrap">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 rounded-lg border bg-[#0F172A] text-white disabled:opacity-40"
        >
          ←
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-3 py-1 rounded-lg border text-sm ${p === page
                ? "bg-[#2563EB] text-white"
                : "bg-white hover:bg-gray-100"
              }`}
          >
            {p}
          </button>
        ))}

        <button
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 rounded-lg border bg-[#0F172A] text-white disabled:opacity-40"
        >
          →
        </button>
      </div>

      {/* MODAL */}
      <ModalDetalle
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

    </div>
  );
}