"use client";

import { useEffect, useState } from "react";

import { ModalidadCatalogo } from "@/types/catalogos";
import { getModalidades } from "../api/catologo-modalidades";

interface State {
  data: ModalidadCatalogo[];
  loading: boolean;
  error: string | null;
}

let cache: ModalidadCatalogo[] | null = null;

export function useModalidades() {
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

        const data = await getModalidades();

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
          error: err?.message || "Error al cargar modalidades",
        });
      }
    };

    fetchData();
  }, []);

  return {
    modalidades: state.data,
    loading: state.loading,
    error: state.error,
  };
}