"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useReducedMotion } from "motion/react";
import { PILLAR_META, PILLAR_ORDER } from "@/lib/pillars";
import type { PillarScore } from "@/types/pathfinder";

export function PillarRadar({ scores }: { scores: PillarScore[] }) {
  const reduceMotion = useReducedMotion();
  const data = PILLAR_ORDER.map((pillar) => {
    const found = scores.find((s) => s.pillar === pillar);
    return {
      pillar,
      label: PILLAR_META[pillar].label,
      pct: found?.pct ?? 0,
    };
  });

  return (
    <div className="h-72 w-full" role="img" aria-label="Five-pillar skill coverage radar chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="70%">
          <PolarAngleAxis
            dataKey="label"
            tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
          />
          <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
          <PolarGrid stroke="var(--border)" />
          <Radar
            name="Coverage"
            dataKey="pct"
            stroke="var(--primary)"
            fill="var(--primary)"
            fillOpacity={0.18}
            strokeWidth={2}
            isAnimationActive={!reduceMotion}
            animationDuration={700}
            animationBegin={120}
            animationEasing="ease-out"
          />
          <Tooltip
            formatter={(value) => [`${value}%`, "Coverage"]}
            contentStyle={{
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--popover)",
              color: "var(--popover-foreground)",
              fontSize: 12,
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
