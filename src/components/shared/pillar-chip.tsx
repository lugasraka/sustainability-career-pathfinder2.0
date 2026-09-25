import Link from "next/link";
import { cn } from "@/lib/utils";
import { PILLAR_META } from "@/lib/pillars";
import type { Pillar } from "@/types/pathfinder";

export function PillarChip({
  pillar,
  className,
  href,
}: {
  pillar: Pillar;
  className?: string;
  href?: string;
}) {
  const meta = PILLAR_META[pillar];
  const chip = (
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

  if (!href) return chip;

  return (
    <Link
      href={href}
      className="inline-flex rounded-full transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      {chip}
    </Link>
  );
}
