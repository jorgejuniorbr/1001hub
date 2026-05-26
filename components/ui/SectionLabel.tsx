import { cx } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  muted?: boolean;
}

export function SectionLabel({ children, muted = false }: SectionLabelProps) {
  return (
    <p
      className={cx(
        "mb-4 text-[11px] font-black uppercase tracking-[0.32em]",
        muted ? "text-white/40" : "text-emerald-300"
      )}
    >
      {children}
    </p>
  );
}
