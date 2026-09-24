"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRightIcon, XIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DemandBadge } from "@/components/explorer/demand-badge";
import { FrameworkChip } from "@/components/explorer/framework-chip";
import { PathIcon } from "@/components/shared/path-icon";
import { PillarChip } from "@/components/shared/pillar-chip";
import { certsForPath } from "@/data/certifications";
import { GEOGRAPHY_LABELS, WORK_STYLE_LABELS } from "@/data/path-context";
import { getPath } from "@/data/paths";
import { PATH_SKILLS } from "@/data/path-skills";
import { projectsForPath } from "@/data/portfolio-projects";
import { SKILL_BY_SLUG, skillName } from "@/data/skills";
import {
  buildFrameworkOverlap,
  buildSkillOverlap,
  compareUrl,
  COMPARE_MIN,
} from "@/lib/compare";
import {
  BACKGROUND_META,
  PILLAR_META,
  PILLAR_ORDER,
  REQUIREMENT_META,
} from "@/lib/pillars";
import { computeAllMatches } from "@/lib/scoring/compute-all-matches";
import { cn } from "@/lib/utils";
import { useAssessmentStore } from "@/store/assessment-store";
import type { CertLevel, RequirementLevel } from "@/types/pathfinder";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="sticky left-0 z-20 border-t border-border bg-muted/60 px-4 py-2.5 text-sm font-semibold"
      style={{ gridColumn: "1 / -1" }}
    >
      {children}
    </div>
  );
}

function RowLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky left-0 z-10 border-t border-border bg-background px-4 py-3 text-sm font-medium">
      {children}
    </div>
  );
}

function Cell({
  children,
  className,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn("border-t border-l border-border px-4 py-3 text-sm", className)}
      style={style}
    >
      {children}
    </div>
  );
}

function SpanCell({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Cell className={className} style={{ gridColumn: "2 / -1" }}>
      {children}
    </Cell>
  );
}

function SkillChip({
  slug,
  level,
  className,
}: {
  slug: string;
  level: RequirementLevel;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
        REQUIREMENT_META[level].className,
        className
      )}
    >
      {skillName(slug)}
    </span>
  );
}

function Bar({
  pct,
  color,
}: {
  pct: number;
  color: string;
}) {
  return (
    <span className="flex items-center gap-2">
      <span className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
        <span
          className="block h-full rounded-full transition-[width] duration-500 ease-out-quart"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </span>
      <span className="w-9 shrink-0 text-right text-xs tabular-nums text-muted-foreground">
        {pct}
      </span>
    </span>
  );
}

const CERT_ORDER: CertLevel[] = ["beginner", "intermediate", "advanced"];

