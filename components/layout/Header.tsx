"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Select", href: "/#select" },
  { label: "Rankings", href: "/rankings" },
  { label: "How It Works", href: "/#how" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#070708]/92 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between sm:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-full border border-white/[0.18] bg-white/[0.04] text-[9px] font-black tracking-tighter text-white sm:h-9 sm:w-9 sm:text-[10px]">
            1H
          </div>
          <div className="text-base font-black tracking-[0.14em] text-white sm:text-lg sm:tracking-[0.16em]">
            1001HUB
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-[11px] font-black uppercase tracking-[0.22em] text-white/[0.58] transition hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-3">
          <Button
            className="hidden px-5 py-2.5 md:inline-flex"
            onClick={() => (window.location.href = "/submit")}
          >
            Submit Music
          </Button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.12] bg-white/[0.04] text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </header>
  );
}
