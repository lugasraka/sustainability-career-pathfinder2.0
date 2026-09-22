"use client";

import * as React from "react";
import {
  CheckCircle2Icon,
  FileTextIcon,
  Loader2Icon,
  ShieldCheckIcon,
  UploadIcon,
  XIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { PillarChip } from "@/components/shared/pillar-chip";
import { SKILLS } from "@/data/skills";
import { matchSkillsFromText, type CvSkillMatch } from "@/lib/cv/skill-matcher";
import { cn } from "@/lib/utils";
import {
  useAssessmentStore,
  type CvSource,
} from "@/store/assessment-store";

const MAX_PDF_BYTES = 5 * 1024 * 1024; // 5 MB

type Phase = "idle" | "parsing" | "review" | "applied" | "error";

export function CvUpload() {
  const applyCvMatches = useAssessmentStore((s) => s.applyCvMatches);
  const cvSource = useAssessmentStore((s) => s.cvSource);
  const cvDetectedSkillSlugs = useAssessmentStore((s) => s.cvDetectedSkillSlugs);

  const [phase, setPhase] = React.useState<Phase>(
    cvDetectedSkillSlugs.length > 0 ? "applied" : "idle"
  );
  const [mode, setMode] = React.useState<"pdf" | "paste">("pdf");
  const [matches, setMatches] = React.useState<CvSkillMatch[]>([]);
  const [checked, setChecked] = React.useState<Set<string>>(new Set());
  const [source, setSource] = React.useState<CvSource>("pdf");
  const [error, setError] = React.useState<string | null>(null);
  const [pasteText, setPasteText] = React.useState("");
  const [fileName, setFileName] = React.useState<string | null>(null);
  const [dragging, setDragging] = React.useState(false);

  const beginReview = (found: CvSkillMatch[], src: CvSource, name?: string) => {
    setMatches(found);
    setSource(src);
    setFileName(name ?? null);
    setChecked(new Set(found.map((m) => m.slug)));
    setError(null);
    setPhase(found.length > 0 ? "review" : "error");
    if (found.length === 0) {
      setError(
        "No skills detected. Try pasting more text, or continue manually on the steps below."
      );
    }
  };

  const handlePdf = async (file: File) => {
    if (!file.type.includes("pdf") && !file.name.toLowerCase().endsWith(".pdf")) {
      setError("Please upload a PDF file.");
      setPhase("error");
      return;
    }
    if (file.size > MAX_PDF_BYTES) {
      setError("PDF is larger than 5 MB. Try a smaller file or paste the text.");
      setPhase("error");
      return;
    }
    setPhase("parsing");
    setError(null);
    try {
      const buffer = await file.arrayBuffer();
      const { extractText, getDocumentProxy } = await import("unpdf");
      const pdf = await getDocumentProxy(new Uint8Array(buffer));
      const { text } = await extractText(pdf, { mergePages: true });
      if (!text || text.trim().length === 0) {
        setError(
          "Could not extract text from this PDF (it may be scanned images). Try pasting the text instead."
        );
        setPhase("error");
        return;
      }
      beginReview(matchSkillsFromText(text), "pdf", file.name);
    } catch {
      setError("Could not read this PDF. Try pasting your CV text instead.");
      setPhase("error");
    }
  };

  const handlePaste = () => {
    if (!pasteText.trim()) {
      setError("Paste some CV text first.");
      setPhase("error");
      return;
    }
    setPhase("parsing");
    // Yield so the spinner paints before the (fast) sync match
    setTimeout(() => {
      beginReview(matchSkillsFromText(pasteText), "paste");
    }, 50);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (phase !== "idle") return;
    const file = e.dataTransfer.files?.[0];
    if (file) void handlePdf(file);
  };

  const toggle = (slug: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  const selectAll = () => setChecked(new Set(matches.map((m) => m.slug)));
  const selectNone = () => setChecked(new Set());

  const handleApply = () => {
    const slugs = matches
      .filter((m) => checked.has(m.slug))
      .map((m) => m.slug);
    applyCvMatches(slugs, source);
    setPhase("applied");
  };

  const reset = () => {
    setPhase("idle");
    setMatches([]);
    setChecked(new Set());
    setError(null);
    setPasteText("");
    setFileName(null);
  };

  return (
    <section
      className="rounded-xl border bg-muted/30 p-4"
      aria-label="CV prefill"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <FileTextIcon aria-hidden className="size-4 text-primary" />
          <h3 className="text-sm font-semibold">Prefill skills from your CV</h3>
        </div>
        {phase === "applied" && (
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
            <CheckCircle2Icon aria-hidden className="size-3" />
            {cvDetectedSkillSlugs.length} skills from CV
          </span>
        )}
      </div>

      {/* APPLIED */}
      {phase === "applied" && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            {cvDetectedSkillSlugs.length} skills were detected and selected on
            Step 2. Review them there and adjust anything that doesn&apos;t fit.
            {cvSource === "pdf" && fileName ? ` (from ${fileName})` : ""}
          </p>
          <Button variant="outline" size="sm" onClick={reset}>
            <XIcon aria-hidden className="size-3.5" />
            Use a different CV
          </Button>
        </div>
      )}

      {/* PARSING */}
      {phase === "parsing" && (
        <div
          className="flex items-center gap-2 text-sm text-muted-foreground"
          role="status"
        >
          <Loader2Icon aria-hidden className="size-4 animate-spin" />
          Parsing your CV…
        </div>
      )}

      {/* ERROR */}
      {phase === "error" && (
        <div className="space-y-3">
          <p
            className="text-sm text-destructive"
            role="alert"
          >
            {error}
          </p>
          <Button variant="outline" size="sm" onClick={reset}>
            Try again
          </Button>
        </div>
      )}

      {/* REVIEW */}
      {phase === "review" && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm">
              <span className="font-semibold">{matches.length}</span> skill
              {matches.length === 1 ? "" : "s"} detected. Uncheck anything that
              doesn&apos;t apply, then confirm.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={selectAll}
                className="text-xs font-medium text-muted-foreground underline-offset-2 hover:underline"
              >
                Select all
              </button>
              <button
                type="button"
                onClick={selectNone}
                className="text-xs font-medium text-muted-foreground underline-offset-2 hover:underline"
              >
                Clear
              </button>
            </div>
          </div>

          <ul className="max-h-64 space-y-2 overflow-y-auto rounded-lg border bg-background p-3">
            {matches.map((m) => {
              const skill = SKILLS.find((s) => s.slug === m.slug);
              if (!skill) return null;
              return (
                <li key={m.slug}>
                  <label
                    data-slot="field-label"
                    className="flex cursor-pointer items-start gap-2.5 text-sm"
                  >
                    <Checkbox
                      checked={checked.has(m.slug)}
                      onCheckedChange={() => toggle(m.slug)}
                      className="mt-0.5"
                    />
                    <span className="grid gap-1">
                      <span className="leading-snug">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        Matched:{" "}
                        <span className="font-medium text-foreground/80">
                          &ldquo;{m.matchedTerm}&rdquo;
                        </span>
                      </span>
                    </span>
                    <span className="ml-auto shrink-0">
                      <PillarChip pillar={skill.pillar} />
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm" onClick={handleApply} disabled={checked.size === 0}>
              <CheckCircle2Icon aria-hidden className="size-3.5" />
              Apply {checked.size} skill{checked.size === 1 ? "" : "s"}
            </Button>
            <Button variant="outline" size="sm" onClick={reset}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* IDLE — input */}
      {phase === "idle" && (
        <div className="space-y-4">
          <div
            role="tablist"
            aria-label="CV input method"
            className="inline-flex rounded-lg bg-muted p-[3px]"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "pdf"}
              onClick={() => setMode("pdf")}
              className={cn(
                "rounded-md px-3 py-1 text-sm font-medium transition-colors",
                mode === "pdf"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Upload PDF
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "paste"}
              onClick={() => setMode("paste")}
              className={cn(
                "rounded-md px-3 py-1 text-sm font-medium transition-colors",
                mode === "paste"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Paste text
            </button>
          </div>

          {mode === "pdf" ? (
            <div className="space-y-2">
              <label
                htmlFor="cv-pdf"
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-lg border border-dashed p-4 text-sm transition-colors hover:bg-accent/50",
                  dragging && "border-primary bg-accent/50"
                )}
              >
                <UploadIcon aria-hidden className="size-4 text-muted-foreground" />
                <span>
                  <span className="font-medium">Choose a PDF</span>{" "}
                  <span className="text-muted-foreground">
                    (max 5 MB) or drag &amp; drop
                  </span>
                </span>
                <input
                  id="cv-pdf"
                  type="file"
                  accept=".pdf,application/pdf"
                  className="sr-only"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) void handlePdf(f);
                    e.target.value = "";
                  }}
                />
              </label>
            </div>
          ) : (
            <div className="space-y-2">
              <label htmlFor="cv-paste" className="text-sm font-semibold">
                Paste your CV text
              </label>
              <textarea
                id="cv-paste"
                value={pasteText}
                onChange={(e) => setPasteText(e.target.value)}
                rows={6}
                placeholder="Paste the full text of your CV or resume…"
                className="w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
              />
              <Button size="sm" onClick={handlePaste}>
                Detect skills
              </Button>
            </div>
          )}

          <p className="flex items-start gap-1.5 text-xs text-muted-foreground">
            <ShieldCheckIcon aria-hidden className="mt-0.5 size-3.5 shrink-0" />
            Parsed entirely in your browser — the file never leaves your device.
          </p>
        </div>
      )}
    </section>
  );
}
