import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "How it works", href: "/#how" },
  { label: "Rankings", href: "/rankings" },
  { label: "Select", href: "/#select" },
  { label: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#050505] py-16 sm:py-20">
      <Container>
        {/* Final CTA block */}
        <div className="mb-16 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,.2),transparent_45%),linear-gradient(135deg,#111114,#070708)] p-10 text-center md:p-16">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-emerald-300">
            Start your journey
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-none tracking-[-0.055em] text-white sm:text-5xl md:text-7xl">
            Ready to submit your music?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/[0.58]">
            Apply for curation and start your first monthly promo with 1001HUB Select.
          </p>
          <div className="mt-9 flex justify-center">
            <Button onClick={() => (window.location.href = "/submit")}>
              Apply for Curation
            </Button>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.4fr_.6fr_.6fr]">
          <div>
            <div className="text-lg font-black tracking-[0.16em] text-white">
              1001HUB
            </div>
            <p className="mt-4 max-w-sm leading-7 text-white/45">
              Organic playlist promotion and music curation for independent artists who value quality over shortcuts.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-white/35">
              Navigation
            </p>
            <div className="grid gap-3">
              {navLinks.map(({ label, href }) => (
                <Link key={label} href={href} className="text-white/[0.55] transition hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-white/35">
              Legal
            </p>
            <div className="grid gap-3">
              {legalLinks.map(({ label, href }) => (
                <Link key={label} href={href} className="text-white/[0.55] transition hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs leading-6 text-white/35">
          © 2026 1001HUB. 1001HUB does not use bots, fake streams or artificial traffic. Campaign results may vary depending on music quality, engagement and playlist fit.
        </p>
      </Container>
    </footer>
  );
}
