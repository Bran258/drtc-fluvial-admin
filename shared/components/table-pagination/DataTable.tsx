"use client";

import { ChevronDown, Search } from "lucide-react";
import { ReactNode } from "react";

export type Column<T> = {
    header: string;
    accessor?: keyof T;
    render?: (item: T) => ReactNode;
    className?: string;
};



type Props<T> = {
    title: string;
    total: number;

    data: T[];
    columns: Column<T>[];
    keyField: keyof T;

    loading?: boolean;

    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;

    search?: string;
    onSearchChange?: (value: string) => void;

    onSearchSubmit?: () => void;

    searchType?: string;
    onSearchTypeChange?: (value: string) => void;
    searchTypeOptions?: { label: string; value: string }[];

    extraActions?: ReactNode;
};

export function DataTable<T>({
    title,
    total,
    data,
    columns,
    keyField,
    loading,
    page,
    totalPages,
    onPageChange,
    search,
    onSearchChange,
    onSearchSubmit,

    searchType,
    onSearchTypeChange,
    searchTypeOptions,

    extraActions,
}: Props<T>) {
    const safeData = Array.isArray(data) ? data : [];

    return (
        <div className="space-y-5">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white border rounded-2xl px-5 py-4 shadow-sm">

                <div>
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                        {title}
                    </h2>
                    <p className="text-sm text-slate-500">
                        <span className="font-medium text-slate-700">{total}</span> registros encontrados
                    </p>
                </div>

                {/* ACTIONS */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 ">

                    {/* SEARCH TYPE */}
                    {onSearchTypeChange && searchTypeOptions && (
                        <div className="relative">
                            <select
                                value={searchType ?? searchTypeOptions[0]?.value ?? ""}
                                onChange={(e) => onSearchTypeChange(e.target.value)}
                                className="appearance-none bg-white border border-slate-200 text-slate-700
                px-4 py-2.5 pr-10 rounded-xl shadow-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                transition cursor-pointer"
                            >
                                {searchTypeOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                    )}

                    {/* SEARCH INPUT */}
                    <div className="flex items-center gap-2 w-full sm:w-auto">

                        <div className="relative w-full sm:w-80">
                            <input
                                value={search ?? ""}
                                onChange={(e) => onSearchChange?.(e.target.value)}
                                placeholder="Buscar registros..."
                                className="w-full bg-white border border-slate-200 text-slate-800
                                pl-10 pr-4 py-2.5 rounded-xl shadow-sm
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                transition"
                            />

                            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>

                        {/* BOTÓN BUSCAR */}
                        {onSearchSubmit && (
                            <button
                                onClick={onSearchSubmit}
                                className="px-4 py-2.5 rounded-xl bg-blue-600 text-white
                                hover:bg-blue-700 active:scale-95 transition shadow-sm font-medium"
                            >
                                Buscar
                            </button>
                        )}

                    </div>

                    {/* EXTRA ACTIONS */}
                    <div className="flex items-center gap-2 ml-auto">
                        {extraActions}
                    </div>

                </div>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">

                        <thead className="bg-blue-600 text-white">
                            <tr>
                                {columns.map((col, i) => (
                                    <th key={i} className="px-6 py-4 text-left font-semibold">
                                        {col.header}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className="divide-y">

                            {loading ? (
                                <tr>
                                    <td colSpan={columns.length} className="text-center py-8 text-gray-500">
                                        Cargando...
                                    </td>
                                </tr>
                            ) : safeData.length === 0 ? (
                                <tr>
                                    <td colSpan={columns.length} className="text-center py-8 text-gray-500">
                                        Sin resultados
                                    </td>
                                </tr>
                            ) : (
                                safeData.map((item) => (
                                    <tr
                                        key={String(item[keyField])}
                                        className="hover:bg-blue-50 transition cursor-pointer"
                                    >
                                        {columns.map((col, i) => (
                                            <td key={i} className="px-6 py-4 text-gray-800">
                                                {col.render
                                                    ? col.render(item)
                                                    : String(item[col.accessor as keyof T] ?? "-")}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
            {/*PAGINACIÓN MODERNA */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6">

                    {/* ANTERIOR */}
                    <button
                        disabled={page === 1}
                        onClick={() => onPageChange(page - 1)}
                        className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                    >
                        ←
                    </button>

                    {/* PÁGINAS */}
                    {(() => {
                        const pages: (number | string)[] = [];
                        const maxVisible = 5;

                        let start = Math.max(1, page - 2);
                        let end = Math.min(totalPages, page + 2);

                        if (page <= 3) {
                            start = 1;
                            end = Math.min(totalPages, maxVisible);
                        }

                        if (page >= totalPages - 2) {
                            start = Math.max(1, totalPages - (maxVisible - 1));
                            end = totalPages;
                        }

                        for (let i = start; i <= end; i++) {
                            pages.push(i);
                        }

                        if (start > 1) {
                            pages.unshift("...");
                            pages.unshift(1);
                        }

                        if (end < totalPages) {
                            pages.push("...");
                            pages.push(totalPages);
                        }

                        return pages.map((p, idx) =>
                            p === "..." ? (
                                <span key={`dots-${idx}`} className="px-2 text-gray-400">
                                    ...
                                </span>
                            ) : (
                                <button
                                    key={p}
                                    onClick={() => onPageChange(Number(p))}
                                    className={`min-w-[38px] h-9 rounded-lg text-sm font-medium transition border ${p === page
                                        ? "bg-blue-600 text-white border-blue-600 shadow"
                                        : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-600"
                                        }`}
                                >
                                    {p}
                                </button>
                            )
                        );
                    })()}

                    {/* SIGUIENTE */}
                    <button
                        disabled={page === totalPages}
                        onClick={() => onPageChange(page + 1)}
                        className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                    >
                        →
                    </button>

                </div>
            )}

        </div>
    );
}