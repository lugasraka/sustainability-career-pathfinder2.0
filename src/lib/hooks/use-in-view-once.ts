"use client";

import * as React from "react";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;

export function useInViewOnce<T extends Element>(
  ref: React.RefObject<T | null>,
  rootMargin = "0px 0px -10% 0px"
): boolean {
  const [inView, setInView] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    if (inView) return;
    const element = ref.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const rect = element.getBoundingClientRect();
    const viewport =
      window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewport * 0.9 && rect.bottom > 0) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, rootMargin, inView]);

  return inView;
}
