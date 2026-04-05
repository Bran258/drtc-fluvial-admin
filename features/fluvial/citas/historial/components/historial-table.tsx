import { CheckCircle2, XCircle, Clock } from "lucide-react";

const data = [
    { name: "Ricardo Mendoza Soto", email: "mendoza.r@mail.com", id: "45882931", type: "Licencia Fluvial A1", date: "12 Oct 2023", time: "09:30 AM", status: "COMPLETADO" },
    { name: "Ana Valdivia Luz", email: "avaldivia@gob.pe", id: "72110445", type: "Registro de Nave", date: "12 Oct 2023", time: "11:00 AM", status: "CANCELADO" },
    // ... más datos
];

const StatusBadge = ({ status }: { status: string }) => {
    const styles = {
        COMPLETADO: "bg-emerald-50 text-emerald-600 border-emerald-100",
        CANCELADO: "bg-red-50 text-red-600 border-red-100",
        PENDIENTE: "bg-blue-50 text-blue-600 border-blue-100",
    }[status];

    const Icon = status === "COMPLETADO" ? CheckCircle2 : status === "CANCELADO" ? XCircle : Clock;

    return (
        <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[9px] font-black tracking-tighter ${styles}`}>
            <Icon className="w-3 h-3" /> {status}
        </span>
    );
};

export const HistoryTable = () => (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-slate-50">
                    {["CIUDADANO", "DOCUMENTO ID", "TRÁMITE", "FECHA Y HORA", "ESTADO"].map((h) => (
                        <th key={h} className="p-6 text-[10px] font-black text-slate-400 tracking-widest">{h}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
                {data.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                    {row.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">{row.name}</p>
                                    <p className="text-[10px] text-slate-400">{row.email}</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-6 text-sm font-medium text-slate-600">{row.id}</td>
                        <td className="p-6">
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded text-[10px] font-bold">{row.type}</span>
                        </td>
                        <td className="p-6">
                            <p className="text-xs font-bold text-slate-700">{row.date}</p>
                            <p className="text-[10px] text-slate-400 font-medium">{row.time}</p>
                        </td>
                        <td className="p-6"><StatusBadge status={row.status} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);