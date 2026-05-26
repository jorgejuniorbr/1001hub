import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const planFeatures = [
  "1 active song per month",
  "Organic playlist promotion",
  "Human curation required before activation",
  "Minimum exposure target: 1,001+ monthly plays",
  "Campaign tracking",
  "Monthly recurring subscription",
  "Cancel anytime",
];

export function SelectPlan() {
  return (
    <section
      id="select"
      className="relative overflow-hidden bg-[#050505] py-18 sm:py-28"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(16,185,129,.18),transparent_30%)]" />

      <Container className="relative grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        {/* Copy */}
        <div>
          <SectionLabel>1001HUB Select</SectionLabel>
          <h2 className="text-4xl font-black leading-none tracking-[-0.055em] text-white sm:text-5xl md:text-7xl">
            One plan. Clear value.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
            A curated monthly promo for independent artists selected by the 1001HUB
            team. Premium, simple and focused on real organic exposure.
          </p>
        </div>

        {/* Pricing card */}
        <div className="overflow-hidden rounded-[2rem] border border-emerald-300/[0.22] bg-[#0d0d10] shadow-2xl shadow-black/60">
          <div className="border-b border-white/10 bg-gradient-to-r from-emerald-300/[0.14] to-transparent p-7">
            <div className="mb-7 inline-flex rounded-full bg-emerald-300 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-black">
              Exclusive Access
            </div>
            <h3 className="text-4xl font-black tracking-tight text-white">
              1001HUB Select
            </h3>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-7xl font-black tracking-[-0.08em] text-white">
                €49
              </span>
              <span className="mb-3 text-white/45">/month</span>
            </div>
          </div>

          <div className="p-7">
            <div className="grid gap-4">
              {planFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/[0.76]">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-300/[0.13] text-emerald-300">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <Button
              className="mt-9 w-full"
              onClick={() => (window.location.href = "/submit")}
            >
              Apply for Curation
            </Button>
            <p className="mt-5 text-center text-xs text-white/40">
              Curation review required before activation
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
