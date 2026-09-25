import type { Metadata } from "next";
import Link from "next/link";
import { SkillGlossary } from "@/components/glossary/skill-glossary";
import { SKILL_GLOSSARY } from "@/data/skill-glossary";
import { SKILLS } from "@/data/skills";
import { cn } from "@/lib/utils";

const ENTER =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-300 motion-safe:fill-mode-both motion-safe:ease-out-quart";

export const metadata: Metadata = {
  title: "Sustainability Skills Glossary",
  description:
    "Plain-language definitions and on-the-job examples for all 129 skills across the 17 sustainability career pathways.",
};

export default function SkillsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Sustainability Skills Glossary",
    hasDefinedTerm: SKILLS.filter((skill) => SKILL_GLOSSARY[skill.slug]).map(
      (skill) => ({
        "@type": "DefinedTerm",
        name: skill.name,
        description: SKILL_GLOSSARY[skill.slug].definition,
      })
    ),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="mb-10">
        <h1
          className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl",
            ENTER
          )}
        >
          Sustainability skill glossary
        </h1>
        <p
          className={cn(
            "mt-2 max-w-2xl text-muted-foreground",
            ENTER,
            "delay-75"
          )}
        >
          {SKILLS.length} skills across the 17 career paths, in plain language.
          Each entry explains what the skill is, what it looks like on the job,
          and which paths require it.
        </p>
        <p className={cn("mt-3 text-sm", ENTER, "delay-150")}>
          <Link
            href="/pillars"
            className="font-medium text-primary underline-offset-4 transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            How the five pillars fit together
          </Link>
        </p>
      </header>
      <SkillGlossary />
    </div>
  );
}
