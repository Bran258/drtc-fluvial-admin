"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import ModalDetalle from "../components/modals/ModalDetalle";
import { Item } from "@/types/item";

type SearchType = "codigo" | "dni" | "ruc";

export default function Page() {
    const [search, setSearch] = useState("");
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [searchType, setSearchType] = useState<SearchType>("codigo");
    const [page, setPage] = useState(1);

    const itemsPerPage = 5;

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
    ], []);

    const sortedData = useMemo(() => {
        return [...data].sort((a, b) => {
            const [numA, yearA] = a.codigo.split("-").map(Number);
            const [numB, yearB] = b.codigo.split("-").map(Number);

            if (yearA !== yearB) return yearB - yearA;
            return numB - numA;
        });
    }, [data]);

    const filteredData = useMemo(() => {
        const value = search.toLowerCase();

        if (!value) return sortedData;

        return sortedData.filter((item) => {
            switch (searchType) {
                case "dni":
                    return item.tipoDocumento === "DNI" &&
                        item.numeroDocumento.includes(value);

                case "ruc":
                    return item.tipoDocumento === "RUC" &&
                        item.numeroDocumento.includes(value);

                case "codigo":
                    return item.codigo.toLowerCase().includes(value);

                default:
                    return true;
            }
        });
    }, [search, searchType, sortedData]);

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
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold text-[#0F172A]">
                        Lista de Empadronamiento
                    </h2>
                    <p className="text-sm text-[#64748B]">
                        {filteredData.length} registros
                    </p>
                </div>

                <div className="flex gap-2">
                    <select
                        value={searchType}
                        onChange={(e) => {
                            setSearchType(e.target.value as SearchType);
                            setSearch("");
                            setPage(1);
                        }}
                        className="border px-3 py-2 rounded-lg"
                    >
                        <option value="codigo">Código</option>
                        <option value="dni">DNI</option>
                        <option value="ruc">RUC</option>
                    </select>

                    <input
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                        className="border px-3 py-2 rounded-lg"
                        placeholder="Buscar..."
                    />
                </div>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-xl border">
                <table className="w-full text-sm">
                    <thead className="bg-slate-900 text-white">
                        <tr>
                            <th className="p-3">Código</th>
                            <th className="p-3">Nombre</th>
                            <th className="p-3">Documento</th>
                        </tr>
                    </thead>

                    <tbody>
                        {paginatedData.map((item) => (
                            <tr
                                key={item.codigo}
                                onClick={() => setSelectedItem(item)}
                                className="hover:bg-gray-50 cursor-pointer"
                            >
                                <td className="p-3 text-blue-600 font-bold">
                                    {item.codigo}
                                </td>
                                <td className="p-3">
                                    {item.tipoPersona === "natural"
                                        ? item.nombreCompleto
                                        : item.razonSocial}
                                </td>
                                <td className="p-3">
                                    {item.tipoDocumento} {item.numeroDocumento}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* PAGINATION */}
            <div className="flex gap-2 justify-center">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="px-3 py-1 border rounded disabled:opacity-40"
                >
                    ←
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`px-3 py-1 border rounded ${p === page ? "bg-blue-600 text-white" : ""
                            }`}
                    >
                        {p}
                    </button>
                ))}

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                    className="px-3 py-1 border rounded disabled:opacity-40"
                >
                    →
                </button>
            </div>

            {/* MODAL CORRECTO */}
            <ModalDetalle
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
            />

        </div>
    );
}