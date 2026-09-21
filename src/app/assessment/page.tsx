import type { Metadata } from "next";
import { AssessmentWizard } from "@/components/assessment/assessment-wizard";

export const metadata: Metadata = {
  title: "Adaptive Assessment",
  description:
    "A four-step diagnostic covering background, technical skills, regional context and working style, matched against 17 sustainability pathways.",
};

export default function AssessmentPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <AssessmentWizard />
    </div>
  );
}
