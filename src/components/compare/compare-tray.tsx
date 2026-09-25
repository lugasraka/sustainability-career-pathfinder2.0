"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { GitCompareArrowsIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PathIcon } from "@/components/shared/path-icon";
import { getPath } from "@/data/paths";
import { COMPARE_MIN, compareUrl } from "@/lib/compare";
import { useCompareStore } from "@/store/compare-store";

export function CompareTray() {
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const slugs = useCompareStore((s) => s.slugs);
  const lastEvicted = useCompareStore((s) => s.lastEvicted);
  const remove = useCompareStore((s) => s.remove);
  const clear = useCompareStore((s) => s.clear);
  const clearEvictionNotice = useCompareStore((s) => s.clearEvictionNotice);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!lastEvicted) return;
    const t = setTimeout(() => clearEvictionNotice(), 4000);
    return () => clearTimeout(t);
  }, [lastEvicted, clearEvictionNotice]);

  if (!mounted || slugs.length === 0 || pathname === "/careers/compare") {
    return null;
  }

  const ready = slugs.length >= COMPARE_MIN;
  const evictedTitle = lastEvicted ? getPath(lastEvicted)?.title ?? lastEvicted : null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4"
      role="region"
      aria-label="Compare tray"
    >
      <div className="pointer-events-auto flex w-full max-w-2xl flex-col gap-2 rounded-2xl border bg-background/95 p-3 shadow-lg backdrop-blur motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-200 motion-safe:fill-mode-both">
        {evictedTitle && (
          <p role="status" aria-live="polite" className="text-xs text-muted-foreground">
            Compare holds max 3 — replaced {evictedTitle} with the latest pick.
          </p>
        )}
        <div className="flex w-full flex-wrap items-center gap-3">
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground">
            Compare
          </span>
          {slugs.map((slug) => {
            const path = getPath(slug);
            if (!path) return null;
            return (
              <span
                key={slug}
                className="inline-flex max-w-48 items-center gap-1.5 rounded-full border bg-muted py-1 pr-1 pl-2 text-xs font-medium"
              >
                <PathIcon slug={slug} className="size-5 [&_svg]:size-3" />
                <span className="truncate">{path.title}</span>
                <button
                  type="button"
                  onClick={() => remove(slug)}
                  aria-label={`Remove ${path.title} from compare`}
                  className="rounded-full p-0.5 transition-colors hover:bg-background focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <XIcon aria-hidden className="size-3" />
                </button>
              </span>
            );
          })}
          {slugs.length < COMPARE_MIN && (
            <span className="text-xs text-muted-foreground">
              Pick one more path to compare
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            onClick={clear}
          >
            Clear
          </Button>
          <Button
            size="sm"
            disabled={!ready}
            onClick={() => router.push(compareUrl(slugs))}
          >
            <GitCompareArrowsIcon aria-hidden className="size-4" />
            Compare {ready ? `(${slugs.length})` : ""}
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
}
