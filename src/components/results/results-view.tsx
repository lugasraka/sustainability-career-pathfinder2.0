"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  CheckIcon,
  ClipboardListIcon,
  LinkIcon,
  PrinterIcon,
  RotateCcwIcon,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { computePathMatch } from "@/lib/scoring/compute-path-match";
import { PATHS } from "@/data/paths";
import { PATH_SKILLS } from "@/data/path-skills";
import { PATH_ORG_FIT, PATH_REGIONS } from "@/data/path-context";
import { BACKGROUND_META } from "@/lib/pillars";
import { buildShareUrl, readShareParam } from "@/lib/share-link";
import { cn } from "@/lib/utils";
import { useAssessmentStore } from "@/store/assessment-store";
import { MatchScoreCard } from "@/components/results/match-score-card";
import { SkillDeltaMatrix } from "@/components/results/skill-delta-matrix";
import { TransitionTimeline } from "@/components/results/transition-timeline";
import { WhyThisMatch } from "@/components/results/why-this-match";
import type { PivotStage } from "@/types/pathfinder";

const PIVOT_LABEL: Record<PivotStage, string> = {
  entry: "Entry pivot",
  mid: "Mid-career pivot",
  senior: "Senior pivot",
};

function pivotStage(years: number): PivotStage {
  if (years < 3) return "entry";
  if (years < 6) return "mid";
  return "senior";
}

export function ResultsView() {
  const store = useAssessmentStore();
  const background = store.background;
  const yearsExperience = store.yearsExperience;
  const selectedSkillSlugs = store.selectedSkillSlugs;
  const targetGeography = store.targetGeography;
  const workStylePreference = store.workStylePreference;
  const hydrateFromShare = store.hydrateFromShare;
  const reset = store.reset;
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [shareCopied, setShareCopied] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isSharedView = React.useRef(false);
  React.useEffect(() => {
    if (isSharedView.current) return;
    const shared = readShareParam();
    if (shared) {
      isSharedView.current = true;
      hydrateFromShare(shared);
    }
  }, [hydrateFromShare]);

  const results = React.useMemo(() => {
    if (!background || !targetGeography || !workStylePreference) return [];
    const input = {
      background,
      yearsExperience,
      selectedSkillSlugs,
      targetGeography,
      workStylePreference,
    };
    return PATHS.map((path) =>
      computePathMatch(input, {
        slug: path.slug,
        title: path.title,
        regions: PATH_REGIONS[path.slug] ?? ["GLOBAL"],
        orgFit: PATH_ORG_FIT[path.slug] ?? ["corporate", "nonprofit"],
        requiredSkills: PATH_SKILLS[path.slug] ?? [],
      })
    ).sort((a, b) => b.matchScore - a.matchScore);
  }, [
    background,
    yearsExperience,
    selectedSkillSlugs,
    targetGeography,
    workStylePreference,
  ]);

  const complete =
    background !== null &&
    targetGeography !== null &&
    workStylePreference !== null;

  React.useEffect(() => {
    if (mounted && !complete) router.replace("/assessment");
  }, [mounted, complete, router]);

  if (!mounted || !complete || results.length === 0) {
    return (
      <div className="py-24 text-center text-muted-foreground">
        Loading your matches…
      </div>
    );
  }

  const top = results[0];
  const runnersUp = results.slice(1, 3);
  const bgLabel = background ? BACKGROUND_META[background].label : "";
  const pivot = pivotStage(yearsExperience);

  const handleCopyShareLink = async () => {
    if (
      !background ||
      !targetGeography ||
      !workStylePreference
    ) {
      return;
    }
    const url = buildShareUrl({
      background,
      yearsExperience,
      selectedSkillSlugs,
      targetGeography,
      workStylePreference,
    });
    try {
      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context); no-op.
    }
  };

  return (
    <div className="print-one-pager mx-auto max-w-5xl space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-medium text-primary">Career Command Center</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {top.matchScore}% match · {top.pathTitle}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>{PIVOT_LABEL[pivot]} profile</span>
          <span aria-hidden>·</span>
          <span>Background: {bgLabel}</span>
          <span aria-hidden>·</span>
          <span>Experience: {yearsExperience}+ yrs</span>
          <span aria-hidden>·</span>
          <span>Skills audited: {selectedSkillSlugs.length}</span>
          <span className="no-print flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => void handleCopyShareLink()}
            >
              {shareCopied ? (
                <CheckIcon aria-hidden className="size-4" />
              ) : (
                <LinkIcon aria-hidden className="size-4" />
              )}
              {shareCopied ? "Copied" : "Share link"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.print()}
            >
              <PrinterIcon aria-hidden className="size-4" />
              Save as PDF
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                reset();
                router.push("/assessment");
              }}
            >
              <RotateCcwIcon aria-hidden className="size-4" />
              Retake
            </Button>
          </span>
        </div>
      </header>

      <section
        className="space-y-4 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300"
        aria-label="Top match breakdown"
      >
        <h2 className="text-xl font-semibold">Your top match</h2>
        <MatchScoreCard
          pathSlug={top.pathSlug}
          matchScore={top.matchScore}
          pillarScores={top.pillarScores}
          rank={1}
          expanded
        />
        <WhyThisMatch factors={top.factors} />
        <SkillDeltaMatrix
          transferable={top.transferableSkills}
          missingMandatory={top.missingMandatorySkills}
          recommended={top.recommendedUpskilling}
        />
        <TransitionTimeline pathSlug={top.pathSlug} />
      </section>

      {runnersUp.length > 0 && (
        <section className="space-y-4" aria-label="Runner-up matches">
          <h2 className="text-xl font-semibold">Also strong for you</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {runnersUp.map((r, i) => (
              <MatchScoreCard
                key={r.pathSlug}
                pathSlug={r.pathSlug}
                matchScore={r.matchScore}
                pillarScores={r.pillarScores}
                rank={i + 2}
              />
            ))}
          </div>
        </section>
      )}

      <p className="print-footer hidden" aria-hidden>
        Generated {new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })} · Sustainability Career Pathfinder 2.0
      </p>

      <section
        className="no-print rounded-xl border border-dashed p-6 text-center"
      >
        <p className="text-sm text-muted-foreground">
          Next up (Phase 2): proof-of-work starter kits and certification ROI
          benchmarks for your top path.
        </p>
        <a
          href={`/careers/${top.pathSlug}`}
          className={cn(buttonVariants({ variant: "outline" }), "mt-4")}
        >
          <ClipboardListIcon aria-hidden className="size-4" />
          Open roadmap
        </a>
      </section>
    </div>
  );
}
