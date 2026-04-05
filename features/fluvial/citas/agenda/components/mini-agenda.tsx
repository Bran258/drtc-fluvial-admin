import { ChevronLeft, ChevronRight, Users } from "lucide-react";

export const MiniAgenda = () => (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 h-full">
        <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800 text-lg">Mini-Agenda Diaria</h3>
            <div className="flex gap-4">
                <ChevronLeft className="w-5 h-5 text-slate-400 cursor-pointer" />
                <ChevronRight className="w-5 h-5 text-slate-400 cursor-pointer" />
            </div>
        </div>

        {/* Selector de días */}
        <div className="flex justify-between mb-8">
            {['LUN 23', 'MAR 24', 'MIE 25', 'JUE 26', 'VIE 27', 'SAB 28', 'DOM 29'].map((d, i) => (
                <div key={i} className={`flex flex-col items-center p-3 rounded-xl cursor-pointer transition-all ${i === 1 ? 'bg-[#001A4F] text-white shadow-lg' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>
                    <span className="text-[10px] font-bold uppercase">{d.split(' ')[0]}</span>
                    <span className="text-lg font-bold">{d.split(' ')[1]}</span>
                </div>
            ))}
        </div>

        {/* Timeline de Agenda */}
        <div className="space-y-4">
            {/* Item Reservado */}
            <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-4 border-l-4 border-slate-800">
                <div className="text-center min-w-[50px]">
                    <p className="text-xs font-bold text-slate-900">08:00</p>
                    <p className="text-[10px] text-slate-400 uppercase">30 MIN</p>
                </div>
                <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-800 leading-tight">Mantenimiento de Sistema</h4>
                    <p className="text-xs text-slate-400">Bloqueo administrativo - Ventanilla 01</p>
                </div>
                <span className="text-[10px] font-bold text-slate-400 bg-white px-3 py-1 rounded border border-slate-200">RESERVADO</span>
            </div>

            {/* Espacio Libre */}
            <div className="border-2 border-dashed border-slate-100 rounded-xl p-4 flex justify-center">
                <p className="text-xs font-bold text-slate-300">08:30 — Espacio disponible para cita rápida</p>
            </div>

            {/* Item Activo */}
            <div className="flex items-center gap-4 bg-blue-50/50 rounded-xl p-4 border-l-4 border-blue-600">
                <div className="text-center min-w-[50px]">
                    <p className="text-xs font-bold text-slate-900">09:00</p>
                    <p className="text-[10px] text-slate-400 uppercase">45 MIN</p>
                </div>
                <div className="flex-1">
                    <h4 className="text-sm font-bold text-blue-900 leading-tight">Auditoria Regional de Flotas</h4>
                    <p className="text-xs text-blue-700/60 font-medium">Sala de Conferencias B - 2do Piso</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white" />)}
                    </div>
                    <span className="bg-blue-900 text-white text-[9px] font-bold px-2 py-1 rounded">ACTIVA</span>
                </div>
            </div>
        </div>
    </div>
);