"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { FormInput } from "../components/form-input";
import TitleHeader from "@/shared/components/TitleHeader";
import BackButton from "@/shared/components/BackButton";
import { useRouter } from "next/navigation";
import { useCreatePropietario } from "../hooks/useCreatePropietario";
import { usePersonaVerification } from "@/shared/hooks/usePersonaVerification";

export default function OwnerForm() {
    const router = useRouter();
    const { submit, loading } = useCreatePropietario();

    const [entityType, setEntityType] =
        useState<"NATURAL" | "JURÍDICA">("NATURAL");

    const [form, setForm] = useState({
        dniRuc: "",
        propietarioNombre: "",
        representanteLegal: "",
        direccionLegal: "",
        asociacion: "",
    });

    const isNatural = entityType === "NATURAL";

    const query = form.dniRuc.trim();

    // =========================
    // VERIFICACIÓN DNI / RUC
    // =========================
    const { data: persona, status } = usePersonaVerification(query);

    // =========================
    // AUTO FILL
    // =========================
    useEffect(() => {
        if (status === "success" && persona) {
            setForm((prev) => ({
                ...prev,
                propietarioNombre: persona.nombreCompleto,
            }));
        }

        if (status === "error") {
            setForm((prev) => ({
                ...prev,
                propietarioNombre: "",
            }));
        }
    }, [status, persona]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            tipoPersona: entityType,
            dniRuc: form.dniRuc,
            propietarioNombre: form.propietarioNombre,
            representanteLegal: form.representanteLegal || null,
            direccionLegal: form.direccionLegal,
            asociacion: form.asociacion || null,
        };

        try {
            await submit(payload);
            alert("Registrado correctamente");
            router.push("/fluvial/tramites/empadronamiento/opciones");
        } catch {
            alert("Error al registrar propietario");
        }
    };

    return (
        <section className="px-4 md:px-8 py-6 bg-slate-50 min-h-screen space-y-6">
            <div className="max-w-3xl mx-auto p-8 font-sans bg-white rounded-xl">

                <BackButton backHref="/fluvial/tramites/empadronamiento/opciones" />

                <TitleHeader
                    title="Nuevo Registro de Propietario"
                    description="Complete los datos básicos para iniciar el empadronamiento."
                />

                <form className="space-y-6" onSubmit={handleSubmit}>

                    {/* SWITCH */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                            Tipo de Entidad
                        </label>

                        <div className="flex bg-[#F4F7F9] p-1 rounded-xl w-fit border border-gray-100">
                            {["NATURAL", "JURÍDICA"].map((type) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setEntityType(type as any)}
                                    className={`px-8 py-2 rounded-lg text-xs font-bold transition-all ${entityType === type
                                            ? "bg-white text-[#002855] shadow-sm"
                                            : "text-gray-400 hover:text-gray-600"
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* CAMPOS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* DNI / RUC */}
                        <div className="relative">
                            <FormInput
                                label={isNatural ? "DNI" : "RUC"}
                                name="dniRuc"
                                placeholder={isNatural ? "8 dígitos" : "11 dígitos"}
                                value={form.dniRuc}
                                onChange={handleChange}
                            />

                            {/* STATUS ICON */}
                            {status === "loading" && (
                                <Loader2 className="w-4 h-4 animate-spin text-gray-400 absolute right-4 top-10" />
                            )}

                            {status === "success" && (
                                <CheckCircle2 className="w-4 h-4 text-green-500 absolute right-4 top-10" />
                            )}

                            {status === "error" && (
                                <XCircle className="w-4 h-4 text-red-500 absolute right-4 top-10" />
                            )}

                            {/* STATUS TEXT */}
                            {status === "success" && (
                                <p className="text-xs text-green-600 mt-1">
                                    ✔ Documento verificado
                                </p>
                            )}

                            {status === "error" && (
                                <p className="text-xs text-red-500 mt-1">
                                    ✖ Documento no encontrado
                                </p>
                            )}
                        </div>

                        {/* NOMBRE AUTO */}
                        <FormInput
                            label="Nombres y Apellidos / Razón Social"
                            name="propietarioNombre"
                            placeholder={isNatural ? "Nombre completo" : "Razón social"}
                            value={form.propietarioNombre}
                            onChange={handleChange}
                        />

                        {/* REPRESENTANTE */}
                        <FormInput
                            label="Representante Legal"
                            name="representanteLegal"
                            placeholder="Nombre del apoderado"
                            className="md:col-span-2"
                            value={form.representanteLegal}
                            onChange={handleChange}
                        />

                        {/* ASOCIACIÓN */}
                        <FormInput
                            label="Asociación (Opcional)"
                            name="asociacion"
                            placeholder="Escribe la asociación"
                            value={form.asociacion}
                            onChange={handleChange}
                        />

                        {/* DIRECCIÓN */}
                        <FormInput
                            label="Dirección Legal"
                            name="direccionLegal"
                            placeholder="Ej: Av. Principal 123"
                            value={form.direccionLegal}
                            onChange={handleChange}
                        />
                    </div>

                    <hr className="border-gray-100 my-8" />

                    {/* ACCIONES */}
                    <div className="flex items-center justify-end gap-6">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="text-sm font-bold text-gray-500 hover:text-gray-700"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#1A3A8A] text-white px-10 py-3 rounded-lg text-sm font-bold shadow-lg hover:bg-[#152e6d] transition-colors disabled:opacity-50"
                        >
                            {loading ? "Registrando..." : "Registrar Propietario"}
                        </button>
                    </div>

                    {/* FOOTER */}
                    <div className="flex items-center gap-2 mt-10 pt-6 border-t border-gray-50">
                        <ShieldCheck size={16} className="text-gray-400" />
                        <p className="text-[11px] text-gray-400">
                            Los datos ingresados serán verificados con el padrón regional de transporte fluvial.
                        </p>
                    </div>

                </form>
            </div>
        </section>
    );
}