"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

type Variant = "primary" | "secondary" | "danger" | "ghost";
type Size = "sm" | "md" | "lg";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
};

export default function Button({
  children,
  onClick,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  icon,
  loading = false,
  disabled = false,
  fullWidth = false,
}: Props) {
  const router = useRouter();

  // 🔹 BASE
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  // 🔹 VARIANTES (institucional: sobrio, buen contraste)
  const variants: Record<Variant, string> = {
    primary:
      "bg-[#001f3f] text-white hover:bg-[#003366] focus:ring-[#001f3f]",
    secondary:
      "border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 focus:ring-gray-400",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    ghost:
      "text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  };

  // 🔹 TAMAÑOS
  const sizes: Record<Size, string> = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  const handleClick = () => {
    if (disabled || loading) return;

    if (href) router.push(href);
    if (onClick) onClick();
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`
        ${base}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {loading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : (
        icon
      )}

      {children}
    </button>
  );
}