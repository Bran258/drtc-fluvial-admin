"use client";

import { useEffect, useState } from "react";

import { ServicioNave } from "@/types/catalogos";
import { getCache, setCache } from "@/shared/cache/cache";
import { getServiciosNave } from "../api/catalogo-servicios-nave";

interface State {
    data: ServicioNave[];
    loading: boolean;
    error: string | null;
}

const CACHE_KEY = "servicios_nave";

export function useServiciosNave() {
    const [state, setState] = useState<State>({
        data: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cached = getCache<ServicioNave[]>(CACHE_KEY);

                if (cached) {
                    setState({
                        data: cached,
                        loading: false,
                        error: null,
                    });
                    return;
                }

                setState((prev) => ({ ...prev, loading: true }));

                const data = await getServiciosNave();

                setCache(CACHE_KEY, data);

                setState({
                    data,
                    loading: false,
                    error: null,
                });
            } catch (err: any) {
                setState({
                    data: [],
                    loading: false,
                    error: err?.message || "Error al cargar servicios de nave",
                });
            }
        };

        fetchData();
    }, []);

    return {
        serviciosNave: state.data,
        loading: state.loading,
        error: state.error,
    };
}