# Sustainability Career Pathfinder 2.0

A career recommendation engine for sustainability professionals. A 4-step diagnostic evaluates your transferable skills across 17 career pathways, surfaces your exact skill gaps, and generates a personalized 90-day transition plan. Free, no account required, and drafts save locally on your device.

**Live:** [https://sustainability-career-pathfinder20.vercel.app/](https://sustainability-career-pathfinder20.vercel.app/)

![Sustainability Career Pathfinder 2.0, home page](docs/screenshot-home.png)

## Why this exists

People kept asking me how to break into sustainability. The 1-on-1 conversations were useful, but they didn't scale, so I built this tool to help more people navigate the transition.

Built by [Raka Adrianto](https://www.linkedin.com/in/lugasraka/).

## From 1.0 to 2.0

The original [Sustainability Career Pathfinder](https://sustainabilitypathfinder.lovable.app/) (MVP 1.0) established the 17-pathway taxonomy. Version 2.0 replaces the static quiz and generic recommendations with an explainable diagnostic engine and structured action plans.

| MVP 1.0 | Pathfinder 2.0 |
| :--- | :--- |
| Static quiz | 4-step adaptive diagnostic (background, skills, region, work style) |
| Generic text recommendations | Deterministic weighted scoring across 17 paths |
| No gap analysis | Skill delta matrix: transferable skills, critical gaps, and upskilling needs |
| Black-box results | Transparent score math itemized line by line |
| Generic roadmaps | 90-day plan mapped to real projects and certifications |

## Features

- **17 Pathway profiles:** In-depth pages covering role descriptions, core skills, certifications, and portfolio projects.
- **4-step diagnostic:** Assesses previous background, technical skills, region and regulatory frameworks, and working style.
- **Client-side CV prefill:** Upload a PDF or paste resume text to auto-detect skills. Runs entirely in your browser; no files leave your device.
- **Transparent matching engine:** Uses weighted skill coverage, background credits, region bonuses, and gap penalties with an itemized score breakdown.
- **Actionable results:** Five-pillar radar graph, skill gap matrix, senior-level pivot framing, and a curated 90-day transition timeline.
- **Pathway comparison:** Side-by-side comparison of 2–3 paths across shared skills, gaps, frameworks, and certifications.
- **Shareable results & export:** Share results via state-encoded URLs or export a clean one-page PDF via print view.
- **Path explorer:** Search and filter paths by pillar, regulatory framework, and market demand.
- **Comprehensive dataset:** 17 pathways, 129 skills, 68 portfolio projects, and 52 certifications.

## Tech stack

Next.js 15 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · shadcn/ui (Base UI) · Zustand · Recharts · next-themes

## Getting started

Requires Node 20+.

```bash
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (runs lint + typecheck)
npm run start    # serve the production build
```

## Docs

- [sustainability_career_pathfinder_2_0_plan.md](sustainability_career_pathfinder_2_0_plan.md): Product and implementation spec, matching algorithm, and database schema.
- [career_paths_knowledge_base.md](career_paths_knowledge_base.md): Pathway taxonomy, skill mappings, certifications, and project ideas.

## Roadmap

- **Next:** Framework index page, certification ROI directory, proof-of-work starter kits.
- **Phase 3:** Supabase auth, LLM-assisted resume translation, portfolio gallery.
