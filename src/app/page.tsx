import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PathGrid } from "@/components/explorer/path-grid";
import { PATHS } from "@/data/paths";
import { cn } from "@/lib/utils";
import type { DemandLevel } from "@/types/pathfinder";

const DEMAND_RANK: Record<DemandLevel, number> = {
  explosive: 0,
  strong: 1,
  emerging: 2,
};

const FEATURED_PATHS = PATHS.map((path, index) => ({ path, index }))
  .sort(
    (a, b) =>
      DEMAND_RANK[a.path.demand] - DEMAND_RANK[b.path.demand] ||
      a.index - b.index
  )
  .slice(0, 6)
  .map((entry) => entry.path);

const HOW_IT_WORKS = [
  {
    step: "Diagnose",
    text: "Four quick steps on background, skills, region and work style, or upload your CV to prefill skills.",
  },
  {
    step: "Match",
    text: "The skill-graph engine ranks all 17 paths with transparent scores.",
  },
  {
    step: "Close the gap",
    text: "Transferable strengths vs. critical missing skills, weighted by demand.",
  },
  {
    step: "Prove it",
    text: "A 90-day plan with proof-of-work briefs that impress hiring managers.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:py-28 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-500">
          <Badge
            variant="outline"
            className="mb-5 border-primary/30 bg-primary/10 text-primary"
          >
            Pathfinder 2.0 · skill-graph driven
          </Badge>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Map your move into sustainability work.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            An adaptive diagnostic scores your transferable skills across five
            pillars. You get a weighted match, a skill gap matrix, and a 90-day
            transition plan.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Link
              href="/assessment"
              className={buttonVariants({ size: "lg" })}
            >
              Find my match
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              or browse the 17 paths
              <ArrowRightIcon aria-hidden className="size-4" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            3–5 minutes · 17 specialized paths · 100% free
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Featured career paths
            </h2>
            <p className="mt-1 text-muted-foreground">
              The most in-demand pathways right now.
            </p>
          </div>
          <Link
            href="/careers"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden sm:inline-flex"
            )}
          >
            View all 17
            <ArrowRightIcon aria-hidden className="size-4" />
          </Link>
        </div>
        <PathGrid paths={FEATURED_PATHS} />
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/careers"
            className={buttonVariants({ variant: "outline" })}
          >
            View all 17 paths
          </Link>
        </div>
      </section>

      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="mb-6 text-xl font-bold tracking-tight">
            How it works
          </h2>
          <ol className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((item, i) => (
              <li key={item.step}>
                <p className="text-sm font-semibold text-primary">
                  {i + 1}. {item.step}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
