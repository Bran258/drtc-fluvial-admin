import { useState } from "react";
import axios from "axios";
import {
    createPropietario,
    CreatePropietarioDto,
} from "@/shared/api/propietario";

export const useCreatePropietario = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const create = async (data: CreatePropietarioDto) => {
        setLoading(true);
        setError(null);

        try {
            return await createPropietario(data);
        } catch (err: unknown) {
            let message = "Error al crear propietario";

            if (axios.isAxiosError(err)) {
                message =
                    (err.response?.data as any)?.message ||
                    err.response?.data?.error ||
                    message;
            }

            setError(message);
            throw new Error(message);
        } finally {
            setLoading(false);
        }
    };

    return { create, loading, error };
};