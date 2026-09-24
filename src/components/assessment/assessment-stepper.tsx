import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const STEP_LABELS = [
  "Background",
  "Technical Skills",
  "Region & Frameworks",
  "Working Style",
];

export function AssessmentStepper({
  current,
  className,
}: {
  current: number;
  className?: string;
}) {
  return (
    <ol
      className={cn("grid grid-cols-4 gap-2", className)}
      aria-label={`Progress: step ${current + 1} of ${STEP_LABELS.length}`}
    >
      {STEP_LABELS.map((label, i) => {
        const state =
          i < current ? "done" : i === current ? "active" : "upcoming";
        return (
          <li
            key={label}
            className="flex flex-col gap-2"
            aria-current={state === "active" ? "step" : undefined}
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors",
                  state === "done" && "border-primary bg-primary text-primary-foreground",
                  state === "active" && "border-primary bg-primary text-primary-foreground",
                  state === "upcoming" && "border-border bg-muted text-muted-foreground"
                )}
              >
                {state === "done" ? (
                  <CheckIcon className="size-3.5 motion-safe:animate-in motion-safe:zoom-in-50 motion-safe:fade-in-0 motion-safe:duration-200" />
                ) : (
                  i + 1
                )}
              </span>
              <span
                className={cn(
                  "hidden text-xs font-medium sm:block",
                  state === "upcoming" ? "text-muted-foreground" : "text-foreground"
                )}
              >
                {label}
              </span>
            </div>
            <span
              aria-hidden
              className="relative h-1 overflow-hidden rounded-full bg-border"
            >
              <span
                className={cn(
                  "absolute inset-0 origin-left rounded-full bg-primary transition-transform duration-300 ease-out",
                  state === "upcoming" ? "scale-x-0" : "scale-x-100"
                )}
              />
            </span>
          </li>
        );
      })}
    </ol>
  );
}
