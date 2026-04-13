"use client";

import ModalBase from "@/shared/components/ModalBase";
import { Propietario } from "@/shared/api/propietario";
import { useUbicaciones } from "@/shared/hooks/useUbicaciones";

type Props = {
    item: Propietario | null;
    onClose: () => void;
};

export default function ModalDetalle({ item, onClose }: Props) {
    const { ubicaciones } = useUbicaciones();

    if (!item) return null;

    const ubicacion = ubicaciones.find(
        (u) => u.id === item.ubicacionId
    );

    return (
        <ModalBase
            title="Detalles del Propietario"
            subtitle="Información completa del registro"
            onClose={onClose}
        >
            {/* DATOS PRINCIPALES */}
            <section>
                <h4 className="text-sm font-semibold mb-3 text-[#1E293B]">
                    Datos del Propietario
                </h4>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <DatosLista label="DNI / RUC" value={item.dniRuc} />
                    <DatosLista label="Nombre" value={item.propietarioNombre} />
                    <DatosLista label="Tipo Persona" value={item.tipoPersona} />
                    <DatosLista label="Correo" value={item.correo} />
                    <DatosLista label="Celular" value={item.celular} />
                    <DatosLista label="Dirección Legal" value={item.direccionLegal} />
                </div>
            </section>

            {/* UBICACIÓN CORREGIDA */}
            <section>
                <h4 className="text-sm font-semibold mb-3 text-[#1E293B]">
                    Ubicación
                </h4>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <DatosLista label="Departamento" value={ubicacion?.departamento} />
                    <DatosLista label="Provincia" value={ubicacion?.provincia} />
                    <DatosLista label="Distrito" value={ubicacion?.distrito} />
                </div>
            </section>

            {/* REPRESENTANTE */}
            <section>
                <h4 className="text-sm font-semibold mb-3 text-[#1E293B]">
                    Representante Legal
                </h4>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <DatosLista label="Representante" value={item.representanteLegal} />
                    <DatosLista label="Asociación" value={item.asociacion} />
                </div>
            </section>
        </ModalBase>
    );
}

/* SUBCOMPONENTE */
function DatosLista({
    label,
    value,
}: {
    label: string;
    value?: string | number | null;
}) {
    return (
        <div className="flex flex-col">
            <span className="text-xs text-[#64748B]">{label}</span>
            <span className="font-medium text-[#0F172A]">
                {value ?? "-"}
            </span>
        </div>
    );
}