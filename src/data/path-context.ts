import type { Geography, WorkStyle } from "@/types/pathfinder";

export const PATH_REGIONS: Record<string, Geography[]> = {
  "esg-reporting": ["EU", "US_CANADA", "GLOBAL"],
  "climate-policy": ["EU", "US_CANADA", "GLOBAL"],
  "climate-communications": ["EU", "US_CANADA", "GLOBAL"],
  "carbon-markets": ["EU", "GLOBAL"],
  "renewable-energy": ["EU", "US_CANADA", "GLOBAL"],
  "sustainability-data": ["EU", "US_CANADA", "GLOBAL"],
  "sustainable-supply-chain": ["EU", "GLOBAL"],
  "circular-economy": ["EU", "GLOBAL"],
  "biodiversity-conservation": ["GLOBAL"],
  "green-building": ["EU", "US_CANADA"],
  "environmental-consulting": ["EU", "US_CANADA", "GLOBAL"],
  "community-sustainability": ["GLOBAL"],
  "education-capacity-building": ["GLOBAL"],
  "programs-project-management": ["EU", "US_CANADA", "GLOBAL"],
  "partnerships-stakeholder-engagement": ["GLOBAL"],
  "research-knowledge-management": ["GLOBAL"],
  "grant-writing-mobilization": ["GLOBAL"],
};

export const PATH_ORG_FIT: Record<string, WorkStyle[]> = {
  "esg-reporting": ["corporate", "consulting"],
  "climate-policy": ["nonprofit", "corporate"],
  "climate-communications": ["nonprofit", "corporate", "consulting"],
  "carbon-markets": ["corporate", "consulting", "cleantech"],
  "renewable-energy": ["cleantech", "corporate"],
  "sustainability-data": ["cleantech", "corporate", "consulting"],
  "sustainable-supply-chain": ["corporate", "consulting"],
  "circular-economy": ["corporate", "consulting", "cleantech"],
  "biodiversity-conservation": ["nonprofit", "consulting"],
  "green-building": ["consulting", "corporate"],
  "environmental-consulting": ["consulting", "corporate"],
  "community-sustainability": ["nonprofit", "corporate"],
  "education-capacity-building": ["nonprofit", "corporate"],
  "programs-project-management": ["nonprofit", "corporate"],
  "partnerships-stakeholder-engagement": ["nonprofit", "corporate"],
  "research-knowledge-management": ["nonprofit", "corporate"],
  "grant-writing-mobilization": ["nonprofit", "corporate"],
};

export const GEOGRAPHY_LABELS: Record<Geography, string> = {
  EU: "EU",
  US_CANADA: "US & Canada",
  GLOBAL: "Global",
};

export const WORK_STYLE_LABELS: Record<WorkStyle, string> = {
  corporate: "corporate in-house",
  consulting: "consulting",
  cleantech: "cleantech startup",
  nonprofit: "NGO / nonprofit",
};
