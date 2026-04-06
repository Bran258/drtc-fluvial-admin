import axiosInstance from "@/lib/axios";

export interface CreatePropietarioDTO {
    tipoPersona: "NATURAL" | "JURÍDICA";
    dniRuc: string;
    propietarioNombre: string;
    representanteLegal?: string | null;
    direccionLegal: string;
    asociacion?: string | null;
}

export const createPropietario = async (data: CreatePropietarioDTO) => {
    const { data: response } = await axiosInstance.post(
        "/propietarios",
        data
    );

    return response;
};