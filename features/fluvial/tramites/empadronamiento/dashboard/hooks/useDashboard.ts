"use client";

import { useEffect, useState } from "react";
import { dashboardService } from "../services/dashboard.service";

const CACHE_KEY = "dashboard_stats";
const CACHE_TIME = 15 * 60 * 1000; // 15 minutos

export function useDashboard() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const load = async (ignoreCache = false) => {
        try {
            const cachedRaw = sessionStorage.getItem(CACHE_KEY);

            if (!ignoreCache && cachedRaw) {
                try {
                    const cached = JSON.parse(cachedRaw);

                    const isValid =
                        Date.now() - cached.timestamp < CACHE_TIME;

                    if (isValid) {
                        setData(cached.data);
                        setLoading(false);
                        return;
                    }
                } catch {
                    sessionStorage.removeItem(CACHE_KEY);
                }
            }

            const stats = await dashboardService.getStats();

            sessionStorage.setItem(
                CACHE_KEY,
                JSON.stringify({
                    data: stats,
                    timestamp: Date.now(),
                })
            );

            setData(stats);
        } catch (error) {
            console.error("Dashboard error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        //Primera carga
        load();

        //Auto refresh cada X tiempo
        const interval = setInterval(() => {
            load(true); // ignora cache → fuerza actualización
        }, CACHE_TIME);

        //Auto refetch cuando el usuario vuelve a la pestaña
        const onFocus = () => load(true);
        window.addEventListener("focus", onFocus);

        return () => {
            clearInterval(interval);
            window.removeEventListener("focus", onFocus);
        };
    }, []);

    return { data, loading };
}