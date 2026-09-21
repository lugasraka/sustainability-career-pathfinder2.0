import type { Metadata } from "next";
import { ResultsView } from "@/components/results/results-view";

export const metadata: Metadata = {
  title: "Your Matches",
  description:
    "Your personalized career matches with match scores, five-pillar radar, skill-delta matrix and a 90-day transition plan.",
};

export default function ResultsPage() {
  return (
    <div className="px-4 py-12">
      <ResultsView />
    </div>
  );
}
