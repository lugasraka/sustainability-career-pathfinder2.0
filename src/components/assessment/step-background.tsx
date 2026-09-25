"use client";

import * as React from "react";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
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

const MAX_YEARS = 60;

export function StepBackground() {
  const background = useAssessmentStore((s) => s.background);
  const setBackground = useAssessmentStore((s) => s.setBackground);
  const yearsExperience = useAssessmentStore((s) => s.yearsExperience);
  const yearsExperienceConfirmed = useAssessmentStore(
    (s) => s.yearsExperienceConfirmed
  );
  const setYearsExperience = useAssessmentStore((s) => s.setYearsExperience);
  const clearYearsExperience = useAssessmentStore(
    (s) => s.clearYearsExperience
  );

  const [yearsInput, setYearsInput] = React.useState(
    yearsExperienceConfirmed ? String(yearsExperience) : ""
  );

  const trimmedYears = yearsInput.trim();
  const yearsValid =
    /^\d+$/.test(trimmedYears) && Number(trimmedYears) <= MAX_YEARS;
  const yearsInvalid = trimmedYears !== "" && !yearsValid;

  const handleYearsChange = (raw: string) => {
    setYearsInput(raw);
    const trimmed = raw.trim();
    if (/^\d+$/.test(trimmed) && Number(trimmed) <= MAX_YEARS) {
      setYearsExperience(Number(trimmed));
    } else {
      clearYearsExperience();
    }
  };

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
                "flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors hover:bg-accent/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-ring/50",
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
        <div className="relative w-full sm:w-64">
          <Input
            id="years-exp"
            type="number"
            inputMode="numeric"
            min={0}
            max={MAX_YEARS}
            step={1}
            autoComplete="off"
            placeholder="e.g. 4"
            value={yearsInput}
            onChange={(e) => handleYearsChange(e.target.value)}
            onBlur={() => {
              if (yearsValid) {
                setYearsInput(String(Number(trimmedYears)));
              }
            }}
            aria-required
            aria-invalid={yearsInvalid}
            aria-describedby={yearsInvalid ? "years-help years-error" : "years-help"}
            className="pr-14"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-muted-foreground"
          >
            years
          </span>
        </div>
        <p id="years-help" className="text-xs text-muted-foreground">
          Frames your pivot stage — entry (under 3 yrs), mid (3–5), senior (6+).
          It doesn&apos;t change your match score.
        </p>
        {yearsInvalid && (
          <p id="years-error" role="alert" className="text-xs text-destructive">
            Enter a whole number from 0 to {MAX_YEARS}.
          </p>
        )}
      </div>
    </div>
  );
}
