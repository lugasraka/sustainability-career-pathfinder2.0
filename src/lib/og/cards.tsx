import type { ReactNode } from "react";
import { DEMAND_META } from "@/lib/pillars";

const BG = "linear-gradient(135deg, #062e21 0%, #0b4531 55%, #0e5c40 100%)";
const WHITE = "#f8fafc";
const MUTED = "#a7c8b8";
const ACCENT = "#34d399";
const CHIP_BORDER = "rgba(167, 200, 184, 0.35)";

const SANS = "Inter, sans-serif";
const DISPLAY = "'Bricolage Grotesque', Inter, sans-serif";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_ALT = "Sustainability Career Pathfinder 2.0";

export function ogSiteHost(siteUrl: string): string {
  const { host } = new URL(siteUrl);
  if (host.startsWith("localhost") || host.startsWith("127.0.0.1")) {
    return "sustainability-career-pathfinder20.vercel.app";
  }
  return host;
}

function text(
  size: number,
  options: {
    color?: string;
    weight?: number;
    font?: string;
    letterSpacing?: string;
    lineHeight?: string;
  } = {}
) {
  return {
    color: options.color ?? WHITE,
    fontSize: size,
    fontWeight: options.weight ?? 400,
    fontFamily: options.font ?? SANS,
    letterSpacing: options.letterSpacing ?? "0px",
    lineHeight: options.lineHeight ?? "1.2",
    flexShrink: 0,
  } as const;
}

function chip(accent = false) {
  return {
    display: "flex",
    alignItems: "center",
    padding: "8px 18px",
    borderRadius: 999,
    border: `2px solid ${accent ? ACCENT : CHIP_BORDER}`,
    background: accent ? "rgba(52, 211, 153, 0.14)" : "rgba(255,255,255,0.06)",
    color: accent ? ACCENT : MUTED,
    fontSize: 22,
    fontWeight: 600,
    fontFamily: SANS,
    flexShrink: 0,
  } as const;
}

export function OgFrame({
  siteHost,
  label,
  children,
}: {
  siteHost: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: 56,
        background: BG,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: ACCENT,
              display: "flex",
            }}
          />
          <div style={text(28, { weight: 600, letterSpacing: "-0.4px" })}>
            Sustainability Career Pathfinder
          </div>
        </div>
        {label && (
          <div style={text(22, { color: MUTED, weight: 500 })}>{label}</div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          gap: 24,
        }}
      >
        {children}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={text(24, { color: MUTED, weight: 500 })}>{siteHost}</div>
        <div style={text(22, { color: ACCENT, weight: 600 })}>
          Free, no sign-up, 4-minute assessment
        </div>
      </div>
    </div>
  );
}

export function DefaultCard({ siteHost }: { siteHost: string }) {
  return (
    <OgFrame siteHost={siteHost}>
      <div
        style={text(68, {
          font: DISPLAY,
          weight: 700,
          lineHeight: "1.06",
          letterSpacing: "-1.5px",
        })}
      >
        Find the sustainability career that fits your skills
      </div>
      <div style={text(30, { color: MUTED, lineHeight: "1.4" })}>
        Score your transferable skills against 17 pathways, with skill gaps,
        certifications and a 90-day plan.
      </div>
      <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
        <div style={chip(true)}>17 career paths</div>
        <div style={chip()}>129 skills mapped</div>
        <div style={chip()}>Weighted match engine</div>
      </div>
    </OgFrame>
  );
}

export function ResultCard({
  siteHost,
  score,
  topTitle,
  runnersUp,
  backgroundLabel,
  skillsAudited,
}: {
  siteHost: string;
  score: number;
  topTitle: string;
  runnersUp: string[];
  backgroundLabel?: string;
  skillsAudited?: number;
}) {
  return (
    <OgFrame siteHost={siteHost} label="Your result">
      <div
        style={text(26, {
          color: ACCENT,
          weight: 700,
          letterSpacing: "3px",
        })}
      >
        YOUR STRONGEST MATCH
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 24,
        }}
      >
        <div
          style={text(110, {
            font: DISPLAY,
            weight: 700,
            letterSpacing: "-3px",
          })}
        >
          {`${score}%`}
        </div>
        <div
          style={text(54, {
            font: DISPLAY,
            weight: 700,
            letterSpacing: "-1px",
          })}
        >
          match
        </div>
      </div>
      <div
        style={text(50, {
          font: DISPLAY,
          weight: 700,
          letterSpacing: "-1px",
          lineHeight: "1.15",
        })}
      >
        {topTitle}
      </div>
      {runnersUp.length > 0 && (
        <div style={text(27, { color: MUTED, weight: 500 })}>
          {runnersUp.map((title, i) => `#${i + 2} ${title}`).join("   /   ")}
        </div>
      )}
      <div style={{ display: "flex", gap: 14, marginTop: 6 }}>
        {backgroundLabel && (
          <div style={chip(true)}>Background: {backgroundLabel}</div>
        )}
        {typeof skillsAudited === "number" && (
          <div style={chip()}>{`${skillsAudited} skills audited`}</div>
        )}
        <div style={chip()}>90-day transition plan</div>
      </div>
    </OgFrame>
  );
}

export function CompareCard({
  siteHost,
  titles,
}: {
  siteHost: string;
  titles: string[];
}) {
  return (
    <OgFrame siteHost={siteHost} label="Path compare">
      <div
        style={text(26, { color: ACCENT, weight: 700, letterSpacing: "3px" })}
      >
        SIDE-BY-SIDE COMPARE
      </div>
      <div
        style={text(58, {
          font: DISPLAY,
          weight: 700,
          letterSpacing: "-1.5px",
          lineHeight: "1.12",
        })}
      >
        {titles.join(" vs ")}
      </div>
      <div style={text(29, { color: MUTED, lineHeight: "1.4" })}>
        Shared skills, unique gaps, pillar coverage and credentials, compared
        in one view.
      </div>
    </OgFrame>
  );
}

export function PathCardImage({
  siteHost,
  title,
  tagline,
  demand,
  frameworks,
  skillCount,
}: {
  siteHost: string;
  title: string;
  tagline: string;
  demand: keyof typeof DEMAND_META;
  frameworks: string[];
  skillCount: number;
}) {
  return (
    <OgFrame siteHost={siteHost} label="Career path">
      <div
        style={text(26, { color: ACCENT, weight: 700, letterSpacing: "3px" })}
      >
        CAREER ROADMAP
      </div>
      <div
        style={text(64, {
          font: DISPLAY,
          weight: 700,
          letterSpacing: "-1.5px",
          lineHeight: "1.08",
        })}
      >
        {title}
      </div>
      <div style={text(29, { color: MUTED, lineHeight: "1.4" })}>{tagline}</div>
      <div style={{ display: "flex", gap: 14, marginTop: 6 }}>
        <div style={chip(true)}>{DEMAND_META[demand].label}</div>
        <div style={chip()}>{`${skillCount} skills in matrix`}</div>
        {frameworks.slice(0, 2).map((f) => (
          <div key={f} style={chip()}>
            {f}
          </div>
        ))}
      </div>
    </OgFrame>
  );
}
