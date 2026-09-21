export function WhyThisMatch({
  factors,
}: {
  factors: { label: string; delta?: number }[];
}) {
  return (
    <section
      className="rounded-xl border p-4"
      aria-label="Why this match"
    >
      <h3 className="text-sm font-semibold">Why this match</h3>
      <ul className="mt-2.5 space-y-2 text-sm text-muted-foreground">
        {factors.map((factor) => (
          <li key={factor.label} className="leading-snug">
            {factor.label}
            {typeof factor.delta === "number" && (
              <span
                className={
                  factor.delta >= 0
                    ? "ml-1.5 font-semibold tabular-nums text-emerald-600 dark:text-emerald-400"
                    : "ml-1.5 font-semibold tabular-nums text-rose-600 dark:text-rose-400"
                }
              >
                {factor.delta >= 0 ? "+" : ""}
                {factor.delta}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
