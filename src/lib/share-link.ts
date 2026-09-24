import { SKILLS } from "@/data/skills";
import type {
  Background,
  Geography,
  WorkStyle,
} from "@/types/pathfinder";

const VALID_BACKGROUNDS: Background[] = [
  "finance",
  "engineering",
  "science",
  "policy",
  "data",
  "other",
];
const VALID_GEOGRAPHIES: Geography[] = ["EU", "US_CANADA", "GLOBAL"];
const VALID_WORK_STYLES: WorkStyle[] = [
  "corporate",
  "consulting",
  "cleantech",
  "nonprofit",
];

const VALID_SKILL_SLUGS = new Set(SKILLS.map((s) => s.slug));

export interface ShareState {
  background: Background;
  yearsExperience: number;
  selectedSkillSlugs: string[];
  targetGeography: Geography;
  workStylePreference: WorkStyle;
}

function toBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(text: string): Uint8Array | null {
  const padded = text.replace(/-/g, "+").replace(/_/g, "/");
  try {
    const binary = atob(padded + "=".repeat((4 - (padded.length % 4)) % 4));
    return Uint8Array.from(binary, (c) => c.charCodeAt(0));
  } catch {
    return null;
  }
}

export function encodeShareState(state: ShareState): string {
  const validSlugs = state.selectedSkillSlugs.filter((s) =>
    VALID_SKILL_SLUGS.has(s)
  );
  const payload = {
    b: state.background,
    y: state.yearsExperience,
    k: validSlugs,
    g: state.targetGeography,
    w: state.workStylePreference,
  };
  const json = JSON.stringify(payload);
  return toBase64Url(new TextEncoder().encode(json));
}

export function decodeShareState(encoded: string): ShareState | null {
  const bytes = fromBase64Url(encoded);
  if (!bytes) return null;
  try {
    const json = new TextDecoder().decode(bytes);
    const raw = JSON.parse(json) as Record<string, unknown>;
    if (typeof raw !== "object" || raw === null) return null;

    const background = VALID_BACKGROUNDS.includes(raw.b as Background)
      ? (raw.b as Background)
      : null;
    const geography = VALID_GEOGRAPHIES.includes(raw.g as Geography)
      ? (raw.g as Geography)
      : null;
    const workStyle = VALID_WORK_STYLES.includes(raw.w as WorkStyle)
      ? (raw.w as WorkStyle)
      : null;
    const years =
      typeof raw.y === "number" && raw.y >= 0 && raw.y <= 60
        ? Math.floor(raw.y)
        : null;
    const skills = Array.isArray(raw.k)
      ? Array.from(
          new Set(
            raw.k.filter(
              (s): s is string =>
                typeof s === "string" && VALID_SKILL_SLUGS.has(s)
            )
          )
        )
      : null;

    if (!background || !geography || !workStyle || years === null || !skills) {
      return null;
    }

    return {
      background,
      yearsExperience: years,
      selectedSkillSlugs: skills,
      targetGeography: geography,
      workStylePreference: workStyle,
    };
  } catch {
    return null;
  }
}

export function buildShareUrl(state: ShareState): string {
  const origin =
    typeof window !== "undefined" ? window.location.origin : undefined;
  const base = origin ?? "";
  return `${base}/results?d=${encodeShareState(state)}`;
}

export function readShareParam(): ShareState | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get("d");
  return encoded ? decodeShareState(encoded) : null;
}
