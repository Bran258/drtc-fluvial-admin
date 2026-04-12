"use client";

import { usePropietarios } from "../hook/usePropietarios";
import { PropietarioTable } from "../components/PropietarioTable";
import { Pagination } from "../components/Pagination";

export default function PropietariosListPage() {
    const {
        data,
        loading,
        error,
        page,
        setPage,
        total,
        limit,
        refetch,
    } = usePropietarios();

    return (
        <section className="min-h-screen bg-gray-100 p-6 text-black">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* HEADER */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-black">
                            Propietarios
                        </h1>
                        <p className="text-sm text-gray-600">
                            Gestión de registros del sistema
                        </p>
                    </div>

                    <button
                        onClick={refetch}
                        className="px-4 py-2 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition"
                    >
                        Recargar
                    </button>
                </div>

                {loading && <div className="text-gray-700">Cargando...</div>}
                {error && <div className="text-red-600 font-medium">{error}</div>}

                {!loading && !error && (
                    <>
                        <PropietarioTable data={data} />

                        <Pagination
                            page={page}
                            total={total}
                            limit={limit}
                            onPageChange={setPage}
                        />
                    </>
                )}
            </div>
        </section>
    );
}