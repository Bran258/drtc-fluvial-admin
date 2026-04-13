"use client";

import { useEffect, useRef, useState } from "react";
import {
  getPropietarios,
  searchPropietario,
  Propietario,
} from "@/shared/api/propietario";
import { toastGeneral } from "@/lib/toast";

export const usePropietarios = () => {
  const [data, setData] = useState<Propietario[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [total, setTotal] = useState(0);

  const [inputSearch, setInputSearch] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");

  const [searchType, setSearchType] = useState<"dni" | "ruc">("dni");
  const [searchError, setSearchError] = useState<string | null>(null);

  const cache = useRef(new Map<string, any>());

  const invalidateCache = () => cache.current.clear();

  // RESET
  useEffect(() => {
    invalidateCache();
    setPage(1);
    setAppliedSearch("");
    setInputSearch("");
  }, [searchType]);

  // LISTADO
  const fetchList = async (pageToLoad: number) => {
    const key = `list-${pageToLoad}`;

    if (cache.current.has(key)) {
      const cached = cache.current.get(key);
      setData(cached.data);
      setTotal(cached.total);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await getPropietarios(pageToLoad, limit);

      const list = res?.data?.data ?? [];
      const total = res?.data?.total ?? 0;

      setData(Array.isArray(list) ? list : []);
      setTotal(total);

      cache.current.set(key, { data: list, total });
    } catch (e: any) {
      setError(e?.message || "Error al cargar");
      setData([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  // SEARCH
  const fetchSearch = async (q: string) => {
    const key = `search-${q}-${searchType}`;

    if (cache.current.has(key)) {
      const cached = cache.current.get(key);
      setData(cached.data);
      setTotal(cached.total);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await searchPropietario(q, searchType);

      const list = Array.isArray(res) ? res : res?.data ?? [];

      setData(list);
      setTotal(list.length);

      cache.current.set(key, { data: list, total: list.length });
    } catch (e: any) {
      setError(e?.message || "Error en búsqueda");
      setData([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  // CONTROL CENTRAL
  useEffect(() => {
    if (appliedSearch) {
      fetchSearch(appliedSearch);
    } else {
      fetchList(page);
    }
  }, [page, appliedSearch, searchType]);

  // INPUT
  const onSearchChange = (value: string) => {
    const clean = value.replace(/\D/g, "");

    setInputSearch(clean);

    if (searchType === "dni" && clean && clean.length < 8) {
      setSearchError("DNI incompleto");
    } else if (searchType === "ruc" && clean && clean.length < 11) {
      setSearchError("RUC incompleto");
    } else {
      setSearchError(null);
    }

    if (!clean) {
      setAppliedSearch("");
      setPage(1);
    }
  };

  // SUBMIT
  const onSearchSubmit = () => {
    const q = inputSearch.trim();

    if (!q) {
      toastGeneral.error("Ingresa un valor para buscar");
      return;
    }

    if (searchType === "dni" && q.length !== 8) {
      toastGeneral.error("El DNI debe tener 8 dígitos");
      return;
    }

    if (searchType === "ruc" && q.length !== 11) {
      toastGeneral.error("El RUC debe tener 11 dígitos");
      return;
    }

    setPage(1);
    setAppliedSearch(q);
  };

  const refetch = () => {
    invalidateCache();

    if (appliedSearch) fetchSearch(appliedSearch);
    else fetchList(page);
  };

  return {
    data,
    loading,
    error,
    page,
    setPage,
    total,
    limit,

    search: inputSearch,
    setSearch: onSearchChange,
    onSearchSubmit,

    refetch,

    searchType,
    setSearchType,

    searchError,
  };
};