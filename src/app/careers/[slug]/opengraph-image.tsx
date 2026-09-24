import { ImageResponse } from "next/og";
import { getPath } from "@/data/paths";
import { PATH_SKILLS } from "@/data/path-skills";
import { DefaultCard, OG_ALT, OG_SIZE, PathCardImage, ogSiteHost } from "@/lib/og/cards";
import { loadOgFonts } from "@/lib/og/fonts";
import { SITE_URL } from "@/lib/site-url";

export const size = OG_SIZE;
export const alt = OG_ALT;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const path = getPath(slug);
  const fonts = loadOgFonts();
  const siteHost = ogSiteHost(SITE_URL);

  if (!path) {
    return new ImageResponse(<DefaultCard siteHost={siteHost} />, {
      ...OG_SIZE,
      fonts,
    });
  }

  return new ImageResponse(
    <PathCardImage
      siteHost={siteHost}
      title={path.title}
      tagline={path.tagline}
      demand={path.demand}
      frameworks={path.frameworks}
      skillCount={(PATH_SKILLS[slug] ?? []).length}
    />,
    {
      ...OG_SIZE,
      fonts,
    }
  );
}
