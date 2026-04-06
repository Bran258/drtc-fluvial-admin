import { useState } from "react";
import { createPropietario, CreatePropietarioDTO } from "../api/propietarios.api";

export function useCreatePropietario() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const submit = async (payload: CreatePropietarioDTO) => {
        try {
            setLoading(true);
            setError(null);

            return await createPropietario(payload);
        } catch (err: any) {
            setError(err?.message || "Error al registrar");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { submit, loading, error };
}