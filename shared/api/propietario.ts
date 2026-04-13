import axiosInstance from "@/lib/axios";

/**
 * TIPOS BASE
 */

export type TipoPersona =
  | "NATURAL"
  | "JURIDICA"
  | "NATURAL_CON_RUC";

export interface Propietario {
  id: string;
  dniRuc: string;
  propietarioNombre: string;
  tipoPersona: TipoPersona;

  representanteLegal?: string | null;
  correo?: string | null;
  celular?: string | null;
  direccionLegal?: string | null;
  asociacion?: string | null;
  ubicacionId?: string | null;

  createdAt?: string;
  updatedAt?: string;
}

export interface PropietariosResponse {
  data: {
    data: Propietario[];
    total: number;
    page: number;
    limit: number;
    lastPage: number;
  };
}

export interface SearchResponse {
  data: Propietario[];
  total: number;
}


/**
 * CREATE DTO
 */
export type CreatePropietarioDto = Omit<
  Propietario,
  "id" | "createdAt" | "updatedAt"
>;

/**
 * UPDATE DTO
 */
export type UpdatePropietarioDto = Partial<CreatePropietarioDto>;

/**
 * ENDPOINT BASE
 */
const BASE = "/propietario";

/**
 * LISTAR TODOS
 */

export const getPropietarios = async (
  page: number,
  limit: number
): Promise<PropietariosResponse> => {
  const { data } = await axiosInstance.get<PropietariosResponse>(BASE, {
    params: { page, limit },
  });

  return data;
}

/**
 * OBTENER POR ID
 */
export const getPropietarioById = async (
  id: string
): Promise<Propietario> => {
  const res = await axiosInstance.get(`${BASE}/${id}`);
  return res.data;
};

/**
 * BUSCAR POR DNI/RUC
 */
export const searchPropietario = async (
  q: string,
  type?: string
): Promise<SearchResponse> => {
  const { data } = await axiosInstance.get<SearchResponse>(
    `${BASE}/search`,
    {
      params: { q, type },
    }
  );

  return data;
};

/**
 * CREAR
 */
export const createPropietario = async (
  data: CreatePropietarioDto
): Promise<Propietario> => {
  const res = await axiosInstance.post(BASE, data);
  return res.data;
};

/**
 * ACTUALIZAR
 */
export const updatePropietario = async (
  id: string,
  data: UpdatePropietarioDto
): Promise<Propietario> => {
  const res = await axiosInstance.patch(`${BASE}/${id}`, data);
  return res.data;
};

/**
 * IMPORTACIÓN MASIVA
 */
export const importarPropietarios = async (data: any[]) => {
  const res = await axiosInstance.post(`${BASE}/importar`, data);
  return res.data;
};