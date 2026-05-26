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

function Header() {
  // Função para rolar a página caçando o texto dos blocos
  const scrollToSectionByText = (textToFind: string) => {
    const headings = Array.from(document.querySelectorAll("h1, h2, h3,
h4, span, p, section, div"));

    const target = headings.find(el =>
      el.textContent?.toLowerCase().includes(textToFind.toLowerCase())
    );

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
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
        <a href="#" onClick={(e) => { e.preventDefault();
scrollToSectionByText('four simple steps'); }}
className="hover:text-white transition-colors">How it works</a>
        <a href="#" onClick={(e) => { e.preventDefault();
scrollToSectionByText('most listened djs'); }}
className="hover:text-white transition-colors">Global DJ Rankings</a>
        <a href="#" onClick={(e) => { e.preventDefault();
scrollToSectionByText('one plan'); }} className="hover:text-white
transition-colors">Pricing</a>
        <a href="#" onClick={(e) => { e.preventDefault();
scrollToSectionByText('frequently'); }} className="hover:text-white
transition-colors">FAQ</a>
      </nav>

      <a
        href="#"
        onClick={(e) => { e.preventDefault();
scrollToSectionByText('one plan'); }}
        className="bg-emerald-500 hover:bg-emerald-400 text-black
text-sm font-semibold py-2 px-4 rounded-full transition-all
text-center"
      >
        Submit Music
      </a>
    </header>
  );
}

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