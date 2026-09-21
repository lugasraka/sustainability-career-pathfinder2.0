import type { Background } from "@/types/pathfinder";

export const BACKGROUND_CREDITS: Record<Background, string[]> = {
  finance: [
    "excel-data-analysis",
    "financial-modeling",
    "economic-modeling",
    "budgeting-donor-reporting",
  ],
  engineering: [
    "excel-data-analysis",
    "engineering-fundamentals",
    "gis-analysis",
  ],
  science: [
    "research-literature-review",
    "field-methods",
    "gis-analysis",
    "ipcc-science-literacy",
  ],
  policy: [
    "research-literature-review",
    "policy-analysis-brief-writing",
    "stakeholder-mapping",
    "negotiation-coalition-building",
  ],
  data: [
    "python-sql",
    "bi-dashboards",
    "data-pipelines",
    "excel-data-analysis",
  ],
  other: ["excel-data-analysis", "stakeholder-mapping"],
};

export const BACKGROUND_CREDIT_WEIGHT = 0.5;
