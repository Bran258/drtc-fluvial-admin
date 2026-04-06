import { ProcedureItem } from "./types-procedures";

export const PROCEDURES: ProcedureItem[] = [
    {
        title: "Registrar Propietario",
        description:
            "Inscripción formal de personas naturales o jurídicas ante la Dirección Regional de Transportes.",
        icon: "user-plus",
        buttonText: "INICIAR PROCESO",
        href: "/fluvial/tramites/empadronamiento/opciones/formulario/registrar-propietarios",
        variant: "default",
    },
    {
        title: "Registrar Nave",
        description:
            "Alta técnica de embarcaciones menores en el padrón regional, incluyendo especificaciones de calado y motor.",
        icon: "ship",
        buttonText: "INICIAR PROCESO",
        href: "/fluvial/nave",
        variant: "default",
    },
    {
        title: "Empadronamiento sin resolución",
        description:
            "Actualización de datos para naves ya operativas que no requieren una nueva resolución administrativa.",
        icon: "clipboard-check",
        buttonText: "INICIAR PROCESO",
        href: "/fluvial/tramites/empadronamiento/opciones/formulario/sin-resolucion",
        variant: "default",
    },
    {
        title: "Empadronamiento con resolución",
        description:
            "Flujo integral de formalización. Incluye inspección técnica, validación de documentos y emisión de Resolución Directorial.",
        icon: "badge-check",
        buttonText: "INICIAR FLUJO COMPLETO",
        href: "/fluvial/tramites/empadronamiento/opciones/formulario/con-resolucion",
        variant: "primary",
        isMain: true,
    },
];