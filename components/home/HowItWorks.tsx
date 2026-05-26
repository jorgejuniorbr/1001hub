import { LineChart, ShieldCheck, Upload, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { LucideIcon } from "lucide-react";

type Step = [icon: LucideIcon, title: string, text: string];

const steps: Step[] = [
  [Upload, "Submit your music", "Artists send their track for review before activating the promo."],
  [ShieldCheck, "Get reviewed", "Every track is analyzed to make sure it fits the 1001HUB playlist network."],
  [Zap, "Activate Select", "Approved artists can activate their monthly promo for one active song."],
  [LineChart, "Track campaign", "Follow your promo status and campaign progress through the artist dashboard."],
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-[#0e0e10] py-18 sm:py-28">
      <Container>
        <div className="mb-14 max-w-3xl">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="text-4xl font-black leading-none tracking-[-0.055em] text-white sm:text-5xl md:text-7xl">
            Four simple steps to organic growth.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([Icon, title, text], i) => (
            <div
              key={title}
              className="relative min-h-[240px] rounded-[1.5rem] border border-white/10 bg-black/25 p-7 transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.04]"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="text-5xl font-black tracking-tighter text-white/10">
                  0{i + 1}
                </span>
                <Icon className="h-6 w-6 text-emerald-300" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-black text-white">{title}</h3>
              <p className="mt-4 leading-7 text-white/[0.52]">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
