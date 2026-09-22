"use client";

import * as React from "react";
import { PillarChip } from "@/components/shared/pillar-chip";
import {
  SkillPicker,
  SkillPickerControls,
} from "@/components/assessment/skill-picker";
import { SKILLS, SKILL_STEP_GROUPS } from "@/data/skills";
import { PILLAR_SUBGROUPS } from "@/data/skill-subgroups";
import { useAssessmentStore } from "@/store/assessment-store";

export function StepSkills() {
  const selectedSkillSlugs = useAssessmentStore((s) => s.selectedSkillSlugs);
  const [query, setQuery] = React.useState("");
  const [selectedOnly, setSelectedOnly] = React.useState(false);

  const selected = new Set(selectedSkillSlugs);

  return (
    <div className="space-y-6">
      <SkillPickerControls
        query={query}
        onQueryChange={setQuery}
        selectedOnly={selectedOnly}
        onSelectedOnlyChange={setSelectedOnly}
        hint="pick everything you have genuinely practiced. You can also skip this step."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {SKILL_STEP_GROUPS.map((group) => {
          const pillarSkills = SKILLS.filter((s) => s.pillar === group.pillar);
          const selectedInGroup = pillarSkills.filter((s) =>
            selected.has(s.slug)
          ).length;
          return (
            <section
              key={group.pillar}
              className="rounded-xl border p-4"
              aria-label={group.title}
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <PillarChip pillar={group.pillar} />
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  {selectedInGroup}/{pillarSkills.length}
                </span>
              </div>
              <SkillPicker
                pillar={group.pillar}
                subgroups={PILLAR_SUBGROUPS[group.pillar] ?? null}
                query={query}
                selectedOnly={selectedOnly}
              />
            </section>
          );
        })}
      </div>
    </div>
  );
}
