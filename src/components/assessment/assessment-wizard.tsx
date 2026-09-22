"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, CheckIcon, SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AssessmentStepper, STEP_LABELS } from "@/components/assessment/assessment-stepper";
import { StepBackground } from "@/components/assessment/step-background";
import { StepSkills } from "@/components/assessment/step-skills";
import { StepRegion } from "@/components/assessment/step-region";
import { StepWorkstyle } from "@/components/assessment/step-workstyle";
import { useAssessmentStore } from "@/store/assessment-store";

const TOTAL_STEPS = 4;

export function AssessmentWizard() {
  const step = useAssessmentStore((s) => s.step);
  const setStep = useAssessmentStore((s) => s.setStep);
  const background = useAssessmentStore((s) => s.background);
  const yearsExperienceConfirmed = useAssessmentStore(
    (s) => s.yearsExperienceConfirmed
  );
  const selectedSkillSlugs = useAssessmentStore((s) => s.selectedSkillSlugs);
  const workStylePreference = useAssessmentStore((s) => s.workStylePreference);
  const router = useRouter();

  const stepRef = React.useRef<HTMLDivElement>(null);
  const isFirstRender = React.useRef(true);

  const hasDraft =
    background !== null ||
    yearsExperienceConfirmed ||
    selectedSkillSlugs.length > 0 ||
    workStylePreference !== null;

  const canContinue =
    step === 0
      ? background !== null && yearsExperienceConfirmed
      : step === TOTAL_STEPS - 1
        ? workStylePreference !== null
        : true;

  const continueHint =
    step === 0
      ? background === null
        ? "Pick your background to continue"
        : "Pick your years of experience to continue"
      : step === TOTAL_STEPS - 1 && workStylePreference === null
        ? "Choose a work style to continue"
        : null;

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    stepRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const handleContinue = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
      return;
    }
    router.push("/results");
  };

  return (
    <div className="mx-auto max-w-5xl">
      <Card className="py-6">
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="flex items-center gap-2 text-xl">
              <SparklesIcon aria-hidden className="size-5 text-primary" />
              Adaptive Assessment
            </CardTitle>
            {hasDraft && (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
                <CheckIcon aria-hidden className="size-3" />
                Draft saved on this device
              </span>
            )}
          </div>
          <CardDescription>
            Four quick steps. Your answers stay saved on this device, even if you
            leave mid-way.
          </CardDescription>
          <AssessmentStepper current={step} />
        </CardHeader>
        <CardContent className="space-y-8">
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Step {step + 1} of {TOTAL_STEPS}: {STEP_LABELS[step]}
          </p>
          <div
            key={step}
            ref={stepRef}
            tabIndex={-1}
            className="outline-none motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300"
          >
            {step === 0 && <StepBackground />}
            {step === 1 && <StepSkills />}
            {step === 2 && <StepRegion />}
            {step === TOTAL_STEPS - 1 && <StepWorkstyle />}
          </div>
        </CardContent>
      </Card>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-card p-3 max-sm:sticky max-sm:bottom-0 max-sm:z-20 max-sm:bg-card/95 max-sm:pb-[max(0.75rem,env(safe-area-inset-bottom))] max-sm:shadow-lg max-sm:backdrop-blur">
        <Button
          variant="outline"
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
        >
          <ArrowLeftIcon aria-hidden className="size-4" />
          Back
        </Button>
        <div className="flex flex-1 items-center justify-end gap-3">
          {continueHint && (
            <p className="text-right text-xs text-muted-foreground">
              {continueHint}
            </p>
          )}
          <Button disabled={!canContinue} onClick={handleContinue}>
            {step === TOTAL_STEPS - 1 ? (
              <>
                See my matches
                <SparklesIcon aria-hidden className="size-4" />
              </>
            ) : (
              "Continue"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
