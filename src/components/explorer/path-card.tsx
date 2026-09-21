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
import type { CareerPath } from "@/types/pathfinder";

export function PathCard({ path }: { path: CareerPath }) {
  return (
    <Link
      href={`/careers/${path.slug}`}
      className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
    >
      <Card className="flex h-full flex-col gap-3 py-6 transition-all group-hover:border-primary/40 group-hover:shadow-md">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <span className="text-3xl" aria-hidden>
              {path.emoji}
            </span>
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
            className="size-4 transition-transform group-hover:translate-x-1"
          />
        </CardFooter>
      </Card>
    </Link>
  );
}
