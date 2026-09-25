"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CheckIcon,
  ClipboardListIcon,
  GitCompareArrowsIcon,
  LinkIcon,
  PrinterIcon,
  RotateCcwIcon,
} from "lucide-react";
import * as m from "motion/react-m";
import { Button, buttonVariants } from "@/components/ui/button";
import { MotionProvider } from "@/components/motion/motion-provider";
import { computeAllMatches } from "@/lib/scoring/compute-all-matches";
import { listContainer, SPRING_SNAPPY } from "@/lib/motion/presets";
import { compareUrl } from "@/lib/compare";
import { BACKGROUND_META } from "@/lib/pillars";
import {
  buildShareUrl,
  readShareParam,
  type ShareState,
} from "@/lib/share-link";
import { useAssessmentStore } from "@/store/assessment-store";
import { MatchScoreCard } from "@/components/results/match-score-card";
import { ConnectCard } from "@/components/results/connect-card";
import { ResultsSkeleton } from "@/components/results/results-skeleton";
import { ScoreValue } from "@/components/results/score-value";
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
  const [viewingShared, setViewingShared] = React.useState(false);
  const [pendingShared, setPendingShared] = React.useState<ShareState | null>(
    null
  );

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    const shared = readShareParam();
    if (!shared) return;
    const state = useAssessmentStore.getState();
    const hasLocalDraft =
      state.background !== null ||
      state.yearsExperienceConfirmed ||
      state.selectedSkillSlugs.length > 0 ||
      state.targetGeography !== null ||
      state.workStylePreference !== null;
    if (hasLocalDraft) {
      setPendingShared(shared);
    } else {
      hydrateFromShare(shared);
      setViewingShared(true);
    }
  }, [hydrateFromShare]);

  const results = React.useMemo(() => {
    if (!background || !targetGeography || !workStylePreference) return [];
    return computeAllMatches({
      background,
      yearsExperience,
      selectedSkillSlugs,
      targetGeography,
      workStylePreference,
    });
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
    if (mounted && !complete && !pendingShared) router.replace("/assessment");
  }, [mounted, complete, pendingShared, router]);

  if (pendingShared) {
    return (
      <div className="mx-auto max-w-2xl py-16">
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
          <h1 className="text-xl font-semibold">
            This link contains a shared result
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            You already have answers saved on this device. View the shared
            result, or keep your own answers.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
            <Button
              onClick={() => {
                setPendingShared(null);
                hydrateFromShare(pendingShared);
                setViewingShared(true);
              }}
            >
              View shared result
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setPendingShared(null);
                if (complete) router.replace("/results");
                else router.push("/assessment");
              }}
            >
              Keep my answers
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!mounted || !complete || results.length === 0) {
    return (
      <div className="py-16">
        <ResultsSkeleton />
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
    <MotionProvider>
      <div className="print-one-pager mx-auto max-w-5xl space-y-10">
      {viewingShared && (
        <div className="no-print flex flex-wrap items-center justify-between gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
          <p className="text-sm">
            You&apos;re viewing a shared result. The answers came from this
            link.
          </p>
          <Link
            href="/assessment"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            Take the assessment yourself
          </Link>
        </div>
      )}

      <header className="space-y-3">
        <p className="text-sm font-medium text-primary">
          {viewingShared ? "Shared result" : "Career Command Center"}
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <ScoreValue value={top.matchScore} />% match · {top.pathTitle}
        </h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span>{PIVOT_LABEL[pivot]} profile</span>
          <span aria-hidden>·</span>
          <span>Background: {bgLabel}</span>
          <span aria-hidden>·</span>
          <span>
            Experience: {yearsExperience}{" "}
            {yearsExperience === 1 ? "yr" : "yrs"}
          </span>
          <span aria-hidden>·</span>
          <span>Skills audited: {selectedSkillSlugs.length}</span>
        </div>
        <div className="no-print flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => void handleCopyShareLink()}
          >
            <m.span
              key={shareCopied ? "copied" : "idle"}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={SPRING_SNAPPY}
              className="inline-flex"
            >
              {shareCopied ? (
                <CheckIcon aria-hidden className="size-4" />
              ) : (
                <LinkIcon aria-hidden className="size-4" />
              )}
            </m.span>
            {shareCopied ? "Link copied" : "Share your result"}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => window.print()}
          >
            <PrinterIcon aria-hidden className="size-4" />
            Save as PDF
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => {
              reset();
              router.push("/assessment");
            }}
          >
            <RotateCcwIcon aria-hidden className="size-4" />
            {viewingShared ? "Take the assessment" : "Retake assessment"}
          </Button>
          <span className="sr-only" aria-live="polite">
            {shareCopied ? "Share link copied to clipboard" : ""}
          </span>
        </div>
      </header>

      <section className="space-y-4" aria-label="Top match breakdown">
        <h2 className="text-xl font-semibold">
          {viewingShared ? "Top match" : "Your top match"}
        </h2>
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
          <m.div
            className="grid gap-4 md:grid-cols-2"
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          >
            {runnersUp.map((r, i) => (
              <MatchScoreCard
                key={r.pathSlug}
                pathSlug={r.pathSlug}
                matchScore={r.matchScore}
                pillarScores={r.pillarScores}
                rank={i + 2}
                details={
                  <>
                    <WhyThisMatch factors={r.factors} />
                    <SkillDeltaMatrix
                      transferable={r.transferableSkills}
                      missingMandatory={r.missingMandatorySkills}
                      recommended={r.recommendedUpskilling}
                    />
                  </>
                }
              />
            ))}
          </m.div>
        </section>
      )}

      <p className="print-footer hidden" aria-hidden>
        Generated {new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })} · Sustainability Career Pathfinder 2.0
      </p>

      <section className="no-print rounded-xl border border-dashed p-6 text-center">
        <h2 className="text-lg font-semibold">Next steps</h2>
        <p className="mx-auto mt-1 max-w-xl text-sm text-muted-foreground">
          Open the full roadmap for {top.pathTitle} to see certifications,
          portfolio projects and job titles, or browse every path to compare.
        </p>
        <div className="mt-4 flex flex-col justify-center gap-2 sm:flex-row">
          <Link
            href={`/careers/${top.pathSlug}`}
            className={buttonVariants()}
          >
            <ClipboardListIcon aria-hidden className="size-4" />
            Open your roadmap
          </Link>
          <Link
            href={compareUrl(
              results.slice(0, 3).map((r) => r.pathSlug)
            )}
            className={buttonVariants({ variant: "outline" })}
          >
            <GitCompareArrowsIcon aria-hidden className="size-4" />
            Compare your top 3
          </Link>
          <Link
            href="/careers"
            className={buttonVariants({ variant: "outline" })}
          >
            Browse all 17 paths
          </Link>
        </div>
      </section>

      {!viewingShared && <ConnectCard pathSlug={top.pathSlug} />}
      </div>
    </MotionProvider>
  );
}
