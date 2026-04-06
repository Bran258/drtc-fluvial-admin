export type ProcedureVariant = "default" | "primary";

export type ProcedureIcon =
    | "user-plus"
    | "ship"
    | "clipboard-check"
    | "badge-check";

export interface ProcedureItem {
    title: string;
    description: string;
    icon: ProcedureIcon;
    buttonText: string;
    href: string;
    variant?: ProcedureVariant;
    isMain?: boolean;
}