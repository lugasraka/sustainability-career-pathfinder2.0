# Sustainability Career Pathfinder 2.0: Product & Implementation Plan

A comprehensive technical and product specification for rebuilding and elevating the [Sustainability Career Pathfinder](https://sustainabilitypathfinder.lovable.app/) into an intelligent, skill-graph-driven career recommendation engine.

---

## 1. Executive Summary & Value Proposition

### 1.1 Mission
Empower current and aspiring sustainability professionals to transition into high-impact roles by moving beyond superficial quizzes. The application pairs an adaptive diagnostic engine with industry-standard regulatory frameworks, a skills-gap analysis matrix, and actionable proof-of-work portfolio briefs.

### 1.2 The Core Problem with MVP 1.0
The original MVP provides a visually polished introduction to 17 sustainability pathways, but users report key shortcomings:
- **Surface-Level Assessment:** Linear, static survey (starts with demographics such as gender) rather than diagnosing technical proficiencies and transferable credentials.
- **Generic Results:** Recommendations read like broad ChatGPT prompts without actionable distinction between junior and senior pivots.
- **Lack of Execution Depth:** No direct path to close identified skill gaps (e.g., how an accountant actually learns CSRD/ESRS double materiality or how an engineer masters Scope 3 data collection).

### 1.3 Solution Architecture
1. **Adaptive Diagnostic Engine:** Calibrates questions based on domain background (Finance, Engineering, Policy, Environmental Science).
2. **Skill-Delta Computation:** Quantifies exact transferable skills vs. missing core competencies for each target pathway.
3. **Proof-of-Work Portfolio Hub:** Provides actual real-world project briefs with datasets and rubrics so candidates can demonstrate competence to hiring managers.
4. **Regulatory & Framework Alignment:** Native integration of ESRS/CSRD, IFRS/ISSB, GHG Protocol, SEC climate disclosures, and TNFD.

---

## 2. Product Information Architecture

```
                                  [ User Entry ]
                                         │
                   ┌─────────────────────┴─────────────────────┐
                   ▼                                           ▼
         [ Free Path Explorer ]                     [ Adaptive Assessment ]
         - 17 Pathway Taxonomy                      - Step 1: Baseline & Background
         - Framework Index (CSRD, GHG, TNFD)        - Step 2: Technical Skills Self-Audit
         - Certification ROI Index                  - Step 3: Regulatory & Market Focus
                   │                                - Step 4: Working Style & Mission
                   │                                           │
                   └─────────────────────┬─────────────────────┘
                                         ▼
                        [ Career Command Center (Results) ]
                                         │
        ┌────────────────────────────────┼────────────────────────────────┐
        ▼                                ▼                                ▼
  [ Match Score & Radar ]      [ Skill Delta Matrix ]          [ 90-Day Transition Plan ]
  - Top 3 Pathway Matches      - Transferable Strengths         - Month-by-month sprint
  - Pillar-by-pillar scores    - Critical Missing Hard Skills   - Curated certifications
                               - On-the-job competencies        - Proof-of-Work project briefs
```

---

## 3. Data Ontology & Core Schemas

### 3.1 Sustainability Skill Taxonomy Pillars
Every role and user competency is evaluated across five fundamental pillars:

1. **Carbon & Climate Accounting:** GHG Protocol (Scopes 1, 2, 3), SBTi, Life Cycle Assessment (ISO 14040/44), Product Carbon Footprinting (PCF), Energy Modeling.
2. **Regulatory & Disclosure Standards:** CSRD/ESRS, EU Taxonomy, SEC Climate Rules, IFRS S1/S2 (ISSB), GRI, CDP.
3. **Quantitative & Data Systems:** Python, SQL, openLCA, SimaPro, GIS/Spatial Analysis, Power BI/Tableau, ESG ERP integrations (Workiva, Sweep, Watershed).
4. **Circularity & Natural Capital:** Circular Design principles, LCA, TNFD, Deforestation Due Diligence (EUDR), Waste Stream Auditing.
5. **Strategy & Stakeholder Delivery:** Double Materiality Facilitation, Supply Chain Engagement, Green Procurement, ESG Investor Relations, Change Management.

---

### 3.2 Database Schema (PostgreSQL DDL)

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles & Users
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    current_role_title TEXT,
    years_experience INT NOT NULL DEFAULT 0,
    primary_background TEXT NOT NULL, -- 'finance', 'engineering', 'science', 'policy', 'general_mgmt'
    target_geography TEXT NOT NULL,   -- 'EU', 'US_CANADA', 'UK', 'APAC', 'GLOBAL'
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Skills Directory
CREATE TABLE skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    pillar TEXT NOT NULL CHECK (pillar IN (
        'carbon_accounting', 
        'regulations_disclosure', 
        'data_systems', 
        'circularity_nature', 
        'strategy_governance'
    )),
    description TEXT,
    demand_level TEXT DEFAULT 'high' CHECK (demand_level IN ('moderate', 'high', 'critical'))
);

