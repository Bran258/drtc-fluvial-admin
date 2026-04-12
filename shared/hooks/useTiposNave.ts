"use client";

import { useEffect, useState } from "react";
import { getTiposNave } from "../api/catalogo-tipos-nave";
import { TipoNaveCatalogo } from "@/types/catalogos";


interface State {
  data: TipoNaveCatalogo[];
  loading: boolean;
  error: string | null;
}

let cache: TipoNaveCatalogo[] | null = null;

export function useTiposNave() {
  const [state, setState] = useState<State>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cache) {
          setState({
            data: cache,
            loading: false,
            error: null,
          });
          return;
        }

        setState((prev) => ({ ...prev, loading: true }));

        const data = await getTiposNave();

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
          error: err?.message || "Error al cargar tipos de nave",
        });
      }
    };

    fetchData();
  }, []);

  return {
    tiposNave: state.data,
    loading: state.loading,
    error: state.error,
  };
}