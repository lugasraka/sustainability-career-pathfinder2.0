import Link from "next/link";
import { ArrowRightIcon, CompassIcon, TargetIcon, Wand2Icon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PathGrid } from "@/components/explorer/path-grid";
import { PillarChip } from "@/components/shared/pillar-chip";
import { PATHS } from "@/data/paths";
import { PILLAR_META, PILLAR_ORDER } from "@/lib/pillars";

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
            Build a career that heals the planet.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            An adaptive diagnostic scores your transferable skills across five
            pillars. You get a weighted match, a skill gap matrix, and a 90-day
            transition plan.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/assessment" className={buttonVariants({ size: "lg" })}>
              Take the free assessment
            </Link>
            <Link
              href="/careers"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Explore all 17 paths
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
        <PathGrid paths={PATHS.slice(0, 8)} />
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
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
            How it works
          </h2>
          <ol className="grid gap-4 md:grid-cols-4">
            {[
              { icon: CompassIcon, title: "Diagnose", text: "Background, technical skills, region and work style. Four adaptive steps." },
              { icon: Wand2Icon, title: "Match", text: "A deterministic skill-graph engine scores all 17 paths against your profile." },
              { icon: TargetIcon, title: "Close the gap", text: "Transferable strengths vs. critical missing skills, weighted by demand." },
              { icon: ArrowRightIcon, title: "Prove it", text: "A 90-day plan with proof-of-work briefs that impress hiring managers." },
            ].map((step, i) => (
              <li key={step.title}>
                <Card className="h-full gap-3 py-6">
                  <CardHeader>
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <step.icon aria-hidden className="size-5" />
                    </span>
                    <CardTitle className="text-base">
                      {i + 1}. {step.title}
                    </CardTitle>
                    <CardDescription>{step.text}</CardDescription>
                  </CardHeader>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Every role is scored across five pillars
        </h2>
        <p className="mb-8 text-muted-foreground">
          The same graph powers your assessment and every pathway requirement
          matrix.
        </p>
        <ul className="flex flex-wrap gap-3">
          {PILLAR_ORDER.map((pillar) => (
            <li key={pillar}>
              <PillarChip pillar={pillar} className="px-3 py-1.5 text-sm" />
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {Object.values(PILLAR_META).length} pillars · {PATHS.length} pathways · one
          deterministic match engine
        </p>
      </section>

      <section className="border-t bg-primary/5">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Find your highest-impact role.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            The assessment takes 3–5 minutes and saves your progress on your
            device. No account required.
          </p>
          <Link
            href="/assessment"
            className={cn(buttonVariants({ size: "lg" }), "mt-6")}
          >
            Start the assessment
            <ArrowRightIcon aria-hidden className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
