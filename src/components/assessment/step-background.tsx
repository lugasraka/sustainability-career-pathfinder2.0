"use client";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CvUpload } from "@/components/assessment/cv-upload";
import { BACKGROUND_META } from "@/lib/pillars";
import { cn } from "@/lib/utils";
import { useAssessmentStore } from "@/store/assessment-store";
import type { Background } from "@/types/pathfinder";

const ORDERED_BACKGROUNDS: Background[] = [
  "finance",
  "engineering",
  "science",
  "policy",
  "data",
  "other",
];

const YEAR_OPTIONS = [
  { value: 0, label: "0 (starting fresh)" },
  { value: 1, label: "1–2 years" },
  { value: 3, label: "3–5 years" },
  { value: 6, label: "6–10 years" },
  { value: 11, label: "11+ years" },
];

export function StepBackground() {
  const background = useAssessmentStore((s) => s.background);
  const setBackground = useAssessmentStore((s) => s.setBackground);
  const yearsExperience = useAssessmentStore((s) => s.yearsExperience);
  const yearsExperienceConfirmed = useAssessmentStore(
    (s) => s.yearsExperienceConfirmed
  );
  const setYearsExperience = useAssessmentStore((s) => s.setYearsExperience);

  return (
    <div className="space-y-8">
      <CvUpload />

      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold">
          Which describes your primary background?
        </legend>
        <RadioGroup
          value={background}
          onValueChange={(v) => setBackground(v as Background)}
          className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ORDERED_BACKGROUNDS.map((bg) => (
            <label
              key={bg}
              data-slot="field-label"
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors hover:bg-accent/50",
                background === bg && "border-primary bg-primary/5"
              )}
            >
              <RadioGroupItem value={bg} className="mt-0.5" />
              <span className="grid gap-0.5">
                <span className="text-sm font-semibold">
                  {BACKGROUND_META[bg].label}
                </span>
                <span className="text-xs text-muted-foreground">
                  {BACKGROUND_META[bg].hint}
                </span>
              </span>
            </label>
          ))}
        </RadioGroup>
      </fieldset>

      <div className="space-y-2">
        <label htmlFor="years-exp" className="text-sm font-semibold">
          Years of professional experience
          <span aria-hidden className="ml-0.5 text-destructive">
            *
          </span>
          <span className="sr-only"> (required)</span>
        </label>
        <Select
          value={yearsExperience}
          onValueChange={(v) => setYearsExperience(v as number)}
        >
          <SelectTrigger
            className="w-full sm:w-64"
            aria-label="Years of experience"
            aria-required
            aria-invalid={!yearsExperienceConfirmed}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {YEAR_OPTIONS.map((o) => (
              <SelectItem
                key={o.value}
                value={o.value}
                label={o.label}
              >
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {!yearsExperienceConfirmed && (
          <p className="text-xs text-muted-foreground">
            Pick a range to calibrate your pivot stage (entry, mid or senior).
          </p>
        )}
      </div>
    </div>
  );
}
