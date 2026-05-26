import { Container } from "@/components/ui/Container";
import { cx } from "@/lib/utils";

type Tone = "emerald" | "gold" | "blue";

interface EditorialFeatureProps {
  title: string;
  text: string;
  label: string;
  tone?: Tone;
  wide?: boolean;
}

const tones: Record<Tone, string> = {
  emerald: "from-emerald-400/22 via-teal-500/8 to-transparent",
  gold: "from-amber-300/20 via-orange-500/7 to-transparent",
  blue: "from-sky-400/20 via-indigo-500/8 to-transparent",
};

function EditorialFeature({
  title,
  text,
  label,
  tone = "emerald",
  wide = false,
}: EditorialFeatureProps) {
  return (
    <div
      className={cx(
        "group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b0b0d]",
        wide && "lg:col-span-2"
      )}
    >
      <div className={cx("absolute inset-0 bg-gradient-to-br", tones[tone])} />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, white 0 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative flex min-h-[250px] flex-col justify-end p-6 sm:min-h-[330px] sm:p-8">
        <p className="mb-5 text-[10px] font-black uppercase tracking-[0.28em] text-white/48">
          {label}
        </p>
        <h3 className="max-w-lg text-2xl font-black leading-tight tracking-[-0.035em] text-white sm:text-3xl md:text-4xl">
          {title}
        </h3>
        <p className="mt-4 max-w-md leading-7 text-white/[0.56]">{text}</p>
      </div>
    </div>
  );
}

export function EditorialBlocks() {
  return (
    <section className="bg-[#0b0b0d] py-16 sm:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-3">
          <EditorialFeature
            wide
            label="1001HUB Select"
            title="One curated monthly promo for selected artists."
            text="A focused entry point: one active song, human curation and organic playlist exposure."
          />
          <EditorialFeature
            label="Global Rankings"
            title="Understand where electronic music is moving."
            text="Explore the most listened DJs by country through a premium ranking experience."
            tone="blue"
          />
          <EditorialFeature
            label="Artist Dashboard"
            title="Track your campaign from submission to completion."
            text="A clean artist area designed to make every promo easy to follow."
            tone="gold"
          />
          <EditorialFeature
            wide
            label="Private Opportunities"
            title="Strong music can unlock relationship-based opportunities."
            text="Artists with strong quality and performance may be invited to private promo opportunities later."
          />
        </div>
      </Container>
    </section>
  );
}
