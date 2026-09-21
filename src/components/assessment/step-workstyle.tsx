"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { SKILLS } from "@/data/skills";
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
  const selectedSkillSlugs = useAssessmentStore((s) => s.selectedSkillSlugs);
  const toggleSkill = useAssessmentStore((s) => s.toggleSkill);

  const selected = new Set(selectedSkillSlugs);
  const strategySkills = SKILLS.filter(
    (s) => s.pillar === "strategy_governance"
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

      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold">
          Which strategy & delivery skills do you already have?
        </legend>
        <p className="text-xs text-muted-foreground">
          Optional. Skip this if nothing applies yet.
        </p>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {strategySkills.map((s) => (
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
