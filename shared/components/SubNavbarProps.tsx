"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface Item {
  label: string;
  href: string;
}

interface SubNavbarProps {
  items: Item[];
}

const SubNavbar = ({ items }: SubNavbarProps) => {
  const pathname = usePathname();

  return (
    <div className="w-full border-b border-slate-200 mb-6 flex justify-end">
      <nav className="flex justify-end items-center gap-6 overflow-x-auto">
        {items.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative py-3 text-sm font-medium transition-colors
                ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-slate-800"
                }
              `}
            >
              {item.label}

              {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default SubNavbar;