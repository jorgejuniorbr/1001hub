"use client";

import { ArrowRight, Globe2 } from "lucide-react";
import { cx } from "@/lib/utils";
import type { Country } from "@/types";

interface RankingCountrySelectorProps {
  countries: Country[];
  selected: string;
  onSelect: (code: string) => void;
}

export function RankingCountrySelector({
  countries,
  selected,
  onSelect,
}: RankingCountrySelectorProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0d]/88 p-5 md:p-7">
      <div className="mb-5 flex items-center gap-3 text-white">
        <Globe2 className="h-5 w-5 text-emerald-300" aria-hidden="true" />
        <span className="text-xs font-black uppercase tracking-[0.25em] text-white/60">
          Choose market
        </span>
      </div>
      <div className="grid gap-x-6 md:grid-cols-2">
        {countries.map((country) => (
          <button
            key={country.code}
            onClick={() => onSelect(country.code)}
            className={cx(
              "group flex items-center justify-between border-b border-white/[0.12] py-4 text-left transition",
              selected === country.code
                ? "text-emerald-300"
                : "text-white/70 hover:text-white"
            )}
            aria-pressed={selected === country.code}
          >
            <span className="flex items-center gap-3 text-base font-black uppercase tracking-[0.08em] sm:text-lg">
              <span aria-hidden="true">{country.flag}</span>
              {country.name}
            </span>
            <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}
