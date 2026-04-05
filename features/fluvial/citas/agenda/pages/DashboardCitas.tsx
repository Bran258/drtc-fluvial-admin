"use client";

import { DelayAlert } from "../components/delay-alert";
import { StatsGrid } from "../components/stats-grid";
import { LiveSidebar } from "../components/live-sidebar";
import { TrafficInsight } from "../components/traffic-insight";
import { MiniAgenda } from "../components/mini-agenda";
import { formatFullDate } from "@/lib/date";
import Button from "@/shared/components/Button";
import TitleHeader from "@/shared/components/TitleHeader";

export default function DashboardCitas() {
  const today = formatFullDate();

  return (
    <div className="px-4 md:px-8 py-6 bg-slate-50 min-h-screen space-y-6">
      {/*ALERTA OPERATIVA */}
      <DelayAlert message="3 citas exceden 15 min de espera" />

      {/* HEADER */}
      <TitleHeader
        title="Empadronamiento Panel de Control Fluvial"
        description={today}
        rightContent={
          <>
            <Button
              href="/fluvial/citas/generar"
              variant="primary"
              size="md"
            >
              Nueva Cita
            </Button>

            <Button
              href="/fluvial/citas/historial"
              variant="secondary"
              size="md"
            >
              Ver Historial
            </Button>
          </>
        }
      />

      {/*KPIs */}
      <StatsGrid />

      {/*CONTENIDO PRINCIPAL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* IZQUIERDA */}
        <div className="lg:col-span-4 space-y-6">
          <LiveSidebar />
          <TrafficInsight />
        </div>

        {/* DERECHA */}
        <div className="lg:col-span-8">
          <MiniAgenda />
        </div>
      </div>
    </div>
  );
}