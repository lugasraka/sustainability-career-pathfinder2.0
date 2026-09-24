import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { getPath } from "@/data/paths";
import { parseCompareParam } from "@/lib/compare";
import {
  CompareCard,
  DefaultCard,
  OG_SIZE,
  ResultCard,
  ogSiteHost,
} from "@/lib/og/cards";
import { loadOgFonts } from "@/lib/og/fonts";
import { BACKGROUND_META } from "@/lib/pillars";
import { computeAllMatches } from "@/lib/scoring/compute-all-matches";
import { decodeShareState } from "@/lib/share-link";
import { SITE_URL } from "@/lib/site-url";

const CACHE_HEADERS = {
  "Cache-Control":
    "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
};

export async function GET(request: NextRequest) {
  const fonts = loadOgFonts();
  const siteHost = ogSiteHost(SITE_URL);
  const params = request.nextUrl.searchParams;
  const share = params.get("d");
  const compare = params.get("paths");

  let element = <DefaultCard siteHost={siteHost} />;

  if (share) {
    const state = decodeShareState(share);
    if (state) {
      const results = computeAllMatches(state);
      const top = results[0];
      element = (
        <ResultCard
          siteHost={siteHost}
          score={top.matchScore}
          topTitle={top.pathTitle}
          runnersUp={results.slice(1, 3).map((r) => r.pathTitle)}
          backgroundLabel={BACKGROUND_META[state.background]?.label}
          skillsAudited={state.selectedSkillSlugs.length}
        />
      );
    }
  } else if (compare) {
    const titles = parseCompareParam(compare)
      .map((slug) => getPath(slug)?.title)
      .filter((title): title is string => !!title);
    if (titles.length >= 2) {
      element = <CompareCard siteHost={siteHost} titles={titles} />;
    }
  }

  return new ImageResponse(element, {
    ...OG_SIZE,
    fonts,
    headers: CACHE_HEADERS,
  });
}
