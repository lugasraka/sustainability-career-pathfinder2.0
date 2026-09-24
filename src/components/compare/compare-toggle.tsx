"use client";

import * as React from "react";
import { GitCompareArrowsIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCompareStore } from "@/store/compare-store";

export function CompareToggle({
  slug,
  className,
  size = "sm",
}: {
  slug: string;
  className?: string;
  size?: "sm" | "md";
}) {
  const [mounted, setMounted] = React.useState(false);
  const active = useCompareStore((s) => s.slugs.includes(slug));
  const toggle = useCompareStore((s) => s.toggle);

  React.useEffect(() => setMounted(true), []);

  const isActive = mounted && active;

  return (
    <button
      type="button"
      aria-pressed={isActive}
      aria-label={isActive ? "Remove from compare" : "Add to compare"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      className={cn(
        "relative z-[2] inline-flex shrink-0 items-center gap-1.5 rounded-full border font-medium transition-colors",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm",
        isActive
          ? "border-primary bg-primary/10 text-primary"
          : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground",
        className
      )}
    >
      <GitCompareArrowsIcon aria-hidden className="size-3.5" />
      {isActive ? "Added" : "Compare"}
    </button>
  );
}
