import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { COMPARE_MAX } from "@/lib/compare";

interface CompareState {
  slugs: string[];
  toggle: (slug: string) => void;
  remove: (slug: string) => void;
  set: (slugs: string[]) => void;
  clear: () => void;
}

export const useCompareStore = create<CompareState>()(
  persist(
    (set) => ({
      slugs: [],
      toggle: (slug) =>
        set((state) =>
          state.slugs.includes(slug)
            ? { slugs: state.slugs.filter((s) => s !== slug) }
            : {
                slugs: [...state.slugs.slice(-(COMPARE_MAX - 1)), slug],
              }
        ),
      remove: (slug) =>
        set((state) => ({ slugs: state.slugs.filter((s) => s !== slug) })),
      set: (slugs) => set({ slugs: slugs.slice(0, COMPARE_MAX) }),
      clear: () => set({ slugs: [] }),
    }),
    {
      name: "sus-pathfinder-compare-v1",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
