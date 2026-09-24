"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const ENTER =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-300 motion-safe:fill-mode-both motion-safe:ease-out-quart";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState<"idle" | "static" | "hidden" | "shown">(
    "idle"
  );

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") {
      setState("static");
      return;
    }
    const rect = element.getBoundingClientRect();
    const viewport =
      window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewport * 0.9 && rect.bottom > 0) {
      setState("static");
      return;
    }
    setState("hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        className,
        state === "hidden" && "motion-safe:opacity-0",
        state === "shown" && ENTER
      )}
      style={state === "shown" && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
