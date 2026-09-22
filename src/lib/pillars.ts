import type {
  DemandLevel,
  Pillar,
  ProjectDifficulty,
  RequirementLevel,
  SkillDemand,
} from "@/types/pathfinder";

export const PILLAR_ORDER: Pillar[] = [
  "carbon_accounting",
  "regulations_disclosure",
  "data_systems",
  "circularity_nature",
  "strategy_governance",
];

export const PILLAR_META: Record<
  Pillar,
  { label: string; dot: string; badge: string; chart: string }
> = {
  carbon_accounting: {
    label: "Carbon & Climate Accounting",
    dot: "bg-emerald-500",
    badge:
      "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300",
    chart: "oklch(0.6 0.15 155)",
  },
  regulations_disclosure: {
    label: "Regulatory & Disclosure",
    dot: "bg-blue-500",
    badge:
      "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300",
    chart: "oklch(0.6 0.15 255)",
  },
  data_systems: {
    label: "Quantitative & Data Systems",
    dot: "bg-violet-500",
    badge:
      "border-violet-200 bg-violet-50 text-violet-800 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-300",
    chart: "oklch(0.6 0.18 300)",
  },
  circularity_nature: {
    label: "Circularity & Natural Capital",
    dot: "bg-amber-500",
    badge:
      "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300",
    chart: "oklch(0.75 0.15 80)",
  },
  strategy_governance: {
    label: "Strategy & Stakeholder Delivery",
    dot: "bg-rose-500",
    badge:
      "border-rose-200 bg-rose-50 text-rose-800 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300",
    chart: "oklch(0.65 0.18 10)",
  },
};

export const DEMAND_META: Record<
  DemandLevel,
  { label: string; className: string }
> = {
  emerging: {
    label: "Growing demand",
    className:
      "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300",
  },
  strong: {
    label: "High demand",
    className:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300",
  },
  explosive: {
    label: "Very high demand",
    className:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300",
  },
};

export const SKILL_DEMAND_META: Record<
  SkillDemand,
  { label: string; className: string }
> = {
  moderate: {
    label: "Moderate demand",
    className: "border-border bg-muted text-muted-foreground",
  },
  high: {
    label: "High demand",
    className:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300",
  },
  critical: {
    label: "Critical demand",
    className:
      "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300",
  },
};

export const REQUIREMENT_META: Record<
  RequirementLevel,
  { label: string; className: string }
> = {
  mandatory: {
    label: "Mandatory",
    className:
      "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300",
  },
  recommended: {
    label: "Recommended",
    className:
      "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300",
  },
  differentiator: {
    label: "Differentiator",
    className:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-300",
  },
};

export const DIFFICULTY_META: Record<
  ProjectDifficulty,
  { label: string; className: string }
> = {
  foundational: {
    label: "Foundational",
    className:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300",
  },
  intermediate: {
    label: "Intermediate",
    className:
      "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300",
  },
  capstone: {
    label: "Capstone",
    className:
      "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300",
  },
};

export const BACKGROUND_META: Record<
  string,
  { label: string; hint: string }
> = {
  finance: {
    label: "Finance / Accounting",
    hint: "Ledgers, audits, controlling, banking",
  },
  engineering: {
    label: "Engineering",
    hint: "Mechanical, electrical, civil, software",
  },
  science: {
    label: "Environmental Science",
    hint: "Biology, chemistry, ecology, geography",
  },
  policy: {
    label: "Policy / Law",
    hint: "Public policy, law, international affairs",
  },
  data: {
    label: "Data / Analytics",
    hint: "Data science, BI, statistics, dev",
  },
  other: {
    label: "Other / Generalist",
    hint: "Marketing, ops, education, HR",
  },
};
