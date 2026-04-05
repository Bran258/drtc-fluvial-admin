import TitleHeader from "@/shared/components/TitleHeader";
import { CitizenStep } from "../components/citizen-step";
import { FormActions } from "../components/form-actions";
import { ProcedureStep } from "../components/procedure-step";
import { SchedulingStep } from "../components/scheduling-step";
import { SummarySidebar } from "../components/summary-sidebar";
import BackButton from "@/shared/components/BackButton";


export default function GenerarCita() {
    return (
        <div className="px-4 md:px-8 py-6 bg-slate-50 min-h-screen space-y-6">

            {/* HEADER */}
            <BackButton
                backHref="/fluvial/citas/agenda"
            />
            <TitleHeader
                title="Generar Cita"
                description="Complete el formulario multisección para registrar una nueva atención. El sistema valida la disponibilidad en tiempo real."
            />

            <div className="grid grid-cols-12 gap-10">
                <main className="col-span-8 space-y-8">
                    <ProcedureStep />
                    <CitizenStep />
                    <SchedulingStep />
                </main>

                <aside className="col-span-4 space-y-6">
                    <SummarySidebar />
                    <FormActions />
                    <div className="bg-orange-100/50 p-6 rounded-2xl border border-orange-100 flex gap-4">
                        <span className="bg-orange-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">i</span>
                        <p className="text-[12px] text-orange-900 leading-normal font-medium">
                            <strong className="font-bold">Tip Pro:</strong> Verifique que los datos del ciudadano estén correctos antes de seleccionar el horario. Esto evita reprocesos y errores en la atención.
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
}