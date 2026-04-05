"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";

export const CitizenStep = () => {
    const [doc, setDoc] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    // 🔹 Simulación validación (luego aquí conectas API RENIEC)
    const validateDoc = async (value: string) => {
        setDoc(value);

        if (value.length < 8) {
            setStatus("idle");
            setName("");
            return;
        }

        setStatus("loading");

        setTimeout(() => {
            if (value === "12345678") {
                setStatus("success");
                setName("GARCIA LOPEZ, JORGE LUIS");
            } else {
                setStatus("error");
                setName("");
            }
        }, 1000);
    };

    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">

            {/* HEADER */}
            <div className="flex items-center gap-4 mb-6">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    02
                </span>
                <h3 className="font-bold text-slate-800 text-lg">
                    Datos del ciudadano
                </h3>
            </div>

            {/* FORM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* DNI / RUC */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        DNI / RUC
                    </label>

                    <div className="relative">
                        <input
                            value={doc}
                            onChange={(e) => validateDoc(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-black text-sm font-medium pr-10 focus:outline-none focus:ring-2 focus:ring-[#305BFF]"
                            placeholder="Ingrese documento"
                        />

                        {/* ICONOS DINÁMICOS */}
                        {status === "loading" && (
                            <Loader2 className="w-4 h-4 animate-spin text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
                        )}

                        {status === "success" && (
                            <CheckCircle2 className="w-4 h-4 text-green-500 absolute right-4 top-1/2 -translate-y-1/2" />
                        )}

                        {status === "error" && (
                            <XCircle className="w-4 h-4 text-red-500 absolute right-4 top-1/2 -translate-y-1/2" />
                        )}
                    </div>

                    {/* MENSAJES */}
                    {status === "success" && (
                        <p className="text-xs text-green-600 font-medium">
                            ✔ Identidad verificada correctamente
                        </p>
                    )}

                    {status === "error" && (
                        <p className="text-xs text-red-500 font-medium">
                            ✖ Documento no válido
                        </p>
                    )}
                </div>

                {/* TELÉFONO */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Teléfono de contacto
                    </label>

                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#305BFF]"
                        placeholder="999 999 999"
                    />
                </div>

                {/* NOMBRE */}
                <div className="col-span-1 md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Nombre completo / Razón social
                    </label>

                    <input
                        value={name}
                        readOnly
                        className={`w-full rounded-xl p-4 text-sm font-bold uppercase ${status === "success"
                                ? "bg-slate-200 text-slate-700 cursor-not-allowed"
                                : "bg-slate-100 text-slate-400"
                            }`}
                        placeholder="Se autocompletará al validar"
                    />

                    <p className="text-[10px] text-slate-400 italic">
                        Autocompletado automáticamente al validar DNI o RUC.
                    </p>
                </div>
            </div>
        </div>
    );
};