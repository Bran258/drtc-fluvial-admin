import {
    ArrowRight,
    UserPlus,
    Ship,
    ClipboardCheck,
    BadgeCheck,
} from "lucide-react";
import Link from "next/link";
import { ProcedureItem } from "../constants/types-procedures";

interface Props extends ProcedureItem { }

const IconMap = {
    "user-plus": UserPlus,
    ship: Ship,
    "clipboard-check": ClipboardCheck,
    "badge-check": BadgeCheck,
};

export const ProcedureCard = ({
    title,
    description,
    icon,
    buttonText,
    href,
    variant = "default",
    isMain,
}: Props) => {
    const Icon = IconMap[icon];

    if (!Icon) return null;

    const isPrimary = variant === "primary";

    return (
        <Link href={href} className="block group">
            <div
                className={`
          relative rounded-2xl p-7 transition-all duration-300
          border backdrop-blur-sm cursor-pointer
          hover:-translate-y-1
          ${isPrimary
                        ? "bg-gradient-to-br from-[#0B2A4A] to-[#071B2F] text-white border-transparent shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
                        : "bg-white text-slate-800 border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                    }
        `}
            >
                {/* BADGE */}
                {isMain && (
                    <span className="absolute top-4 right-4 bg-black/20 text-white/90 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
                        Principal
                    </span>
                )}

                {/* ICON */}
                <div
                    className={`
            w-12 h-12 rounded-xl flex items-center justify-center mb-6
            ${isPrimary
                            ? "bg-white/10 text-white"
                            : "bg-slate-100 text-slate-600"
                        }
          `}
                >
                    <Icon size={22} />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-2">{title}</h3>

                {/* DESCRIPTION */}
                <p
                    className={`text-sm leading-relaxed mb-8 ${isPrimary ? "text-slate-200" : "text-slate-500"
                        }`}
                >
                    {description}
                </p>

                {/* ACTION */}
                <div
                    className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider ${isPrimary ? "text-white" : "text-slate-700"
                        }`}
                >
                    {buttonText}
                    <ArrowRight size={16} />
                </div>
            </div>
        </Link>
    );
};