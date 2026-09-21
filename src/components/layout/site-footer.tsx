import Link from "next/link";
import { LeafIcon } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <LeafIcon aria-hidden className="size-3.5" />
          </span>
          Sustainability Career Pathfinder 2.0
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <li>
              <Link href="/careers" className="hover:text-foreground">
                Career Paths
              </Link>
            </li>
            <li>
              <Link href="/assessment" className="hover:text-foreground">
                Assessment
              </Link>
            </li>
            <li>
              <Link href="/results" className="hover:text-foreground">
                My Results
              </Link>
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
