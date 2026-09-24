import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Background, Geography, WorkStyle } from "@/types/pathfinder";

export type CvSource = "pdf" | "paste";

interface AssessmentState {
  step: number;
  background: Background | null;
  yearsExperience: number;
  yearsExperienceConfirmed: boolean;
  selectedSkillSlugs: string[];
  targetGeography: Geography | null;
  workStylePreference: WorkStyle | null;
  cvDetectedSkillSlugs: string[];
  cvSource: CvSource | null;
  setStep: (step: number) => void;
  setBackground: (background: Background) => void;
  setYearsExperience: (years: number) => void;
  clearYearsExperience: () => void;
  toggleSkill: (slug: string) => void;
  setSkillsSelected: (slugs: string[], selected: boolean) => void;
  setTargetGeography: (geo: Geography) => void;
  setWorkStylePreference: (style: WorkStyle) => void;
  applyCvMatches: (skillSlugs: string[], source: CvSource) => void;
  hydrateFromShare: (state: {
    background: Background;
    yearsExperience: number;
    selectedSkillSlugs: string[];
    targetGeography: Geography;
    workStylePreference: WorkStyle;
  }) => void;
  reset: () => void;
}

const initialState = {
  step: 0,
  background: null as Background | null,
  yearsExperience: 0,
  yearsExperienceConfirmed: false,
  selectedSkillSlugs: [] as string[],
  targetGeography: null as Geography | null,
  workStylePreference: null as WorkStyle | null,
  cvDetectedSkillSlugs: [] as string[],
  cvSource: null as CvSource | null,
};

export const useAssessmentStore = create<AssessmentState>()(
  persist(
    (set) => ({
      ...initialState,
      setStep: (step) => set({ step }),
      setBackground: (background) => set({ background }),
      setYearsExperience: (yearsExperience) =>
        set({ yearsExperience, yearsExperienceConfirmed: true }),
      clearYearsExperience: () =>
        set({ yearsExperience: 0, yearsExperienceConfirmed: false }),
      toggleSkill: (slug) =>
        set((state) => ({
          selectedSkillSlugs: state.selectedSkillSlugs.includes(slug)
            ? state.selectedSkillSlugs.filter((s) => s !== slug)
            : [...state.selectedSkillSlugs, slug],
        })),
      setSkillsSelected: (slugs, selected) =>
        set((state) => {
          const next = new Set(state.selectedSkillSlugs);
          for (const slug of slugs) {
            if (selected) next.add(slug);
            else next.delete(slug);
          }
          return { selectedSkillSlugs: Array.from(next) };
        }),
      setTargetGeography: (targetGeography) => set({ targetGeography }),
      setWorkStylePreference: (workStylePreference) =>
        set({ workStylePreference }),
      applyCvMatches: (skillSlugs, cvSource) =>
        set((state) => ({
          cvDetectedSkillSlugs: skillSlugs,
          cvSource,
          selectedSkillSlugs: Array.from(
            new Set([...state.selectedSkillSlugs, ...skillSlugs])
          ),
        })),
      hydrateFromShare: (shared) =>
        set({ ...shared, step: 0, yearsExperienceConfirmed: true }),
      reset: () => set({ ...initialState }),
    }),
    { name: "sus-pathfinder-assessment-v1" }
  )
);
