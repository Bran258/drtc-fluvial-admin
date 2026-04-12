"use client";

import { useEffect, useState } from "react";
import { getCache, setCache } from "@/shared/cache/cache";
import { MaterialCatalogo } from "@/types/catalogos";
import { getMateriales } from "../api/catalogo-materiales";

interface State {
  data: MaterialCatalogo[];
  loading: boolean;
  error: string | null;
}

const CACHE_KEY = "materiales";

export function useMateriales() {
  const [state, setState] = useState<State>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cached = getCache<MaterialCatalogo[]>(CACHE_KEY);

        if (cached) {
          setState({
            data: cached,
            loading: false,
            error: null,
          });
          return;
        }

        setState((prev) => ({ ...prev, loading: true }));

        const data = await getMateriales();

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
          error: err?.message || "Error al cargar materiales",
        });
      }
    };

    fetchData();
  }, []);

  return {
    materiales: state.data,
    loading: state.loading,
    error: state.error,
  };
}