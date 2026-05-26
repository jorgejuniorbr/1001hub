import { cx, getTrendClass } from "@/lib/utils";
import type { RankingEntry } from "@/types";

interface RankingTableProps {
  entries: RankingEntry[];
  countryName: string;
  countryFlag: string;
  showViewAll?: boolean;
  onViewAll?: () => void;
}

export function RankingTable({
  entries,
  countryName,
  countryFlag,
  showViewAll = false,
  onViewAll,
}: RankingTableProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#080809]">
      {/* Header */}
      <div className="border-b border-white/10 bg-gradient-to-r from-emerald-300/[0.18] to-transparent p-7">
        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-emerald-300">
          Ranking Preview
        </p>
        <h3 className="mt-3 text-4xl font-black tracking-tight text-white">
          Top {entries.length}{" "}
          <span aria-hidden="true">{countryFlag}</span> {countryName}
        </h3>
        <p className="mt-3 text-sm text-white/45">
          Monthly listeners · platform data preview
        </p>
      </div>

      {/* Rows */}
      <ol>
        {entries.map(([artist, listeners, trend], index) => (
          <li
            key={artist}
            className="grid grid-cols-[64px_1fr_58px] items-center gap-4 border-b border-white/[0.08] p-5 transition hover:bg-white/[0.035] md:grid-cols-[84px_1fr_120px_72px]"
          >
            <div
              className="text-3xl font-black tracking-tight text-white/35"
              aria-label={`Rank ${index + 1}`}
            >
              #{index + 1}
            </div>
            <div>
              <h4 className="text-xl font-black text-white">{artist}</h4>
              <p className="mt-1 text-sm text-white/45">Spotify monthly listeners</p>
            </div>
            <div className="hidden text-right text-sm font-bold text-white/50 md:block">
              {listeners}
            </div>
            <div
              className={cx(
                "justify-self-end rounded-full px-3 py-1 text-xs font-black",
                getTrendClass(trend)
              )}
              aria-label={`Trend: ${trend}`}
            >
              {trend}
            </div>
          </li>
        ))}
      </ol>

      {showViewAll && (
        <div className="p-6">
          <button
            onClick={onViewAll}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.03] px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white transition hover:border-emerald-300/70 hover:bg-emerald-300/10"
          >
            Open Full Rankings
          </button>
        </div>
      )}
    </div>
  );
}
