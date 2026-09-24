import { ImageResponse } from "next/og";
import { DefaultCard, OG_ALT, OG_SIZE, ogSiteHost } from "@/lib/og/cards";
import { loadOgFonts } from "@/lib/og/fonts";
import { SITE_URL } from "@/lib/site-url";

export const size = OG_SIZE;
export const alt = OG_ALT;

export default async function Image() {
  return new ImageResponse(<DefaultCard siteHost={ogSiteHost(SITE_URL)} />, {
    ...OG_SIZE,
    fonts: loadOgFonts(),
  });
}