export function CompareView({ slugs }: { slugs: string[] }) {
  const router = useRouter();

  const background = useAssessmentStore((s) => s.background);
  const yearsExperience = useAssessmentStore((s) => s.yearsExperience);
  const selectedSkillSlugs = useAssessmentStore((s) => s.selectedSkillSlugs);
  const targetGeography = useAssessmentStore((s) => s.targetGeography);
  const workStylePreference = useAssessmentStore(
    (s) => s.workStylePreference
  );

  const complete =
    background !== null &&
    targetGeography !== null &&
    workStylePreference !== null;

  const matches = React.useMemo(() => {
    if (!complete || !background || !targetGeography || !workStylePreference) {
      return null;
    }
    const ranked = computeAllMatches({
      background,
      yearsExperience,
      selectedSkillSlugs,
      targetGeography,
      workStylePreference,
    });
    const bySlug = new Map(ranked.map((m) => [m.pathSlug, m]));
    return slugs.map((slug) => bySlug.get(slug) ?? null);
  }, [
    complete,
    background,
    yearsExperience,
    selectedSkillSlugs,
    targetGeography,
    workStylePreference,
    slugs,
  ]);

  const bestScore =
    matches && matches.every(Boolean)
      ? Math.max(...matches.map((m) => m!.matchScore))
      : null;

  const rows = React.useMemo(
    () =>
      slugs.map((slug) => {
        const path = getPath(slug);
        const reqs = PATH_SKILLS[slug] ?? [];
        const certs = certsForPath(slug);
        const projects = projectsForPath(slug);
        const certCounts: Record<CertLevel, number> = {
          beginner: 0,
          intermediate: 0,
          advanced: 0,
        };
        for (const c of certs) certCounts[c.level] += 1;
        return {
          slug,
          path,
          reqs,
          mandatoryCount: reqs.filter((r) => r.level === "mandatory").length,
          certCount: certs.length,
          certCounts,
          projectCount: projects.length,
          projectHours: projects.reduce((sum, p) => sum + p.estimatedHours, 0),
          pillarCounts: PILLAR_ORDER.map(
            (pillar) =>
              reqs.filter(
                (r) => SKILL_BY_SLUG.get(r.skillSlug)?.pillar === pillar
              ).length
          ),
        };
      }),
    [slugs]
  );

  const overlap = React.useMemo(() => buildSkillOverlap(slugs), [slugs]);
  const frameworks = React.useMemo(
    () => buildFrameworkOverlap(slugs),
    [slugs]
  );

  const maxPillarCount = Math.max(1, ...rows.flatMap((r) => r.pillarCounts));

  const removeColumn = (slug: string) => {
    const next = slugs.filter((s) => s !== slug);
    router.replace(next.length >= COMPARE_MIN ? compareUrl(next) : "/careers");
  };

  return (
    <div className="overflow-x-auto rounded-xl border">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `minmax(9rem, 11rem) repeat(${slugs.length}, minmax(14rem, 1fr))`,
          minWidth: `${11 + 14 * slugs.length}rem`,
        }}
      >
        {/* Header row */}
        <div className="sticky left-0 z-10 bg-background" />
        {rows.map(({ slug, path }) => (
          <div key={slug} className="border-l border-border px-4 pt-4 pb-3">
            <div className="flex items-start justify-between gap-2">
              <PathIcon slug={slug} />
              <div className="flex items-center gap-1.5">
                {path && <DemandBadge demand={path.demand} />}
                <button
                  type="button"
                  onClick={() => removeColumn(slug)}
                  aria-label={`Remove ${path?.title ?? slug} from comparison`}
                  className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <XIcon aria-hidden className="size-4" />
                </button>
              </div>
            </div>
            <Link
              href={`/careers/${slug}`}
              className="mt-3 block text-base leading-snug font-semibold transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {path?.title ?? slug}
            </Link>
            {path && (
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                {path.tagline}
              </p>
            )}
          </div>
        ))}

        {/* Your fit */}
        <Heading>Your fit</Heading>
        <RowLabel>Match score</RowLabel>
        {matches && matches.every(Boolean) ? (
          matches.map((m, i) => (
            <Cell key={rows[i].slug}>
              <div className="flex items-baseline gap-2">
                <span
                  className={cn(
                    "text-3xl font-bold tracking-tight",
                    bestScore !== null &&
                      m!.matchScore === bestScore &&
                      "text-primary"
                  )}
                >
                  {m!.matchScore}
                  <span className="text-base font-medium text-muted-foreground">
                    %
                  </span>
                </span>
                {bestScore !== null &&
                  m!.matchScore === bestScore &&
                  rows.length > 1 && (
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold text-primary">
                      Best fit
                    </span>
                  )}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {m!.coveragePct}% coverage ·{" "}
                {m!.missingMandatorySkills.length} missing mandatory
              </p>
            </Cell>
          ))
        ) : (
          <SpanCell className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-muted-foreground">
              Take the 4-minute assessment to see your personalized match
              scores, pillar coverage and gap analysis for each path.
            </span>
            <Link
              href="/assessment"
              className={buttonVariants({ size: "sm" })}
            >
              Take the assessment
            </Link>
          </SpanCell>
        )}

        {/* Pillars */}
        <Heading>
          {complete ? "Pillar coverage" : "Skill emphasis by pillar"}
        </Heading>
        {PILLAR_ORDER.map((pillar, pi) => (
          <React.Fragment key={pillar}>
            <RowLabel>
              <PillarChip pillar={pillar} />
            </RowLabel>
            {rows.map((r, ri) => {
              const value = complete
                ? (matches?.[ri]?.pillarScores[pi]?.pct ?? 0)
                : r.pillarCounts[pi];
              return (
                <Cell key={r.slug}>
                  {complete ? (
                    <Bar
                      pct={value}
                      color={PILLAR_META[pillar].chart}
                    />
                  ) : (
                    <Bar
                      pct={Math.round((value / maxPillarCount) * 100)}
                      color={PILLAR_META[pillar].chart}
                    />
                  )}
                  {!complete && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {value} required skill{value === 1 ? "" : "s"}
                    </p>
                  )}
                </Cell>
              );
            })}
          </React.Fragment>
        ))}

        {/* Skill overlap */}
        <Heading>
          Skill overlap — skills you can learn once and use everywhere
        </Heading>
        <RowLabel>Shared by all</RowLabel>
        <SpanCell>
          {overlap.shared.length === 0 ? (
            <p className="text-muted-foreground">
              No shared skills — these paths need different toolkits.
            </p>
          ) : (
            <>
              <p className="mb-2 text-xs text-muted-foreground">
                {overlap.shared.length} skill
                {overlap.shared.length === 1 ? "" : "s"} required by every
                compared path
              </p>
              <div className="flex flex-wrap gap-1.5">
                {overlap.shared.map((slug) => (
                  <SkillChip
                    key={slug}
                    slug={slug}
                    level={
                      overlap.sharedLevels.get(slug) ?? "recommended"
                    }
                  />
                ))}
              </div>
            </>
          )}
        </SpanCell>
        <RowLabel>Unique to each path</RowLabel>
        {rows.map((r) => {
          const unique = overlap.uniqueByPath[r.slug] ?? [];
          return (
            <Cell key={r.slug}>
              {unique.length === 0 ? (
                <p className="text-muted-foreground">—</p>
              ) : (
                <>
                  <p className="mb-2 text-xs text-muted-foreground">
                    {unique.length} skill
                    {unique.length === 1 ? "" : "s"} only this path needs
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {unique.map((req) => (
                      <SkillChip
                        key={req.skillSlug}
                        slug={req.skillSlug}
                        level={req.level}
                      />
                    ))}
                  </div>
                </>
              )}
            </Cell>
          );
        })}

        {/* Your gaps */}
        {matches && matches.every(Boolean) && (
          <>
            <Heading>Your gaps</Heading>
            <RowLabel>Gap analysis</RowLabel>
            {rows.map((r, i) => {
              const m = matches[i]!;
              return (
                <Cell key={r.slug}>
                  <ul className="space-y-1 text-sm">
                    <li className="font-medium text-emerald-600 dark:text-emerald-400">
                      {m.transferableSkills.length} transferable skills
                    </li>
                    <li
                      className={cn(
                        "font-medium",
                        m.missingMandatorySkills.length > 0
                          ? "text-rose-600 dark:text-rose-400"
                          : "text-emerald-600 dark:text-emerald-400"
                      )}
                    >
                      {m.missingMandatorySkills.length} missing mandatory
                    </li>
                    <li className="font-medium text-blue-600 dark:text-blue-400">
                      {m.recommendedUpskilling.length} recommended to learn
                    </li>
                  </ul>
                  {m.missingMandatorySkills.length > 0 && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      Missing:{" "}
                      {m.missingMandatorySkills.map(skillName).join(", ")}
                    </p>
                  )}
                </Cell>
              );
            })}
          </>
        )}

        {/* At a glance */}
        <Heading>At a glance</Heading>

        <RowLabel>Entry backgrounds</RowLabel>
        {rows.map((r) => (
          <Cell key={r.slug}>
            <div className="flex flex-wrap gap-1.5">
              {r.path?.entryBackgrounds.map((bg) => (
                <Badge key={bg} variant="secondary">
                  {BACKGROUND_META[bg]?.label ?? bg}
                </Badge>
              ))}
            </div>
          </Cell>
        ))}

        <RowLabel>Target regions</RowLabel>
        {rows.map((r) => (
          <Cell key={r.slug}>
            <p className="text-muted-foreground">
              {(r.path?.regions ?? [])
                .map((g) => GEOGRAPHY_LABELS[g])
                .join(" · ")}
            </p>
          </Cell>
        ))}

        <RowLabel>Work styles</RowLabel>
        {rows.map((r) => (
          <Cell key={r.slug}>
            <p className="text-muted-foreground">
              {(r.path?.orgFit ?? [])
                .map((w) => WORK_STYLE_LABELS[w])
                .join(" · ")}
            </p>
          </Cell>
        ))}

        <RowLabel>Frameworks</RowLabel>
        {rows.map((r) => (
          <Cell key={r.slug}>
            <div className="flex flex-wrap gap-1.5">
              {(r.path?.frameworks ?? []).map((f) => (
                <FrameworkChip
                  key={f}
                  label={f}
                  className={
                    frameworks.shared.includes(f)
                      ? "bg-primary/10 text-primary ring-1 ring-inset ring-primary/30"
                      : undefined
                  }
                />
              ))}
            </div>
          </Cell>
        ))}

        <RowLabel>Skill matrix</RowLabel>
        {rows.map((r) => (
          <Cell key={r.slug}>
            <p className="text-muted-foreground">
              {r.reqs.length} skills · {r.mandatoryCount} mandatory
            </p>
          </Cell>
        ))}

        <RowLabel>Certifications</RowLabel>
        {rows.map((r) => (
          <Cell key={r.slug}>
            <p className="font-medium">
              {r.certCount} recommended
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {CERT_ORDER.filter((lvl) => r.certCounts[lvl] > 0)
                .map((lvl) => `${r.certCounts[lvl]} ${lvl}`)
                .join(" · ") || "None listed yet"}
            </p>
          </Cell>
        ))}

        <RowLabel>Portfolio projects</RowLabel>
        {rows.map((r) => (
          <Cell key={r.slug}>
            <p className="font-medium">
              {r.projectCount} project{r.projectCount === 1 ? "" : "s"}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              ~{r.projectHours} hours of proof-of-work
            </p>
          </Cell>
        ))}

        <RowLabel>Example entry role</RowLabel>
        {rows.map((r) => (
          <Cell key={r.slug}>
            <p className="text-muted-foreground">
              {r.path?.commonJobTitles.entry[0] ?? "—"}
            </p>
          </Cell>
        ))}

        {/* CTA row */}
        <div className="sticky left-0 z-10 border-t border-border bg-background" />
        {rows.map((r) => (
          <Cell key={r.slug}>
            <Link
              href={`/careers/${r.slug}`}
              className={buttonVariants({ size: "sm", variant: "outline" })}
            >
              Open roadmap
              <ArrowRightIcon aria-hidden className="size-4" />
            </Link>
          </Cell>
        ))}
      </div>
    </div>
  );
}
