import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Intro() {
  return (
    <section className="relative bg-[#101012] py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-end">
          <div>
            <SectionLabel>Platform universe</SectionLabel>
            <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.045em] text-white sm:text-4xl md:text-6xl">
              A global platform for artists who want real organic growth.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/[0.58]">
            1001HUB connects music curation, organic playlist promotion and artist
            discovery in a premium international environment built for independent
            creators.
          </p>
        </div>
      </Container>
    </section>
  );
}
