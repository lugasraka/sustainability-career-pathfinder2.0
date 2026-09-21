import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Background, Geography, WorkStyle } from "@/types/pathfinder";

interface AssessmentState {
  step: number;
  background: Background | null;
  yearsExperience: number;
  selectedSkillSlugs: string[];
  targetGeography: Geography | null;
  workStylePreference: WorkStyle | null;
  setStep: (step: number) => void;
  setBackground: (background: Background) => void;
  setYearsExperience: (years: number) => void;
  toggleSkill: (slug: string) => void;
  setTargetGeography: (geo: Geography) => void;
  setWorkStylePreference: (style: WorkStyle) => void;
  reset: () => void;
}

const initialState = {
  step: 0,
  background: null as Background | null,
  yearsExperience: 0,
  selectedSkillSlugs: [] as string[],
  targetGeography: null as Geography | null,
  workStylePreference: null as WorkStyle | null,
};

export const useAssessmentStore = create<AssessmentState>()(
  persist(
    (set) => ({
      ...initialState,
      setStep: (step) => set({ step }),
      setBackground: (background) => set({ background }),
      setYearsExperience: (yearsExperience) => set({ yearsExperience }),
      toggleSkill: (slug) =>
        set((state) => ({
          selectedSkillSlugs: state.selectedSkillSlugs.includes(slug)
            ? state.selectedSkillSlugs.filter((s) => s !== slug)
            : [...state.selectedSkillSlugs, slug],
        })),
      setTargetGeography: (targetGeography) => set({ targetGeography }),
      setWorkStylePreference: (workStylePreference) =>
        set({ workStylePreference }),
      reset: () => set({ ...initialState }),
    }),
    { name: "sus-pathfinder-assessment-v1" }
  )
);
