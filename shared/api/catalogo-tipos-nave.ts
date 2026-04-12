import axiosInstance from "@/lib/axios";
import { TipoNaveCatalogo } from "@/types/catalogos";

export async function getTiposNave(): Promise<TipoNaveCatalogo[]> {
  const response = await axiosInstance.get("/catalogos/tipos-nave");
  return response.data.data;
}