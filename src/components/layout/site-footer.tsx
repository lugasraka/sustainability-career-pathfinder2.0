import Link from "next/link";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { BrandMark } from "@/components/icons/brand-mark";

const SITEMAP = [
  { href: "/careers", label: "Career Paths" },
  { href: "/pillars", label: "Skill Pillars" },
  { href: "/skills", label: "Glossary" },
  { href: "/assessment", label: "Assessment" },
  { href: "/results", label: "My Results" },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-sm font-medium whitespace-nowrap">
            <BrandMark className="size-6" />
            Sustainability Career Pathfinder 2.0
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {SITEMAP.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded whitespace-nowrap hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p className="whitespace-nowrap">
            17 pathways · 5 skill pillars · 100% free
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/lugasraka/"
                target="_blank"
                rel="noreferrer"
                aria-label="Raka Adrianto on LinkedIn"
                className="inline-flex items-center gap-1.5 rounded whitespace-nowrap hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                <LinkedinIcon aria-hidden className="size-4" />
                Built by Raka Adrianto
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lugasraka/sustainability-career-pathfinder2.0"
                target="_blank"
                rel="noreferrer"
                aria-label="Source code on GitHub"
                className="inline-flex items-center gap-1.5 rounded whitespace-nowrap hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                <GithubIcon aria-hidden className="size-4" />
                Source
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
