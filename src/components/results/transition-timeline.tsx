"use client";

import * as m from "motion/react-m";
import { certsForPath } from "@/data/certifications";
import { projectsForPath } from "@/data/portfolio-projects";
import { EASE_OUT, listContainer, listItem } from "@/lib/motion/presets";

const PHASES = [
  {
    range: "Days 1–30",
    title: "Foundations",
    description: "Close the vocabulary gap and pick your first credential.",
  },
  {
    range: "Days 31–60",
    title: "Proof of work",
    description: "",
  },
  {
    range: "Days 61–90",
    title: "Apply & network",
    description: "Ship the capstone, then convert proof into interviews.",
  },
] as const;

export function TransitionTimeline({ pathSlug }: { pathSlug: string }) {
  const projects = projectsForPath(pathSlug);
  const intermediate =
    projects.find((p) => p.difficulty === "intermediate") ?? projects[1];
  const capstone =
    projects.find((p) => p.difficulty === "capstone") ?? projects[2];
  const beginnerCert = certsForPath(pathSlug, "beginner")[0];
  const advancedCert = certsForPath(pathSlug, "advanced")[0];

  return (
    <m.ol
      className="grid gap-3 md:grid-cols-3"
      variants={listContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {PHASES.map((phase, i) => (
        <m.li
          key={phase.range}
          variants={listItem}
          className="rounded-xl border p-4"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            {phase.range}
          </p>
          <h4 className="mt-1 text-sm font-semibold">{phase.title}</h4>
          {phase.description && (
            <p className="mt-1 text-xs text-muted-foreground">
              {phase.description}
            </p>
          )}
          <ul className="mt-3 space-y-2 text-sm">
            {i === 0 && (
              <>
                {beginnerCert && (
                  <li className="leading-snug">
                    ✓ Study: {beginnerCert.name} ({beginnerCert.provider})
                  </li>
                )}
                <li className="leading-snug">
                  ✓ Read one flagship report end-to-end for your target sector
                </li>
              </>
            )}
            {i === 1 && intermediate && (
              <>
                <li className="leading-snug">✓ Build: {intermediate.title}</li>
                <li className="leading-snug">
                  ✓ Publish the artifact on LinkedIn or a portfolio site
                </li>
              </>
            )}
            {i === 2 && (
              <>
                {capstone && (
                  <li className="leading-snug">✓ Ship: {capstone.title}</li>
                )}
                {advancedCert && (
                  <li className="leading-snug">
                    ✓ Optional credential: {advancedCert.name}
                  </li>
                )}
                <li className="leading-snug">
                  ✓ Talk to 5 practitioners; apply to 10 roles
                </li>
              </>
            )}
          </ul>
          <m.span
            aria-hidden
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: 0.5, ease: EASE_OUT },
              },
            }}
            className="mt-3 block h-1 origin-left rounded-full bg-primary/60"
          />
        </m.li>
      ))}
    </m.ol>
  );
}
