import type { Metadata } from "next";
import { ResultsView } from "@/components/results/results-view";
import { computeAllMatches } from "@/lib/scoring/compute-all-matches";
import { decodeShareState } from "@/lib/share-link";

interface ResultsPageProps {
  searchParams: Promise<{ d?: string | string[] }>;
}

export async function generateMetadata({
  searchParams,
}: ResultsPageProps): Promise<Metadata> {
  const raw = (await searchParams).d;
  const d = Array.isArray(raw) ? raw[0] : raw;
  const state = d ? decodeShareState(d) : null;

  if (!state || !d) {
    return {
      title: "Your Matches",
      description:
        "Your personalized career matches with match scores, five-pillar radar, skill-delta matrix and a 90-day transition plan.",
      robots: { index: false, follow: false },
    };
  }

  const top = computeAllMatches(state)[0];
  const title = `${top.matchScore}% match · ${top.pathTitle}`;
  const description = `Top match: ${top.pathTitle} at ${top.matchScore}%. See the score breakdown, skill gaps and a 90-day transition plan.`;
  const image = `/api/og?d=${encodeURIComponent(d)}`;

  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      type: "website",
      siteName: "Sustainability Career Pathfinder 2.0",
      locale: "en_US",
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function ResultsPage() {
  return (
    <div className="px-4 py-12">
      <ResultsView />
    </div>
  );
}
