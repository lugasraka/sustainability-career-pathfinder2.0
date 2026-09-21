import type {
  CareerPath,
  MatchFactor,
  PillarScore,
  SkillDeltaResult,
  UserAssessmentInput,
} from "@/types/pathfinder";
import { PILLAR_ORDER } from "@/lib/pillars";
import { SKILLS, skillName } from "@/data/skills";
import {
  BACKGROUND_CREDITS,
  BACKGROUND_CREDIT_WEIGHT,
} from "@/lib/scoring/background-credits";
import {
  GEOGRAPHY_LABELS,
  WORK_STYLE_LABELS,
} from "@/data/path-context";

const SKILL_PILLAR = new Map<string, PillarScore["pillar"]>(
  SKILLS.map((skill) => [skill.slug, skill.pillar])
);

const SCORE_FLOOR = 10;
const SCORE_CEILING = 99;
const MANDATORY_PENALTY = 5;
const REGION_BONUS = 3;
const STYLE_BONUS = 3;

export function computePathMatch(
  input: UserAssessmentInput,
  path: Pick<
    CareerPath,
    "slug" | "title" | "regions" | "orgFit" | "requiredSkills"
  >
): SkillDeltaResult {
  let totalPossibleWeight = 0;
  let accumulatedScore = 0;
  let creditPoints = 0;

  const userSkillSet = new Set(input.selectedSkillSlugs);
  const backgroundCredits = new Set(
    BACKGROUND_CREDITS[input.background] ?? []
  );
  const appliedCredits: string[] = [];

  const transferable: string[] = [];
  const missingMandatory: string[] = [];
  const recommended: string[] = [];

  const pillarTotals = new Map<PillarScore["pillar"], number>();
  const pillarSatisfied = new Map<PillarScore["pillar"], number>();

  for (const item of path.requiredSkills) {
    totalPossibleWeight += item.weight;
    const pillar = SKILL_PILLAR.get(item.skillSlug);

    const hasSkill = userSkillSet.has(item.skillSlug);
    const hasCredit = !hasSkill && backgroundCredits.has(item.skillSlug);

    if (pillar) {
      pillarTotals.set(pillar, (pillarTotals.get(pillar) ?? 0) + item.weight);
    }

    if (hasSkill) {
      accumulatedScore += item.weight;
      transferable.push(item.skillSlug);
      if (pillar) {
        pillarSatisfied.set(
          pillar,
          (pillarSatisfied.get(pillar) ?? 0) + item.weight
        );
      }
    } else if (hasCredit) {
      accumulatedScore += item.weight * BACKGROUND_CREDIT_WEIGHT;
      creditPoints += item.weight * BACKGROUND_CREDIT_WEIGHT;
      appliedCredits.push(item.skillSlug);
      if (pillar) {
        pillarSatisfied.set(
          pillar,
          (pillarSatisfied.get(pillar) ?? 0) +
            item.weight * BACKGROUND_CREDIT_WEIGHT
        );
      }
    } else if (item.level === "mandatory") {
      missingMandatory.push(item.skillSlug);
    } else {
      recommended.push(item.skillSlug);
    }
  }

  const coveragePct =
    totalPossibleWeight > 0 ? (accumulatedScore / totalPossibleWeight) * 100 : 0;

  const regionFit = path.regions.includes(input.targetGeography);
  const styleFit = path.orgFit.includes(input.workStylePreference);

  const rawScore =
    coveragePct -
    missingMandatory.length * MANDATORY_PENALTY +
    (regionFit ? REGION_BONUS : 0) +
    (styleFit ? STYLE_BONUS : 0);
  const matchScore = Math.min(
    SCORE_CEILING,
    Math.max(SCORE_FLOOR, Math.round(rawScore))
  );

  const factors: MatchFactor[] = [
    {
      label: `Skills coverage: ${Math.round(coveragePct)}% of weighted requirements`,
    },
  ];
  if (missingMandatory.length > 0) {
    factors.push({
      label: `${missingMandatory.length} mandatory gap${missingMandatory.length > 1 ? "s" : ""} (−5 points each)`,
      delta: -(missingMandatory.length * MANDATORY_PENALTY),
    });
  }
  if (appliedCredits.length > 0) {
    factors.push({
      label: `Credited from your ${input.background} background: ${appliedCredits
        .map(skillName)
        .join(", ")} (half weight each)`,
      delta: Math.round(creditPoints * 10) / 10,
    });
  }
  if (regionFit) {
    factors.push({
      label: `Region fit: ${GEOGRAPHY_LABELS[input.targetGeography]} target aligns with this path's market`,
      delta: REGION_BONUS,
    });
  }
  if (styleFit) {
    factors.push({
      label: `Work style fit: ${WORK_STYLE_LABELS[input.workStylePreference]} matches this path`,
      delta: STYLE_BONUS,
    });
  }

  const pillarScores: PillarScore[] = PILLAR_ORDER.map((pillar) => {
    const total = pillarTotals.get(pillar) ?? 0;
    const got = pillarSatisfied.get(pillar) ?? 0;
    return { pillar, pct: total > 0 ? Math.round((got / total) * 100) : 0 };
  });

  return {
    pathSlug: path.slug,
    pathTitle: path.title,
    matchScore,
    coveragePct: Math.round(coveragePct),
    transferableSkills: transferable,
    missingMandatorySkills: missingMandatory,
    recommendedUpskilling: recommended,
    backgroundCredits: appliedCredits,
    pillarScores,
    factors,
  };
}
