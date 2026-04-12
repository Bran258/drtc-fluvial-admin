import { ProcedureItem } from "./types-procedures";

export const PROCEDURES: ProcedureItem[] = [
  {
    title: "Registrar Solo Propietario",
    description:
      "Inscripción formal de personas naturales o jurídicas ante la Dirección Regional de Transportes.",
    icon: "user-plus",
    buttonText: "INICIAR PROCESO",
    href: "/fluvial/tramites/empadronamiento/opciones/formulario/registrar-propietarios",
    variant: "default",
  },
  {
    title: "Registrar Nave + Propietario",
    description:
      "Se registrar los datos de las naves y su propietario. Requiere información detallada de la embarcación y documentación del propietario.",
    icon: "ship",
    buttonText: "INICIAR PROCESO",
    href: "/fluvial/tramites/empadronamiento/opciones/formulario/registrar-nave-propietario",
    variant: "default",
  },
  {
    title: "Solicitud de empradronamiento",
    description:
      "Estado de trámite para embarcaciones menores sin resolución previa. Requiere validación de documentos y verificación técnica. Ideal para embarcaciones nuevas o sin historial de empadronamiento.",
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

  {
    title: "Generar Constancia de empadronamiento",
    description:
      "Emisión de constancia para embarcaciones menores ya empadronadas. Requiere número de matrícula y verificación de datos en el padrón regional.",
    icon: "badge-check",
    buttonText: "GENERAR CONSTANCIA",
    href: "/fluvial/tramites/empadronamiento/opciones/formulario/con-resolucion",
    variant: "default",
  },
];
