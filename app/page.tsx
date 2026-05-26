"use client";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { EditorialBlocks } from "@/components/home/EditorialBlocks";
import { SelectPlan } from "@/components/home/SelectPlan";
import { Rankings } from "@/components/home/Rankings";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TrustAndBenefits } from "@/components/home/TrustAndBenefits";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <EditorialBlocks />
      <SelectPlan />
      <Rankings />
      <HowItWorks />
      <TrustAndBenefits />
      <DashboardPreview />
      <FAQ />
    </main>
  );
}
