"use client";

import { Checkbox } from "@/components/ui/checkbox";
import type { Skill } from "@/types/pathfinder";

const BADGE_BASE =
  "shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] font-medium";

export function SkillRow({
  skill,
  checked,
  onToggle,
  credited,
  creditHint,
  fromCv,
}: {
  skill: Skill;
  checked: boolean;
  onToggle: () => void;
  credited?: boolean;
  creditHint?: string;
  fromCv?: boolean;
}) {
  return (
    <label
      data-slot="field-label"
      className="flex cursor-pointer items-center gap-2.5 text-sm"
    >
      <Checkbox
        checked={checked}
        onCheckedChange={(value) => {
          if (Boolean(value) !== checked) onToggle();
        }}
      />
      <span className="leading-snug">{skill.name}</span>
      <span className="ml-auto flex shrink-0 items-center gap-1">
        {credited && !checked && (
          <span
            className={`${BADGE_BASE} border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-300 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95 motion-safe:duration-200`}
            title={creditHint}
          >
            50% credit
          </span>
        )}
        {skill.demandLevel === "critical" && (
          <span
            className={`${BADGE_BASE} border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300`}
            title="Critical market demand across sustainability roles"
          >
            Critical
          </span>
        )}
        {fromCv && (
          <span
            className={`${BADGE_BASE} border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95 motion-safe:duration-200`}
            aria-label="Detected from your CV"
          >
            CV
          </span>
        )}
      </span>
    </label>
  );
}
