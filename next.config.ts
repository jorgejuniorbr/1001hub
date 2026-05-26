import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Vercel to pick this up with zero config
  reactStrictMode: true,

  // If you later add external image domains, add them here:
  // images: {
  //   domains: ["your-cdn.com"],
  // },
};

export default nextConfig;
