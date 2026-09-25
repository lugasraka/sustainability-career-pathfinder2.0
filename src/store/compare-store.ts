import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { COMPARE_MAX } from "@/lib/compare";

interface CompareState {
  slugs: string[];
  lastEvicted: string | null;
  toggle: (slug: string) => void;
  remove: (slug: string) => void;
  set: (slugs: string[]) => void;
  clear: () => void;
  clearEvictionNotice: () => void;
}

export const useCompareStore = create<CompareState>()(
  persist(
    (set) => ({
      slugs: [],
      lastEvicted: null,
      toggle: (slug) =>
        set((state) => {
          if (state.slugs.includes(slug)) {
            return { slugs: state.slugs.filter((s) => s !== slug) };
          }
          const evicted =
            state.slugs.length >= COMPARE_MAX ? state.slugs[0] : null;
          return {
            slugs: [...state.slugs.slice(-(COMPARE_MAX - 1)), slug],
            lastEvicted: evicted,
          };
        }),
      remove: (slug) =>
        set((state) => ({ slugs: state.slugs.filter((s) => s !== slug) })),
      set: (slugs) => set({ slugs: slugs.slice(0, COMPARE_MAX) }),
      clear: () => set({ slugs: [], lastEvicted: null }),
      clearEvictionNotice: () => set({ lastEvicted: null }),
    }),
    {
      name: "sus-pathfinder-compare-v1",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
