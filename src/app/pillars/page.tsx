import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { PATHS } from "@/data/paths";
import { PATH_SKILLS } from "@/data/path-skills";
import { PILLAR_DETAILS } from "@/data/pillar-detail";
import { SKILLS, SKILL_BY_SLUG } from "@/data/skills";
import {
  PILLAR_META,
  SKILL_DEMAND_META,
  pillarAnchor,
} from "@/lib/pillars";
import { cn } from "@/lib/utils";
import type { Pillar, SkillDemand } from "@/types/pathfinder";

export const metadata: Metadata = {
  title: "The Five-Pillar Skill Graph, Explained",
  description:
    "What each of the five sustainability skill pillars covers, which skills sit inside it, and which of the 17 career paths lean on it most.",
};

const ENTER =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-300 motion-safe:fill-mode-both motion-safe:ease-out-quart";

const DEMAND_RANK: Record<SkillDemand, number> = {
  critical: 0,
  high: 1,
  moderate: 2,
};

const PATH_TOTALS = PATHS.map((path) => {
  const reqs = PATH_SKILLS[path.slug] ?? [];
  return {
    path,
    reqs,
    totalWeight: reqs.reduce((sum, r) => sum + r.weight, 0),
  };
});

function statsForPillar(pillar: Pillar) {
  const skills = SKILLS.filter((s) => s.pillar === pillar);
  const demandMix: Record<SkillDemand, number> = {
    critical: 0,
    high: 0,
    moderate: 0,
  };
  for (const s of skills) demandMix[s.demandLevel] += 1;

  const pathCount = new Map<string, number>();
  const mandatoryCount = new Map<string, number>();
  const pathRows: {
    slug: string;
    title: string;
    share: number;
    mandatory: number;
  }[] = [];

  for (const { path, reqs, totalWeight } of PATH_TOTALS) {
    const inPillar = reqs.filter(
      (r) => SKILL_BY_SLUG.get(r.skillSlug)?.pillar === pillar
    );
    if (inPillar.length === 0) continue;

    const weight = inPillar.reduce((sum, r) => sum + r.weight, 0);
    const mandatory = inPillar.filter((r) => r.level === "mandatory").length;

    for (const r of inPillar) {
      pathCount.set(r.skillSlug, (pathCount.get(r.skillSlug) ?? 0) + 1);
      if (r.level === "mandatory") {
        mandatoryCount.set(
          r.skillSlug,
          (mandatoryCount.get(r.skillSlug) ?? 0) + 1
        );
      }
    }

    pathRows.push({
      slug: path.slug,
      title: path.title,
      share: totalWeight > 0 ? weight / totalWeight : 0,
      mandatory,
    });
  }

  pathRows.sort((a, b) => b.share - a.share);

  const topSkills = [...skills]
    .sort((a, b) => {
      const am = mandatoryCount.get(a.slug) ?? 0;
      const bm = mandatoryCount.get(b.slug) ?? 0;
      if (am !== bm) return bm - am;
      const ap = pathCount.get(a.slug) ?? 0;
      const bp = pathCount.get(b.slug) ?? 0;
      if (ap !== bp) return bp - ap;
      return DEMAND_RANK[a.demandLevel] - DEMAND_RANK[b.demandLevel];
    })
    .slice(0, 6);

  return {
    skillCount: skills.length,
    criticalCount: demandMix.critical,
    mandatoryPathCount: pathRows.filter((r) => r.mandatory > 0).length,
    topSkills,
    topPaths: pathRows.slice(0, 5),
  };
}

