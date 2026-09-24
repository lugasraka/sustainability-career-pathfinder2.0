import { PATHS } from "@/data/paths";
import { PATH_SKILLS } from "@/data/path-skills";
import { PATH_ORG_FIT, PATH_REGIONS } from "@/data/path-context";
import { computePathMatch } from "@/lib/scoring/compute-path-match";
import type { SkillDeltaResult, UserAssessmentInput } from "@/types/pathfinder";

export function computeAllMatches(
  input: UserAssessmentInput
): SkillDeltaResult[] {
  return PATHS.map((path) =>
    computePathMatch(input, {
      slug: path.slug,
      title: path.title,
      regions: PATH_REGIONS[path.slug] ?? ["GLOBAL"],
      orgFit: PATH_ORG_FIT[path.slug] ?? ["corporate", "nonprofit"],
      requiredSkills: PATH_SKILLS[path.slug] ?? [],
    })
  ).sort((a, b) => b.matchScore - a.matchScore);
}
