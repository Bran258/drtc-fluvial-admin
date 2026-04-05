import { AlertCircle } from "lucide-react";

export const DelayAlert = ({ message }: { message: string }) => (
    <div className="fixed bottom-14 right-6 z-50 w-[320px] bg-red-50 border border-red-100 rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg animate-pulse">

        <div className="bg-red-500 rounded-full p-1">
            <AlertCircle className="w-4 h-4 text-white" />
        </div>

        <div>
            <p className="text-[10px] font-black text-red-600 uppercase tracking-widest leading-none">
                Alerta de retraso
            </p>
            <p className="text-xs font-bold text-red-500">{message}</p>
        </div>

    </div>
);