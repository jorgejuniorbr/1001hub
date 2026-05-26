"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RankingCountrySelector } from "@/components/rankings/RankingCountrySelector";
import { RankingTable } from "@/components/rankings/RankingTable";
import { countries } from "@/data/countries";
import { rankings } from "@/data/rankings";

export function RankingsPageContent() {
  const [selected, setSelected] = useState("BR");

  const currentCountry = countries.find((c) => c.code === selected);
  const ranking = useMemo(
    () => rankings[selected] ?? rankings["BR"],
    [selected]
  );

  return (
    <main className="min-h-screen bg-[#050505] pt-16 sm:pt-[72px]">
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#050505] pb-16 pt-24 sm:pb-20 sm:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,.18),transparent_28%),radial-gradient(circle_at_80%_60%,rgba(20,184,166,.1),transparent_22%)]" />
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#151519]" />
        <Container className="relative">
          <SectionLabel>Global DJ Rankings</SectionLabel>
          <h1 className="max-w-3xl text-4xl font-black leading-none tracking-[-0.055em] text-white sm:text-6xl md:text-7xl">
            Most listened DJs by country.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/[0.55]">
            A 1001HUB data feature showing electronic music demand across key
            markets. Select a country to explore the top artists.
          </p>
        </Container>
      </section>

      {/* Rankings content */}
      <section
        className="relative bg-[#151519] py-16 sm:py-24"
        aria-label="Rankings by country"
      >
        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,.8) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <Container className="relative">
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
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
