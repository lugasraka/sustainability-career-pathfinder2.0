import { PATHS } from "@/data/paths";
import { PATH_SKILLS } from "@/data/path-skills";
import type { PathSkillRequirement, RequirementLevel } from "@/types/pathfinder";

export const COMPARE_MIN = 2;
export const COMPARE_MAX = 3;

const VALID_SLUGS = new Set(PATHS.map((p) => p.slug));

const LEVEL_RANK: Record<RequirementLevel, number> = {
  mandatory: 3,
  recommended: 2,
  differentiator: 1,
};

export function parseCompareParam(
  raw: string | string[] | undefined | null
): string[] {
  const text = Array.isArray(raw) ? raw[0] : raw;
  if (!text) return [];
  const seen = new Set<string>();
  const slugs: string[] = [];
  for (const part of text.split(",")) {
    const slug = part.trim();
    if (!VALID_SLUGS.has(slug) || seen.has(slug)) continue;
    seen.add(slug);
    slugs.push(slug);
    if (slugs.length >= COMPARE_MAX) break;
  }
  return slugs;
}

export function compareUrl(slugs: string[]): string {
  return `/careers/compare?paths=${slugs.slice(0, COMPARE_MAX).join(",")}`;
}

export interface SkillOverlap {
  shared: string[];
  sharedLevels: Map<string, RequirementLevel>;
  uniqueByPath: Record<string, PathSkillRequirement[]>;
}

export function buildSkillOverlap(slugs: string[]): SkillOverlap {
  const requiredBy = slugs.map(
    (slug) => new Map((PATH_SKILLS[slug] ?? []).map((r) => [r.skillSlug, r]))
  );

  const shared: string[] = [];
  const sharedLevels = new Map<string, RequirementLevel>();
  if (requiredBy.length > 0) {
    for (const skillSlug of requiredBy[0].keys()) {
      if (requiredBy.every((m) => m.has(skillSlug))) {
        shared.push(skillSlug);
        const strictest = requiredBy.reduce<RequirementLevel>((acc, m) => {
          const level = m.get(skillSlug)?.level ?? "differentiator";
          return LEVEL_RANK[level] > LEVEL_RANK[acc] ? level : acc;
        }, "differentiator");
        sharedLevels.set(skillSlug, strictest);
      }
    }
  }

  const uniqueByPath: Record<string, PathSkillRequirement[]> = {};
  for (let i = 0; i < slugs.length; i++) {
    uniqueByPath[slugs[i]] = [];
    for (const [skillSlug, req] of requiredBy[i]) {
      if (requiredBy.every((m, j) => j === i || !m.has(skillSlug))) {
        uniqueByPath[slugs[i]].push(req);
      }
    }
  }

  return { shared, sharedLevels, uniqueByPath };
}

export interface FrameworkOverlap {
  shared: string[];
  uniqueByPath: Record<string, string[]>;
}

export function buildFrameworkOverlap(slugs: string[]): FrameworkOverlap {
  const lists = slugs.map((slug) => PATHS.find((p) => p.slug === slug)?.frameworks ?? []);
  const shared =
    lists.length > 0
      ? lists[0].filter((f) => lists.every((l) => l.includes(f)))
      : [];
  const uniqueByPath: Record<string, string[]> = {};
  for (let i = 0; i < slugs.length; i++) {
    uniqueByPath[slugs[i]] = lists[i].filter(
      (f) => lists.every((l, j) => j === i || !l.includes(f))
    );
  }
  return { shared, uniqueByPath };
}
