import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Menu Superior (Header) Corrigido com todos os links funcionais
function Header() {
  return (
    <header className="w-full py-4 px-6 border-b border-zinc-800
bg-black flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-emerald-500 rounded-full flex
items-center justify-center font-bold text-black text-xs">1</div>
        <span className="font-bold text-white text-lg
tracking-wider">1001HUB</span>
      </div>

      {/* Menu do centro com todas as opções internacionais e o DJ Rankings */}
      <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#how-it-works" className="hover:text-white
transition-colors">How it works</a>
        <a href="#rankings" className="hover:text-white
transition-colors">Global DJ Rankings</a>
        <a href="#pricing" className="hover:text-white
transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
      </nav>

      {/* Botão de Enviar música para aprovação (Submit) */}
      <a
        href="#submit"
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