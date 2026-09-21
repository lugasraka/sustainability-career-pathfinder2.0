import { cn } from "@/lib/utils";
import { PILLAR_META } from "@/lib/pillars";
import type { Pillar } from "@/types/pathfinder";

export function PillarChip({
  pillar,
  className,
}: {
  pillar: Pillar;
  className?: string;
}) {
  const meta = PILLAR_META[pillar];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium",
        meta.badge,
        className
      )}
    >
      <span className={cn("size-1.5 rounded-full", meta.dot)} />
      {meta.label}
    </span>
  );
}
