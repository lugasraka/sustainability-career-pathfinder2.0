"use client";

import * as React from "react";
import { SearchIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SkillRow } from "@/components/assessment/skill-row";
import { SKILLS, SKILL_BY_SLUG } from "@/data/skills";
import type { SkillSubgroup } from "@/data/skill-subgroups";
import { BACKGROUND_CREDITS } from "@/lib/scoring/background-credits";
import { matchesSkillQuery } from "@/lib/skill-search";
import { useAssessmentStore } from "@/store/assessment-store";
import type { Pillar, Skill } from "@/types/pathfinder";

const PILLAR_SKILLS = new Map<Pillar, Skill[]>();
for (const skill of SKILLS) {
  const list = PILLAR_SKILLS.get(skill.pillar) ?? [];
  list.push(skill);
  PILLAR_SKILLS.set(skill.pillar, list);
}

interface ResolvedGroup {
  id: string;
  label: string;
  items: Skill[];
}

export function SkillPickerControls({
  query,
  onQueryChange,
  selectedOnly,
  onSelectedOnlyChange,
  hint,
}: {
  query: string;
  onQueryChange: (query: string) => void;
  selectedOnly: boolean;
  onSelectedOnlyChange: (selectedOnly: boolean) => void;
  hint: string;
}) {
  const selectedCount = useAssessmentStore((s) => s.selectedSkillSlugs.length);
  const fromCvCount = useAssessmentStore((s) => s.cvDetectedSkillSlugs.length);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative sm:max-w-xs sm:flex-1">
        <SearchIcon
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search skills or tools…"
          aria-label="Search skills"
          className={query ? "pr-8 pl-9" : "pl-9"}
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            aria-label="Clear search"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <XIcon aria-hidden className="size-3.5" />
          </button>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant={selectedOnly ? "default" : "outline"}
          size="sm"
          aria-pressed={selectedOnly}
          onClick={() => onSelectedOnlyChange(!selectedOnly)}
        >
          Selected only
        </Button>
        {fromCvCount > 0 && (
          <span className="inline-flex w-fit shrink-0 items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
            {fromCvCount} from CV
          </span>
        )}
      </div>
      <p
        className="text-sm text-muted-foreground sm:ml-auto"
        aria-live="polite"
      >
        <span className="font-medium text-foreground">
          {selectedCount} skills selected
        </span>
        {". "}
        {hint}
      </p>
    </div>
  );
}

function SelectAllRow({
  items,
  selected,
}: {
  items: Skill[];
  selected: Set<string>;
}) {
  const setSkillsSelected = useAssessmentStore((s) => s.setSkillsSelected);
  if (items.length === 0) return null;
  const allChecked = items.every((skill) => selected.has(skill.slug));

  return (
    <div className="flex justify-end pt-1 pb-2">
      <button
        type="button"
        onClick={() =>
          setSkillsSelected(
            items.map((skill) => skill.slug),
            !allChecked
          )
        }
        className="rounded text-xs font-medium text-muted-foreground underline-offset-2 hover:underline focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
      >
        {allChecked ? "Clear" : "Select all"}
      </button>
    </div>
  );
}

