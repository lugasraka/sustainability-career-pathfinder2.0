"use client";

import * as m from "motion/react-m";
import { useCountUp } from "@/lib/hooks/use-count-up";

export function ScoreValue({
  value,
  start = true,
  delay = 0,
  duration = 0.6,
}: {
  value: number;
  start?: boolean;
  delay?: number;
  duration?: number;
}) {
  const count = useCountUp(value, { start, delay, duration });
  return <m.span>{count}</m.span>;
}
