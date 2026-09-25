import type { Metadata } from "next";
import * as React from "react";
import { CompareNotice } from "@/components/compare/compare-notice";
import { CompareTray } from "@/components/compare/compare-tray";
import { PathExplorer } from "@/components/explorer/path-explorer";
import { cn } from "@/lib/utils";

const ENTER =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-300 motion-safe:fill-mode-both motion-safe:ease-out-quart";

export const metadata: Metadata = {
  title: "Explore Sustainability Career Paths",
  description:
    "Browse 17 specialized sustainability career pathways with roadmaps, skill matrices, frameworks, certifications and portfolio projects.",
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 pb-28">
      <React.Suspense fallback={null}>
        <CompareNotice />
      </React.Suspense>
      <header className="mb-10">
        <h1
          className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl",
            ENTER
          )}
        >
          Explore sustainability career paths
        </h1>
        <p
          className={cn(
            "mt-2 max-w-2xl text-muted-foreground",
            ENTER,
            "delay-75"
          )}
        >
          17 specialized pathways. Each one has a skill matrix, recommended
          frameworks, certifications and proof-of-work portfolio projects.
        </p>
      </header>
      <PathExplorer />
      <CompareTray />
    </div>
  );
}
