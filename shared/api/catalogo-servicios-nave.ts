import axiosInstance from "@/lib/axios";
import { ServicioNave } from "@/types/catalogos";

export async function getServiciosNave(): Promise<ServicioNave[]> {
  const response = await axiosInstance.get("/catalogos/servicios-nave");
  return response.data.data;
}