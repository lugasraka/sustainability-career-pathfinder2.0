export function ResultsSkeleton() {
  return (
    <div
      className="mx-auto max-w-5xl space-y-10"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="space-y-3">
        <div className="h-4 w-44 animate-pulse rounded bg-muted" />
        <div className="h-9 w-2/3 animate-pulse rounded bg-muted" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
        <div className="flex flex-wrap gap-2 pt-1">
          <div className="h-10 w-44 animate-pulse rounded-lg bg-muted" />
          <div className="h-10 w-36 animate-pulse rounded-lg bg-muted" />
          <div className="h-10 w-40 animate-pulse rounded-lg bg-muted" />
        </div>
      </div>
      <div className="rounded-xl border p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <div className="h-4 w-24 animate-pulse rounded bg-muted" />
            <div className="h-6 w-56 animate-pulse rounded bg-muted" />
          </div>
          <div className="h-10 w-20 animate-pulse rounded bg-muted" />
        </div>
        <div className="mt-5 h-72 w-full animate-pulse rounded-lg bg-muted/60" />
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="h-40 animate-pulse rounded-xl bg-muted/60" />
        <div className="h-40 animate-pulse rounded-xl bg-muted/60" />
        <div className="h-40 animate-pulse rounded-xl bg-muted/60" />
      </div>
      <span className="sr-only">Loading your matches…</span>
    </div>
  );
}
