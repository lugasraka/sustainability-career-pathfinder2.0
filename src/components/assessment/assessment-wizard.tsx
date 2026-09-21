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
import { AssessmentStepper } from "@/components/assessment/assessment-stepper";
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
  const selectedSkillSlugs = useAssessmentStore((s) => s.selectedSkillSlugs);
  const workStylePreference = useAssessmentStore((s) => s.workStylePreference);
  const router = useRouter();

  const hasDraft =
    background !== null ||
    selectedSkillSlugs.length > 0 ||
    workStylePreference !== null;

  const canContinue =
    step === 0
      ? background !== null
      : step === TOTAL_STEPS - 1
        ? workStylePreference !== null
        : true;

  React.useEffect(() => {
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
    <Card className="mx-auto max-w-5xl py-6">
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
        <div
          key={step}
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300"
        >
          {step === 0 && <StepBackground />}
          {step === 1 && <StepSkills />}
          {step === 2 && <StepRegion />}
          {step === TOTAL_STEPS - 1 && <StepWorkstyle />}
        </div>

        <div className="flex items-center justify-between gap-3 border-t pt-6">
          <Button
            variant="outline"
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
          >
            <ArrowLeftIcon aria-hidden className="size-4" />
            Back
          </Button>
          <Button
            disabled={!canContinue}
            onClick={handleContinue}
          >
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
      </CardContent>
    </Card>
  );
}
