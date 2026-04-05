import { MoreVertical } from "lucide-react";

const appointments = [
    { time: "09:15 AM", name: "Carlos Mendoza", desc: "Renovación de Licencia Fluvial", status: "normal" },
    { time: "09:30 AM", name: "Empresa Naviera 'El Sol'", desc: "Permiso de Cabotaje", status: "delayed", delay: "RETRASADO 12M", urgent: true },
    { time: "10:00 AM", name: "María Quispe Rojas", desc: "Inspección de Embarcación", status: "waiting" },
];

export const LiveSidebar = () => (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Próximas Citas</h3>
            <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">En Vivo</span>
        </div>

        <div className="space-y-8 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-slate-100" />
            {appointments.map((apt, i) => (
                <div key={i} className="relative pl-8">
                    <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-4 border-white shadow-sm ${apt.status === 'delayed' ? 'bg-red-500' : 'bg-blue-900'}`} />
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className={`text-xs font-bold ${apt.status === 'delayed' ? 'text-red-500' : 'text-slate-900'}`}>{apt.time}</span>
                                {apt.delay && <span className="bg-red-100 text-red-600 text-[9px] font-bold px-1.5 py-0.5 rounded">{apt.delay}</span>}
                            </div>
                            <p className="font-bold text-sm text-slate-800 mt-1">{apt.name}</p>
                            <p className="text-xs text-slate-400 font-medium">{apt.desc}</p>
                            {apt.urgent && <span className="inline-block mt-2 bg-red-100 text-red-600 text-[9px] font-bold px-2 py-0.5 rounded italic">URGENTE</span>}
                        </div>
                        <MoreVertical className="w-4 h-4 text-slate-300 cursor-pointer" />
                    </div>
                </div>
            ))}
        </div>
        <button className="w-full mt-8 py-3 bg-slate-50 text-slate-500 text-sm font-bold rounded-xl hover:bg-slate-100 transition-colors">
            Ver todo el día
        </button>
    </div>
);