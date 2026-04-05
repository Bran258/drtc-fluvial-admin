"use client";

import TitleHeader from "@/shared/components/TitleHeader";
import Button from "@/shared/components/Button";
import { ClipboardPenLine } from "lucide-react";
import { formatFullDate } from "@/lib/date";

export default function Header() {
  const today = formatFullDate();
  return (
    <>
      {/* 🧭 HEADER */}
      <TitleHeader
        title="Empadronamiento Panel de Control Fluvial"
        description={today}
        rightContent={
          <Button
            href="/fluvial/tramites/empadronamiento/formulario/sin-resolucion"
            icon={<ClipboardPenLine size={16} />}
          >
            Nuevo Empadronamiento
          </Button>
        }
      />
    </>
  );
}

