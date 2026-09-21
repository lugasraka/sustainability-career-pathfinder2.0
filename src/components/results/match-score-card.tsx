import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DemandBadge } from "@/components/explorer/demand-badge";
import { PillarRadar } from "@/components/results/pillar-radar";
import { PathIcon } from "@/components/shared/path-icon";
import { PATH_BY_SLUG } from "@/data/paths";
import { PILLAR_META } from "@/lib/pillars";
import { useCountUp } from "@/lib/hooks/use-count-up";
import { cn } from "@/lib/utils";
import type { PillarScore } from "@/types/pathfinder";

export function MatchScoreCard({
  pathSlug,
  matchScore,
  pillarScores,
  rank,
  expanded,
  className,
}: {
  pathSlug: string;
  matchScore: number;
  pillarScores: PillarScore[];
  rank: number;
  expanded?: boolean;
  className?: string;
}) {
  const path = PATH_BY_SLUG.get(pathSlug);
  const displayScore = useCountUp(matchScore);
  if (!path) return null;

  const scoreTone =
    matchScore >= 70
      ? "text-emerald-600 dark:text-emerald-400"
      : matchScore >= 45
        ? "text-amber-600 dark:text-amber-400"
        : "text-rose-600 dark:text-rose-400";

  return (
    <Card
      className={cn(
        "py-6 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300",
        className
      )}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <PathIcon slug={path.slug} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Match #{rank}
              </p>
              <CardTitle className="text-lg">{path.title}</CardTitle>
            </div>
          </div>
          <div className="text-right">
            <p
              className={cn(
                "text-4xl font-bold tabular-nums",
                scoreTone
              )}
            >
              {displayScore}%
            </p>
            <DemandBadge demand={path.demand} className="mt-1" />
          </div>
        </div>
        <CardDescription>{path.tagline}</CardDescription>
      </CardHeader>
      <CardContent>
        {expanded ? (
          <PillarRadar scores={pillarScores} />
        ) : (
          <ul className="grid grid-cols-5 gap-1.5" aria-label="Pillar coverage summary">
            {pillarScores.map((s) => {
              const meta = PILLAR_META[s.pillar];
              return (
                <li
                  key={s.pillar}
                  className="rounded-md border px-1 py-1.5 text-center"
                  title={`${meta.label}: ${s.pct}%`}
                >
                  <span
                    aria-hidden
                    className={cn("mx-auto mb-1 block h-1 w-6 rounded-full", meta.dot)}
                  />
                  <span className="text-[11px] font-semibold tabular-nums">
                    {s.pct}%
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
      <CardFooter>
        <Link
          href={`/careers/${path.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          View full roadmap
          <ArrowRightIcon aria-hidden className="size-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
