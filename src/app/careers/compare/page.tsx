import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CompareView } from "@/components/compare/compare-view";
import { getPath } from "@/data/paths";
import { COMPARE_MIN, parseCompareParam } from "@/lib/compare";
import { cn } from "@/lib/utils";

const ENTER =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-300 motion-safe:fill-mode-both motion-safe:ease-out-quart";

interface ComparePageProps {
  searchParams: Promise<{ paths?: string | string[] }>;
}

export async function generateMetadata({
  searchParams,
}: ComparePageProps): Promise<Metadata> {
  const slugs = parseCompareParam((await searchParams).paths);
  const titles = slugs
    .map((slug) => getPath(slug)?.title)
    .filter((title): title is string => !!title);
  if (titles.length < COMPARE_MIN) {
    return {
      title: "Compare career paths",
      robots: { index: false },
    };
  }
  const description = `Side-by-side comparison of ${titles.join(
    " vs "
  )}: shared skills, unique skills, pillar coverage, certifications and portfolio projects.`;
  const image = `/api/og?paths=${encodeURIComponent(slugs.join(","))}`;
  return {
    title: titles.join(" vs "),
    description,
    robots: { index: false },
    openGraph: {
      type: "website",
      siteName: "Sustainability Career Pathfinder 2.0",
      locale: "en_US",
      title: titles.join(" vs "),
      description,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: titles.join(" vs "),
      description,
      images: [image],
    },
  };
}

export default async function ComparePage({ searchParams }: ComparePageProps) {
  const slugs = parseCompareParam((await searchParams).paths);
  if (slugs.length < COMPARE_MIN) redirect("/careers");

  const titles = slugs
    .map((slug) => getPath(slug)?.title)
    .filter((title): title is string => !!title);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <nav
        aria-label="Breadcrumb"
        className={cn("mb-6 text-sm text-muted-foreground", ENTER)}
      >
        <ol className="flex items-center gap-2">
          <li>
            <Link
              href="/careers"
              className="rounded transition-colors hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              Career Paths
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-foreground">
            Compare
          </li>
        </ol>
      </nav>

      <header className={cn("mb-8 space-y-3", ENTER, "delay-75")}>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Compare career paths
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          {titles.join(" vs ")} — shared skills, unique gaps, pillar coverage
          and credentials, side by side.
        </p>
      </header>

      <CompareView slugs={slugs} />
    </div>
  );
}
