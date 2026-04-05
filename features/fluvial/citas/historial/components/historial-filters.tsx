export const HistoryFilters = () => (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 grid grid-cols-4 gap-6">
        {[
            { label: "NOMBRE O DNI", placeholder: "Ej: 4588...", type: "text" },
            { label: "RANGO DE FECHA", placeholder: "mm/dd/yyyy", type: "date" },
            { label: "ESTADO", placeholder: "Todos los estados", type: "select" },
            { label: "TRÁMITE", placeholder: "Todos los trámites", type: "select" },
        ].map((filter) => (
            <div key={filter.label} className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{filter.label}</label>
                {filter.type === "select" ? (
                    <select className="w-full bg-slate-50 border-none rounded-xl p-3 text-xs font-medium text-slate-600 focus:ring-2 focus:ring-blue-100">
                        <option>{filter.placeholder}</option>
                    </select>
                ) : (
                    <input type={filter.type} className="w-full bg-slate-50 border-none rounded-xl p-3 text-xs font-medium text-slate-600" placeholder={filter.placeholder} />
                )}
            </div>
        ))}
    </div>
);