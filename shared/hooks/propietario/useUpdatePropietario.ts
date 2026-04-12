import { useState } from "react";
import {
  updatePropietario,
  UpdatePropietarioDto,
} from "@/shared/api/propietario";

export const useUpdatePropietario = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = async (id: string, data: UpdatePropietarioDto) => {
    try {
      setLoading(true);
      setError(null);
      return await updatePropietario(id, data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Error al actualizar");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { update, loading, error };
};