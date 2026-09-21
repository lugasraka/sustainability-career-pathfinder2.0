import type { Metadata } from "next";
import { PathExplorer } from "@/components/explorer/path-explorer";

export const metadata: Metadata = {
  title: "Explore Sustainability Career Paths",
  description:
    "Browse 17 specialized sustainability career pathways with roadmaps, skill matrices, frameworks, certifications and portfolio projects.",
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Explore sustainability career paths
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          17 specialized pathways. Each one has a skill matrix, recommended
          frameworks, certifications and proof-of-work portfolio projects.
        </p>
      </header>
      <PathExplorer />
    </div>
  );
}
