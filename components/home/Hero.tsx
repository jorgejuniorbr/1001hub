import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function MobileHeroCard() {
  return (
    <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-emerald-300/20 bg-[#0c0d0e]/90 shadow-2xl shadow-black/50 lg:hidden">
      <div className="border-b border-white/10 bg-gradient-to-r from-emerald-300/[0.14] to-transparent p-5">
        <p className="text-[9px] font-black uppercase tracking-[0.24em] text-emerald-300">
          1001HUB Select
        </p>
        <div className="mt-3 flex items-end justify-between gap-4">
          <div>
            <p className="text-4xl font-black tracking-[-0.08em] text-white">€49</p>
            <p className="text-xs font-bold text-white/45">/month · 1 active song</p>
          </div>
          <span className="rounded-full bg-emerald-300 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-black">
            Curated
          </span>
        </div>
      </div>
      <div className="grid gap-3 p-5">
        {[
          ["01", "Submit your track"],
          ["02", "Human review"],
          ["03", "Organic playlist promo"],
        ].map(([number, text]) => (
          <div
            key={text}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/[0.06] text-[10px] font-black text-emerald-300">
              {number}
            </span>
            <span className="text-sm font-bold text-white/[0.78]">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative hidden lg:block">
      <div className="absolute -inset-8 rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-black/45 p-6 shadow-2xl shadow-black/70 backdrop-blur-xl">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-300">
                Curated network
              </p>
              <h3 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">
                1001HUB Select
              </h3>
            </div>
            <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">
              Organic only
            </span>
          </div>

          <div className="grid gap-4">
            {[
              ["01", "Submit your music", "Send your track for curation review."],
              ["02", "Human review", "Our team checks fit, quality and playlist potential."],
              ["03", "Activate Select", "Approved artists start one monthly active song."],
            ].map(([number, title, text]) => (
              <div
                key={title}
                className="grid grid-cols-[64px_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="text-3xl font-black tracking-[-0.06em] text-white/20">
                  {number}
                </div>
                <div>
                  <h4 className="font-black text-white">{title}</h4>
                  <p className="mt-1 text-sm leading-6 text-white/[0.48]">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-300/[0.18] bg-emerald-300/[0.06] p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.26em] text-emerald-300">
              No bots · No fake streams · Real curation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050505] pt-16 sm:pt-[72px]"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,.22),transparent_24%),radial-gradient(circle_at_86%_48%,rgba(20,184,166,.14),transparent_28%),linear-gradient(135deg,#050505_0%,#0b0d0e_52%,#050505_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#101012]" />

      <Container className="relative grid min-h-[calc(100svh-64px)] items-center gap-10 py-10 sm:min-h-[680px] sm:py-14 md:py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
        <div className="max-w-3xl pt-4 sm:pt-0">
          {/* Eyebrow badge */}
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald-300/25 bg-emerald-300/[0.06] px-3 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/[0.78] sm:mb-7 sm:px-4 sm:text-[10px] sm:tracking-[0.28em]">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Organic promotion only
          </div>

          <h1 className="max-w-[11ch] text-[3.35rem] font-black leading-[0.88] tracking-[-0.075em] text-white sm:max-w-none sm:text-6xl sm:leading-[0.96] sm:tracking-[-0.055em] lg:text-7xl xl:text-8xl">
            Organic playlist promotion for{" "}
            <span className="text-emerald-300">independent artists.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] font-medium leading-7 text-white/[0.68] sm:mt-7 sm:text-lg sm:leading-8">
            Submit your music, get reviewed by our curation team and, if approved, activate your monthly promo inside the 1001HUB organic playlist network.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Button onClick={() => (window.location.href = "/submit")}>
              Submit Your Music
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/rankings")}
            >
              Explore Rankings
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
            {["No bots", "Human curated", "Real growth", "Campaign tracking"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-center text-[9px] font-black uppercase tracking-[0.14em] text-white/60 backdrop-blur sm:px-4 sm:text-[10px] sm:tracking-[0.18em]"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <MobileHeroCard />
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
