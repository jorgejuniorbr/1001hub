"use client";

import { ArrowRight } from "lucide-react";
import { cx } from "@/lib/utils";
import type { ButtonVariant } from "@/types";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black hover:bg-emerald-300 shadow-[0_0_40px_rgba(255,255,255,0.08)]",
  outline:
    "border border-white/25 bg-white/[0.03] text-white hover:border-emerald-300/70 hover:bg-emerald-300/10",
  ghost: "text-white/75 hover:text-white",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cx(
        "group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5",
        "text-[10px] font-black uppercase tracking-[0.18em] transition duration-300",
        "sm:w-auto sm:px-6 sm:py-3 sm:text-[11px] sm:tracking-[0.22em]",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </button>
  );
}
