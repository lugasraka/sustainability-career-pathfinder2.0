import { PathCard } from "@/components/explorer/path-card";
import { cn } from "@/lib/utils";
import type { CareerPath } from "@/types/pathfinder";

export function PathGrid({
  paths,
  className,
}: {
  paths: CareerPath[];
  className?: string;
}) {
  if (paths.length === 0) {
    return (
      <div className="rounded-xl border border-dashed py-16 text-center text-muted-foreground">
        No paths match your filters. Try clearing them.
      </div>
    );
  }
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {paths.map((path) => (
        <PathCard key={path.slug} path={path} />
      ))}
    </div>
  );
}
