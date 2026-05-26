import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function SubmitHero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] pb-16 pt-32 sm:pb-20 sm:pt-40">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,.18),transparent_30%),radial-gradient(circle_at_70%_60%,rgba(20,184,166,.1),transparent_28%)]" />
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0b0b0d]" />

      <Container className="relative">
        <SectionLabel>Apply for Curation</SectionLabel>
        <h1 className="max-w-3xl text-4xl font-black leading-none tracking-[-0.055em] text-white sm:text-6xl md:text-7xl">
          Submit your music for curation.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/[0.58]">
          Apply for curation. Submit your track and our team will review if it fits
          the 1001HUB organic playlist network.
        </p>
      </Container>
    </section>
  );
}
