"use client";

import * as m from "motion/react-m";
import { listContainer, listItem, SPRING_SNAPPY } from "@/lib/motion/presets";

export function WhyThisMatch({
  factors,
}: {
  factors: { label: string; delta?: number }[];
}) {
  return (
    <m.section
      className="rounded-xl border p-4"
      aria-label="Why this match"
      variants={listContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      <h3 className="text-sm font-semibold">Why this match</h3>
      <ul className="mt-2.5 space-y-2 text-sm text-muted-foreground">
        {factors.map((factor) => (
          <m.li key={factor.label} className="leading-snug" variants={listItem}>
            {factor.label}
            {typeof factor.delta === "number" && (
              <m.span
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: SPRING_SNAPPY,
                  },
                }}
                className={
                  factor.delta >= 0
                    ? "ml-1.5 inline-block font-semibold tabular-nums text-emerald-600 dark:text-emerald-400"
                    : "ml-1.5 inline-block font-semibold tabular-nums text-rose-600 dark:text-rose-400"
                }
              >
                {factor.delta >= 0 ? "+" : ""}
                {factor.delta}
              </m.span>
            )}
          </m.li>
        ))}
      </ul>
    </m.section>
  );
}