export default function PillarsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Five-pillar sustainability skill graph",
    hasDefinedTerm: PILLAR_DETAILS.map((detail) => ({
      "@type": "DefinedTerm",
      name: PILLAR_META[detail.pillar].label,
      description: detail.tagline,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-8">
        <p className={cn("text-sm font-medium text-primary", ENTER)}>
          Methodology
        </p>
        <h1
          className={cn(
            "mt-1 text-3xl font-bold tracking-tight sm:text-4xl",
            ENTER,
            "delay-75"
          )}
        >
          The five-pillar skill graph
        </h1>
        <p
          className={cn(
            "mt-3 max-w-3xl text-lg text-muted-foreground text-pretty",
            ENTER,
            "delay-150"
          )}
        >
          Every skill in the Pathfinder belongs to one of five pillars. The
          assessment scores your coverage pillar by pillar, and the match engine
          weights each pillar differently depending on the path. Here is what
          sits inside each one and where it shows up in hiring.
        </p>
      </header>

      <nav
        aria-label="The five pillars"
        className={cn(
          "sticky top-14 z-30 -mx-4 mb-10 border-y border-border bg-background/90 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/70",
          ENTER,
          "delay-200"
        )}
      >
        <ul className="flex gap-2 overflow-x-auto">
          {PILLAR_DETAILS.map((detail) => (
            <li key={detail.pillar} className="shrink-0">
              <Link
                href={`#${pillarAnchor(detail.pillar)}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium whitespace-nowrap text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                <span
                  aria-hidden
                  className={cn(
                    "size-1.5 rounded-full",
                    PILLAR_META[detail.pillar].dot
                  )}
                />
                {PILLAR_META[detail.pillar].label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-14">
        {PILLAR_DETAILS.map((detail, index) => {
          const meta = PILLAR_META[detail.pillar];
          const stats = statsForPillar(detail.pillar);
          return (
            <Reveal key={detail.pillar}>
              <section
                id={pillarAnchor(detail.pillar)}
                className="scroll-mt-28 border-t border-border pt-10"
                aria-labelledby={`${pillarAnchor(detail.pillar)}-title`}
              >
                <div className="grid gap-10 lg:grid-cols-[1fr_17rem]">
                  <div>
                    <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      <span
                        aria-hidden
                        className={cn("size-2 rounded-full", meta.dot)}
                      />
                      Pillar {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2
                      id={`${pillarAnchor(detail.pillar)}-title`}
                      className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
                    >
                      {meta.label}
                    </h2>
                    <p className="mt-1 font-medium text-primary">
                      {detail.tagline}
                    </p>

                    <div className="mt-4 max-w-2xl space-y-3 text-muted-foreground">
                      {detail.summary.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>

                    <h3 className="mt-6 text-sm font-semibold">
                      What it covers
                    </h3>
                    <ul className="mt-2 grid max-w-2xl gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                      {detail.coverage.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span
                            aria-hidden
                            className={cn(
                              "mt-[0.5em] size-1 shrink-0 rounded-full",
                              meta.dot
                            )}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="mt-6 text-sm font-semibold">
                      Core skills
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Ranked by how often the 17 paths require them. Follow a
                      skill for its definition and on-the-job examples.
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {stats.topSkills.map((skill) => (
                        <li key={skill.slug}>
                          <Link
                            href={`/skills#${skill.slug}`}
                            className={cn(
                              "inline-flex rounded-full border px-2.5 py-1 text-xs font-medium underline-offset-2 transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
                              SKILL_DEMAND_META[skill.demandLevel].className
                            )}
                          >
                            {skill.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <aside className="space-y-5 lg:pt-9">
                    <dl className="grid grid-cols-3 gap-2 rounded-xl border p-3 text-center">
                      <div>
                        <dt className="text-[11px] text-muted-foreground">
                          Skills
                        </dt>
                        <dd className="text-xl font-bold tabular-nums">
                          {stats.skillCount}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] text-muted-foreground">
                          Critical demand
                        </dt>
                        <dd className="text-xl font-bold tabular-nums">
                          {stats.criticalCount}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] text-muted-foreground">
                          Paths need it
                        </dt>
                        <dd className="text-xl font-bold tabular-nums">
                          {stats.mandatoryPathCount}
                          <span className="text-sm font-medium text-muted-foreground">
                            /17
                          </span>
                        </dd>
                      </div>
                    </dl>

                    <div>
                      <h3 className="text-sm font-semibold">
                        Paths that lean on it most
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Share of each path&apos;s required-skill weight.
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {stats.topPaths.map((row) => (
                          <li key={row.slug}>
                            <Link
                              href={`/careers/${row.slug}`}
                              className="group flex items-center justify-between gap-3 rounded-md px-2 py-1 -mx-2 transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                            >
                              <span className="text-sm font-medium underline-offset-2 group-hover:underline">
                                {row.title}
                              </span>
                              <span className="shrink-0 text-xs font-semibold tabular-nums text-muted-foreground">
                                {Math.round(row.share * 100)}%
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>

      <section className="mt-14 rounded-xl border border-dashed p-6 text-center">
        <h2 className="text-lg font-semibold">
          See which pillars you already cover
        </h2>
        <p className="mx-auto mt-1 max-w-xl text-sm text-muted-foreground">
          The four-step assessment scores your skills against all five pillars
          and shows where each path weights them.
        </p>
        <div className="mt-4 flex flex-col justify-center gap-2 sm:flex-row">
          <Link href="/assessment" className={buttonVariants()}>
            Take the assessment
          </Link>
          <Link
            href="/careers"
            className={buttonVariants({ variant: "outline" })}
          >
            Browse the 17 paths
            <ArrowRightIcon aria-hidden className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
