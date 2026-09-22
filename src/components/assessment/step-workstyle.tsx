"use client";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { SkillSection } from "@/components/assessment/skill-picker";
import { PILLAR_SUBGROUPS } from "@/data/skill-subgroups";
import { cn } from "@/lib/utils";
import { useAssessmentStore } from "@/store/assessment-store";
import type { WorkStyle } from "@/types/pathfinder";

const STYLE_OPTIONS: { value: WorkStyle; label: string; hint: string }[] = [
  {
    value: "corporate",
    label: "Corporate in-house",
    hint: "Steady programs, internal reporting, long horizons",
  },
  {
    value: "consulting",
    label: "Consulting",
    hint: "Variety across clients, fast cadence, billable depth",
  },
  {
    value: "cleantech",
    label: "Cleantech startup",
    hint: "High velocity, building products, scale ambition",
  },
  {
    value: "nonprofit",
    label: "NGO / nonprofit",
    hint: "Mission-driven programs, policy and community work",
  },
];

export function StepWorkstyle() {
  const workStylePreference = useAssessmentStore(
    (s) => s.workStylePreference
  );
  const setWorkStylePreference = useAssessmentStore(
    (s) => s.setWorkStylePreference
  );

  return (
    <div className="space-y-8">
      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold">
          Which work environment fits you best?
        </legend>
        <RadioGroup
          value={workStylePreference}
          onValueChange={(v) => setWorkStylePreference(v as WorkStyle)}
          className="grid grid-cols-1 gap-2 sm:grid-cols-2"
        >
          {STYLE_OPTIONS.map((o) => (
            <label
              key={o.value}
              data-slot="field-label"
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors hover:bg-accent/50",
                workStylePreference === o.value && "border-primary bg-primary/5"
              )}
            >
              <RadioGroupItem value={o.value} className="mt-0.5" />
              <span className="grid gap-0.5">
                <span className="text-sm font-semibold">{o.label}</span>
                <span className="text-xs text-muted-foreground">{o.hint}</span>
              </span>
            </label>
          ))}
        </RadioGroup>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-sm font-semibold">
          Which strategy &amp; delivery skills do you already have?
        </legend>
        <SkillSection
          pillar="strategy_governance"
          subgroups={PILLAR_SUBGROUPS.strategy_governance}
          hint="Optional: skip anything that doesn't apply yet."
        />
      </fieldset>
    </div>
  );
}
