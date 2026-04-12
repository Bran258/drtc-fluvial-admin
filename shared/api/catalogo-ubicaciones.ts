import axiosInstance from "@/lib/axios";

export interface UbicacionCatalogo {
  id: string;
  departamento: string;
  provincia: string;
  distrito: string;
  codigoUbigeo: string | null;
}

export async function getUbicaciones(): Promise<UbicacionCatalogo[]> {
  const response = await axiosInstance.get("/catalogos/ubicaciones");

  return response.data.data; 
}