import type { Metadata } from "next";
import { RankingsPageContent } from "@/components/rankings/RankingsPageContent";

export const metadata: Metadata = {
  title: "DJ Rankings by Country — 1001HUB",
  description:
    "Explore the most listened DJs by country. A 1001HUB data feature showing electronic music demand across key markets.",
};

export default function RankingsPage() {
  return <RankingsPageContent />;
}
