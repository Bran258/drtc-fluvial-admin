"use client";

import { useEffect, useState } from "react";
import { getUbicaciones, UbicacionCatalogo } from "@/shared/api/catalogo-ubicaciones";

interface State {
  data: UbicacionCatalogo[];
  loading: boolean;
  error: string | null;
}

let cache: UbicacionCatalogo[] | null = null;

export function useUbicaciones() {
  const [state, setState] = useState<State>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        //CACHE SIMPLE EN MEMORIA (tipo sessionStorage pero mejor UX)
        if (cache) {
          setState({
            data: cache,
            loading: false,
            error: null,
          });
          return;
        }

        setState((prev) => ({ ...prev, loading: true }));

        const data = await getUbicaciones();

        cache = data;

        setState({
          data,
          loading: false,
          error: null,
        });
      } catch (err: any) {
        setState({
          data: [],
          loading: false,
          error: err?.message || "Error al cargar ubicaciones",
        });
      }
    };

    fetchData();
  }, []);

  return {
    ubicaciones: state.data,
    loading: state.loading,
    error: state.error,
  };
}