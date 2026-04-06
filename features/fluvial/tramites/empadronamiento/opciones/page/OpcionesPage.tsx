import TitleHeader from "@/shared/components/TitleHeader";
import { HelpFooter } from "../components/help-footer";
import { ProcedureCard } from "../components/procedure-card";
import { PROCEDURES } from "../constants/procedures";
import BackButton from "@/shared/components/BackButton";


export default function OpcionesFeature() {
  return (
    <section className="px-4 md:px-8 py-6 bg-slate-50 min-h-screen space-y-6">

      {/* HEADER */}
      <BackButton
        backHref="/fluvial/tramites/empadronamiento/dashboard"
      />
      <TitleHeader
        title="Nuevo Trámite de Empadronamiento"
        description="Seleccione el tipo de trámite que desea iniciar para el sistema fluvial regional."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROCEDURES.map((proc, index) => (
          <ProcedureCard key={index} {...proc} />
        ))}
      </div>

      <HelpFooter />
    </section>
  );
}