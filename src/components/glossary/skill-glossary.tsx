"use client";

import * as React from "react";
import Link from "next/link";
import { SearchIcon, XIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PATHS } from "@/data/paths";
import { SKILL_ALIASES } from "@/data/skill-aliases";
import { SKILL_GLOSSARY } from "@/data/skill-glossary";
import { PILLAR_SUBGROUPS } from "@/data/skill-subgroups";
import { SKILLS, SKILL_BY_SLUG } from "@/data/skills";
import { PILLAR_META, PILLAR_ORDER, SKILL_DEMAND_META } from "@/lib/pillars";
import { matchesSkillQuery } from "@/lib/skill-search";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import type { Pillar, Skill, SkillDemand } from "@/types/pathfinder";

const SKILL_PATHS = new Map<string, { slug: string; title: string }[]>();
for (const path of PATHS) {
  for (const requirement of path.requiredSkills) {
    const list = SKILL_PATHS.get(requirement.skillSlug) ?? [];
    list.push({ slug: path.slug, title: path.title });
    SKILL_PATHS.set(requirement.skillSlug, list);
  }
}

const SECTIONS = PILLAR_ORDER.map((pillar) => ({
  pillar,
  subgroups: PILLAR_SUBGROUPS[pillar] ?? null,
}));

const DEFAULT_OPEN_GROUPS = SECTIONS.flatMap(({ subgroups }) =>
  subgroups && subgroups.length > 0 ? [subgroups[0].id] : []
);

const DEMAND_ORDER: SkillDemand[] = ["critical", "high", "moderate"];

interface GlossaryGroup {
  id: string;
  label: string;
  skills: Skill[];
}

interface GlossarySection {
  pillar: Pillar;
  subgroups: GlossaryGroup[] | null;
  skills: Skill[];
}

function GlossaryEntry({ skill }: { skill: Skill }) {
  const entry = SKILL_GLOSSARY[skill.slug];
  if (!entry) return null;

  const aliases = (SKILL_ALIASES[skill.slug] ?? skill.aliases ?? []).slice(0, 4);
  const paths = SKILL_PATHS.get(skill.slug) ?? [];
  const demand = SKILL_DEMAND_META[skill.demandLevel];

  return (
    <article
      id={skill.slug}
      className="glossary-entry scroll-mt-24 rounded-lg border border-border/60 p-4"
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-sm font-semibold">{skill.name}</h3>
        <span
          className={cn(
            "rounded-full border px-1.5 py-0.5 text-[10px] font-medium",
            demand.className
          )}
        >
          {demand.label}
        </span>
      </div>
      <p className="mt-1.5 text-sm text-muted-foreground">{entry.definition}</p>
      <p className="mt-2 text-sm">
        <span className="font-medium">Example: </span>
        {entry.example}
      </p>
      {aliases.length > 0 && (
        <p className="mt-2 text-xs text-muted-foreground">
          Also called: {aliases.join(" · ")}
        </p>
      )}
      {paths.length > 0 && (
        <p className="mt-1 text-xs text-muted-foreground">
          Used in:{" "}
          {paths.slice(0, 4).map((path, index) => (
            <React.Fragment key={path.slug}>
              {index > 0 && " · "}
              <Link
                href={`/careers/${path.slug}`}
                className="underline-offset-2 hover:text-foreground hover:underline"
              >
                {path.title}
              </Link>
            </React.Fragment>
          ))}
          {paths.length > 4 && ` +${paths.length - 4} more`}
        </p>
      )}
    </article>
  );
}

