"use client";

import * as React from "react";
import {
  animate,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import { EASE_OUT } from "@/lib/motion/presets";

const round = (latest: number) => Math.round(latest);

export function useCountUp(
  target: number,
  {
    duration = 0.6,
    delay = 0,
    start = true,
  }: { duration?: number; delay?: number; start?: boolean } = {}
): MotionValue<number> {
  const raw = useMotionValue(0);
  const display = useTransform(raw, round);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (!start) return;
    if (reduceMotion) {
      raw.set(target);
      return;
    }
    const controls = animate(raw, target, {
      duration,
      delay,
      ease: EASE_OUT,
    });
    return () => controls.stop();
  }, [target, duration, delay, start, reduceMotion, raw]);

  return display;
}
