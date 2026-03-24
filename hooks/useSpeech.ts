"use client";

import { useRef } from "react";

type UseSpeechReturn = {
  hablar: (texto: string) => void;
  detener: () => void;
  estaHablando: () => boolean;
};

export const useSpeech = (): UseSpeechReturn => {
  const speakingRef = useRef<boolean>(false);

  const hablar = (texto: string): void => {
    if (typeof window === "undefined") return;

    window.speechSynthesis.cancel();

    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = "es-PE";
    mensaje.rate = 0.95;
    mensaje.pitch = 1;

    speakingRef.current = true;

    mensaje.onend = () => {
      speakingRef.current = false;
    };

    window.speechSynthesis.speak(mensaje);
  };

  const detener = (): void => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    speakingRef.current = false;
  };

  const estaHablando = (): boolean => speakingRef.current;

  return { hablar, detener, estaHablando };
};