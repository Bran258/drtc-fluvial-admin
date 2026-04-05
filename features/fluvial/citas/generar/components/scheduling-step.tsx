export const SchedulingStep = () => (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">03</span>
            <h3 className="font-bold text-slate-800 text-lg">Programación</h3>
        </div>
        <div className="flex gap-8">
            {/* Mini Calendario */}
            <div className="w-1/3 text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-4">JUNIO 2024</p>
                <div className="grid grid-cols-7 gap-1 text-[10px] font-bold text-slate-300 mb-2 italic">
                    {['LU', 'MA', 'MI', 'JU', 'VI', 'SA', 'DO'].map(d => <span key={d}>{d}</span>)}
                </div>
                <div className="grid grid-cols-7 gap-1 text-xs font-bold text-slate-800">
                    {[1, 2, 3, 4].map(n => <span key={n} className="p-2 opacity-20">{n}</span>)}
                    <span className="p-2 bg-[#001A4F] text-white rounded-lg">5</span>
                    {[6, 7].map(n => <span key={n} className="p-2">{n}</span>)}
                </div>
                <button className="text-[10px] font-bold text-blue-900 underline mt-4">Ver mes completo</button>
            </div>

            {/* Turnos */}
            <div className="flex-1">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-4">Turnos disponibles (05/06)</p>
                <div className="grid grid-cols-3 gap-3">
                    {['08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM'].map((t, i) => (
                        <button key={i} className={`p-3 text-xs font-bold rounded-lg transition-all ${t === '08:30 AM' ? 'bg-[#001A4F] text-white shadow-lg' :
                                t === '10:30 AM' ? 'border-2 border-dashed border-slate-200 text-slate-300' : 'bg-slate-100 text-slate-800'
                            }`}>
                            {t}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </div>
);