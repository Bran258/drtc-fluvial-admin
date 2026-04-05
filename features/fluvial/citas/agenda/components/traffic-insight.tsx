export const TrafficInsight = () => (
    <div className="bg-[#001A4F] p-6 rounded-3xl text-white shadow-xl overflow-hidden relative">
        <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-white/10 rounded-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <h3 className="font-bold text-sm">Insight de Tráfico</h3>
        </div>
        <p className="text-xs text-blue-100 leading-relaxed opacity-80 mb-6">
            Se espera hora pico entre las 11:30 AM y 1:00 PM. Recomendamos habilitar ventanilla extra.
        </p>

        {/* Mini Gráfico de Barras */}
        <div className="flex items-end gap-2 h-16">
            {[40, 60, 80, 100, 120, 140, 100, 80].map((h, i) => (
                <div
                    key={i}
                    className={`flex-1 rounded-t-sm transition-all ${i === 4 ? 'bg-white' : 'bg-white/20'}`}
                    style={{ height: `${(h / 140) * 100}%` }}
                />
            ))}
        </div>
    </div>
);