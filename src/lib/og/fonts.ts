import { decodeFont } from "./font-data";

export interface OgFont {
  name: string;
  data: ArrayBuffer;
  weight?: 400 | 500 | 600 | 700;
  style?: "normal" | "italic";
}

export function loadOgFonts(): OgFont[] {
  return [
    { name: "Inter", data: decodeFont("interRegular"), weight: 400, style: "normal" },
    { name: "Inter", data: decodeFont("interMedium"), weight: 500, style: "normal" },
    { name: "Inter", data: decodeFont("interSemiBold"), weight: 600, style: "normal" },
    { name: "Inter", data: decodeFont("interBold"), weight: 700, style: "normal" },
    {
      name: "Bricolage Grotesque",
      data: decodeFont("bricolageBold"),
      weight: 700,
      style: "normal",
    },
  ];
}
