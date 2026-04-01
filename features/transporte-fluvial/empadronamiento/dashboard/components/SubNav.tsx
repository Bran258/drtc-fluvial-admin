"use client";

import SubNavbar from "@/shared/components/SubNavbarProps";

const subNavItems = [
  { label: "Lista", href: "/empadronamiento/dashboard" },
  { label: "Naves", href: "/empadronamiento/naves" },
  { label: "Materiales", href: "/empadronamiento/materiales" },
  { label: "Reportes", href: "/empadronamiento/reportes" },
];

export default function SubNav() {
  return (
    <div className="mt-6">
      <SubNavbar items={subNavItems} />
    </div>
  );
}