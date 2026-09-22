import { SKILLS } from "@/data/skills";
import { SKILL_ALIASES } from "@/data/skill-aliases";

export type MatchVia = "name" | "alias" | "parenthetical";

export interface CvSkillMatch {
  slug: string;
  matchedVia: MatchVia;
  matchedTerm: string;
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Word-boundary-ish match that also handles hyphenated/slashy terms. */
function matchesTerm(haystack: string, term: string): boolean {
  const t = normalize(term);
  if (!t) return false;
  const pattern = `(?<![a-z0-9])${escapeRegExp(t).replace(/\s+/g, "\\s+")}(?![a-z0-9])`;
  return new RegExp(pattern, "i").test(haystack);
}

/** Extract tool/standard tokens from skill names like "Power BI / Tableau". */
function parentheticalTerms(name: string): string[] {
  const terms = new Set<string>();
  const paren = name.match(/\(([^)]+)\)/g) ?? [];
  for (const p of paren) {
    const inner = p.slice(1, -1);
    for (const part of inner.split(/[,/&·]+/)) {
      const t = part.trim();
      if (t.length >= 2) terms.add(t);
    }
  }
  // Also split the base name on separators for multi-tool names
  const base = name.replace(/\([^)]*\)/g, "");
  for (const part of base.split(/\s*[\/|·]\s*/)) {
    const t = part.trim();
    if (t.length >= 3 && /[A-Za-z]/.test(t)) terms.add(t);
  }
  return [...terms];
}

/**
 * Match free-form CV text against the skill catalog.
 * Priority: curated alias > parenthetical/extracted term > skill name.
 */
export function matchSkillsFromText(text: string): CvSkillMatch[] {
  const haystack = normalize(text);
  if (!haystack) return [];

  const results: CvSkillMatch[] = [];

  for (const skill of SKILLS) {
    const aliases = SKILL_ALIASES[skill.slug] ?? skill.aliases ?? [];

    // 1. Curated aliases (highest confidence for CV phrasing)
    let hit = aliases.find((a) => matchesTerm(haystack, a));
    if (hit) {
      results.push({ slug: skill.slug, matchedVia: "alias", matchedTerm: hit });
      continue;
    }

    // 2. Parenthetical / multi-tool tokens from the name itself
    const extracted = parentheticalTerms(skill.name);
    hit = extracted.find((t) => matchesTerm(haystack, t));
    if (hit) {
      results.push({
        slug: skill.slug,
        matchedVia: "parenthetical",
        matchedTerm: hit,
      });
      continue;
    }

    // 3. Full skill name (normalized, allowing flexible whitespace)
    if (matchesTerm(haystack, skill.name)) {
      results.push({
        slug: skill.slug,
        matchedVia: "name",
        matchedTerm: skill.name,
      });
    }
  }

  // Sort: name matches first, then alias, then parenthetical; stable within group
  const rank: Record<MatchVia, number> = { name: 0, alias: 1, parenthetical: 2 };
  results.sort((a, b) => rank[a.matchedVia] - rank[b.matchedVia]);

  return results;
}
