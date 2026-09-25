"use client";

import Link from "next/link";
import * as m from "motion/react-m";
import { ArrowUpRightIcon } from "lucide-react";
import { skillName } from "@/data/skills";
import {
  listContainer,
  listContainerFast,
  listItem,
  listItemTight,
} from "@/lib/motion/presets";
import { cn } from "@/lib/utils";

function DeltaColumn({
  title,
  tone,
  items,
  emptyHint,
}: {
  title: string;
  tone: string;
  items: string[];
  emptyHint: string;
}) {
  return (
    <m.section
      variants={listItem}
      className={cn("flex flex-col gap-3 rounded-xl border p-4", tone)}
      aria-label={title}
    >
      <h4 className="text-sm font-semibold">{title}</h4>
      {items.length === 0 ? (
        <p className="text-sm text-muted-foreground">{emptyHint}</p>
      ) : (
        <m.ul className="space-y-1.5 text-sm" variants={listContainerFast}>
          {items.map((slug) => (
            <m.li key={slug} variants={listItemTight} className="leading-snug">
              <Link
                href={`/skills#${slug}`}
                className="group/skill -mx-1.5 flex items-start gap-2 rounded-md px-1.5 py-0.5 transition-colors hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                <span
                  aria-hidden
                  className="mt-[0.55em] size-1 shrink-0 rounded-full bg-current opacity-40 transition-opacity group-hover/skill:opacity-70"
                />
                <span className="underline-offset-2 transition-colors group-hover/skill:text-primary group-hover/skill:underline">
                  {skillName(slug)}
                </span>
                <ArrowUpRightIcon
                  aria-hidden
                  className="mt-0.5 ml-auto size-3.5 shrink-0 text-primary opacity-0 transition-[opacity,transform] duration-150 group-hover/skill:translate-x-0.5 group-hover/skill:opacity-100 group-focus-visible/skill:translate-x-0.5 group-focus-visible/skill:opacity-100"
                />
              </Link>
            </m.li>
          ))}
        </m.ul>
      )}
    </m.section>
  );
}

export function SkillDeltaMatrix({
  transferable,
  missingMandatory,
  recommended,
}: {
  transferable: string[];
  missingMandatory: string[];
  recommended: string[];
}) {
  return (
    <m.div
      className="grid gap-3 md:grid-cols-3"
      variants={listContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      <DeltaColumn
        title="Transferable strengths"
        tone="border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/40"
        items={transferable}
        emptyHint="Nothing matched yet. Tick more skills in the assessment."
      />
      <DeltaColumn
        title="Critical missing skills"
        tone="border-rose-200 bg-rose-50/60 dark:border-rose-900 dark:bg-rose-950/40"
        items={missingMandatory}
        emptyHint="No blocking gaps. Strong position."
      />
      <DeltaColumn
        title="Upskilling recommended"
        tone="border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/40"
        items={recommended}
        emptyHint="No recommended gaps."
      />
    </m.div>
  );
}
