import { Save, RefreshCw } from "lucide-react";

export const FormActions = () => (
    <div className="space-y-4">
        <button className="w-full bg-[#001A4F] text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#002a7a] transition-all">
            <Save className="w-4 h-4" /> Guardar cita
        </button>
        <button className="w-full bg-white text-[#001A4F] p-4 rounded-xl font-bold border border-slate-100 flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <RefreshCw className="w-4 h-4" /> Guardar y crear otra
        </button>
        <button className="w-full py-4 text-red-500 text-[10px] font-black uppercase tracking-widest hover:text-red-600">
            Cancelar registro
        </button>
    </div>
);