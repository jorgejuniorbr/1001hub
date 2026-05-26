"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Menu Superior (Header) com IDs ajustados e interativos
function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Se não achar o ID exato, tenta procurar por seções comuns na página
      const fallback = document.querySelector(id) ||
document.querySelector(`[data-section="${id}"]`);
      if (fallback) fallback.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full py-4 px-6 border-b border-zinc-800
bg-black flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2 cursor-pointer"
onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="w-6 h-6 bg-emerald-500 rounded-full flex
items-center justify-center font-bold text-black text-xs">1</div>
        <span className="font-bold text-white text-lg
tracking-wider">1001HUB</span>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
        <a href="#" onClick={(e) => { e.preventDefault();
window.scrollTo({ top: 0, behavior: 'smooth' }); }}
className="hover:text-white transition-colors">Home</a>
        <a href="#how-it-works" onClick={(e) => { e.preventDefault();
scrollToSection('how-it-works'); }} className="hover:text-white
transition-colors">How it works</a>
        <a href="#rankings" onClick={(e) => { e.preventDefault();
scrollToSection('rankings'); }} className="hover:text-white
transition-colors">Global DJ Rankings</a>
        <a href="#pricing" onClick={(e) => { e.preventDefault();
scrollToSection('pricing'); }} className="hover:text-white
transition-colors">Pricing</a>
        <a href="#faq" onClick={(e) => { e.preventDefault();
scrollToSection('faq'); }} className="hover:text-white
transition-colors">FAQ</a>
      </nav>

      <a
        href="#pricing"
        onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}
        className="bg-emerald-500 hover:bg-emerald-400 text-black
text-sm font-semibold py-2 px-4 rounded-full transition-all
text-center"
      >
        Submit Music
      </a>
    </header>
  );
}

// Rodapé (Footer)
function Footer() {
  return (
    <footer className="w-full py-8 px-6 border-t border-zinc-800
bg-black text-center text-xs text-zinc-500 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row
items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} 1001HUB. All rights
reserved. Built for International Market.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}