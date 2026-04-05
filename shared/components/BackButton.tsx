"use client";

import Link from "next/link";
import { ChevronLeft, Info } from "lucide-react";

type Props = {
  backHref: string;
  stepText?: string;
  backLabel?: string;
};

const BackButton = ({
  backHref,
  stepText,
  backLabel = "Regresar",
}: Props) => {
  return (
    <div className="flex items-center justify-between mb-6">

      {/* 🔙 VOLVER */}
      <Link
        href={backHref}
        className="group flex items-center gap-2 text-slate-500 hover:text-[#001f3f] transition-all"
      >
        <div className="flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 bg-white shadow-sm group-hover:bg-blue-50 group-hover:border-blue-200 transition">
          <ChevronLeft size={18} />
        </div>

        <span className="text-xs font-semibold tracking-wide uppercase">
          {backLabel}
        </span>
      </Link>

      {/* ℹ️ STEP INFO SOLO SI EXISTE */}
      {stepText && (
        <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
          <Info size={14} className="text-slate-500" />

          <span className="text-[11px] font-semibold text-slate-600 tracking-wide">
            {stepText}
          </span>
        </div>
      )}
    </div>
  );
};

export default BackButton;