"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/icons/brand-mark";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/careers", label: "Career Paths" },
  { href: "/assessment", label: "Assessment" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BrandMark className="size-7" />
          <span className="hidden sm:inline">Sustainability Pathfinder</span>
          <span className="sm:hidden">Pathfinder</span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex h-8 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-muted",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Link href="/assessment" className={buttonVariants()}>
            Find my match
          </Link>
        </div>
      </div>
    </header>
  );
}
