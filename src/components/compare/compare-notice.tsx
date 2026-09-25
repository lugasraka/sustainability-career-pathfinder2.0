"use client";

import { useSearchParams } from "next/navigation";

export function CompareNotice() {
  const params = useSearchParams();
  if (params.get("notice") !== "need-2") return null;
  return (
    <p
      role="status"
      aria-live="polite"
      className="mb-6 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm"
    >
      Pick at least 2 paths to compare — select two cards below, then hit
      Compare.
    </p>
  );
}
