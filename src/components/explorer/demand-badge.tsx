import { cn } from "@/lib/utils";
import { DEMAND_META } from "@/lib/pillars";
import type { DemandLevel } from "@/types/pathfinder";

export function DemandBadge({
  demand,
  className,
}: {
  demand: DemandLevel;
  className?: string;
}) {
  const meta = DEMAND_META[demand];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap",
        meta.className,
        className
      )}
    >
      {meta.label}
    </span>
  );
}
