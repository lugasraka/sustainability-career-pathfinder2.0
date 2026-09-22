import { SKILL_ALIASES } from "@/data/skill-aliases";
import type { Skill } from "@/types/pathfinder";

/**
 * Alias-aware skill search shared by the assessment picker and the glossary.
 * Expects a trimmed, lowercased query.
 */
export function matchesSkillQuery(skill: Skill, query: string): boolean {
  if (!query) return true;
  const aliases = [
    ...(SKILL_ALIASES[skill.slug] ?? []),
    ...(skill.aliases ?? []),
  ];
  return (
    skill.name.toLowerCase().includes(query) ||
    aliases.some((alias) => alias.toLowerCase().includes(query))
  );
}
