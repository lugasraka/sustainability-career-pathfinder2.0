# Sustainability Career Paths — Knowledge Base

> **Purpose:** Canonical content source for the 17 career pathways powering the Sustainability Career Pathfinder 2.0. Every field below maps to the PostgreSQL schema in `sustainability_career_pathfinder_2_0_plan.md` (§3.2) so this file can be converted directly into Supabase seed migrations.
>
> **Source:** Live MVP at [sustainabilitypathfinder.lovable.app](https://sustainabilitypathfinder.lovable.app/careers), scraped 2026-09-20, then enriched to the 2.0 specification (5-pillar skill graph, framework alignment, requirement weighting).
>
> **Status:** Salary fields are `TBD` pending market research. Certification data is carried over verbatim from the live site for the Phase 2 Certification Benchmark Directory.

---

## Legend

### Skill Pillars (§3.1)

| Pillar slug | Name | Covers |
| :--- | :--- | :--- |
| `carbon_accounting` | Carbon & Climate Accounting | GHG Protocol (Scopes 1–3), SBTi, LCA (ISO 14040/44), PCF, energy modeling |
| `regulations_disclosure` | Regulatory & Disclosure Standards | CSRD/ESRS, EU Taxonomy, SEC Climate Rules, IFRS S1/S2 (ISSB), GRI, CDP |
| `data_systems` | Quantitative & Data Systems | Python, SQL, BI tools, openLCA, SimaPro, GIS, ESG platforms (Workiva, Sweep, Watershed) |
| `circularity_nature` | Circularity & Natural Capital | Circular design, LCA, TNFD, EUDR, waste stream auditing |
| `strategy_governance` | Strategy & Stakeholder Delivery | Double materiality facilitation, supply chain engagement, investor relations, change management |

### Requirement Levels (§3.2 `path_skills`)

| Level | Meaning | Weight guidance |
| :--- | :--- | :--- |
| `mandatory` | Blocking gap — candidate cannot credibly apply without it | 2.0–3.0 |
| `recommended` | Expected of competitive candidates | 1.5–2.0 |
| `differentiator` | Sets senior candidates apart | 1.0–1.5 |

### Demand Mapping (`career_paths.market_demand_level`)

| Live site display | Schema enum |
| :--- | :--- |
| growing | `emerging` |
| high | `strong` |
| very high | `explosive` |

### Portfolio Difficulty (`portfolio_projects.difficulty`)

`foundational` (~10–15 h) · `intermediate` (~25–40 h) · `capstone` (~60–100 h)

---

## Path Index

| # | Emoji | Path | Slug | Demand (display) | Demand (schema) |
| :-- | :--- | :--- | :--- | :--- | :--- |
| 1 | 📊 | ESG & Sustainability Reporting | `esg-reporting` | very high | `explosive` |
| 2 | 🏛️ | Climate Policy & Governance | `climate-policy` | high | `strong` |
| 3 | 📢 | Climate Communications & Advocacy | `climate-communications` | high | `strong` |
| 4 | 💹 | Carbon Markets & Climate Finance | `carbon-markets` | very high | `explosive` |
| 5 | ⚡ | Renewable Energy & Clean Tech | `renewable-energy` | very high | `explosive` |
| 6 | 🔬 | Sustainability Data & Analytics | `sustainability-data` | very high | `explosive` |
| 7 | 🔗 | Sustainable Supply Chains & Procurement | `sustainable-supply-chain` | very high | `explosive` |
| 8 | ♻️ | Circular Economy & Waste Management | `circular-economy` | high | `strong` |
| 9 | 🦋 | Nature, Biodiversity & Conservation | `biodiversity-conservation` | growing | `emerging` |
| 10 | 🏗️ | Green Building & Urban Sustainability | `green-building` | high | `strong` |
| 11 | 🧭 | Environmental Consulting | `environmental-consulting` | very high | `explosive` |
| 12 | 🌱 | Sustainable Agriculture & Food Systems | `community-sustainability` | growing | `emerging` |
| 13 | 🎓 | Sustainability Education & Capacity Building | `education-capacity-building` | very high | `explosive` |
| 14 | 🗂️ | Sustainability Programs & Project Management | `programs-project-management` | very high | `explosive` |
| 15 | 🤝 | Sustainability Partnerships & Stakeholder Engagement | `partnerships-stakeholder-engagement` | high | `strong` |
| 16 | 🔎 | Sustainability Research & Knowledge Management | `research-knowledge-management` | high | `strong` |
| 17 | 💰 | Grant Writing & Climate Resource Mobilization | `grant-writing-mobilization` | very high | `explosive` |

---

## 1. 📊 ESG & Sustainability Reporting

**Slug:** `esg-reporting` · **Demand:** very high (`explosive`) · **Live page:** [`/careers/esg-reporting`](https://sustainabilitypathfinder.lovable.app/careers/esg-reporting)

**Tagline:** Measure, disclose, and improve corporate sustainability performance.

### Overview

ESG and sustainability reporting professionals collect data, apply disclosure frameworks (GRI, ISSB, CSRD, SASB), and produce annual reports that show how a company manages environmental, social and governance risk. The role sits at the intersection of finance, data, and regulation: translating operational reality into audited, decision-useful disclosure.

Mandatory disclosure regimes (CSRD, SEC climate rules, ISSB adoption) are making this one of the fastest-growing functions inside companies of every size. In the EU, the CSRD/ESRS phase-in and the double-materiality logic of EFRAG guidance define the senior end of this path; in the US, ISSB-alignment and investor expectations dominate. Assurance readiness (limited → reasonable assurance) is the emerging differentiator that separates reporting managers from heads of sustainability.

### Common Job Titles

- **Entry:** Sustainability Analyst · ESG Data Analyst · CSR Coordinator
- **Mid:** ESG Reporting Manager · Sustainability Specialist · ESG Program Lead
- **Senior:** Head of Sustainability · Chief Sustainability Officer · Director, ESG Strategy

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| GHG Protocol corporate accounting (Scopes 1–3) | `carbon_accounting` | mandatory | 3.0 |
| Double materiality assessment (EFRAG-aligned) | `strategy_governance` | mandatory | 3.0 |
| CSRD / ESRS implementation | `regulations_disclosure` | mandatory | 3.0 |
| GRI Standards reporting | `regulations_disclosure` | mandatory | 2.5 |
| Excel + core data analysis | `data_systems` | mandatory | 2.0 |
| Executive communication & reporting narrative | `strategy_governance` | recommended | 2.0 |
| ISSB IFRS S1/S2 disclosure | `regulations_disclosure` | recommended | 2.0 |
| CDP disclosure cycle | `regulations_disclosure` | recommended | 1.5 |
| BI dashboards (Power BI / Tableau) | `data_systems` | recommended | 1.5 |
| ESG reporting platforms (Workiva, Watershed, Persefoni) | `data_systems` | differentiator | 1.5 |
| Assurance readiness (limited → reasonable) | `regulations_disclosure` | differentiator | 1.5 |
| Integrated reporting & SASB sector standards | `regulations_disclosure` | differentiator | 1.0 |

### Key Frameworks & Regulations

- CSRD / ESRS + EU Taxonomy (EU) · ISSB IFRS S1/S2 (global) · SEC Climate Rules (US)
- GRI Universal + Sector Standards · SASB · TCFD (absorbed into ISSB) · CDP
- Assurance standards: ISSA 5000

### Typical Entry Backgrounds

Finance/accounting, policy, general management, data. Financial ledger fluency maps directly to carbon ledger work; audit/controlling backgrounds convert fastest.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | GHG Protocol Corporate Standard | WRI / WBCSD · 6–10 h |
| Beginner | CDP Disclosure Training | CDP · 4–6 h |
| Intermediate | GRI Sustainability Reporting Standards | GRI · 30–40 h |
| Intermediate | TCFD Foundation Course | CFA Institute · 10–15 h |
| Intermediate | ISSP Sustainability Associate (ISSP-SA) | ISSP · 40 h |
| Advanced | FSA Credential | IFRS / SASB · 100+ h |
| Advanced | ISSP Certified Sustainability Professional | ISSP · 100+ h |
| Advanced | CFA ESG Certificate | CFA Institute · 130 h |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| Stakeholder interview → materiality matrix for a small business | foundational | 12 |
| Reproduce a 20-page GRI-aligned sustainability report for a public company | intermediate | 40 |
| **Flagship (2.0):** ESRS double-materiality matrix + 4-page executive briefing with data-boundary justification (§5, Plan) | capstone | 80 |
| Power BI / Tableau ESG KPI dashboard for a mock company | intermediate | 25 |

---

## 2. 🏛️ Climate Policy & Governance

**Slug:** `climate-policy` · **Demand:** high (`strong`) · **Live page:** [`/careers/climate-policy`](https://sustainabilitypathfinder.lovable.app/careers/climate-policy)

**Tagline:** Shape the rules that drive systemic climate action.

### Overview

Climate policy professionals analyze regulations, draft policy briefs, and advise governments, NGOs and companies on how to design effective climate and environmental policy. Work ranges from national NDC reviews to municipal adaptation plans and corporate regulatory-affairs strategy.

Net-zero legislation, carbon pricing and adaptation policy are expanding fast in every region. Geographic calibration matters strongly for matching: EU roles cluster around Fit-for-55, ETS reform and CBAM; US roles around IRA implementation and state-level action; global roles around UNFCCC process and multilateral finance. Coalition building and regulatory negotiation distinguish senior advisors from analysts.

### Common Job Titles

- **Entry:** Policy Research Assistant · Climate Policy Analyst · Government Affairs Associate
- **Mid:** Policy Manager · Senior Policy Analyst · Regulatory Affairs Manager
- **Senior:** Head of Climate Policy · Director of Government Affairs · Senior Advisor

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Policy analysis & brief writing | `strategy_governance` | mandatory | 3.0 |
| Regulatory analysis (EU/US climate law) | `regulations_disclosure` | mandatory | 2.5 |
| Negotiation & coalition building | `strategy_governance` | mandatory | 2.5 |
| Research & literature review | `data_systems` | mandatory | 2.0 |
| Carbon pricing mechanisms (ETS, taxes, CBAM) | `regulations_disclosure` | recommended | 2.0 |
| IPCC science literacy (AR6) | `carbon_accounting` | recommended | 1.5 |
| Stakeholder mapping & positions analysis | `strategy_governance` | recommended | 1.5 |
| Economic modeling basics / cost-benefit analysis | `data_systems` | recommended | 1.5 |
| Stata / R for policy analytics | `data_systems` | differentiator | 1.0 |
| Policy design & legislative drafting | `strategy_governance` | differentiator | 1.5 |

### Key Frameworks & Regulations

- Paris Agreement / NDC cycle · UNFCCC process · IPCC AR6
- EU: Fit-for-55, EU ETS, CBAM, CSRD (policy literacy) · US: IRA, SEC rules · Adaptation policy frameworks

### Typical Entry Backgrounds

Policy, science, law, general management. Writing sample quality is the primary screening signal at entry level.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | Carbon Literacy Project | Carbon Literacy Trust · 8 h |
| Intermediate | ISSP Sustainability Associate (ISSP-SA) | ISSP · 40 h |
| Advanced | ISSP Certified Sustainability Professional | ISSP · 100+ h |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| Stakeholder map of actors influencing one live climate policy | foundational | 10 |
| 2-page brief on a current climate bill: strengths and gaps | intermediate | 15 |
| NDC comparison of two countries under the Paris Agreement | intermediate | 25 |
| **Flagship (2.0):** Regional policy dossier — compare an EU and a US regulatory instrument on carbon leakage, with a position recommendation | capstone | 60 |

---

## 3. 📢 Climate Communications & Advocacy

**Slug:** `climate-communications` · **Demand:** high (`strong`) · **Live page:** [`/careers/climate-communications`](https://sustainabilitypathfinder.lovable.app/careers/climate-communications)

**Tagline:** Move audiences from awareness to action.

### Overview

Climate communicators translate science and policy into stories, campaigns, and content that change minds and behaviors across audiences. The craft blends editorial judgment with campaign discipline: message-market fit for climate-active NGOs, agencies, media, and increasingly in-house corporate teams.

Every climate-active organization needs communicators who can cut through noise and inspire action — and under tightening anti-greenwashing rules (EU Green Claims Directive, SEC enforcement), credibility is now a compliance question, not just an editorial one. Senior roles are won on narrative strategy and crisis communication, not content volume.

### Common Job Titles

- **Entry:** Communications Coordinator · Content Producer · Social Media Associate
- **Mid:** Climate Campaign Manager · Communications Manager · Content Strategy Lead
- **Senior:** Director of Communications · Head of Advocacy · Chief Storyteller

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Storytelling & narrative strategy | `strategy_governance` | mandatory | 3.0 |
| Campaign strategy & multi-channel design | `strategy_governance` | mandatory | 2.5 |
| Climate science literacy (accurate, current) | `carbon_accounting` | mandatory | 2.0 |
| Copywriting & content production | `strategy_governance` | mandatory | 2.0 |
| Media relations & editorial placement | `strategy_governance` | recommended | 2.0 |
| Social analytics & audience measurement | `data_systems` | recommended | 1.5 |
| Anti-greenwashing / claims regulation literacy | `regulations_disclosure` | recommended | 1.5 |
| Design tools (Canva, Figma) | `data_systems` | recommended | 1.0 |
| Crisis communication | `strategy_governance` | differentiator | 1.5 |
| Owned-media platform management | `data_systems` | differentiator | 1.0 |

### Key Frameworks & Regulations

- IPCC AR6 as source material · UNFCCC / Paris comms framing
- EU Green Claims Directive & Empowering Consumers Directive · SEC greenwashing enforcement · SBTi claims norms

### Typical Entry Backgrounds

Marketing/communications, policy, science. Portfolio of published climate content outweighs degrees.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | Carbon Literacy Project | Carbon Literacy Trust · 8 h |
| Intermediate | — Coming soon | |
| Advanced | — Coming soon | |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| 5 social posts + 60-second video script on one climate solution | foundational | 10 |
| 3-month editorial calendar for a sustainability brand | intermediate | 20 |
| 6-week campaign for a real local issue, with assets and KPIs | capstone | 50 |
| **Flagship (2.0):** Anti-greenwashing content audit — review a brand's climate claims against Green Claims criteria and rewrite the worst three | intermediate | 30 |

---

## 4. 💹 Carbon Markets & Climate Finance

**Slug:** `carbon-markets` · **Demand:** very high (`explosive`) · **Live page:** [`/careers/carbon-markets`](https://sustainabilitypathfinder.lovable.app/careers/carbon-markets)

**Tagline:** Channel capital into climate solutions.

### Overview

Professionals in this space develop, finance, trade and analyze carbon credits, climate funds, and green financial products. The work spans project origination (REDD+, cookstoves, DAC), compliance markets (EU ETS, CORSIA), and the voluntary carbon market's integrity rebuild under ICVCM.

Carbon markets, climate funds and transition finance are projected to be among the highest-growth segments in finance this decade. A finance background is a plus but not required at entry — what is required is fluency in credit integrity standards and honest quantitative modeling. Article 6 implementation and ICVCM Core Carbon Principles are reshaping the skills baseline for 2025+.

### Common Job Titles

- **Entry:** Carbon Markets Analyst · Sustainable Finance Associate · Climate Investment Analyst
- **Mid:** Carbon Project Manager · Climate Finance Manager · Transition Finance Specialist
- **Senior:** Head of Carbon Strategy · Managing Director, Climate Investing · CIO, Climate Fund

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Carbon credit standards (Verra VCS, Gold Standard) | `regulations_disclosure` | mandatory | 3.0 |
| Financial modeling & project finance | `data_systems` | mandatory | 3.0 |
| GHG accounting fundamentals | `carbon_accounting` | mandatory | 2.5 |
| Investor communication & memos | `strategy_governance` | mandatory | 2.0 |
| ISSB S2 / TCFD investor-facing disclosure | `regulations_disclosure` | recommended | 2.0 |
| Article 6 & voluntary-market policy (ICVCM CCPs) | `regulations_disclosure` | recommended | 2.0 |
| Carbon market data platforms (Sylvera, registries) | `data_systems` | recommended | 1.5 |
| Blended finance structuring | `strategy_governance` | differentiator | 1.5 |
| VCMI claims code | `regulations_disclosure` | differentiator | 1.0 |
| Green / transition bond instruments | `regulations_disclosure` | recommended | 1.5 |

### Key Frameworks & Regulations

- Verra VCS · Gold Standard · ICVCM Core Carbon Principles · VCMI Claims Code · Article 6 Paris Agreement
- EU ETS & CBAM · CORSIA · Green Bond Principles · EU Taxonomy · ISSB S2

### Typical Entry Backgrounds

Finance, data, engineering. Compensation is the strongest across the 17 paths; screening is quantitative.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | PRI Academy: ESG Investing Foundations | PRI · 10 h |
| Intermediate | ICROA Carbon Markets Fundamentals | ICROA · 25 h |
| Intermediate | CFA ESG Certificate | CFA Institute · 130 h |
| Intermediate | TCFD Foundation Course | CFA Institute · 10–15 h |
| Advanced | FSA Credential | IFRS / SASB · 100+ h |
| Advanced | VCMI Claims Code Training | VCMI · 10 h |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| Green bond comparison of 3 issuers vs. Green Bond Principles | intermediate | 20 |
| Carbon credit deep-dive: investor memo on a REDD+ or DAC project | intermediate | 35 |
| **Flagship (2.0):** Full project-finance model + integrity assessment for a carbon project (cashflow, risks, ICVCM scoring) | capstone | 90 |
| One-page thesis for a climate-focused fund | foundational | 10 |

---

## 5. ⚡ Renewable Energy & Clean Tech

**Slug:** `renewable-energy` · **Demand:** very high (`explosive`) · **Live page:** [`/careers/renewable-energy`](https://sustainabilitypathfinder.lovable.app/careers/renewable-energy)

**Tagline:** Build and scale the technology of the energy transition.

### Overview

Professionals in renewables and clean tech develop, finance, deploy and operate solar, wind, storage, EV, hydrogen and grid solutions. Roles split across technical (engineering, modeling), commercial (development, PPAs), and finance (project finance) tracks — all feeding one of the largest capital deployments in history.

Trillions of dollars are flowing into deployment and innovation through 2050, and demand is strong across technical, commercial, finance and policy roles. Incentive architecture is the regional differentiator: US candidates need IRA/ITC fluency, EU candidates need RED III and permitting-reform literacy, and everyone needs grid-connection realism.

### Common Job Titles

- **Entry:** Renewable Energy Analyst · Project Coordinator · Clean Tech Associate
- **Mid:** Project Developer · Energy Engineer · Clean Tech Product Manager
- **Senior:** Director of Development · Head of Engineering · VP, Clean Energy

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Energy systems literacy | `carbon_accounting` | mandatory | 2.5 |
| Project finance modeling (LCOE, cashflow) | `data_systems` | mandatory | 2.5 |
| Project management & cross-functional delivery | `strategy_governance` | mandatory | 2.0 |
| Yield modeling tools (PVsyst, WindPRO, HOMER) | `data_systems` | recommended | 2.0 |
| Power markets & grid integration | `carbon_accounting` | recommended | 2.0 |
| GIS site selection | `data_systems` | recommended | 1.5 |
| Permitting, PPAs & REC/GO markets | `regulations_disclosure` | recommended | 1.5 |
| Negotiation (landowners, offtakers) | `strategy_governance` | recommended | 1.5 |
| Engineering fundamentals (electrical/mechanical) | `data_systems` | differentiator | 1.5 |
| Storage & hydrogen economics | `carbon_accounting` | differentiator | 1.0 |

### Key Frameworks & Regulations

- US: IRA tax credits (ITC/PTC), interconnection queues · EU: RED III, permitting reform, GOs
- PPA structures · IRENA/IEA scenarios · SBTi energy pathways

### Typical Entry Backgrounds

Engineering, data, finance. Technical candidates pivot fastest into project development; finance candidates into origination.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | Renewable Energy 100 (edX) | edX / TU Delft · 30 h |
| Intermediate | Esri GIS Fundamentals | Esri · 20 h |
| Advanced | — Coming soon | |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| EV charging-network rollout plan for a mid-sized city | intermediate | 25 |
| Solar site pre-feasibility study for a real location | intermediate | 30 |
| **Flagship (2.0):** LCOE model + grid-connection risk memo for a solar or wind project | capstone | 70 |
| Map the renewables value chain for one technology | foundational | 12 |

---

## 6. 🔬 Sustainability Data & Analytics

**Slug:** `sustainability-data` · **Demand:** very high (`explosive`) · **Live page:** [`/careers/sustainability-data`](https://sustainabilitypathfinder.lovable.app/careers/sustainability-data)

**Tagline:** Turn sustainability data into decisions.

### Overview

Sustainability data professionals build datasets, dashboards, models and tools that help organizations measure and improve environmental and social performance. The craft is conventional data engineering applied to unconventional data: emission factors, supplier surveys, satellite feeds, and unstructured disclosure text.

Disclosure regulation and AI are accelerating demand for technical sustainability talent, and this is the highest-conversion path for engineers and analysts. Domain calibration is what separates generic data people from climate data people: knowing why a Scope 3 spend estimate needs uncertainty bands, and how CSRD datapoint requirements shape warehouse schemas.

### Common Job Titles

- **Entry:** Sustainability Data Analyst · ESG Data Engineer · Climate Tech Analyst
- **Mid:** Senior Data Scientist, Climate · Product Manager, Climate Tech · GHG Data Lead
- **Senior:** Head of Sustainability Data · Director, Climate Analytics · VP Product, Climate Tech

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Python & SQL | `data_systems` | mandatory | 3.0 |
| GHG Protocol & Scope 3 data structures | `carbon_accounting` | mandatory | 2.5 |
| BI dashboards (Power BI / Tableau) | `data_systems` | mandatory | 2.0 |
| Data modeling & pipelines (dbt, Snowflake) | `data_systems` | recommended | 2.0 |
| CSRD/ESRS datapoint requirements | `regulations_disclosure` | recommended | 2.0 |
| Product thinking & stakeholder translation | `strategy_governance` | recommended | 1.5 |
| ESG software platforms (Watershed, Persefoni) | `data_systems` | recommended | 1.5 |
| ML & forecasting for climate data | `data_systems` | differentiator | 1.5 |
| LCA data handling (openLCA exports) | `circularity_nature` | differentiator | 1.0 |
| Public climate datasets (EDGAR, Climate TRACE) | `carbon_accounting` | recommended | 1.5 |

### Key Frameworks & Regulations

- GHG Protocol (all Scopes) · CSRD/ESRS datapoints · ISSB S2
- Datasets: EDGAR, Climate TRACE, Exiobase, DEFRA/EPA emission factors

### Typical Entry Backgrounds

Data, engineering, science. Strongest entry pipeline of all 17 paths for career switchers with technical backgrounds.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | GHG Protocol Corporate Standard | WRI / WBCSD · 6–10 h |
| Beginner | Google Data Analytics Certificate | Coursera / Google · 6 months |
| Intermediate | Microsoft PL-300: Power BI Data Analyst | Microsoft · 40–60 h |
| Advanced | — Coming soon | |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| Open climate dataset analysis (EDGAR / Climate TRACE) with published insights | foundational | 15 |
| Power BI sustainability dashboard | intermediate | 25 |
| Python Scope 3 spend-based emissions estimator | intermediate | 30 |
| **Flagship (2.0):** Mini ESG data pipeline — ingest emissions data → warehouse → dashboard, with data-quality documentation | capstone | 70 |

---

## 7. 🔗 Sustainable Supply Chains & Procurement

**Slug:** `sustainable-supply-chain` · **Demand:** very high (`explosive`) · **Live page:** [`/careers/sustainable-supply-chain`](https://sustainabilitypathfinder.lovable.app/careers/sustainable-supply-chain)

**Tagline:** Decarbonize and ethicalize global value chains.

### Overview

Sustainable supply chain professionals work with suppliers to measure Scope 3 emissions, improve labor and environmental practices, and source responsibly. The role is equal parts diplomacy and data: getting 200 suppliers to disclose while building the spend models that show where impact actually concentrates.

Scope 3 is the largest emissions bucket for most companies and is rapidly becoming a disclosure requirement (CSRD E1, CDP Supply Chain). Regulatory intensity is rising on both the carbon and human-rights sides — EUDR, CSDDD and Germany's LkSG turn supplier governance into a legal obligation. Demand is strongest in consumer goods, fashion, food, tech, and industrial sectors.

### Common Job Titles

- **Entry:** Procurement Analyst · Supply Chain Sustainability Analyst · Supplier Engagement Associate
- **Mid:** Sustainable Procurement Manager · Scope 3 Lead · Ethical Sourcing Manager
- **Senior:** Director, Sustainable Supply Chain · VP Procurement & Sustainability

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Scope 3 accounting (Category 1 emphasis) | `carbon_accounting` | mandatory | 3.0 |
| Supplier engagement & negotiation | `strategy_governance` | mandatory | 3.0 |
| Human-rights due diligence (HREDD / UNGPs) | `regulations_disclosure` | mandatory | 2.0 |
| Spend analysis | `data_systems` | mandatory | 2.0 |
| EcoVadis / CDP Supply Chain programs | `regulations_disclosure` | recommended | 2.0 |
| EUDR deforestation due diligence | `circularity_nature` | recommended | 2.0 |
| Supplier scorecard design | `strategy_governance` | recommended | 1.5 |
| Procurement platforms (SAP Ariba) | `data_systems` | recommended | 1.5 |
| Supply chain mapping platforms (Sourcemap) | `data_systems` | differentiator | 1.5 |
| Supplier audit & assurance | `regulations_disclosure` | differentiator | 1.5 |

### Key Frameworks & Regulations

- GHG Protocol Scope 3 Standard & Cat 1 guidance · CSRD/ESRS E1 + S2 · CSDDD · EUDR · LkSG
- EcoVadis · CDP Supply Chain · amfori BSCI / SA8000 (labor)

### Typical Entry Backgrounds

Finance, general management/procurement, policy. Spend-ledger fluency converts directly to Scope 3 spend modeling.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | GHG Protocol Corporate Standard | WRI / WBCSD · 6–10 h |
| Intermediate | CIPS Sustainable Procurement | CIPS · 40 h |
| Intermediate | GRI Sustainability Reporting Standards | GRI · 30–40 h |
| Advanced | — Coming soon | |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| Spend-based Scope 3 estimate with hotspot identification | foundational | 15 |
| ESG supplier scorecard with weighted criteria | intermediate | 25 |
| Tiered supplier engagement plan for a 200-supplier portfolio | intermediate | 35 |
| **Flagship (2.0):** Scope 3 Cat 1 upgrade — convert 1,000-row spend ledger to hybrid activity-based inventory + top-10 supplier engagement protocol (§5, Plan) | capstone | 90 |

---

## 8. ♻️ Circular Economy & Waste Management

**Slug:** `circular-economy` · **Demand:** high (`strong`) · **Live page:** [`/careers/circular-economy`](https://sustainabilitypathfinder.lovable.app/careers/circular-economy)

**Tagline:** Design out waste — and design in regeneration.

### Overview

Circular economy professionals redesign products, business models and material flows to eliminate waste and keep resources in use at their highest value. The path blends design thinking with hard quantitative work: life cycle assessment, material flow analysis, and end-of-life modeling.

EU regulation (CEAP, EPR schemes, the Ecodesign for Sustainable Products Regulation and its Digital Product Passports) and corporate strategy are converging on circular models. Roles are growing in design, packaging, materials, waste, and consulting. LCA software fluency is the single clearest junior-to-mid gate; business model redesign is the senior differentiator.

### Common Job Titles

- **Entry:** Circular Economy Analyst · Sustainability Consultant · Packaging Sustainability Coordinator
- **Mid:** Circular Design Lead · EPR Compliance Manager · Materials Innovation Manager
- **Senior:** Head of Circularity · Director, Sustainable Innovation

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| LCA (ISO 14040/44, openLCA / SimaPro) | `circularity_nature` | mandatory | 3.0 |
| Circular design principles | `circularity_nature` | mandatory | 2.5 |
| Material flow analysis | `circularity_nature` | mandatory | 2.5 |
| Systems thinking | `strategy_governance` | mandatory | 2.0 |
| EPR regulation & compliance | `regulations_disclosure` | mandatory | 2.0 |
| Business model redesign | `strategy_governance` | recommended | 2.0 |
| Waste stream auditing | `circularity_nature` | recommended | 1.5 |
| Excel & data handling | `data_systems` | recommended | 1.5 |
| Digital Product Passports (ESPR) | `regulations_disclosure` | differentiator | 1.5 |
| Packaging regulation (PPWR) | `regulations_disclosure` | differentiator | 1.0 |

### Key Frameworks & Regulations

- ISO 14040/44 · EU CEAP · EPR schemes · ESPR & Digital Product Passports · PPWR
- Ellen MacArthur Foundation principles · Cradle to Cradle

### Typical Entry Backgrounds

Engineering, science, design, general management. Product designers convert well into circular design; engineers into LCA.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | Circular Economy in Cities | Ellen MacArthur Foundation · 15 h |
| Intermediate | — Coming soon | |
| Advanced | — Coming soon | |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| Circular redesign of one everyday product with documented tradeoffs | foundational | 15 |
| Streamlined LCA of a simple product in openLCA | intermediate | 30 |
| EPR readiness assessment for one EU market | intermediate | 30 |
| **Flagship (2.0):** Single-use vs. reusable packaging LCA — functional unit, system boundary, GWP comparison and break-even cycle calculation (§5, Plan) | capstone | 80 |

---

## 9. 🦋 Nature, Biodiversity & Conservation

**Slug:** `biodiversity-conservation` · **Demand:** growing (`emerging`) · **Live page:** [`/careers/biodiversity-conservation`](https://sustainabilitypathfinder.lovable.app/careers/biodiversity-conservation)

**Tagline:** Protect and restore the living systems we depend on.

### Overview

Biodiversity and conservation professionals work on habitat protection, restoration, biodiversity credits, and the emerging TNFD nature disclosure framework. The path spans field science, geospatial analysis, and — increasingly — corporate nature strategy as disclosure regimes mature.

Nature is the next frontier of corporate sustainability and finance. Roles span NGOs, government, consultancies and increasingly corporates. TNFD LEAP adoption and SBTN target-setting are the bridge skills that let conservationists move into corporate roles and let analysts move into conservation — making this the highest-leverage emerging path for hybrid backgrounds.

### Common Job Titles

- **Entry:** Conservation Officer · Field Researcher · Biodiversity Analyst
- **Mid:** Program Manager · Nature-Based Solutions Specialist · TNFD Implementation Lead
- **Senior:** Director of Conservation · Head of Nature Strategy

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| GIS & remote sensing (QGIS, ArcGIS, GEE) | `data_systems` | mandatory | 3.0 |
| TNFD LEAP framework | `regulations_disclosure` | mandatory | 2.5 |
| Biodiversity monitoring & metrics | `circularity_nature` | mandatory | 2.5 |
| Community engagement & stakeholder work | `strategy_governance` | mandatory | 2.5 |
| SBTN target setting | `regulations_disclosure` | recommended | 2.0 |
| Species ID & field methods | `circularity_nature` | recommended | 1.5 |
| Google Earth Engine analysis | `data_systems` | recommended | 1.5 |
| Grant & proposal writing | `strategy_governance` | recommended | 1.5 |
| Biodiversity credit markets | `regulations_disclosure` | differentiator | 1.5 |
| Program leadership (NGO context) | `strategy_governance` | differentiator | 1.5 |

### Key Frameworks & Regulations

- TNFD (LEAP approach) · SBTN · Kunming-Montreal Global Biodiversity Framework
- EUDR (nature angle) · biodiversity credit frameworks (e.g., IAPB)

### Typical Entry Backgrounds

Science, policy, data. Field science credentials matter for NGO/conservation lanes; GIS + TNFD matter for corporate lanes.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | Esri GIS Fundamentals | Esri · 20 h |
| Intermediate | — Coming soon | |
| Advanced | — Coming soon | |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| Baseline biodiversity report for a small site using public data | foundational | 15 |
| 5-page conservation project proposal | intermediate | 20 |
| **Flagship (2.0):** TNFD LEAP pilot for one company in a high-impact sector (locate–evaluate–assess–prepare) | capstone | 80 |
| QGIS habitat map of a real area | intermediate | 25 |

---

## 10. 🏗️ Green Building & Urban Sustainability

**Slug:** `green-building` · **Demand:** high (`strong`) · **Live page:** [`/careers/green-building`](https://sustainabilitypathfinder.lovable.app/careers/green-building)

**Tagline:** Design the buildings and cities of a low-carbon future.

### Overview

Green building professionals apply LEED, BREEAM, WELL and embodied-carbon practices to design, certify and operate sustainable buildings and urban developments. The path runs through architecture and engineering firms, real estate owners, and urban planning bodies.

Cities account for ~70% of emissions; built-environment decarbonization is non-negotiable, with demand strong from architecture, engineering, real estate, and urban planning firms. The regulatory floor keeps rising: EU EPBD recast and whole-life carbon disclosure turn embodied carbon from a niche skill into a core competency. Certification exams (LEED GA → AP) are the standard credential ladder.

### Common Job Titles

- **Entry:** Sustainability Coordinator · LEED Consultant · Junior Energy Modeler
- **Mid:** Senior Sustainability Consultant · WELL AP · Embodied Carbon Specialist
- **Senior:** Director of Sustainability · Principal Consultant

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Certification systems (LEED, BREEAM, WELL) | `regulations_disclosure` | mandatory | 3.0 |
| Energy modeling (IES, EnergyPlus) | `carbon_accounting` | mandatory | 2.5 |
| Embodied carbon & One Click LCA | `carbon_accounting` | mandatory | 2.5 |
| Client management | `strategy_governance` | mandatory | 2.0 |
| Net-zero retrofit strategy | `carbon_accounting` | recommended | 2.0 |
| Building design tools (Revit, AutoCAD) | `data_systems` | recommended | 1.5 |
| Climate resilience & adaptation planning | `circularity_nature` | differentiator | 1.5 |
| Urban planning fundamentals | `strategy_governance` | differentiator | 1.0 |
| Project leadership | `strategy_governance` | differentiator | 1.5 |

### Key Frameworks & Regulations

- LEED · BREEAM · WELL · NABERS · Energy Star · EU EPBD · RICS whole-life carbon

### Typical Entry Backgrounds

Engineering, architecture/construction, general management. LEED Green Associate is the universal entry credential.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | LEED Green Associate | USGBC · 40 h |
| Intermediate | WELL AP | IWBI · 60 h |
| Advanced | LEED AP BD+C | USGBC · 80+ h |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| 6-week LEED GA study plan — executed and documented | foundational | 12 |
| Embodied carbon comparison of two structural systems | intermediate | 30 |
| Net-zero retrofit concept for a real building | intermediate | 40 |
| **Flagship (2.0):** Whole-life carbon assessment — operational + embodied model with certification-point strategy for one building | capstone | 80 |

---

## 11. 🧭 Environmental Consulting

**Slug:** `environmental-consulting` · **Demand:** very high (`explosive`) · **Live page:** [`/careers/environmental-consulting`](https://sustainabilitypathfinder.lovable.app/careers/environmental-consulting)

**Tagline:** Advise clients across industries on sustainability strategy and compliance.

### Overview

Environmental consultants help companies design strategies, comply with regulation, measure impacts and improve performance across ESG topics. It is the generalist path: breadth across frameworks and sectors, with depth added by specialization (carbon, CSRD, supply chain, nature).

Consulting is one of the most common entry points into sustainability for early-career professionals and career switchers — Big 4, boutique and specialist firms are all hiring aggressively. Structured problem solving and client communication are the entry gates; a named sector or framework specialization is the mid-career unlock.

### Common Job Titles

- **Entry:** Sustainability Consultant · ESG Associate · Research Analyst
- **Mid:** Senior Consultant · Engagement Manager · Subject Matter Expert
- **Senior:** Partner · Director · Practice Lead

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Structured thinking & client communication | `strategy_governance` | mandatory | 3.0 |
| GHG accounting | `carbon_accounting` | mandatory | 2.5 |
| ESG frameworks (GRI, SASB, ISSB) | `regulations_disclosure` | mandatory | 2.5 |
| Strategy frameworks & problem structuring | `strategy_governance` | mandatory | 2.5 |
| Double materiality facilitation | `strategy_governance` | recommended | 2.0 |
| Financial modeling | `data_systems` | recommended | 1.5 |
| BI dashboards (Power BI) | `data_systems` | recommended | 1.5 |
| Project management | `strategy_governance` | recommended | 2.0 |
| Sector specialization | `strategy_governance` | differentiator | 2.0 |
| Business development | `strategy_governance` | differentiator | 1.5 |

### Key Frameworks & Regulations

- GHG Protocol · GRI · ISSB · CSRD/ESRS · TCFD · CDP · client-sector regulation

### Typical Entry Backgrounds

General management, finance, engineering, science. Case-interview performance is the key screening step for switchers.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | GHG Protocol Corporate Standard | WRI / WBCSD · 6–10 h |
| Beginner | Carbon Literacy Project | Carbon Literacy Trust · 8 h |
| Intermediate | GRI Sustainability Reporting Standards | GRI · 30–40 h |
| Intermediate | ISSP Sustainability Associate (ISSP-SA) | ISSP · 40 h |
| Advanced | ISSP Certified Sustainability Professional | ISSP · 100+ h |
| Advanced | FSA Credential | IFRS / SASB · 100+ h |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| Peer benchmarking of 3 companies on one sector ESG topic | foundational | 12 |
| Net-zero roadmap for a mid-sized company | intermediate | 35 |
| **Flagship (2.0):** 15-slide sustainability strategy deck for a mock client, with materiality logic and KPI tree | capstone | 60 |
| 5 practice case interviews with written debriefs | foundational | 15 |

---

## 12. 🌱 Sustainable Agriculture & Food Systems

**Slug:** `community-sustainability` · **Demand:** growing (`emerging`) · **Live page:** [`/careers/community-sustainability`](https://sustainabilitypathfinder.lovable.app/careers/community-sustainability)

**Tagline:** Transform how we grow, distribute, and eat food.

### Overview

Sustainable food systems professionals work on regenerative agriculture, food security, sustainable sourcing, and community-led development. The path spans NGOs, foundations, corporates (food & agri), agri-startups and government — with field program roles and corporate sourcing roles requiring different skill emphasis.

Food systems account for ~30% of emissions and are central to biodiversity, water and equity. SBTi FLAG guidance and Scope 3 agricultural accounting are pulling food corporates toward rigorous land-sector targets, creating hybrid roles that combine program management (MEL, community engagement) with carbon and nature accounting.

### Common Job Titles

- **Entry:** Program Officer · Sustainable Sourcing Analyst · Field Coordinator
- **Mid:** Regenerative Ag Specialist · Food Systems Manager · Impact Manager
- **Senior:** Director of Food Systems · Head of Sustainable Sourcing

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Regenerative agriculture literacy | `circularity_nature` | mandatory | 2.5 |
| Program design (Theory of Change, logframe) | `strategy_governance` | mandatory | 2.5 |
| MEL frameworks & indicators | `data_systems` | mandatory | 2.5 |
| Community engagement | `strategy_governance` | mandatory | 2.5 |
| Supply chain mapping | `data_systems` | recommended | 2.0 |
| Field data tools (KoboToolbox, QGIS) | `data_systems` | recommended | 1.5 |
| Soil / agricultural carbon MRV | `carbon_accounting` | differentiator | 1.5 |
| Food security policy literacy | `regulations_disclosure` | differentiator | 1.0 |
| Agroforestry economics | `carbon_accounting` | differentiator | 1.0 |
| Partnership building | `strategy_governance` | recommended | 1.5 |

### Key Frameworks & Regulations

- SBTi FLAG guidance · GHG Protocol agricultural guidance · TNFD food systems pilots
- EU Farm to Fork / regenerative standards · food-security frameworks (FAO, WFP contexts)

### Typical Entry Backgrounds

Science, policy, general management. Field experience (or credible field volunteering) is the strongest entry signal.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | Circular Economy in Cities | Ellen MacArthur Foundation · 15 h |
| Intermediate | Esri GIS Fundamentals | Esri · 20 h |
| Advanced | — Coming soon | |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| Food systems map of one city or region | foundational | 15 |
| Monitoring framework for a food security program | intermediate | 25 |
| Regenerative farm case study with quantified outcomes | intermediate | 30 |
| **Flagship (2.0):** SBTi FLAG-aligned sourcing strategy for one commodity chain, with MRV outline | capstone | 80 |

---

## 13. 🎓 Sustainability Education & Capacity Building

**Slug:** `education-capacity-building` · **Demand:** very high (`explosive`) · **Live page:** [`/careers/education-capacity-building`](https://sustainabilitypathfinder.lovable.app/careers/education-capacity-building)

**Tagline:** Grow the talent and awareness the climate transition needs.

### Overview

Sustainability educators design curricula, workshops, and training programs that build climate and sustainability literacy across schools, universities, corporates, NGOs and communities. The path blends pedagogy with subject-matter depth: the best practitioners can both design learning experiences and hold technical credibility on climate content.

The green skills gap is one of the biggest blockers to the transition, so education and capacity building are in massive demand across every sector — schools, universities, NGOs, foundations, corporates, UN agencies and training providers. Corporate L&D is the fastest-growing lane: every company rolling out sustainability training needs instructional designers who actually understand the material.

### Common Job Titles

- **Entry:** Sustainability Educator · Environmental Education Officer · L&D Coordinator · Youth Engagement Officer
- **Mid:** Climate Education Specialist · Curriculum Manager · Training Program Manager · Capacity Building Lead
- **Senior:** Director of Education & Learning · Head of Capacity Building · Chief Learning Officer

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Facilitation & public speaking | `strategy_governance` | mandatory | 3.0 |
| Curriculum development | `strategy_governance` | mandatory | 2.5 |
| Instructional design (ADDIE) | `strategy_governance` | mandatory | 2.5 |
| Climate & sustainability content accuracy | `carbon_accounting` | mandatory | 2.0 |
| Assessment design | `data_systems` | recommended | 1.5 |
| LMS platforms (Moodle, Teachable) | `data_systems` | recommended | 1.5 |
| Program evaluation | `data_systems` | recommended | 1.5 |
| Storytelling & empathy in teaching | `strategy_governance` | recommended | 1.5 |
| Train-the-trainer design | `strategy_governance` | differentiator | 1.5 |
| Executive facilitation & coaching | `strategy_governance` | differentiator | 1.0 |

### Key Frameworks & Regulations

- UNESCO ESD 2030 · UNFCCC Action for Climate Empowerment (ACE) · Carbon Literacy Standard
- GHG Protocol as foundational curriculum content

### Typical Entry Backgrounds

Education/teaching, general management, policy, science. Teaching credential + climate literacy course is the classic entry combo.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | Carbon Literacy Project | Carbon Literacy Trust · 8 h |
| Intermediate | — Coming soon | |
| Advanced | ISSP Sustainability Associate (ISSP-SA) | ISSP · 40 h |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| 90-minute workshop delivered with collected feedback | foundational | 12 |
| 4-week climate course: outline, slides, activities | intermediate | 35 |
| Youth engagement toolkit (downloadable) | intermediate | 25 |
| **Flagship (2.0):** Corporate sustainability training program — needs analysis, curriculum, assessment, and evaluation plan for a mock employer | capstone | 70 |

---

## 14. 🗂️ Sustainability Programs & Project Management

**Slug:** `programs-project-management` · **Demand:** very high (`explosive`) · **Live page:** [`/careers/programs-project-management`](https://sustainabilitypathfinder.lovable.app/careers/programs-project-management)

**Tagline:** Turn sustainability strategy into on-the-ground delivery.

### Overview

Program and project managers plan, coordinate, and deliver sustainability initiatives — ESG programs, climate projects, and development interventions — on time, on budget, and with measurable outcomes. The path is the delivery backbone of the sector, spanning corporates, NGOs, foundations, government and UN agencies.

As sustainability moves from strategy to execution, every organization needs people who can run the programs that deliver impact — and existing PMs transfer almost all core skills. The sustainability-specific additions are Theory of Change/logframe discipline, donor-grade M&E, and budget stewardship under grant compliance rules.

### Common Job Titles

- **Entry:** Program Assistant · Sustainability Project Coordinator · ESG Program Officer
- **Mid:** Program Manager · Sustainability Project Manager · Climate Program Lead
- **Senior:** Director of Programs · Head of Sustainability Delivery · Chief of Party

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Workplan, budget & logframe design | `strategy_governance` | mandatory | 3.0 |
| Theory of Change | `strategy_governance` | mandatory | 2.5 |
| M&E (monitoring & evaluation) | `data_systems` | mandatory | 2.5 |
| Stakeholder management | `strategy_governance` | mandatory | 2.5 |
| Budgeting & donor reporting | `data_systems` | mandatory | 2.0 |
| Sustainability domain literacy | `carbon_accounting` | recommended | 1.5 |
| PM tools (Asana, ClickUp, MS Project) | `data_systems` | recommended | 1.5 |
| Risk management | `strategy_governance` | differentiator | 1.5 |
| Portfolio management | `strategy_governance` | differentiator | 1.5 |
| Adaptive leadership | `strategy_governance` | differentiator | 1.5 |

### Key Frameworks & Regulations

- PMD Pro · PMP · logframe / Theory of Change standards · GEF/GCF results frameworks
- Donor compliance regimes (EU, USAID, foundations)

### Typical Entry Backgrounds

General management, policy, finance. Existing PMs (any industry) need the smallest delta of all switchers — mostly vocabulary and M&E.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | Carbon Literacy Project | Carbon Literacy Trust · 8 h |
| Intermediate | ISSP Sustainability Associate (ISSP-SA) | ISSP · 40 h |
| Advanced | ISSP Certified Sustainability Professional | ISSP · 100+ h |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| Full workplan + budget + logframe for a mock climate project | intermediate | 25 |
| M&E framework: indicators + monitoring plan for a sustainability program | intermediate | 30 |
| Mock 6-month donor narrative + financial report | intermediate | 25 |
| **Flagship (2.0):** Complete program package — ToC, logframe, budget, risk register, and M&E plan for a multi-year climate program | capstone | 80 |

---

## 15. 🤝 Sustainability Partnerships & Stakeholder Engagement

**Slug:** `partnerships-stakeholder-engagement` · **Demand:** high (`strong`) · **Live page:** [`/careers/partnerships-stakeholder-engagement`](https://sustainabilitypathfinder.lovable.app/careers/partnerships-stakeholder-engagement)

**Tagline:** Build the coalitions that make sustainability work.

### Overview

Partnerships and engagement professionals connect companies, governments, NGOs and communities — designing collaborations, managing relationships, and enabling collective action on sustainability. The work is the connective tissue of the sector: multipartite platforms, corporate–NGO alliances, and community engagement processes.

No sustainability outcome happens alone — partnerships and stakeholder engagement are core capabilities for every serious organization, with strong demand in NGOs, foundations, corporates, and multilateral organizations. The skill set is deep strategy_governance territory: influence without authority, cross-cultural collaboration, and coalition architecture.

### Common Job Titles

- **Entry:** Engagement Coordinator · Partnerships Associate · Community Relations Officer
- **Mid:** Sustainability Partnerships Manager · Stakeholder Engagement Lead · External Affairs Manager
- **Senior:** Director of Partnerships · Head of Stakeholder Engagement · VP External Affairs

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Stakeholder mapping & engagement planning | `strategy_governance` | mandatory | 3.0 |
| Negotiation | `strategy_governance` | mandatory | 2.5 |
| Partnership design (MOUs, frameworks) | `strategy_governance` | mandatory | 2.5 |
| Cross-cultural collaboration | `strategy_governance` | mandatory | 2.0 |
| SDG & sustainability literacy | `carbon_accounting` | recommended | 1.0 |
| CRM & workflow tools (Salesforce, HubSpot) | `data_systems` | recommended | 1.0 |
| Public affairs strategy | `regulations_disclosure` | differentiator | 1.5 |
| Multi-stakeholder platform design | `strategy_governance` | differentiator | 2.0 |
| Conflict resolution | `strategy_governance` | differentiator | 1.5 |
| Coalition building & executive influence | `strategy_governance` | differentiator | 1.5 |

### Key Frameworks & Regulations

- UN Global Compact partnership principles · SDG 17 (Partnerships for the Goals) · multipartite platform norms

### Typical Entry Backgrounds

General management, policy, communications. Relationship track record (any industry) is the transferable core.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | Carbon Literacy Project | Carbon Literacy Trust · 8 h |
| Intermediate | — Coming soon | |
| Advanced | — Coming soon | |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| Influence/interest stakeholder map around one real sustainability issue | foundational | 10 |
| 2-page cross-sector partnership brief for one SDG | intermediate | 15 |
| 6-month engagement plan for one target community or industry group | intermediate | 25 |
| **Flagship (2.0):** Full partnership architecture — governance model, MOU draft, KPIs and risk plan for a corporate–NGO alliance | capstone | 60 |

---

## 16. 🔎 Sustainability Research & Knowledge Management

**Slug:** `research-knowledge-management` · **Demand:** high (`strong`) · **Live page:** [`/careers/research-knowledge-management`](https://sustainabilitypathfinder.lovable.app/careers/research-knowledge-management)

**Tagline:** Turn evidence into insight that drives climate action.

### Overview

Researchers and knowledge managers generate, curate, and share evidence — running studies, producing briefs and reports, and building the knowledge systems that inform sustainability decisions. The path spans think tanks, universities, NGOs, foundations, UN agencies and corporate strategy teams.

As sustainability decisions get bigger, so does the need for rigorous research and well-organized knowledge to back them. Two distinct lanes exist: the **research lane** (methods-heavy, publication-oriented) and the **knowledge-management lane** (systems-heavy, platform architecture) — the diagnostic should separate these for accurate matching.

### Common Job Titles

- **Entry:** Research Assistant · Knowledge Management Officer · Junior Research Analyst
- **Mid:** Sustainability Research Associate · Policy Researcher · Knowledge Manager
- **Senior:** Head of Research · Director of Knowledge Management · Principal Researcher

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Qualitative & quantitative research methods | `data_systems` | mandatory | 3.0 |
| Literature review & synthesis | `data_systems` | mandatory | 2.5 |
| Policy brief & report writing | `strategy_governance` | mandatory | 2.5 |
| IPCC / UNEP science literacy | `carbon_accounting` | mandatory | 2.0 |
| Statistical tools (R / Stata / SPSS) | `data_systems` | recommended | 2.0 |
| Data visualization | `data_systems` | recommended | 1.5 |
| Editorial judgment | `strategy_governance` | recommended | 1.5 |
| Survey design | `data_systems` | recommended | 1.5 |
| Mixed-methods design | `data_systems` | differentiator | 1.5 |
| Knowledge platform architecture (Notion, Airtable) | `data_systems` | differentiator | 1.5 |
| Peer-review publishing | `strategy_governance` | differentiator | 1.0 |

### Key Frameworks & Regulations

- IPCC AR6 · UNEP flagship reports (GEO, Emissions Gap) · WRI research standards
- GRI/ISSB as applied research contexts

### Typical Entry Backgrounds

Science, policy, data. Publication record (even informal: LinkedIn essays, blog syntheses) is the entry currency.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | Carbon Literacy Project | Carbon Literacy Trust · 8 h |
| Beginner | GHG Protocol Corporate Standard | WRI / WBCSD · 6–10 h |
| Intermediate | GRI Sustainability Reporting Standards | GRI · 30–40 h |
| Advanced | ISSP Certified Sustainability Professional | ISSP · 100+ h |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| 4-page evidence-based policy brief on a climate topic | intermediate | 20 |
| Synthesis of the last 10 key papers on one sustainability question | intermediate | 25 |
| Notion/Airtable knowledge hub for a mock sustainability team | intermediate | 25 |
| **Flagship (2.0):** Mini research study — question, method, data collection, analysis, and 8-page report with recommendations | capstone | 80 |

---

## 17. 💰 Grant Writing & Climate Resource Mobilization

**Slug:** `grant-writing-mobilization` · **Demand:** very high (`explosive`) · **Live page:** [`/careers/grant-writing-mobilization`](https://sustainabilitypathfinder.lovable.app/careers/grant-writing-mobilization)

**Tagline:** Unlock the funding that makes climate work happen.

### Overview

Grant writers and resource mobilization specialists identify funders, craft proposals, and secure the grants, contracts and partnerships that finance sustainability and climate initiatives. The path is the revenue engine of the NGO and climate-startup world: funders include GCF, GEF, Adaptation Fund, EU programs, USAID-type bilateral agencies, and philanthropy.

Climate finance is scaling fast — organizations urgently need people who can turn missions into fundable proposals. Writers who can also speak the language of climate funds (logframes, results frameworks, co-financing) command premium demand. Senior roles shift from writing toward portfolio strategy and consortium orchestration.

### Common Job Titles

- **Entry:** Grants Assistant · Fundraising Associate · Development Officer
- **Mid:** Grant Writer · Resource Mobilization Officer · Proposal Development Specialist
- **Senior:** Director of Development · Head of Resource Mobilization · Chief Development Officer

### Core Skills Matrix

| Skill | Pillar | Requirement | Weight |
| :--- | :--- | :--- | :--: |
| Proposal writing | `strategy_governance` | mandatory | 3.0 |
| Logframe / Theory of Change | `strategy_governance` | mandatory | 2.5 |
| Budgeting & budget narratives | `data_systems` | mandatory | 2.5 |
| Donor research & compliance (USAID, EU, GEF) | `regulations_disclosure` | mandatory | 2.5 |
| Donor relations management | `strategy_governance` | mandatory | 2.0 |
| Storytelling for funders | `strategy_governance` | recommended | 2.0 |
| Funder databases (Instrumentl, Candid) | `data_systems` | recommended | 1.0 |
| Climate fund design (GCF, GEF, AF) | `regulations_disclosure` | differentiator | 1.5 |
| Blended finance | `carbon_accounting` | differentiator | 1.5 |
| Consortium proposals & coordination | `strategy_governance` | differentiator | 1.5 |

### Key Frameworks & Regulations

- Green Climate Fund · GEF · Adaptation Fund · EU funding programs · bilateral donor rules
- Results-framework standards of major climate funds

### Typical Entry Backgrounds

Policy, general management, finance, communications. Writing samples are the entry currency; donor-side compliance knowledge is the senior moat.

### Certifications (live site)

| Level | Certification | Provider · Hours |
| :--- | :--- | :--- |
| Beginner | — Coming soon | |
| Intermediate | ISSP Sustainability Associate (ISSP-SA) | ISSP · 40 h |
| Advanced | ISSP Certified Sustainability Professional | ISSP · 100+ h |
| Advanced | CFA ESG Certificate | CFA Institute · 130 h |

### Portfolio Project Seeds

| Project | Difficulty | Est. Hours |
| :--- | :--- | :--: |
| Funder landscape scan: 20 funders mapped with fit analysis | foundational | 12 |
| Mock GCF concept note for a climate project | intermediate | 25 |
| Full 10-page proposal with logframe and budget for a real call | capstone | 80 |
| **Flagship (2.0):** Funding pipeline build — donor map, pipeline tracker, concept note, and full proposal for one thematic area | capstone | 90 |

---

## Appendix A — Schema Mapping Notes

| File field | DB target |
| :--- | :--- |
| Slug (`career_paths.slug`) | `slug TEXT UNIQUE NOT NULL` |
| Title, Tagline | `title`, `tagline` |
| Overview | `overview TEXT NOT NULL` (merge the Overview paragraphs) |
| Demand (schema) | `market_demand_level` enum |
| Common Job Titles | `common_job_titles TEXT[]` (flatten entry/mid/senior into one array) |
| Core Skills Matrix rows | `path_skills` junction rows — skill name → `skills.slug` (kebab-case), requirement level + weight as listed |
| Portfolio Project Seeds | `portfolio_projects` — difficulty enum as listed, est. hours in `estimated_hours` |
| Salaries | `median_salary_usd`, `senior_salary_usd` — **TBD** |

**Slug conversion rule:** `skills.slug` = skill name lowercased, spaces → `-` (e.g., "GHG Protocol corporate accounting (Scopes 1–3)" → `ghg-protocol-corporate-accounting-scopes-1-3`). Keep a single `skills` table across all paths; pillar tag comes from the matrix.

## Appendix B — Cross-Path Framework Coverage (for the Framework Index page)

| Framework | Primary paths |
| :--- | :--- |
| GHG Protocol (Scopes 1–3) | esg-reporting, carbon-markets, sustainability-data, sustainable-supply-chain, environmental-consulting |
| CSRD / ESRS | esg-reporting, environmental-consulting, sustainability-data, sustainable-supply-chain |
| ISSB IFRS S1/S2 | esg-reporting, carbon-markets, environmental-consulting, sustainability-data |
| TNFD / SBTN | biodiversity-conservation, community-sustainability |
| EUDR | sustainable-supply-chain, biodiversity-conservation |
| ISO 14040/44 (LCA) | circular-economy, esg-reporting, renewable-energy |
| EU ETS / CBAM | climate-policy, carbon-markets |
| Verra / Gold Standard / ICVCM | carbon-markets |
| LEED / BREEAM / WELL | green-building |
| IRA (US) | climate-policy, renewable-energy |
| SBTi | esg-reporting, community-sustainability, renewable-energy |
