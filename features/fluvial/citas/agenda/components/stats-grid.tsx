import { ClipboardList, Clock, CheckCircle2, XCircle } from "lucide-react";

const stats = [
    { label: "TOTAL CITAS", value: "124", icon: ClipboardList, color: "text-blue-600", bg: "bg-blue-50", badge: "+12% vs ayer" },
    { label: "PENDIENTES", value: "18", icon: Clock, color: "text-orange-600", bg: "bg-orange-50", badge: "Acción requerida" },
    { label: "ATENDIDAS", value: "82", icon: CheckCircle2, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "CANCELADAS", value: "24", icon: XCircle, color: "text-red-500", bg: "bg-red-50" },
];

export const StatsGrid = () => (
    <div className="grid grid-cols-4 gap-4">
        {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative">
                <div className="flex justify-between items-start mb-4">
                    <div className={`${stat.bg} p-2 rounded-lg`}>
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    {stat.badge && (
                        <span className={`text-[10px] font-bold px-2 py-1 rounded ${stat.label === 'PENDIENTES' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-500'}`}>
                            {stat.badge}
                        </span>
                    )}
                </div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-[11px] font-bold text-slate-400 mt-1 tracking-wider">{stat.label}</div>
            </div>
        ))}
    </div>
);