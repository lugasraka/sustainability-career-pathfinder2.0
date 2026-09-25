import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, GraduationCapIcon, HammerIcon, LayersIcon, UsersIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DemandBadge } from "@/components/explorer/demand-badge";
import { FrameworkChip } from "@/components/explorer/framework-chip";
import { CompareToggle } from "@/components/compare/compare-toggle";
import { CompareTray } from "@/components/compare/compare-tray";
import { PillarChip } from "@/components/shared/pillar-chip";
import { PathIcon } from "@/components/shared/path-icon";
import { Reveal } from "@/components/motion/reveal";
import { getPath, PATHS } from "@/data/paths";
import { SKILL_BY_SLUG } from "@/data/skills";
import { certsForPath } from "@/data/certifications";
import { projectsForPath } from "@/data/portfolio-projects";
import {
  BACKGROUND_META,
  DIFFICULTY_META,
  PILLAR_ORDER,
  REQUIREMENT_META,
  pillarHref,
} from "@/lib/pillars";
import { cn } from "@/lib/utils";
import type { Pillar } from "@/types/pathfinder";

export function generateStaticParams() {
  return PATHS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = getPath(slug);
  if (!path) return { title: "Path not found" };
  return {
    title: path.title,
    description: `${path.tagline} Full roadmap with skills, frameworks, certifications and portfolio projects.`,
  };
}

const JOB_LEVELS = [
  { key: "entry" as const, label: "Entry-level" },
  { key: "mid" as const, label: "Mid-level" },
  { key: "senior" as const, label: "Senior" },
];

const ENTER =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-300 motion-safe:fill-mode-both motion-safe:ease-out-quart";

