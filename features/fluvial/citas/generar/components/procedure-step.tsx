export const ProcedureStep = () => (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">01</span>
            <h3 className="font-bold text-slate-800 text-lg">Datos del trámite</h3>
        </div>
        <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tipo de procedimiento</label>
            <div className="relative">
                <select className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm text-slate-600 appearance-none cursor-pointer focus:ring-2 focus:ring-blue-100">
                    <option>Seleccione un trámite...</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="m19 9-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
            </div>
        </div>
    </div>
);