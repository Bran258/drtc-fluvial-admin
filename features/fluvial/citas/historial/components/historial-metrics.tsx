export const HistoryMetrics = () => (
    <div className="grid grid-cols-3 gap-6">
        {/* Card Principal Dark */}
        <div className="bg-[#001A4F] p-8 rounded-3xl text-white relative overflow-hidden">
            <p className="text-[10px] font-black text-blue-300 uppercase tracking-[0.2em] mb-4 italic">Trámites Anuales</p>
            <h2 className="text-4xl font-black">14,208</h2>
            <p className="text-[10px] text-emerald-400 font-bold mt-4 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M12 7l1.29 1.29L9.41 12H15v2H5v-2h5.59L6.71 8.29 8 7l4 4 4-4z" transform="rotate(180 10 10)" /></svg>
                +12.4% vs año anterior
            </p>
            <div className="absolute right-6 bottom-6 opacity-20"><svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" /></svg></div>
        </div>

        {/* Promedio de Atención */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Promedio de Atención</p>
            <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-slate-800">18.5</span>
                <span className="text-sm font-bold text-slate-400 lowercase">min</span>
            </div>
            <div className="mt-8 space-y-2">
                <div className="flex justify-between text-[9px] font-black">
                    <span className="text-slate-400 uppercase">Eficiencia</span>
                    <span className="text-slate-800">75%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-600 rounded-full w-[75%]" />
                </div>
            </div>
        </div>

        {/* Tasa de Finalización */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Tasa de Finalización</p>
            <span className="text-4xl font-black text-slate-800">94.2%</span>
            <div className="mt-8 space-y-4">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="h-full bg-emerald-400 w-[94.2%]" />
                </div>
                <p className="text-[9px] font-black text-emerald-500 uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Objetivo alcanzado
                </p>
            </div>
        </div>
    </div>
);