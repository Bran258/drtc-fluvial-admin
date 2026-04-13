"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

type Props = {
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: ReactNode;
};

export default function ModalBase({
  title,
  subtitle,
  onClose,
  children,
}: Props) {

  // 🔥 CIERRE CON ESCAPE
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex justify-between items-start mb-6 border-b pb-3">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {title}
            </h3>

            {subtitle && (
              <p className="text-sm text-gray-500">
                {subtitle}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition"
          >
            <X />
          </button>
        </div>

        <div className="space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}