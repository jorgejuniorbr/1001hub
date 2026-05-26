"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RankingCountrySelector } from "@/components/rankings/RankingCountrySelector";
import { RankingTable } from "@/components/rankings/RankingTable";
import { countries } from "@/data/countries";
import { rankings } from "@/data/rankings";

export function Rankings() {
  const [selected, setSelected] = useState("BR");
  const router = useRouter();

  const currentCountry = countries.find((c) => c.code === selected);
  const ranking = useMemo(
    () => rankings[selected] ?? rankings["BR"],
    [selected]
  );

  return (
    <section
      id="rankings"
      className="relative overflow-hidden bg-[#151519] py-18 sm:py-28"
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.8) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container className="relative">
        <div className="mb-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <SectionLabel>Global DJ Rankings</SectionLabel>
            <h2 className="text-4xl font-black leading-none tracking-[-0.055em] text-white sm:text-5xl md:text-7xl">
              Most listened DJs by country.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/[0.58]">
            A 1001HUB data feature showing electronic music demand across key
            markets. Select a country and preview the artists leading that market.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[.88fr_1.12fr]">
          <RankingCountrySelector
            countries={countries}
            selected={selected}
            onSelect={setSelected}
          />
          <RankingTable
            entries={ranking}
            countryName={currentCountry?.name ?? ""}
            countryFlag={currentCountry?.flag ?? ""}
            showViewAll
            onViewAll={() => router.push("/rankings")}
          />
        </div>
      </Container>
    </section>
  );
}
