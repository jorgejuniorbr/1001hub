"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cx } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Do I need to be approved first?",
    answer:
      "Yes. All artists must submit their music for curation review before activating a subscription. This ensures quality standards for the entire 1001HUB network.",
  },
  {
    question: "Is 1001HUB a music distribution platform?",
    answer:
      "No. 1001HUB is exclusively an organic playlist promotion and curation platform. We do not distribute music to stores or streaming platforms.",
  },
  {
    question: "Do you use bots or fake streams?",
    answer:
      "Never. Every play on 1001HUB comes from a real human listener. We have a zero-tolerance policy for artificial traffic of any kind.",
  },
  {
    question: "What does 1001HUB Select include?",
    answer:
      "One active song per month, organic playlist promotion, human curation before approval, a minimum exposure target of 1,001+ monthly plays, and campaign tracking through your artist dashboard.",
  },
  {
    question: "Can I promote more than one song?",
    answer:
      "The Select plan includes one active song per month. Additional songs may be offered by private invitation based on music quality and campaign performance.",
  },
  {
    question: "Are results guaranteed?",
    answer:
      "We set a minimum target of 1,001+ monthly plays for approved campaigns. Results may vary depending on music quality, engagement and playlist fit.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes. You can cancel anytime. Your campaign remains active until the end of the billing period.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-[#0b0b0d] py-18 sm:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl divide-y divide-white/10 rounded-[1.5rem] border border-white/10 bg-black/[0.24]">
          {faqItems.map((item, i) => (
            <div key={item.question}>
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between p-6 text-left font-bold text-white/[0.82] transition hover:text-white"
                aria-expanded={openIndex === i}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cx(
                    "h-4 w-4 shrink-0 text-white/35 transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-sm leading-7 text-white/[0.55]">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
