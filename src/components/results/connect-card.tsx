"use client";

import * as React from "react";
import { MessageSquareIcon, XIcon } from "lucide-react";
import { BrandMark } from "@/components/icons/brand-mark";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { buttonVariants } from "@/components/ui/button";
import { feedbackUrl, LINKEDIN_URL } from "@/lib/contact";

const DISMISS_KEY = "sus-pathfinder-connect-v1";

export function ConnectCard({ pathSlug }: { pathSlug?: string }) {
  const [mounted, setMounted] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    try {
      if (window.localStorage.getItem(DISMISS_KEY) === "1") {
        setDismissed(true);
      }
    } catch {
      // Storage unavailable (private mode); card stays dismissible per visit.
    }
  }, []);

  const dismiss = () => {
    setDismissed(true);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // No-op.
    }
  };

  if (!mounted || dismissed) return null;

  return (
    <section
      className="no-print relative rounded-xl border border-dashed p-6"
      aria-label="Connect with the builder"
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss"
        className="absolute top-3 right-3 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <XIcon aria-hidden className="size-4" />
      </button>

      <div className="flex flex-col items-start gap-4 pr-6 sm:flex-row sm:items-center">
        <BrandMark className="size-9 shrink-0" />
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-semibold">Built by Raka</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            The Pathfinder is free and independent. If it helped, or if
            something is missing, tell me. I read every reply.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            <LinkedinIcon aria-hidden className="size-4" />
            Connect on LinkedIn
          </a>
          <a
            href={feedbackUrl({ source: "results", path: pathSlug })}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <MessageSquareIcon aria-hidden className="size-4" />
            Send feedback
          </a>
        </div>
      </div>
    </section>
  );
}
