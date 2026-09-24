"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span aria-hidden className="inline-block size-8 shrink-0" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span
        key={isDark ? "dark" : "light"}
        className="inline-flex motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-75 motion-safe:duration-200 motion-safe:fill-mode-both motion-safe:ease-out-quart"
      >
        {isDark ? (
          <MoonIcon aria-hidden className="size-4" />
        ) : (
          <SunIcon aria-hidden className="size-4" />
        )}
      </span>
    </Button>
  );
}
