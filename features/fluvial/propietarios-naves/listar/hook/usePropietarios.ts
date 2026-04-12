"use client";

import { useEffect, useRef, useState } from "react";
import { getPropietarios, Propietario } from "@/shared/api/propietario";

export const usePropietarios = () => {
  const [data, setData] = useState<Propietario[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [total, setTotal] = useState(0);

  const cache = useRef<Map<number, Propietario[]>>(new Map());
  const inFlight = useRef(false);

  const fetchData = async (pageToLoad: number) => {
    if (inFlight.current) return;

    // 🔥 CACHE
    if (cache.current.has(pageToLoad)) {
      setData(cache.current.get(pageToLoad)!);
      return;
    }

    try {
      inFlight.current = true;
      setLoading(true);
      setError(null);

      const res = await getPropietarios(pageToLoad, limit);
      const payload = res.data;

      setData(payload.data ?? []);
      setTotal(payload.total ?? 0);

      cache.current.set(pageToLoad, payload.data ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setLoading(false);
      inFlight.current = false;
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const goToPage = (p: number) => {
    const lastPage = Math.ceil(total / limit);

    if (p < 1 || p > lastPage) return;

    setPage(p);
  };

  const refetch = () => {
    cache.current.delete(page);
    fetchData(page);
  };

  return {
    data,
    loading,
    error,
    page,
    limit,
    total,
    setPage: goToPage,
    refetch,
  };
};