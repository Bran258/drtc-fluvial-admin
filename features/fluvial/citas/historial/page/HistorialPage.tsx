import { FileText, Table } from "lucide-react";
import { HistoryFilters } from "../components/historial-filters";
import { HistoryTable } from "../components/historial-table";
import { HistoryMetrics } from "../components/historial-metrics";
import TitleHeader from "@/shared/components/TitleHeader";
import BackButton from "@/shared/components/BackButton";
import Button from "@/shared/components/Button";

export default function HistoryPage() {
    return (
        <div className="px-4 md:px-8 py-6 bg-slate-50 min-h-screen space-y-6">
            {/* HEADER */}
            <BackButton
                backHref="/fluvial/citas/agenda"
            />
            <TitleHeader
                title="Historial de Citas"
                description="Gestión avanzada y reportes de atención al ciudadano."
                rightContent={
                    <>
                        <Button
                            href="/fluvial/citas/generar"
                            variant="primary"
                            icon={<FileText className="w-4 h-4" />}
                            size="md"
                        >
                            PDF
                        </Button>

                        <Button
                            href="/fluvial/citas/historial"
                            variant="secondary"
                            icon={<Table className="w-4 h-4" />}
                            size="md"
                        >
                            Excel
                        </Button>
                    </>
                }
            />

            <HistoryFilters />
            <HistoryTable />

            {/* Paginación simple */}
            <div className="flex justify-between items-center px-4">
                <p className="text-[11px] text-slate-400 font-medium font-italic">Viendo 1-10 de 1,245 registros</p>
                <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#001A4F] text-white font-bold text-xs shadow-lg shadow-blue-900/20">1</button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-slate-400 font-bold text-xs transition-colors">2</button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-slate-400 font-bold text-xs transition-colors">3</button>
                </div>
            </div>

            <HistoryMetrics />
        </div>
    );
}