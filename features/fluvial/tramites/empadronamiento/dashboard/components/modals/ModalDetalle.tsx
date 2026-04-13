"use client";

import ModalBase from "@/shared/components/ModalBase";
import { Item } from "@/types/item";

type Props = {
    item: Item | null;
    onClose: () => void;
};

export default function ModalDetalle({ item, onClose }: Props) {
    if (!item) return null;

    return (
        <ModalBase
            title="Detalle de registro"
            subtitle="Información completa del empadronamiento"
            onClose={onClose}
        >
            {/* DATOS PRINCIPALES */}
            <section className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900">
                    Datos principales
                </h4>

                <div className="grid grid-cols-2 gap-3 text-sm">
                    <Campo label="Código" value={item.codigo} />
                    <Campo label="Tipo persona" value={item.tipoPersona} />
                    <Campo label="Documento" value={`${item.tipoDocumento} ${item.numeroDocumento}`} />
                    <Campo label="Dirección" value={item.direccion} />
                </div>
            </section>

            {/* NAVE */}
            <section className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900">
                    Información de la nave
                </h4>

                <div className="grid grid-cols-2 gap-3 text-sm">
                    <Campo label="Nombre nave" value={item.nombreNave} />
                    <Campo label="Tipo" value={item.tipo} />
                    <Campo label="Material" value={item.material} />
                    <Campo label="Capacidad" value={item.capacidad} />
                    <Campo label="Color" value={item.color} />
                </div>
            </section>

            {/* MOTOR */}
            <section className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900">
                    Motor
                </h4>

                <div className="grid grid-cols-2 gap-3 text-sm">
                    <Campo label="Marca" value={item.marcaMotor} />
                    <Campo label="Potencia" value={item.potencia} />
                </div>
            </section>
        </ModalBase>
    );
}

/* COMPONENTE AUXILIAR */
function Campo({
    label,
    value,
}: {
    label: string;
    value?: string | number | null;
}) {
    return (
        <div className="flex flex-col">
            <span className="text-xs text-slate-500">{label}</span>
            <span className="text-sm font-medium text-slate-900">
                {value ?? "-"}
            </span>
        </div>
    );
}