"use client";

import React from 'react';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 border-b border-zinc-800
bg-black flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-emerald-500 rounded-full flex
items-center justify-center font-bold text-black text-xs">1</div>
        <span className="font-bold text-white text-lg
tracking-wider">1001HUB</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#features" className="hover:text-white
transition-colors">Features</a>
        <a href="#pricing" className="hover:text-white
transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
      </nav>
      <button className="bg-emerald-500 hover:bg-emerald-400
text-black text-sm font-semibold py-2 px-4 rounded-full
transition-all">
        Get Started
      </button>
    </header>
  );
}