-- 3. Career Pathways (17 Archetypes)
CREATE TABLE career_paths (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    tagline TEXT NOT NULL,
    overview TEXT NOT NULL,
    market_demand_level TEXT NOT NULL CHECK (market_demand_level IN ('emerging', 'strong', 'explosive')),
    median_salary_usd INT,
    senior_salary_usd INT,
    common_job_titles TEXT[] NOT NULL
);

-- 4. Path-to-Skill Junction (Requirements Matrix)
CREATE TABLE path_skills (
    path_id UUID REFERENCES career_paths(id) ON DELETE CASCADE,
    skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
    weight FLOAT NOT NULL DEFAULT 1.0, -- Relative weighting in match algorithm
    requirement_level TEXT NOT NULL CHECK (requirement_level IN ('mandatory', 'recommended', 'differentiator')),
    PRIMARY KEY (path_id, skill_id)
);

-- 5. Proof-of-Work Portfolio Templates
CREATE TABLE portfolio_projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    path_id UUID REFERENCES career_paths(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    difficulty TEXT NOT NULL CHECK (difficulty IN ('foundational', 'intermediate', 'capstone')),
    estimated_hours INT NOT NULL,
    summary TEXT NOT NULL,
    starter_kit_url TEXT,
    rubric_markdown TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. User Assessment Submissions & Results
CREATE TABLE assessment_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    input_payload JSONB NOT NULL,
    top_matched_path_id UUID REFERENCES career_paths(id),
    secondary_matched_path_id UUID REFERENCES career_paths(id),
    match_score_pct INT NOT NULL,
    skill_delta JSONB NOT NULL, -- { "transferable": [...], "missing_critical": [...], "bonus": [...] }
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 4. Assessment Engine & Matching Algorithm

### 4.1 Four-Stage Diagnostic Flow

| Stage | Input Vectors | Purpose |
| :--- | :--- | :--- |
| **Stage 1: Foundational Baseline** | Prior discipline, years of experience, current industry. | Establishes baseline transferable skill sets (e.g., financial ledger fluency = carbon ledger potential). |
| **Stage 2: Technical Competencies** | Concrete tools, standards, and calculations practiced. | Identifies hard prerequisites (e.g., openLCA, GHG Protocol Scopes 1-3, Python). |
| **Stage 3: Regulatory & Regional Context** | Target job market (EU, US, Global) and familiar frameworks. | Calibrates geographic compliance demands (e.g., EU requires CSRD/CBAM; US emphasizes SEC & IRA incentives). |
| **Stage 4: Working Style & Core Drivers** | Corporate sustainability vs. consulting vs. startup cleantech vs. NGO. | Filters organizational fit, culture preferences, and velocity. |

### 4.2 Deterministic Scoring & Skill-Delta Logic

```typescript
// types/pathfinder.ts

export interface UserAssessmentInput {
  background: 'finance' | 'engineering' | 'science' | 'policy' | 'data' | 'other';
  yearsExperience: number;
  selectedSkillSlugs: string[];
  targetGeography: 'EU' | 'US_CANADA' | 'GLOBAL';
  workStylePreference: 'corporate' | 'consulting' | 'cleantech' | 'nonprofit';
}

export interface SkillDeltaResult {
  pathId: string;
  pathTitle: string;
  matchScore: number; // 0 to 100
  transferableSkills: string[];
  missingMandatorySkills: string[];
  recommendedUpskilling: string[];
}

export function computePathMatch(
  input: UserAssessmentInput,
  path: {
    id: string;
    title: string;
    requiredSkills: { slug: string; level: 'mandatory' | 'recommended' | 'differentiator'; weight: number }[];
  }
): SkillDeltaResult {
  let totalPossibleWeight = 0;
  let accumulatedScore = 0;

  const userSkillSet = new Set(input.selectedSkillSlugs);
  const transferable: string[] = [];
  const missingMandatory: string[] = [];
  const recommended: string[] = [];

  for (const item of path.requiredSkills) {
    totalPossibleWeight += item.weight;
    const hasSkill = userSkillSet.has(item.slug);

    if (hasSkill) {
      accumulatedScore += item.weight;
      transferable.push(item.slug);
    } else {
      if (item.level === 'mandatory') {
        missingMandatory.push(item.slug);
      } else {
        recommended.push(item.slug);
      }
    }
  }

  const rawScore = totalPossibleWeight > 0 ? (accumulatedScore / totalPossibleWeight) * 100 : 0;
  
  // Apply penalization if critical mandatory skills are absent
  const mandatoryPenalty = missingMandatory.length * 5;
  const matchScore = Math.max(10, Math.round(rawScore - mandatoryPenalty));

  return {
    pathId: path.id,
    pathTitle: path.title,
    matchScore,
    transferableSkills: transferable,
    missingMandatorySkills: missingMandatory,
    recommendedUpskilling: recommended,
  };
}
```

---

## 5. Flagship Proof-of-Work Portfolio Projects

To solve the "no experience without experience" hurdle, the app provides real-world briefs for every path:

### Project 1: Corporate ESG & Double Materiality Matrix (ESRS Aligned)
- **Target Role:** ESG Reporting Manager / Sustainability Disclosure Analyst
- **Objective:** Perform a dual-materiality assessment (Impact Materiality + Financial Materiality) for a mid-market manufacturing company.
- **Deliverable:** 
  1. Completed stakeholder scoring matrix (Excel/Sheet).
  2. 4-page executive briefing identifying top 5 material ESRS topics with data boundary justifications.
- **Evaluation Rubric:** Rigor of threshold rationale, alignment with EFRAG double materiality guidance, clarity of financial risk quantification.

### Project 2: Scope 3 Category 1 Spend-Based to Activity-Based Footprint
- **Target Role:** Carbon Accounting Specialist / Climate Data Analyst
- **Objective:** Convert a raw corporate purchase ledger containing 1,000 spend rows into a hybrid emissions inventory.
- **Deliverable:**
  1. Python Notebook or Clean Spreadsheet mapping spend lines to DEFRA / Exiobase / EPA emission factors.
  2. Identification of hot-spots representing the top 80% of upstream emissions.
  3. Actionable supplier engagement protocol for top 10 carbon-intensive vendors.
- **Evaluation Rubric:** Accuracy of unit conversions, transparency of emission factor citations, methodology for handling uncertainty.

### Project 3: Consumer Product Circularity & LCA Screening
- **Target Role:** Circular Economy & Eco-Design Specialist
- **Objective:** Compare the environmental footprint of an existing single-use packaging system against a reusable alternative using openLCA.
- **Deliverable:**
  1. Functional unit definition and System Boundary diagram (cradle-to-grave).
  2. GWP (Global Warming Potential) comparison chart and break-even use cycle calculation.
- **Evaluation Rubric:** Adherence to ISO 14040 principles, realistic end-of-life recycling assumption modeling.

---

## 6. Technical Stack & Implementation Specs

### 6.1 Frontend Application
- **Framework:** Next.js 15+ (App Router, Server Components).
- **Styling:** Tailwind CSS + Radix UI / shadcn/ui.
- **Data Visualizations:** Recharts or Visx (custom radar charts for 5-pillar skill distributions and transition timelines).
- **Client State:** Zustand (for multi-step assessment state persistence and offline draft saving).

### 6.2 Backend & Data Persistence
- **Runtime:** Edge / Node.js Server Actions within Next.js.
- **Database:** Supabase (PostgreSQL with Row Level Security).
- **Vector Search (Optional Phase 3):** `pgvector` for matching unstructured user resume texts against pathway skill vectors.

### 6.3 Performance & SEO Targets
- **Core Web Vitals:** LCP < 1.2s, CLS < 0.05, FID/INP < 100ms.
- **Dynamic OG Image Generation:** Next.js `@vercel/og` to generate social sharing cards showing user match scores (e.g., *"My Sustainability Match: 88% ESG Reporting Strategist"*).
- **Full Static Generation (SSG):** All 17 pathway profiles and certification review pages statically generated with JSON-LD schema for search indexing.

---

## 7. Phased Implementation Roadmap

```
├── Phase 1: MVP Rebuild (Weeks 1-3)
│   ├── [x] Design System & shadcn/ui setup
│   ├── [x] PostgreSQL schemas & 17 pathway seed migrations
│   ├── [x] 4-Step Adaptive Diagnostic Engine
│   └── [x] Results Dashboard with Radar Chart & Match Logic
│
├── Phase 2: Actionability Layer (Weeks 4-6)
│   ├── [ ] Interactive Skill-Delta Matrix (Transferable vs. Gap)
│   ├── [ ] Proof-of-Work Portfolio Briefs with downloadable starter assets
│   ├── [ ] Certifications Benchmark Directory with ROI calculator
│   └── [ ] PDF / Notion Export of 90-Day Transition Plan
│
├── Phase 3: AI Resume Adaptation & Community (Weeks 7-8)
│   ├── [ ] LLM-assisted resume bullet refactor (translates old experience to sustainability nomenclature)
│   ├── [ ] Supabase User Auth (save pathways, mark skills completed)
│   └── [ ] Peer review and portfolio showcasing gallery
```

---

## 8. Regulatory Maintenance & Future-Proofing Strategy

Sustainability regulation evolves rapidly. The platform will maintain market authority through a bi-annual review cadence:
1. **Regulatory Watch Checklist:** Monitor annual reporting cycles for CSRD Phase-In, SEC Climate Rules court decisions, and ISSB jurisdictional adoptions.
2. **Community Feedback Loops:** Provide an in-app "Suggest Framework Revision" button for practicing consultants to flag out-of-date terminology or methodologies.
3. **Dynamic Skill Weighting:** Update skill weights directly via database configuration without requiring application code redeployments.

---

## 9. Differentiation Roadmap (v2.0 vs MVP 1.0)

The MVP's three structural weaknesses — surface-level assessment, generic results, no execution depth — define where 2.0 must outperform. The plan doc §1.2 framing and the user complaints visible on the live site ("ChatGPT would give the same answer") set the bar. Status as of this revision:

| # | Differentiator | Status |
| :--- | :--- | :--- |
| 1 | **Background skill inference:** each prior discipline auto-credits transferable skills at half weight (finance → Excel/financial modeling/economic modeling/budgeting; engineering → engineering fundamentals/GIS; science → literature review/field methods/GIS/IPCC literacy; policy → policy briefs/stakeholder mapping/negotiation; data → Python/SQL/BI/pipelines). Credited mandatory skills avoid the blocking penalty. | Built |
| 2 | **Geography-aware scoring:** per-path `regions` field; +3 points when the target market aligns (e.g., circular economy rewards EU targets). | Built |
| 3 | **Work-style fit:** per-path `orgFit` field (corporate / consulting / cleantech / nonprofit); +3 points on match. | Built |
| 4 | **"Why this match" transparency card:** results itemize coverage %, gap penalties (−5 each), background credits, region and style bonuses. | Built |
| 5 | **Junior vs senior pivot framing:** results header and narrative switch by experience (Entry < 3 yrs, Mid 3–5, Senior 6+). | Built |
| 6 | Dynamic OG share cards ("My match: 88% ESG Reporting Strategist", §6.3). | Planned |
| 7 | Framework Index page from knowledge base Appendix B. | Planned |
| 8 | Certification ROI directory with researched salary bands. | Planned |

New scoring formula (deterministic, §4.2 supersedes):

```
coveragePct = Σ(weight of satisfied requirements incl. 0.5× credits) / Σ(all weights) × 100
matchScore  = clamp(round(coveragePct − 5 × missingMandatory + regionBonus + styleBonus), 10, 99)
```

Credited skills are shown separately from user-selected skills so hiring managers and users can distinguish proven skills from inferred ones.