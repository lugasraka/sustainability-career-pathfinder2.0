import type { Metadata } from "next";
import { SkillGlossary } from "@/components/glossary/skill-glossary";
import { SKILL_GLOSSARY } from "@/data/skill-glossary";
import { SKILLS } from "@/data/skills";

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
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Sustainability skill glossary
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {SKILLS.length} skills across the 17 career paths, in plain language.
          Each entry explains what the skill is, what it looks like on the job,
          and which paths require it.
        </p>
      </header>
      <SkillGlossary />
    </div>
  );
}
