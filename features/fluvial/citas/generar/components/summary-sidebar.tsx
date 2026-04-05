import { Clock } from "lucide-react";

export const SummarySidebar = () => (
    <div className="bg-[#001A4F] rounded-2xl p-8 text-white">
        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8 italic">Resumen de Registro</h4>

        <div className="space-y-8">
            <div className="space-y-1">
                <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">Trámite</p>
                <p className="text-sm font-medium leading-snug">Licencia de Conducir Fluvial - Nueva</p>
            </div>

            <div className="space-y-1">
                <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">Fecha y hora</p>
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium">Miércoles, 05 Junio</p>
                        <p className="text-xl font-black">08:30 AM</p>
                    </div>
                    <div className="bg-white/10 p-2 rounded-lg">
                        <Clock className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>

            <div className="space-y-1">
                <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">Ciudadano</p>
                <p className="text-[11px] font-bold leading-none">Jorge Luis Garcia Lopez</p>
                <p className="text-[9px] text-blue-300 font-medium opacity-60">DNI: 44558877</p>
            </div>
        </div>
    </div>
);