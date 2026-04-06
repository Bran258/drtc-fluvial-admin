"use client";

import SubNavbar from "@/shared/components/SubNavbarProps";

const subNavItems = [
  { label: "Lista", href: "/fluvial/tramites/empadronamiento/dashboard" },
  { label: "Propietarios", href: "/fluvial/tramites/empadronamiento/propietarios" },
  { label: "Naves", href: "/fluvial/tramites/empadronamiento/naves" },
  { label: "Reportes", href: "/fluvial/tramites/empadronamiento/reportes" },
];

export default function SubNav() {
  return (
    <div className="mt-6">
      <SubNavbar items={subNavItems} />
    </div>
  );
}