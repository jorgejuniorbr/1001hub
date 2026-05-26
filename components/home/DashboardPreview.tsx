import { BarChart3, LineChart, ListMusic, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { LucideIcon } from "lucide-react";

type MetricCard = [icon: LucideIcon, label: string, value: string];

const metrics: MetricCard[] = [
  [Sparkles, "Active Plan", "1001HUB Select"],
  [ListMusic, "Active Song", "1 of 1"],
  [LineChart, "Status", "Active"],
  [BarChart3, "Next Billing", "Jul 15"],
];

export function DashboardPreview() {
  return (
    <section className="bg-[#111114] py-18 sm:py-28">
      <Container>
        <div className="mb-12 text-center">
          <SectionLabel>Dashboard Preview</SectionLabel>
          <h2 className="text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
            Your artist dashboard
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/[0.55]">
            A clean interface to manage submissions, track campaign progress and
            follow your monthly promo.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[#080809] p-5 shadow-2xl shadow-black/50">
          {/* Window chrome */}
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-sm font-black text-white/75">
                1001HUB Dashboard
              </span>
            </div>
            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">
              Pro Artist
            </span>
          </div>

          {/* Metrics row */}
          <div className="grid gap-4 md:grid-cols-4">
            {metrics.map(([Icon, label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
              >
                <Icon className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.22em] text-white/40">
                  {label}
                </p>
                <p className="mt-2 text-lg font-black text-white">{value}</p>
              </div>
            ))}
          </div>

          {/* Campaign + slots */}
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_.85fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <div className="mb-5 flex justify-between">
                <h3 className="font-black text-white">Current Campaign</h3>
                <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-300">
                  Day 18 of 30
                </span>
              </div>
              <p className="text-2xl font-black text-white">Midnight Dreams</p>
              <p className="mt-1 text-white/45">
                Electronic / Chill · 2,847 plays this month
              </p>
              <div className="mt-6 h-2 rounded-full bg-white/10">
                <div
                  className="h-full w-[60%] rounded-full bg-emerald-300"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <h3 className="font-black text-white">Promo Slots</h3>
              <div className="mt-5 rounded-xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm font-bold text-emerald-300">
                Slot 1 · Active
              </div>
              <button className="mt-4 w-full rounded-xl border border-dashed border-white/[0.18] py-4 text-sm font-bold text-white/[0.55] transition hover:border-white/30 hover:text-white/75">
                + Submit New Song
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
