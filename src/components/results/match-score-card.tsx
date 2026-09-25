"use client";

import * as React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import * as m from "motion/react-m";
import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";

const PillarRadar = dynamic(
  () => import("@/components/results/pillar-radar").then((mod) => mod.PillarRadar),
  {
    ssr: false,
    loading: () => (
      <div className="h-72 w-full animate-pulse rounded-xl bg-muted/60" aria-hidden />
    ),
  }
);
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DemandBadge } from "@/components/explorer/demand-badge";
import { ScoreValue } from "@/components/results/score-value";
import { PathIcon } from "@/components/shared/path-icon";
import { PATH_BY_SLUG } from "@/data/paths";
import { PILLAR_META } from "@/lib/pillars";
import { EASE_OUT, fadeUp, SPRING_SNAPPY } from "@/lib/motion/presets";
import { useCountUp } from "@/lib/hooks/use-count-up";
import { useInViewOnce } from "@/lib/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import type { PillarScore } from "@/types/pathfinder";

function PillarMiniStat({
  score,
  index,
  start,
}: {
  score: PillarScore;
  index: number;
  start: boolean;
}) {
  const meta = PILLAR_META[score.pillar];
  const pct = useCountUp(score.pct, {
    start,
    delay: 0.12 + index * 0.05,
    duration: 0.45,
  });

  return (
    <li className="rounded-md border px-1 py-1.5 text-center">
      <m.span
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={start ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.08 + index * 0.05 }}
        className={cn(
          "mx-auto mb-1 block h-1 w-6 origin-left rounded-full",
          meta.dot
        )}
      />
      <m.span className="text-xs font-semibold tabular-nums">
        {pct}
      </m.span>
      <span className="sr-only"> {meta.label}</span>
    </li>
  );
}

export function MatchScoreCard({
  pathSlug,
  matchScore,
  pillarScores,
  rank,
  expanded,
  details,
  className,
}: {
  pathSlug: string;
  matchScore: number;
  pillarScores: PillarScore[];
  rank: number;
  expanded?: boolean;
  details?: React.ReactNode;
  className?: string;
}) {
  const path = PATH_BY_SLUG.get(pathSlug);
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const detailsId = React.useId();
  const cardRef = React.useRef<HTMLDivElement>(null);
  const inView = useInViewOnce(cardRef);
  if (!path) return null;

  const scoreTone =
    matchScore >= 70
      ? "text-emerald-600 dark:text-emerald-400"
      : matchScore >= 45
        ? "text-amber-600 dark:text-amber-400"
        : "text-rose-600 dark:text-rose-400";

  return (
    <m.div ref={cardRef} variants={fadeUp} className={cn(className)}>
      <Card className="py-6">
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
              <p className={cn("text-4xl font-bold tabular-nums", scoreTone)}>
                <ScoreValue value={matchScore} start={inView} delay={0.1} />
                %
              </p>
              <DemandBadge demand={path.demand} className="mt-1" />
            </div>
          </div>
          <CardDescription>{path.tagline}</CardDescription>
        </CardHeader>
        <CardContent>
          {expanded ? (
            <div className="space-y-2">
              <PillarRadar scores={pillarScores} />
              <table className="sr-only">
                <caption>Pillar coverage percentages</caption>
                <tbody>
                  {pillarScores.map((s) => (
                    <tr key={s.pillar}>
                      <th scope="row">{PILLAR_META[s.pillar].label}</th>
                      <td>{s.pct}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground">
                <Link
                  href="/pillars"
                  className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
                >
                  What the five pillars mean
                </Link>
              </p>
            </div>
          ) : (
            <ul
              className="grid grid-cols-5 gap-1.5"
              aria-label="Pillar coverage summary"
            >
              {pillarScores.map((s, i) => (
                <PillarMiniStat
                  key={s.pillar}
                  score={s}
                  index={i}
                  start={inView}
                />
              ))}
            </ul>
          )}
        </CardContent>
        {details && (
          <div
            id={detailsId}
            aria-hidden={!detailsOpen}
            inert={!detailsOpen}
            className={cn(
              "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
              detailsOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <CardContent className="space-y-3">{details}</CardContent>
            </div>
          </div>
        )}
        <CardFooter className="justify-between gap-2">
          <Link
            href={`/careers/${path.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            View full roadmap
            <ArrowRightIcon aria-hidden className="size-4" />
          </Link>
          {details && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="no-print"
              aria-expanded={detailsOpen}
              aria-controls={detailsId}
              onClick={() => setDetailsOpen((v) => !v)}
            >
              Why this match &amp; gaps
              <m.span
                aria-hidden
                className="inline-flex"
                animate={{ rotate: detailsOpen ? 180 : 0 }}
                transition={SPRING_SNAPPY}
              >
                <ChevronDownIcon className="size-4" />
              </m.span>
            </Button>
          )}
        </CardFooter>
      </Card>
    </m.div>
  );
}
