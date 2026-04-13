"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { FormInput } from "../components/form-input";
import TitleHeader from "@/shared/components/TitleHeader";
import BackButton from "@/shared/components/BackButton";
import { useRouter } from "next/navigation";
import { useCreatePropietario } from "@/shared/hooks/propietario/useCreatePropietario";
import { usePersonaVerification } from "@/shared/hooks/usePersonaVerification";
import { useUbicaciones } from "@/shared/hooks/useUbicaciones";
import type { TipoPersona } from "@/shared/api/propietario";

export default function OwnerForm() {
    const router = useRouter();
    const { create, loading: loadingSubmit } = useCreatePropietario();
    const { ubicaciones, loading: loadingUbicaciones } = useUbicaciones();


    const [form, setForm] = useState({
        dniRuc: "",
        propietarioNombre: "",
        representanteLegal: "",
        direccionLegal: "",
        asociacion: "",
        correo: "",
        celular: "",
        ubicacionId: "",
    });

    const query = form.dniRuc.trim();

    // =========================
    // VERIFICACIÓN
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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // =========================
    // DETECCIÓN INTERNA (BACKEND STYLE)
    // =========================
    const detectTipoPersona = (doc: string): TipoPersona | null => {
        if (doc.length === 8) return "NATURAL";

        if (doc.length === 11) {
            if (doc.startsWith("10")) return "NATURAL_CON_RUC";
            if (doc.startsWith("20")) return "JURIDICA";
        }

        return null;
    };

    // =========================
    // SUBMIT
    // =========================
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (form.dniRuc.length !== 8 && form.dniRuc.length !== 11) {
            alert("Documento inválido");
            return;
        }

        const tipoPersona = detectTipoPersona(form.dniRuc);

        if (!tipoPersona) {
            alert("No se pudo determinar el tipo de persona");
            return;
        }

        const payload = {
            tipoPersona,
            dniRuc: form.dniRuc,
            propietarioNombre: form.propietarioNombre,
            representanteLegal: form.representanteLegal || null,
            direccionLegal: form.direccionLegal,
            asociacion: form.asociacion || null,
            correo: form.correo || null,
            celular: form.celular || null,
            ubicacionId: form.ubicacionId || null,
        };

        try {
            await create(payload);
            alert("Registrado correctamente");
            router.push("/fluvial/tramites/empadronamiento/opciones");
        } catch {
            alert("Error al registrar propietario");
        }
    };

    return (
        <section className="px-4 md:px-8 py-6 bg-slate-50 min-h-screen">
            <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-sm space-y-8">

                <BackButton backHref="/fluvial/tramites/empadronamiento/opciones" />

                <TitleHeader
                    title="Nuevo Registro de Propietario"
                    description="Complete los datos del propietario"
                />

                <form className="space-y-8" onSubmit={handleSubmit}>

                    {/* IDENTIFICACIÓN */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Documento de Identidad
                        </label>

                        <div className="relative">
                            <FormInput
                                label=""
                                name="dniRuc"
                                placeholder="DNI (8) o RUC (11)"
                                value={form.dniRuc}
                                onChange={handleChange}
                            />

                            <div className="absolute right-3 top-3 flex items-center">
                                {status === "loading" && (
                                    <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                                )}
                                {status === "success" && (
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                )}
                                {status === "error" && (
                                    <XCircle className="w-4 h-4 text-red-500" />
                                )}
                            </div>
                        </div>

                        {status === "success" && (
                            <p className="text-xs text-green-600">Documento verificado</p>
                        )}
                        {status === "error" && (
                            <p className="text-xs text-red-500">Documento no encontrado</p>
                        )}
                    </div>

                    {/* GRID PRINCIPAL */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <FormInput
                            label="Nombres / Razón Social"
                            name="propietarioNombre"
                            placeholder="Nombre completo o empresa"
                            value={form.propietarioNombre}
                            onChange={handleChange}
                        />

                        <FormInput
                            label="Representante Legal"
                            name="representanteLegal"
                            placeholder="Opcional"
                            value={form.representanteLegal}
                            onChange={handleChange}
                        />

                        <FormInput
                            label="Correo electrónico"
                            name="correo"
                            placeholder="ejemplo@mail.com"
                            value={form.correo}
                            onChange={handleChange}
                        />

                        <FormInput
                            label="Celular"
                            name="celular"
                            placeholder="9 dígitos"
                            value={form.celular}
                            onChange={handleChange}
                        />

                        <FormInput
                            label="Asociación"
                            name="asociacion"
                            placeholder="Opcional"
                            value={form.asociacion}
                            onChange={handleChange}
                        />

                        {/* DIRECCIÓN (full width) */}
                        <FormInput
                            label="Dirección Legal"
                            name="direccionLegal"
                            placeholder="Dirección completa"
                            value={form.direccionLegal}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Ubicación (Distrito)
                        </label>

                        <div className="relative">
                            <select
                                name="ubicacionId"
                                value={form.ubicacionId}
                                onChange={handleChange}
                                disabled={loadingUbicaciones}
                                className="
                w-full h-12 px-4 pr-10
                rounded-xl
                border border-gray-300
                bg-white text-gray-900 text-sm
                shadow-sm

                appearance-none

                focus:outline-none
                focus:ring-2 focus:ring-[#1A3A8A]
                focus:border-[#1A3A8A]

                transition

                disabled:opacity-60 disabled:cursor-not-allowed
            "
                            >
                                <option value="">
                                    {loadingUbicaciones
                                        ? "Cargando ubicaciones..."
                                        : "Seleccione una ubicación"}
                                </option>

                                {ubicaciones.map((u) => (
                                    <option key={u.id} value={u.id}>
                                        {u.provincia} - {u.distrito}
                                    </option>
                                ))}
                            </select>

                            {/* ICONO DROPDOWN */}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                ▼
                            </div>

                            {/* LOADING */}
                            {loadingUbicaciones && (
                                <Loader2 className="w-4 h-4 animate-spin text-gray-500 absolute right-8 top-1/2 -translate-y-1/2" />
                            )}
                        </div>
                    </div>
                    <hr className="border-gray-100" />

                    {/* ACCIONES */}
                    <div className="flex flex-col md:flex-row justify-end gap-3 md:gap-6">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            disabled={loadingSubmit}
                            className="bg-[#1A3A8A] text-white px-8 py-3 rounded-xl text-sm font-semibold shadow-md hover:bg-[#152e6d] transition disabled:opacity-50"
                        >
                            {loadingSubmit ? "Registrando..." : "Registrar Propietario"}
                        </button>
                    </div>

                    {/* FOOTER */}
                    <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                        <ShieldCheck size={16} className="text-gray-400" />
                        <p className="text-[11px] text-gray-400">
                            Validación automática con registro nacional.
                        </p>
                    </div>

                </form>
            </div>
        </section >
    );
}