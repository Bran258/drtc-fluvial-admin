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
  stepText = "Paso 1 de 1: Información General",
  backLabel = "Regresar",
}: Props) => {
  return (
    <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between">
      
      {/* Botón volver */}
      <Link
        href={backHref}
        className="group flex items-center gap-2 text-slate-400 hover:text-[#001f3f] transition-colors"
      >
        <div className="p-1.5 rounded-lg group-hover:bg-blue-50 transition-colors">
          <ChevronLeft size={18} />
        </div>
        <span className="text-xs font-bold tracking-widest uppercase">
          {backLabel}
        </span>
      </Link>

      {/* Información del paso */}
      <div className="flex items-center gap-2 text-slate-400">
        <Info size={14} />
        <span className="text-[10px] font-medium uppercase tracking-tighter">
          {stepText}
        </span>
      </div>

    </div>
  );
};

export default BackButton;