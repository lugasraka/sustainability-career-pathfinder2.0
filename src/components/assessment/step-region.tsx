"use client";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { SkillSection } from "@/components/assessment/skill-picker";
import { PILLAR_SUBGROUPS } from "@/data/skill-subgroups";
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

  return (
    <div className="space-y-8">
      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold">
          Which job market are you targeting?
          <span aria-hidden className="ml-0.5 text-destructive">
            *
          </span>
          <span className="sr-only"> (required)</span>
        </legend>
        <RadioGroup
          value={targetGeography}
          onValueChange={(v) => setTargetGeography(v as Geography)}
          aria-required
          className="grid grid-cols-1 gap-2 sm:grid-cols-3"
        >
          {GEO_OPTIONS.map((g) => (
            <label
              key={g.value}
              data-slot="field-label"
              className={cn(
                "flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors hover:bg-accent/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-ring/50",
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
        <p className="text-xs text-muted-foreground">
          Required. Also awards a +3 region-fit bonus when a path&apos;s market
          matches yours.
        </p>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-sm font-semibold">
          Which regulations &amp; disclosure standards do you already know?
        </legend>
        <SkillSection
          pillar="regulations_disclosure"
          subgroups={PILLAR_SUBGROUPS.regulations_disclosure}
          hint="Optional: tick only the ones you could explain in an interview."
        />
      </fieldset>
    </div>
  );
}