export default async function CareerPathPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const path = getPath(slug);
  if (!path) notFound();

  const pillarsOfPath: Pillar[] = PILLAR_ORDER.filter((pillar) =>
    path.requiredSkills.some(
      (r) => SKILL_BY_SLUG.get(r.skillSlug)?.pillar === pillar
    )
  );

  const related = PATHS.filter((p) => p.slug !== path.slug)
    .map((p) => ({
      path: p,
      shared: p.frameworks.filter((f) => path.frameworks.includes(f)).length,
    }))
    .sort((a, b) => b.shared - a.shared)
    .slice(0, 3)
    .map((x) => x.path);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Sustainability career roadmap: ${path.title}`,
    description: path.tagline,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Career Paths", item: "/careers" },
        {
          "@type": "ListItem",
          position: 2,
          name: path.title,
        },
      ],
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav
        aria-label="Breadcrumb"
        className={cn("mb-6 text-sm text-muted-foreground", ENTER)}
      >
        <ol className="flex items-center gap-2">
          <li>
            <Link
              href="/careers"
              className="rounded transition-colors hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              Career Paths
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-foreground">
            {path.title}
          </li>
        </ol>
      </nav>

      <header
        className={cn(
          "mb-12 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
          ENTER,
          "delay-75"
        )}
      >
        <div className="flex items-start gap-4">
          <PathIcon
            slug={path.slug}
            className="size-14 [&_svg]:size-7"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {path.title}
            </h1>
            <p className="mt-1 text-lg text-muted-foreground">{path.tagline}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <DemandBadge demand={path.demand} />
          <CompareToggle slug={path.slug} size="md" />
          <Link href="/assessment" className={buttonVariants()}>
            Check my match
          </Link>
        </div>
      </header>

      <Reveal>
        <section className="mb-12 space-y-4" aria-label="Career overview">
          {path.overview.map((paragraph, i) => (
            <p key={i} className="max-w-3xl text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-12 space-y-4" aria-label="Typical job titles">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <UsersIcon aria-hidden className="size-5 text-primary" />
            Typical job titles
          </h2>
          <div className="grid gap-3 md:grid-cols-3">
            {JOB_LEVELS.map((level, i) => (
              <Reveal key={level.key} delay={i * 45}>
                <Card className="group gap-3 py-6 transition-[box-shadow] duration-200 ease-out-quart hover:ring-primary/30 hover:shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-sm text-muted-foreground transition-colors group-hover:text-primary">
                      {level.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5 text-sm">
                      {path.commonJobTitles[level.key].map((title) => (
                        <li key={title} className="font-medium">
                          {title}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-12 space-y-4" aria-label="Skills needed">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <LayersIcon aria-hidden className="size-5 text-primary" />
            Skills needed
          </h2>
        <p className="max-w-3xl text-sm text-muted-foreground">
          Requirement levels feed the matching engine: mandatory gaps block the
          score, recommended gaps shape upskilling, differentiators set seniors
          apart.
        </p>
        {pillarsOfPath.map((pillar) => (
          <div key={pillar} className="rounded-xl border">
            <div className="border-b bg-muted/50 px-4 py-3">
              <PillarChip pillar={pillar} href={pillarHref(pillar)} />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Skill</TableHead>
                  <TableHead>Requirement</TableHead>
                  <TableHead className="text-right">Weight</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {path.requiredSkills
                  .filter(
                    (r) => SKILL_BY_SLUG.get(r.skillSlug)?.pillar === pillar
                  )
                  .sort((a, b) => b.weight - a.weight)
                  .map((r) => {
                    const skill = SKILL_BY_SLUG.get(r.skillSlug);
                    const meta = REQUIREMENT_META[r.level];
                    if (!skill) return null;
                    return (
                      <TableRow key={r.skillSlug}>
                        <TableCell className="font-medium">
                          <Link
                            href={`/skills#${r.skillSlug}`}
                            className="rounded transition-colors underline-offset-2 hover:text-primary hover:underline focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                          >
                            {skill.name}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <span
                            className={cn(
                              "inline-flex rounded-full border px-2 py-0.5 text-xs font-medium",
                              meta.className
                            )}
                          >
                            {meta.label}
                          </span>
                        </TableCell>
                        <TableCell className="text-right tabular-nums text-muted-foreground">
                          {r.weight.toFixed(1)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
        ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-12 grid gap-8 lg:grid-cols-2" aria-label="Frameworks and entry backgrounds">
        <div className="space-y-3">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <GraduationCapIcon aria-hidden className="size-5 text-primary" />
            Key frameworks & regulations
          </h2>
          <ul className="flex flex-wrap gap-2">
            {path.frameworks.map((f) => (
              <li key={f}>
                <FrameworkChip label={f} className="px-2.5 py-1" />
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Typical entry backgrounds</h2>
          <ul className="flex flex-wrap gap-2">
            {path.entryBackgrounds.map((bg) => (
              <li key={bg}>
                <Badge variant="secondary">{BACKGROUND_META[bg].label}</Badge>
              </li>
            ))}
          </ul>
        </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-12 space-y-4" aria-label="Portfolio projects">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <HammerIcon aria-hidden className="size-5 text-primary" />
            Proof-of-work portfolio projects
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {projectsForPath(path.slug).map((project, i) => (
              <Reveal key={project.title} delay={i * 45}>
                <Card className="group gap-3 py-6 transition-[box-shadow] duration-200 ease-out-quart hover:ring-primary/30 hover:shadow-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base leading-snug transition-colors group-hover:text-primary">
                        {project.title}
                      </CardTitle>
                      <span
                        className={cn(
                          "inline-flex shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium transition-transform duration-200 ease-out-quart group-hover:scale-105",
                          DIFFICULTY_META[project.difficulty].className
                        )}
                      >
                        {DIFFICULTY_META[project.difficulty].label}
                      </span>
                    </div>
                    <CardDescription>{project.summary}</CardDescription>
                  </CardHeader>
                  <CardFooter className="text-xs text-muted-foreground transition-colors group-hover:text-foreground/80">
                    ~{project.estimatedHours} hours of effort
                  </CardFooter>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-12 space-y-4" aria-label="Certifications">
        <h2 className="text-xl font-semibold">Recommended certifications</h2>
        <div className="rounded-xl border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Certification</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Level</TableHead>
                <TableHead className="text-right">Study time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {certsForPath(path.slug).map((cert) => (
                <TableRow key={`${cert.level}-${cert.name}`}>
                  <TableCell className="font-medium">{cert.name}</TableCell>
                  <TableCell>{cert.provider}</TableCell>
                  <TableCell className="capitalize">{cert.level}</TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {cert.hours}
                  </TableCell>
                </TableRow>
              ))}
              {certsForPath(path.slug).length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-muted-foreground">
                    Certification recommendations coming soon for this path.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        </section>
      </Reveal>

      {related.length > 0 && (
        <Reveal>
          <section className="space-y-4" aria-label="Related career paths">
            <h2 className="text-xl font-semibold">Related paths</h2>
            <ul className="grid gap-3 sm:grid-cols-3">
              {related.map((p, i) => (
                <li key={p.slug}>
                  <Reveal delay={i * 45}>
                    <div className="group relative flex items-center gap-3 rounded-xl border p-4 transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out-quart hover:-translate-y-1 hover:border-primary/40 hover:bg-accent/50 hover:shadow-md focus-within:-translate-y-1 focus-within:border-primary/40 focus-within:bg-accent/50 focus-within:shadow-md">
                      <PathIcon
                        slug={p.slug}
                        className="size-9 transition-[transform,background-color] duration-200 ease-out-quart group-hover:scale-110 group-hover:bg-primary/15 group-focus-within:scale-110 group-focus-within:bg-primary/15 [&_svg]:size-4"
                      />
                      <span className="flex-1 text-sm leading-snug font-medium">
                        {p.title}
                      </span>
                      <ArrowRightIcon
                        aria-hidden
                        className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-out-quart group-hover:translate-x-1 group-focus-within:translate-x-1"
                      />
                      <CompareToggle slug={p.slug} />
                      <Link
                        href={`/careers/${p.slug}`}
                        className="absolute inset-0 z-[1] rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        <span className="sr-only">
                          Open the {p.title} roadmap
                        </span>
                      </Link>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      )}
      <CompareTray />
    </div>
  );
}
