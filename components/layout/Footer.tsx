"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 border-t border-zinc-800
bg-black text-center text-xs text-zinc-500">
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