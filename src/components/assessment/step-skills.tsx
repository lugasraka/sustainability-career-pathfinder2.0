"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { PillarChip } from "@/components/shared/pillar-chip";
import { SKILLS, SKILL_STEP_GROUPS } from "@/data/skills";
import { useAssessmentStore } from "@/store/assessment-store";

export function StepSkills() {
  const selectedSkillSlugs = useAssessmentStore((s) => s.selectedSkillSlugs);
  const toggleSkill = useAssessmentStore((s) => s.toggleSkill);
  const cvDetectedSkillSlugs = useAssessmentStore((s) => s.cvDetectedSkillSlugs);
  const [query, setQuery] = React.useState("");

  const selected = new Set(selectedSkillSlugs);
  const fromCv = new Set(cvDetectedSkillSlugs);
  const q = query.trim().toLowerCase();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter skills…"
          aria-label="Filter technical skills"
          className="sm:max-w-xs"
        />
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {selectedSkillSlugs.length} skills selected. Pick everything you have
          genuinely practiced. You can also skip this step.
        </p>
        {fromCv.size > 0 && (
          <span className="inline-flex w-fit shrink-0 items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
            {fromCv.size} from CV
          </span>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {SKILL_STEP_GROUPS.map((group) => {
          const groupSkills = SKILLS.filter(
            (s) =>
              s.pillar === group.pillar &&
              (!q || s.name.toLowerCase().includes(q))
          );
          const allChecked =
            groupSkills.length > 0 &&
            groupSkills.every((s) => selected.has(s.slug));
          return (
            <section
              key={group.pillar}
              className="rounded-xl border p-4"
              aria-label={group.title}
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <PillarChip pillar={group.pillar} />
                <button
                  type="button"
                  onClick={() =>
                    groupSkills.forEach((s) => {
                      const shouldAdd = !allChecked && !selected.has(s.slug);
                      if (shouldAdd) toggleSkill(s.slug);
                      if (allChecked && selected.has(s.slug)) toggleSkill(s.slug);
                    })
                  }
                  className="text-xs font-medium text-muted-foreground underline-offset-2 hover:underline"
                >
                  {allChecked ? "Clear all" : "Select all"}
                </button>
              </div>
              <ul className="space-y-2.5">
                {groupSkills.map((s) => (
                  <li key={s.slug}>
                    <label
                      data-slot="field-label"
                      className="flex cursor-pointer items-center gap-2.5 text-sm"
                    >
                      <Checkbox
                        checked={selected.has(s.slug)}
                        onCheckedChange={(c) => {
                          const has = selected.has(s.slug);
                          if ((c && !has) || (!c && has)) toggleSkill(s.slug);
                        }}
                      />
                      <span className="leading-snug">{s.name}</span>
                      {fromCv.has(s.slug) && (
                        <span
                          className="ml-auto shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300"
                          aria-label="Detected from your CV"
                        >
                          CV
                        </span>
                      )}
                    </label>
                  </li>
                ))}
                {groupSkills.length === 0 && (
                  <li className="text-sm text-muted-foreground">
                    No skills match this filter.
                  </li>
                )}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
