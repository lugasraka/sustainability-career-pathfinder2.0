import Link from "next/link";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { BrandMark } from "@/components/icons/brand-mark";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2 text-sm font-medium">
          <BrandMark className="size-6" />
          Sustainability Career Pathfinder 2.0
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <li>
              <Link
                href="/careers"
                className="rounded hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                Career Paths
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="rounded hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                Glossary
              </Link>
            </li>
            <li>
              <Link
                href="/assessment"
                className="rounded hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                Assessment
              </Link>
            </li>
            <li>
              <Link
                href="/results"
                className="rounded hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                My Results
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lugasraka/"
                target="_blank"
                rel="noreferrer"
                aria-label="Raka Adrianto on LinkedIn"
                className="inline-flex items-center gap-1.5 rounded hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
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
                className="inline-flex items-center gap-1.5 rounded hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                <GithubIcon aria-hidden className="size-4" />
                Source
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-xs text-muted-foreground">
          17 pathways · 5 skill pillars · 100% free
        </p>
      </div>
    </footer>
  );
}
