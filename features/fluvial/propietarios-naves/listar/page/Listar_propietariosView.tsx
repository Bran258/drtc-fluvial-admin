"use client";

import { useState } from "react";
import { usePropietarios } from "../hook/usePropietarios";
import { DataTable } from "@/shared/components/table-pagination/DataTable";
import { getPropietarioColumns } from "../components/table/propietario.columns";
import ModalDetalle from "../components/modals/ModalDetalle";
import { Propietario } from "@/shared/api/propietario";

export default function PropietariosListPage() {
    const {
        data,
        loading,
        error,
        page,
        setPage,
        total,
        limit,
        search,
        setSearch,
        onSearchSubmit,
        refetch,
        searchType,
        setSearchType,
    } = usePropietarios();

    const [selectedItem, setSelectedItem] = useState<Propietario | null>(null);

    const totalPages = Math.max(1, Math.ceil(total / limit));

    const columns = getPropietarioColumns({
        onDelete: (item) => console.log("Eliminar:", item),
        onView: (item) => setSelectedItem(item),
    });

    return (
        <section className="min-h-screen">
            <div className="mx-auto space-y-6">

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold">Propietarios</h1>
                        <p className="text-blue-100 text-sm">
                            Gestión y control de registros del sistema
                        </p>
                    </div>

                    <button
                        onClick={refetch}
                        className="px-4 py-2 rounded-xl bg-white text-blue-700 font-medium"
                    >
                        🔄 Recargar
                    </button>
                </div>

                {error && (
                    <div className="bg-red-100 text-red-700 px-4 py-3 rounded-xl">
                        {error}
                    </div>
                )}

                <DataTable
                    title="Lista de propietarios"
                    total={total}
                    data={data}
                    columns={columns}
                    keyField="id"
                    loading={loading}
                    page={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                    search={search}
                    onSearchChange={setSearch}
                    onSearchSubmit={onSearchSubmit}
                    searchType={searchType}
                    onSearchTypeChange={(value) => setSearchType(value as "dni" | "ruc")}
                    searchTypeOptions={[
                        { label: "DNI", value: "dni" },
                        { label: "RUC", value: "ruc" },
                    ]}
                />
            </div>

            <ModalDetalle
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
            />
        </section>
    );
}