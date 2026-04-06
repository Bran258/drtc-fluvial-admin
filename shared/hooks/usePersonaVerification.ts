import { useEffect, useState } from "react";
import { getPersonaByDoc, PersonaReferencia } from "../api/personas";

type Status = "idle" | "loading" | "success" | "error";

export function usePersonaVerification(doc: string) {
    const [data, setData] = useState<PersonaReferencia | null>(null);
    const [status, setStatus] = useState<Status>("idle");

    useEffect(() => {
        const clean = doc.trim();

        if (!clean) {
            setData(null);
            setStatus("idle");
            return;
        }

        if (clean.length !== 8 && clean.length !== 11) {
            setData(null);
            setStatus("idle");
            return;
        }

        let active = true;

        const run = async () => {
            try {
                setStatus("loading");

                const result = await getPersonaByDoc(clean);

                if (!active) return;

                if (result?.nombreCompleto) {
                    setData(result);
                    setStatus("success");
                } else {
                    setData(null);
                    setStatus("error");
                }
            } catch {
                if (!active) return;
                setData(null);
                setStatus("error");
            }
        };

        run();

        return () => {
            active = false;
        };
    }, [doc]);

    return { data, status };
}