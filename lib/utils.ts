export function cx(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getTrendClass(trend: string): string {
  if (trend.includes("+")) return "bg-emerald-300/15 text-emerald-300";
  if (trend.includes("-")) return "bg-red-400/15 text-red-300";
  return "bg-white/10 text-white/50";
}