export function SkillGlossary() {
  const [query, setQuery] = React.useState("");
  const [pillarFilter, setPillarFilter] = React.useState<Pillar | "all">("all");
  const [demandFilter, setDemandFilter] = React.useState<SkillDemand | "all">(
    "all"
  );
  const [openGroups, setOpenGroups] =
    React.useState<string[]>(DEFAULT_OPEN_GROUPS);

  const q = query.trim().toLowerCase();

  const matchesFilters = React.useCallback(
    (skill: Skill) => {
      if (pillarFilter !== "all" && skill.pillar !== pillarFilter) return false;
      if (demandFilter !== "all" && skill.demandLevel !== demandFilter) {
        return false;
      }
      return matchesSkillQuery(skill, q);
    },
    [pillarFilter, demandFilter, q]
  );

  const sections = React.useMemo<GlossarySection[]>(
    () =>
      SECTIONS.map(({ pillar, subgroups }) => {
        if (subgroups) {
          const groups = subgroups
            .map((group) => ({
              id: group.id,
              label: group.label,
              skills: group.slugs
                .map((slug) => SKILL_BY_SLUG.get(slug))
                .filter((skill): skill is Skill => Boolean(skill))
                .filter(matchesFilters),
            }))
            .filter((group) => group.skills.length > 0);
          return { pillar, subgroups: groups, skills: [] };
        }
        const skills = SKILLS.filter(
          (skill) => skill.pillar === pillar && matchesFilters(skill)
        );
        return { pillar, subgroups: null, skills };
      }).filter((section) =>
        section.subgroups
          ? section.subgroups.length > 0
          : section.skills.length > 0
      ),
    [matchesFilters]
  );

  const visibleCount = sections.reduce(
    (total, section) =>
      total +
      (section.subgroups
        ? section.subgroups.reduce((sum, group) => sum + group.skills.length, 0)
        : section.skills.length),
    0
  );

  const visibleGroupIds = sections.flatMap((section) =>
    section.subgroups ? section.subgroups.map((group) => group.id) : []
  );

  const isFiltering =
    q.length > 0 || pillarFilter !== "all" || demandFilter !== "all";

  React.useEffect(() => {
    if (!isFiltering) {
      setOpenGroups(DEFAULT_OPEN_GROUPS);
      return;
    }
    setOpenGroups(
      sections.flatMap((section) =>
        section.subgroups ? section.subgroups.map((group) => group.id) : []
      )
    );
  }, [isFiltering, sections]);

  React.useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      const skill = SKILL_BY_SLUG.get(hash);
      if (!skill) return;
      const group = (PILLAR_SUBGROUPS[skill.pillar] ?? []).find((entry) =>
        entry.slugs.includes(hash)
      );
      if (group) {
        setOpenGroups((previous) =>
          previous.includes(group.id) ? previous : [...previous, group.id]
        );
      }
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ block: "start" });
      }, 120);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const clearFilters = () => {
    setQuery("");
    setPillarFilter("all");
    setDemandFilter("all");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative sm:max-w-sm sm:flex-1">
          <SearchIcon
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills, tools or standards…"
            aria-label="Search the skill glossary"
            className={query ? "pr-8 pl-9" : "pl-9"}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <XIcon aria-hidden className="size-3.5" />
            </button>
          )}
        </div>
        <Select
          value={pillarFilter}
          onValueChange={(value) => setPillarFilter(value as Pillar | "all")}
        >
          <SelectTrigger className="w-full sm:w-56" aria-label="Filter by skill pillar">
            <SelectValue placeholder="All skill pillars" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" label="All skill pillars">
              All skill pillars
            </SelectItem>
            {PILLAR_ORDER.map((pillar) => (
              <SelectItem
                key={pillar}
                value={pillar}
                label={PILLAR_META[pillar].label}
              >
                {PILLAR_META[pillar].label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={demandFilter}
          onValueChange={(value) =>
            setDemandFilter(value as SkillDemand | "all")
          }
        >
          <SelectTrigger className="w-full sm:w-48" aria-label="Filter by demand level">
            <SelectValue placeholder="All demand levels" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" label="All demand levels">
              All demand levels
            </SelectItem>
            {DEMAND_ORDER.map((demand) => (
              <SelectItem
                key={demand}
                value={demand}
                label={SKILL_DEMAND_META[demand].label}
              >
                {SKILL_DEMAND_META[demand].label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          Showing {visibleCount} of {SKILLS.length} skills
        </p>
        <div className="flex items-center gap-3 text-xs">
          <button
            type="button"
            onClick={() => setOpenGroups(visibleGroupIds)}
            className="font-medium text-muted-foreground underline-offset-2 hover:underline"
          >
            Expand all
          </button>
          <button
            type="button"
            onClick={() => setOpenGroups([])}
            className="font-medium text-muted-foreground underline-offset-2 hover:underline"
          >
            Collapse all
          </button>
          {isFiltering && (
            <button
              type="button"
              onClick={clearFilters}
              className="rounded font-medium text-muted-foreground underline-offset-2 hover:underline focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {sections.length === 0 ? (
        <div className="rounded-xl border border-dashed py-16 text-center">
          <p className="text-muted-foreground">
            No skills match your filters.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4"
            onClick={clearFilters}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="space-y-8">
          {sections.map((section) => (
            <Reveal key={section.pillar}>
            <section
              aria-label={PILLAR_META[section.pillar].label}
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <h2 className="text-lg font-semibold">
                  {PILLAR_META[section.pillar].label}
                </h2>
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  {section.subgroups
                    ? section.subgroups.reduce(
                        (sum, group) => sum + group.skills.length,
                        0
                      )
                    : section.skills.length}{" "}
                  skills
                </span>
              </div>
              {section.subgroups ? (
                <Accordion
                  multiple
                  value={openGroups}
                  onValueChange={(value) =>
                    setOpenGroups(value as string[])
                  }
                  className="gap-1"
                >
                  {section.subgroups.map((group, groupIndex) => (
                    <AccordionItem
                      key={group.id}
                      value={group.id}
                      className="rounded-lg border px-3 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150 motion-safe:fill-mode-both motion-safe:ease-out-quart"
                      style={
                        groupIndex
                          ? { animationDelay: `${Math.min(groupIndex, 7) * 30}ms` }
                          : undefined
                      }
                    >
                      <AccordionTrigger>
                        <span className="flex flex-1 items-center justify-between gap-2">
                          <span>{group.label}</span>
                          <span className="text-xs font-normal tabular-nums text-muted-foreground">
                            {group.skills.length}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 pt-1">
                          {group.skills.map((skill) => (
                            <GlossaryEntry key={skill.slug} skill={skill} />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <Reveal>
                  <div className="space-y-3">
                    {section.skills.map((skill) => (
                      <GlossaryEntry key={skill.slug} skill={skill} />
                    ))}
                  </div>
                </Reveal>
              )}
            </section>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
