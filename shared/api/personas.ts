import axiosInstance from "@/lib/axios";

export interface PersonaReferencia {
  dniRuc: string;
  nombreCompleto: string;
  tipoEntidad?: string;
}

export async function getPersonaByDoc(doc: string) {
  const response = await axiosInstance.get("/personas/lookup", {
    params: { doc },
  });

  return response.data.data; // 👈 EXTRACCIÓN REAL
}