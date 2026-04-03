"use client";

import Header from "@/features/fluvial/tramites/empadronamiento/dashboard/components/Header";
import StatsCards from "@/features/fluvial/tramites/empadronamiento/dashboard/components/StatsCards";
import SubNav from "@/features/fluvial/tramites/empadronamiento/dashboard/components/SubNav";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <Header />
      <StatsCards />
      <SubNav />

      <div className="mt-6">
        {children}
      </div>

    </div>
  );
}