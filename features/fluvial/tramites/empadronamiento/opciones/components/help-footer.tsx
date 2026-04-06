import { HelpCircle } from "lucide-react";

export const HelpFooter = () => {
    return (
        <div
            className="
        mt-10 rounded-2xl border border-slate-100
        bg-gradient-to-br from-slate-50 to-white
        p-6 md:p-7
        shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        flex flex-col md:flex-row
        items-start md:items-center
        justify-between gap-6
        transition-all
      "
        >
            {/* LEFT CONTENT */}
            <div className="flex items-start gap-4">
                <div
                    className="
            w-11 h-11 rounded-xl
            bg-blue-50 text-blue-600
            flex items-center justify-center
            shrink-0
          "
                >
                    <HelpCircle size={20} />
                </div>

                <div>
                    <p className="font-semibold text-slate-800 leading-snug">
                        ¿No está seguro de qué trámite elegir?
                    </p>

                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        Puede revisar la guía de trámites fluviales o contactar con un
                        asesor para orientación.
                    </p>
                </div>
            </div>

            {/* ACTION */}
            <button
                className="
          w-full md:w-auto
          px-5 py-2.5
          rounded-xl
          bg-white
          border border-slate-200
          text-sm font-semibold text-slate-700
          shadow-sm
          hover:bg-slate-50 hover:border-slate-300
          hover:shadow-md
          transition-all
          active:scale-[0.98]
        "
            >
                Ver guía de trámites
            </button>
        </div>
    );
};