export function SkillPicker({
  pillar,
  subgroups,
  query,
  selectedOnly,
}: {
  pillar: Pillar;
  subgroups?: SkillSubgroup[] | null;
  query: string;
  selectedOnly: boolean;
}) {
  const selectedSkillSlugs = useAssessmentStore((s) => s.selectedSkillSlugs);
  const toggleSkill = useAssessmentStore((s) => s.toggleSkill);
  const cvDetectedSkillSlugs = useAssessmentStore((s) => s.cvDetectedSkillSlugs);
  const background = useAssessmentStore((s) => s.background);

  const selected = React.useMemo(
    () => new Set(selectedSkillSlugs),
    [selectedSkillSlugs]
  );
  const fromCv = React.useMemo(
    () => new Set(cvDetectedSkillSlugs),
    [cvDetectedSkillSlugs]
  );
  const credited = React.useMemo(
    () => new Set(background ? BACKGROUND_CREDITS[background] : []),
    [background]
  );

  const q = query.trim().toLowerCase();
  const creditHint = background
    ? `Your ${background} background already credits this skill at half weight in every match`
    : undefined;

  const groups = React.useMemo<ResolvedGroup[]>(() => {
    const definitions = subgroups ?? [
      {
        id: `${pillar}-all`,
        label: "",
        slugs: (PILLAR_SKILLS.get(pillar) ?? []).map((skill) => skill.slug),
      },
    ];
    return definitions.map((definition) => ({
      id: definition.id,
      label: definition.label,
      items: definition.slugs
        .map((slug) => SKILL_BY_SLUG.get(slug))
        .filter((skill): skill is Skill => Boolean(skill))
        .filter((skill) => matchesSkillQuery(skill, q))
        .filter((skill) => !selectedOnly || selected.has(skill.slug)),
    }));
  }, [pillar, subgroups, q, selectedOnly, selected]);

  const selectedCounts = React.useMemo(() => {
    const counts = new Map<string, number>();
    if (!subgroups) return counts;
    for (const group of subgroups) {
      counts.set(
        group.id,
        group.slugs.filter((slug) => selected.has(slug)).length
      );
    }
    return counts;
  }, [subgroups, selected]);

  const firstGroupId = subgroups?.[0]?.id;
  const [openGroups, setOpenGroups] = React.useState<string[]>(
    firstGroupId ? [firstGroupId] : []
  );
  const selectedRef = React.useRef(selected);
  selectedRef.current = selected;

  React.useEffect(() => {
    if (!subgroups) return;
    if (query.trim()) {
      const term = query.trim().toLowerCase();
      setOpenGroups(
        subgroups
          .filter((group) =>
            group.slugs.some((slug) => {
              const skill = SKILL_BY_SLUG.get(slug);
              return skill ? matchesSkillQuery(skill, term) : false;
            })
          )
          .map((group) => group.id)
      );
    } else if (selectedOnly) {
      setOpenGroups(
        subgroups
          .filter((group) =>
            group.slugs.some((slug) => selectedRef.current.has(slug))
          )
          .map((group) => group.id)
      );
    } else {
      setOpenGroups(firstGroupId ? [firstGroupId] : []);
    }
  }, [query, selectedOnly, subgroups, firstGroupId]);

  const renderRow = (skill: Skill) => (
    <li key={skill.slug}>
      <SkillRow
        skill={skill}
        checked={selected.has(skill.slug)}
        onToggle={() => toggleSkill(skill.slug)}
        credited={credited.has(skill.slug)}
        creditHint={creditHint}
        fromCv={fromCv.has(skill.slug)}
      />
    </li>
  );

  const emptyMessage = selectedOnly
    ? "No skills selected in this pillar yet."
    : "No skills match this filter.";

  if (!subgroups) {
    const items = groups[0]?.items ?? [];
    return (
      <div className="space-y-2">
        <SelectAllRow items={items} selected={selected} />
        {items.length === 0 ? (
          <p className="text-sm text-muted-foreground">{emptyMessage}</p>
        ) : (
          <ul className="space-y-2.5">{items.map(renderRow)}</ul>
        )}
      </div>
    );
  }

  const visibleGroups = groups.filter((group) => group.items.length > 0);

  return (
    <div className="space-y-2">
      <div className="flex justify-end gap-3 text-xs">
        <button
          type="button"
          onClick={() =>
            setOpenGroups(visibleGroups.map((group) => group.id))
          }
          className="rounded font-medium text-muted-foreground underline-offset-2 hover:underline focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          Expand all
        </button>
        <button
          type="button"
          onClick={() => setOpenGroups([])}
          className="rounded font-medium text-muted-foreground underline-offset-2 hover:underline focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          Collapse all
        </button>
      </div>

      {visibleGroups.length === 0 ? (
        <p className="text-sm text-muted-foreground">{emptyMessage}</p>
      ) : (
        <Accordion
          multiple
          value={openGroups}
          onValueChange={(value) => setOpenGroups(value as string[])}
          className="gap-1"
        >
          {visibleGroups.map((group) => {
            const picked = selectedCounts.get(group.id) ?? 0;
            return (
              <AccordionItem
                key={group.id}
                value={group.id}
                className="rounded-lg border px-3"
              >
                <AccordionTrigger>
                  <span className="flex flex-1 items-center justify-between gap-2">
                    <span>{group.label}</span>
                    <span className="flex items-center gap-2">
                      {picked > 0 && (
                        <span className="rounded-full border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                          {picked} selected
                        </span>
                      )}
                      <span className="text-xs font-normal text-muted-foreground tabular-nums">
                        {group.items.length}{" "}
                        {group.items.length === 1 ? "skill" : "skills"}
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <SelectAllRow items={group.items} selected={selected} />
                  <ul className="space-y-2.5">{group.items.map(renderRow)}</ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      )}
    </div>
  );
}

export function SkillSection({
  pillar,
  subgroups,
  hint,
}: {
  pillar: Pillar;
  subgroups?: SkillSubgroup[] | null;
  hint: string;
}) {
  const [query, setQuery] = React.useState("");
  const [selectedOnly, setSelectedOnly] = React.useState(false);

  return (
    <div className="space-y-4">
      <SkillPickerControls
        query={query}
        onQueryChange={setQuery}
        selectedOnly={selectedOnly}
        onSelectedOnlyChange={setSelectedOnly}
        hint={hint}
      />
      <SkillPicker
        pillar={pillar}
        subgroups={subgroups ?? null}
        query={query}
        selectedOnly={selectedOnly}
      />
    </div>
  );
}
