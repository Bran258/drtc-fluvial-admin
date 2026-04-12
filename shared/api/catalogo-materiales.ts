import axiosInstance from "@/lib/axios";
import { MaterialCatalogo } from "@/types/catalogos";

export async function getMateriales(): Promise<MaterialCatalogo[]> {
  const response = await axiosInstance.get("/catalogos/materiales");
  return response.data.data;
}