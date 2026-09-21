"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { SKILLS } from "@/data/skills";
import { cn } from "@/lib/utils";
import { useAssessmentStore } from "@/store/assessment-store";
import type { Geography } from "@/types/pathfinder";

const GEO_OPTIONS: { value: Geography; label: string; hint: string }[] = [
  { value: "EU", label: "Europe (EU/EEA/UK)", hint: "CSRD, CBAM, EUDR, EU Taxonomy" },
  { value: "US_CANADA", label: "US & Canada", hint: "SEC climate rules, IRA incentives" },
  { value: "GLOBAL", label: "Global / Other", hint: "ISSB, GRI, multinational programs" },
];

export function StepRegion() {
  const targetGeography = useAssessmentStore((s) => s.targetGeography);
  const setTargetGeography = useAssessmentStore((s) => s.setTargetGeography);
  const selectedSkillSlugs = useAssessmentStore((s) => s.selectedSkillSlugs);
  const toggleSkill = useAssessmentStore((s) => s.toggleSkill);

  const selected = new Set(selectedSkillSlugs);
  const frameworkSkills = SKILLS.filter(
    (s) => s.pillar === "regulations_disclosure"
  );

  return (
    <div className="space-y-8">
      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold">
          Which job market are you targeting?
        </legend>
        <RadioGroup
          value={targetGeography}
          onValueChange={(v) => setTargetGeography(v as Geography)}
          className="grid grid-cols-1 gap-2 sm:grid-cols-3"
        >
          {GEO_OPTIONS.map((g) => (
            <label
              key={g.value}
              data-slot="field-label"
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors hover:bg-accent/50",
                targetGeography === g.value && "border-primary bg-primary/5"
              )}
            >
              <RadioGroupItem value={g.value} className="mt-0.5" />
              <span className="grid gap-0.5">
                <span className="text-sm font-semibold">{g.label}</span>
                <span className="text-xs text-muted-foreground">{g.hint}</span>
              </span>
            </label>
          ))}
        </RadioGroup>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold">
          Which regulations & disclosure standards do you already know?
        </legend>
        <p className="text-xs text-muted-foreground">
          Optional. Tick only the ones you could explain in an interview.
        </p>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {frameworkSkills.map((s) => (
            <li key={s.slug}>
              <label
                data-slot="field-label"
                className="flex cursor-pointer items-center gap-2.5 rounded-lg border p-3 text-sm transition-colors hover:bg-accent/50"
              >
                <Checkbox
                  checked={selected.has(s.slug)}
                  onCheckedChange={(c) => {
                    const has = selected.has(s.slug);
                    if ((c && !has) || (!c && has)) toggleSkill(s.slug);
                  }}
                />
                <span className="leading-snug">{s.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </div>
  );
}
