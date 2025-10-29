import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "emerald" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  default:
    "bg-slate-800/80 text-slate-100 border border-slate-700/60",
  emerald:
    "bg-emerald-400/15 text-emerald-300 border border-emerald-400/30",
  outline:
    "border border-slate-600 text-slate-200",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export default Badge;
