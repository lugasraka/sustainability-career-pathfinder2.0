"use client";

import * as React from "react";
import { SearchIcon, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PathGrid } from "@/components/explorer/path-grid";
import { PATHS } from "@/data/paths";
import { PATH_SKILLS } from "@/data/path-skills";
import { SKILLS } from "@/data/skills";
import { PILLAR_META, PILLAR_ORDER } from "@/lib/pillars";
import type { DemandLevel, Pillar } from "@/types/pathfinder";

const demandOptions: { value: DemandLevel | "all"; label: string }[] = [
  { value: "all", label: "All demand levels" },
  { value: "explosive", label: "Very high demand" },
  { value: "strong", label: "High demand" },
  { value: "emerging", label: "Growing demand" },
];

function FilterChip({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border bg-muted px-2.5 py-1 text-xs font-medium">
      {label}
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove filter ${label}`}
        className="rounded-full p-0.5 transition-colors hover:bg-background"
      >
        <XIcon aria-hidden className="size-3" />
      </button>
    </span>
  );
}

export function PathExplorer() {
  const [query, setQuery] = React.useState("");
  const [demand, setDemand] = React.useState<DemandLevel | "all">("all");
  const [pillar, setPillar] = React.useState<Pillar | "all">("all");

  const pillarSkillSet = React.useMemo(() => {
    const map = new Map<Pillar, Set<string>>();
    for (const p of PILLAR_ORDER) map.set(p, new Set());
    for (const s of SKILLS) map.get(s.pillar)?.add(s.slug);
    return map;
  }, []);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return PATHS.filter((path) => {
      if (demand !== "all" && path.demand !== demand) return false;
      if (pillar !== "all") {
        const required = (PATH_SKILLS[path.slug] ?? []).map((r) => r.skillSlug);
        const inPillar = pillarSkillSet.get(pillar) ?? new Set<string>();
        if (!required.some((s) => inPillar.has(s))) return false;
      }
      if (q) {
        const haystack = [
          path.title,
          path.tagline,
          ...path.frameworks,
          ...path.commonJobTitles.entry,
          ...path.commonJobTitles.mid,
          ...path.commonJobTitles.senior,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [query, demand, pillar, pillarSkillSet]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <SearchIcon
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search paths, frameworks or job titles…"
            className="pl-9"
            aria-label="Search career paths"
          />
        </div>
        <Select
          value={demand}
          onValueChange={(v) => setDemand(v as DemandLevel | "all")}
        >
          <SelectTrigger className="w-full sm:w-52" aria-label="Filter by demand">
            <SelectValue placeholder="Demand level" />
          </SelectTrigger>
          <SelectContent>
            {demandOptions.map((o) => (
              <SelectItem key={o.value} value={o.value} label={o.label}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={pillar}
          onValueChange={(v) => setPillar(v as Pillar | "all")}
        >
          <SelectTrigger className="w-full sm:w-56" aria-label="Filter by pillar">
            <SelectValue placeholder="Skill pillar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" label="All skill pillars">
              All skill pillars
            </SelectItem>
            {PILLAR_ORDER.map((p) => (
              <SelectItem
                key={p}
                value={p}
                label={PILLAR_META[p].label}
              >
                {PILLAR_META[p].label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {(query || demand !== "all" || pillar !== "all") && (
        <div className="flex flex-wrap items-center gap-2">
          {query && (
            <FilterChip label={`“${query.trim()}”`} onRemove={() => setQuery("")} />
          )}
          {demand !== "all" && (
            <FilterChip
              label={demandOptions.find((o) => o.value === demand)?.label ?? demand}
              onRemove={() => setDemand("all")}
            />
          )}
          {pillar !== "all" && (
            <FilterChip
              label={PILLAR_META[pillar].label}
              onRemove={() => setPillar("all")}
            />
          )}
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setDemand("all");
              setPillar("all");
            }}
            className="text-xs font-medium text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
          >
            Clear all
          </button>
        </div>
      )}

      <p className="text-sm text-muted-foreground" aria-live="polite">
        Showing {filtered.length} of {PATHS.length} paths
      </p>

      <PathGrid paths={filtered} />
    </div>
  );
}
