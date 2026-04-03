"use client";

import TitleHeader from "@/shared/components/TitleHeader";
import Button from "@/shared/components/Button";
import { ClipboardPenLine } from "lucide-react";

export default function Header() {
  return (
    <>
      <TitleHeader title="Empadronamiento" />

      <Button
        href="/fluvial/tramites/empadronamiento/formulario/sin-resolucion"
        icon={<ClipboardPenLine size={16} />}
      >
        Nuevo Empadronamiento
      </Button>
    </>
  );
}