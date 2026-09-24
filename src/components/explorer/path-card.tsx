import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DemandBadge } from "@/components/explorer/demand-badge";
import { FrameworkChip } from "@/components/explorer/framework-chip";
import { PathIcon } from "@/components/shared/path-icon";
import { cn } from "@/lib/utils";
import type { CareerPath } from "@/types/pathfinder";

export type PathCardAnimation = "entrance" | "filter" | "none";

const ENTRANCE =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-300 motion-safe:fill-mode-both motion-safe:ease-out-quart";
const FILTER =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150 motion-safe:fill-mode-both motion-safe:ease-out-quart";

export function PathCard({
  path,
  index = 0,
  animate = "entrance",
}: {
  path: CareerPath;
  index?: number;
  animate?: PathCardAnimation;
}) {
  const delay = Math.min(index, 7) * (animate === "filter" ? 25 : 45);

  return (
    <Link
      href={`/careers/${path.slug}`}
      className={cn(
        "group block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        animate === "filter" && FILTER,
        animate === "entrance" && ENTRANCE
      )}
      style={
        animate !== "none" && delay ? { animationDelay: `${delay}ms` } : undefined
      }
    >
      <Card className="flex h-full flex-col gap-3 py-6 transition-[transform,box-shadow] duration-200 ease-out-quart group-hover:-translate-y-1 group-hover:shadow-lg group-hover:ring-primary/40 group-focus-visible:-translate-y-1 group-focus-visible:shadow-lg group-focus-visible:ring-primary/40">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <PathIcon
              slug={path.slug}
              className="transition-[transform,background-color] duration-200 ease-out-quart group-hover:scale-110 group-hover:bg-primary/15 group-focus-visible:scale-110 group-focus-visible:bg-primary/15"
            />
            <DemandBadge demand={path.demand} />
          </div>
          <CardTitle className="text-base leading-snug">
            {path.title}
          </CardTitle>
          <CardDescription className="text-sm">
            {path.tagline}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-1.5">
            {path.frameworks.slice(0, 3).map((f) => (
              <FrameworkChip key={f} label={f} />
            ))}
            {path.frameworks.length > 3 && (
              <FrameworkChip label={`+${path.frameworks.length - 3}`} />
            )}
          </div>
        </CardContent>
        <CardFooter className="text-sm font-medium text-primary">
          View path
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1"
          />
        </CardFooter>
      </Card>
    </Link>
  );
}
