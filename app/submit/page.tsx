import type { Metadata } from "next";
import { SubmitHero } from "@/components/submit/SubmitHero";
import { SubmitForm } from "@/components/submit/SubmitForm";

export const metadata: Metadata = {
  title: "Submit Your Music — 1001HUB",
  description:
    "Apply for curation. Submit your track and our team will review if it fits the 1001HUB organic playlist network.",
};

export default function SubmitPage() {
  return (
    <main>
      <SubmitHero />
      <SubmitForm />
    </main>
  );
}
