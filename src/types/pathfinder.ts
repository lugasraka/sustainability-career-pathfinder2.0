export type Pillar =
  | "carbon_accounting"
  | "regulations_disclosure"
  | "data_systems"
  | "circularity_nature"
  | "strategy_governance";

export type RequirementLevel = "mandatory" | "recommended" | "differentiator";

export type DemandLevel = "emerging" | "strong" | "explosive";

export type SkillDemand = "moderate" | "high" | "critical";

export type Background =
  | "finance"
  | "engineering"
  | "science"
  | "policy"
  | "data"
  | "other";

export type Geography = "EU" | "US_CANADA" | "GLOBAL";

export type WorkStyle = "corporate" | "consulting" | "cleantech" | "nonprofit";

export type ProjectDifficulty = "foundational" | "intermediate" | "capstone";

export type CertLevel = "beginner" | "intermediate" | "advanced";

export interface Skill {
  slug: string;
  name: string;
  pillar: Pillar;
  demandLevel: SkillDemand;
  aliases?: string[];
}

export interface PathSkillRequirement {
  skillSlug: string;
  level: RequirementLevel;
  weight: number;
}

export interface CareerPath {
  slug: string;
  title: string;
  tagline: string;
  overview: string[];
  demand: DemandLevel;
  medianSalaryUsd: number | null;
  seniorSalaryUsd: number | null;
  commonJobTitles: {
    entry: string[];
    mid: string[];
    senior: string[];
  };
  frameworks: string[];
  entryBackgrounds: Background[];
  regions: Geography[];
  orgFit: WorkStyle[];
  requiredSkills: PathSkillRequirement[];
}

export interface MatchFactor {
  label: string;
  delta?: number;
}

export interface UserAssessmentInput {
  background: Background;
  yearsExperience: number;
  selectedSkillSlugs: string[];
  targetGeography: Geography;
  workStylePreference: WorkStyle;
}

export interface PillarScore {
  pillar: Pillar;
  pct: number;
}

export interface SkillDeltaResult {
  pathSlug: string;
  pathTitle: string;
  matchScore: number;
  coveragePct: number;
  transferableSkills: string[];
  missingMandatorySkills: string[];
  recommendedUpskilling: string[];
  backgroundCredits: string[];
  pillarScores: PillarScore[];
  factors: MatchFactor[];
}

export type PivotStage = "entry" | "mid" | "senior";

export interface PortfolioProject {
  pathSlug: string;
  title: string;
  summary: string;
  difficulty: ProjectDifficulty;
  estimatedHours: number;
}

export interface Certification {
  pathSlug: string;
  level: CertLevel;
  name: string;
  provider: string;
  hours: string;
}
