import axiosInstance from "@/lib/axios";
import { ModalidadCatalogo } from "@/types/catalogos";

export async function getModalidades(): Promise<ModalidadCatalogo[]> {
  const response = await axiosInstance.get("/catalogos/modalidades");
  return response.data.data;
}