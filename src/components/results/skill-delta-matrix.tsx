import { skillName } from "@/data/skills";
import { cn } from "@/lib/utils";

function DeltaColumn({
  title,
  tone,
  items,
  emptyHint,
}: {
  title: string;
  tone: string;
  items: string[];
  emptyHint: string;
}) {
  return (
    <section
      className={cn(
        "flex flex-col gap-3 rounded-xl border p-4",
        tone
      )}
      aria-label={title}
    >
      <h4 className="text-sm font-semibold">{title}</h4>
      {items.length === 0 ? (
        <p className="text-sm text-muted-foreground">{emptyHint}</p>
      ) : (
        <ul className="space-y-1.5 text-sm">
          {items.map((slug) => (
            <li key={slug} className="leading-snug">
              • {skillName(slug)}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function SkillDeltaMatrix({
  transferable,
  missingMandatory,
  recommended,
}: {
  transferable: string[];
  missingMandatory: string[];
  recommended: string[];
}) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <DeltaColumn
        title="Transferable strengths"
        tone="border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/40"
        items={transferable}
        emptyHint="Nothing matched yet. Tick more skills in the assessment."
      />
      <DeltaColumn
        title="Critical missing skills"
        tone="border-rose-200 bg-rose-50/60 dark:border-rose-900 dark:bg-rose-950/40"
        items={missingMandatory}
        emptyHint="No blocking gaps. Strong position."
      />
      <DeltaColumn
        title="Upskilling recommended"
        tone="border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/40"
        items={recommended}
        emptyHint="No recommended gaps."
      />
    </div>
  );
}
