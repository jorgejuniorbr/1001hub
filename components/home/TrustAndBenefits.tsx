import { BarChart3, Headphones, ListMusic, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { LucideIcon } from "lucide-react";

type Benefit = [icon: LucideIcon, title: string, text: string];

const benefits: Benefit[] = [
  [Users, "Human curation", "Every track is reviewed by real people before entering the platform."],
  [ListMusic, "Organic playlists", "Real playlist exposure, not artificial methods or fake traffic."],
  [BarChart3, "Campaign tracking", "Monitor promo status and progress inside the artist dashboard."],
  [Headphones, "Artist-first workflow", "Built for independent creators who value quality over shortcuts."],
];

export function TrustAndBenefits() {
  return (
    <section className="bg-[#050505] py-18 sm:py-28">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#111114] to-[#070708] p-8 md:p-12">
          <div className="mb-10 max-w-3xl">
            <SectionLabel>Safety first</SectionLabel>
            <h2 className="text-3xl font-black tracking-[-0.045em] text-white sm:text-4xl md:text-6xl">
              No bots. No fake streams. No artificial traffic.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/[0.58]">
              Just real playlist curation and organic exposure for your music.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([Icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <Icon className="h-6 w-6 text-emerald-300" aria-hidden="true" />
                <h3 className="mt-5 font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
