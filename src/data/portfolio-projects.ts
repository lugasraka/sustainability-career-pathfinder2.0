import type { PortfolioProject } from "@/types/pathfinder";

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // esg-reporting
  { pathSlug: "esg-reporting", title: "Stakeholder interview → materiality matrix", summary: "Interview 5 stakeholders for a small business and produce a materiality matrix.", difficulty: "foundational", estimatedHours: 12 },
  { pathSlug: "esg-reporting", title: "Reproduce a GRI-aligned sustainability report", summary: "Pick a public company and reproduce a 20-page sustainability report using GRI Standards.", difficulty: "intermediate", estimatedHours: 40 },
  { pathSlug: "esg-reporting", title: "ESRS double-materiality matrix + executive briefing", summary: "Perform a dual-materiality assessment (impact + financial) for a mid-market manufacturer; deliver a stakeholder scoring matrix and a 4-page executive briefing with data-boundary justifications.", difficulty: "capstone", estimatedHours: 80 },
  { pathSlug: "esg-reporting", title: "ESG KPI dashboard", summary: "Build a Power BI or Tableau dashboard tracking key ESG KPIs for a mock company.", difficulty: "intermediate", estimatedHours: 25 },

  // climate-policy
  { pathSlug: "climate-policy", title: "Stakeholder map of a live climate policy", summary: "Map the actors influencing a specific climate policy and their positions.", difficulty: "foundational", estimatedHours: 10 },
  { pathSlug: "climate-policy", title: "Policy brief on a current climate bill", summary: "Pick a current climate bill and write a 2-page brief on its strengths and gaps.", difficulty: "intermediate", estimatedHours: 15 },
  { pathSlug: "climate-policy", title: "NDC comparison under the Paris Agreement", summary: "Produce a comparison of two countries' climate commitments under the Paris Agreement.", difficulty: "intermediate", estimatedHours: 25 },
  { pathSlug: "climate-policy", title: "Regional policy dossier: EU vs US carbon leakage", summary: "Compare an EU and a US regulatory instrument on carbon leakage and deliver a position recommendation.", difficulty: "capstone", estimatedHours: 60 },

  // climate-communications
  { pathSlug: "climate-communications", title: "Climate solution content pack", summary: "Design 5 social posts and a 60-second video script on a single climate solution.", difficulty: "foundational", estimatedHours: 10 },
  { pathSlug: "climate-communications", title: "Sustainability content calendar", summary: "Produce a 3-month editorial calendar for a sustainability brand.", difficulty: "intermediate", estimatedHours: 20 },
  { pathSlug: "climate-communications", title: "6-week local climate campaign", summary: "Design a 6-week campaign for a real local issue, including assets and KPIs.", difficulty: "capstone", estimatedHours: 50 },
  { pathSlug: "climate-communications", title: "Anti-greenwashing content audit", summary: "Review a brand's climate claims against Green Claims criteria and rewrite the worst three.", difficulty: "intermediate", estimatedHours: 30 },

  // carbon-markets
  { pathSlug: "carbon-markets", title: "Climate fund one-pager", summary: "Build a one-page thesis for a climate-focused fund.", difficulty: "foundational", estimatedHours: 10 },
  { pathSlug: "carbon-markets", title: "Green bond comparison", summary: "Compare 3 green bonds and assess their alignment with the Green Bond Principles.", difficulty: "intermediate", estimatedHours: 20 },
  { pathSlug: "carbon-markets", title: "Carbon credit deep-dive investor memo", summary: "Analyze a specific carbon project (REDD+ or DAC) and write an investor memo.", difficulty: "intermediate", estimatedHours: 35 },
  { pathSlug: "carbon-markets", title: "Project finance model + integrity assessment", summary: "Build a full project-finance model and ICVCM-aligned integrity assessment for a carbon project.", difficulty: "capstone", estimatedHours: 90 },

  // renewable-energy
  { pathSlug: "renewable-energy", title: "Renewables value chain map", summary: "Map the renewables value chain for one technology.", difficulty: "foundational", estimatedHours: 12 },
  { pathSlug: "renewable-energy", title: "EV charging-network rollout plan", summary: "Design a charging-network rollout plan for a mid-sized city.", difficulty: "intermediate", estimatedHours: 25 },
  { pathSlug: "renewable-energy", title: "Solar site pre-feasibility study", summary: "Pick a real location and produce a basic solar pre-feasibility study.", difficulty: "intermediate", estimatedHours: 30 },
  { pathSlug: "renewable-energy", title: "LCOE model + grid-connection risk memo", summary: "Build an LCOE model for a solar or wind project and a grid-connection risk memo.", difficulty: "capstone", estimatedHours: 70 },

  // sustainability-data
  { pathSlug: "sustainability-data", title: "Open climate dataset analysis", summary: "Analyze a public dataset (e.g. EDGAR or Climate TRACE) and publish insights.", difficulty: "foundational", estimatedHours: 15 },
  { pathSlug: "sustainability-data", title: "Power BI sustainability dashboard", summary: "Build a Power BI sustainability dashboard from raw emissions data.", difficulty: "intermediate", estimatedHours: 25 },
  { pathSlug: "sustainability-data", title: "Python Scope 3 spend estimator", summary: "Build a simple Scope 3 spend-based emissions estimator in Python.", difficulty: "intermediate", estimatedHours: 30 },
  { pathSlug: "sustainability-data", title: "Mini ESG data pipeline", summary: "Build a small pipeline ingesting emissions data into a warehouse and producing a dashboard, with data-quality documentation.", difficulty: "capstone", estimatedHours: 70 },

  // sustainable-supply-chain
  { pathSlug: "sustainable-supply-chain", title: "Spend-based Scope 3 hotspot analysis", summary: "Build a spend-based Scope 3 estimate and identify hotspots.", difficulty: "foundational", estimatedHours: 15 },
  { pathSlug: "sustainable-supply-chain", title: "ESG supplier scorecard", summary: "Design an ESG supplier scorecard with weighted criteria.", difficulty: "intermediate", estimatedHours: 25 },
  { pathSlug: "sustainable-supply-chain", title: "Tiered supplier engagement plan", summary: "Design a tiered engagement plan for a 200-supplier portfolio.", difficulty: "intermediate", estimatedHours: 35 },
  { pathSlug: "sustainable-supply-chain", title: "Scope 3 Cat 1 hybrid inventory + supplier protocol", summary: "Convert a 1,000-row spend ledger to a hybrid activity-based inventory and design an actionable engagement protocol for the top 10 carbon-intensive vendors.", difficulty: "capstone", estimatedHours: 90 },

  // circular-economy
  { pathSlug: "circular-economy", title: "Circular redesign case study", summary: "Redesign one everyday product using circular principles and document tradeoffs.", difficulty: "foundational", estimatedHours: 15 },
  { pathSlug: "circular-economy", title: "Streamlined LCA in openLCA", summary: "Run a streamlined LCA on a simple product with OpenLCA.", difficulty: "intermediate", estimatedHours: 30 },
  { pathSlug: "circular-economy", title: "EPR readiness assessment", summary: "Assess a company's EPR readiness in one EU market.", difficulty: "intermediate", estimatedHours: 30 },
  { pathSlug: "circular-economy", title: "Single-use vs reusable packaging LCA", summary: "Compare a single-use packaging system against a reusable alternative using openLCA: functional unit, system boundary, GWP comparison and break-even cycle calculation.", difficulty: "capstone", estimatedHours: 80 },

  // biodiversity-conservation
  { pathSlug: "biodiversity-conservation", title: "Baseline biodiversity report", summary: "Produce a baseline biodiversity report for a small site using public data.", difficulty: "foundational", estimatedHours: 15 },
  { pathSlug: "biodiversity-conservation", title: "Conservation grant proposal", summary: "Draft a 5-page conservation project proposal.", difficulty: "intermediate", estimatedHours: 20 },
  { pathSlug: "biodiversity-conservation", title: "QGIS habitat map", summary: "Map a real habitat using QGIS and public geodata.", difficulty: "intermediate", estimatedHours: 25 },
  { pathSlug: "biodiversity-conservation", title: "TNFD LEAP pilot", summary: "Apply the TNFD LEAP approach to one company in a high-impact sector.", difficulty: "capstone", estimatedHours: 80 },

  // green-building
  { pathSlug: "green-building", title: "LEED GA study plan", summary: "Create and execute a 6-week LEED GA study plan.", difficulty: "foundational", estimatedHours: 12 },
  { pathSlug: "green-building", title: "Embodied carbon comparison", summary: "Compare embodied carbon for two structural systems.", difficulty: "intermediate", estimatedHours: 30 },
  { pathSlug: "green-building", title: "Net-zero retrofit concept", summary: "Develop a high-level net-zero retrofit concept for a real building.", difficulty: "intermediate", estimatedHours: 40 },
  { pathSlug: "green-building", title: "Whole-life carbon assessment", summary: "Model operational + embodied carbon and build a certification-point strategy for one building.", difficulty: "capstone", estimatedHours: 80 },

  // environmental-consulting
  { pathSlug: "environmental-consulting", title: "Peer ESG benchmarking", summary: "Benchmark 3 peers on a sector ESG topic and present recommendations.", difficulty: "foundational", estimatedHours: 12 },
  { pathSlug: "environmental-consulting", title: "Case interview practice set", summary: "Complete 5 practice case interviews with written debriefs.", difficulty: "foundational", estimatedHours: 15 },
  { pathSlug: "environmental-consulting", title: "Net-zero roadmap", summary: "Draft a net-zero roadmap for a mid-sized company.", difficulty: "intermediate", estimatedHours: 35 },
  { pathSlug: "environmental-consulting", title: "Sustainability strategy deck", summary: "Build a 15-slide sustainability strategy for a mock client, with materiality logic and KPI tree.", difficulty: "capstone", estimatedHours: 60 },

  // community-sustainability
  { pathSlug: "community-sustainability", title: "City or region food systems map", summary: "Map the food system of one city or region.", difficulty: "foundational", estimatedHours: 15 },
  { pathSlug: "community-sustainability", title: "Food security monitoring framework", summary: "Design a monitoring framework for a food security program.", difficulty: "intermediate", estimatedHours: 25 },
  { pathSlug: "community-sustainability", title: "Regenerative farm case study", summary: "Profile a regenerative farm and quantify its outcomes.", difficulty: "intermediate", estimatedHours: 30 },
  { pathSlug: "community-sustainability", title: "SBTi FLAG-aligned sourcing strategy", summary: "Draft an SBTi FLAG-aligned sourcing strategy for one commodity chain, with an MRV outline.", difficulty: "capstone", estimatedHours: 80 },

  // education-capacity-building
  { pathSlug: "education-capacity-building", title: "90-minute workshop delivery", summary: "Deliver a 90-minute sustainability workshop and gather feedback.", difficulty: "foundational", estimatedHours: 12 },
  { pathSlug: "education-capacity-building", title: "Youth engagement toolkit", summary: "Produce a downloadable toolkit for youth-led climate action.", difficulty: "intermediate", estimatedHours: 25 },
  { pathSlug: "education-capacity-building", title: "4-week climate course", summary: "Build a full outline, slides, and activities for a beginner climate course.", difficulty: "intermediate", estimatedHours: 35 },
  { pathSlug: "education-capacity-building", title: "Corporate sustainability training program", summary: "Design a needs analysis, curriculum, assessment, and evaluation plan for a mock employer.", difficulty: "capstone", estimatedHours: 70 },

  // programs-project-management
  { pathSlug: "programs-project-management", title: "Workplan + budget + logframe", summary: "Design a full workplan, budget and logframe for a mock climate project.", difficulty: "intermediate", estimatedHours: 25 },
  { pathSlug: "programs-project-management", title: "M&E framework", summary: "Create indicators and a monitoring plan for a sustainability program.", difficulty: "intermediate", estimatedHours: 30 },
  { pathSlug: "programs-project-management", title: "Mock donor report", summary: "Write a mock 6-month narrative and financial report to a donor.", difficulty: "intermediate", estimatedHours: 25 },
  { pathSlug: "programs-project-management", title: "Complete program package", summary: "Deliver ToC, logframe, budget, risk register, and M&E plan for a multi-year climate program.", difficulty: "capstone", estimatedHours: 80 },

  // partnerships-stakeholder-engagement
  { pathSlug: "partnerships-stakeholder-engagement", title: "Influence/interest stakeholder map", summary: "Map stakeholders around a real sustainability issue with influence/interest analysis.", difficulty: "foundational", estimatedHours: 10 },
  { pathSlug: "partnerships-stakeholder-engagement", title: "Cross-sector partnership brief", summary: "Write a 2-page brief proposing a cross-sector partnership for one SDG.", difficulty: "intermediate", estimatedHours: 15 },
  { pathSlug: "partnerships-stakeholder-engagement", title: "6-month engagement plan", summary: "Design a 6-month engagement plan for one target community or industry group.", difficulty: "intermediate", estimatedHours: 25 },
  { pathSlug: "partnerships-stakeholder-engagement", title: "Partnership architecture", summary: "Design governance model, MOU draft, KPIs and risk plan for a corporate–NGO alliance.", difficulty: "capstone", estimatedHours: 60 },

  // research-knowledge-management
  { pathSlug: "research-knowledge-management", title: "Evidence-based policy brief", summary: "Write a 4-page evidence-based brief on a climate or sustainability topic.", difficulty: "intermediate", estimatedHours: 20 },
  { pathSlug: "research-knowledge-management", title: "Literature synthesis", summary: "Produce a synthesis of the last 10 key papers on one sustainability question.", difficulty: "intermediate", estimatedHours: 25 },
  { pathSlug: "research-knowledge-management", title: "Knowledge repository build", summary: "Design and populate a Notion/Airtable knowledge hub for a sustainability team.", difficulty: "intermediate", estimatedHours: 25 },
  { pathSlug: "research-knowledge-management", title: "Mini research study", summary: "Take one question through method, data collection and analysis, then publish an 8-page report with recommendations.", difficulty: "capstone", estimatedHours: 80 },

  // grant-writing-mobilization
  { pathSlug: "grant-writing-mobilization", title: "Funder landscape scan", summary: "Map 20 relevant funders for a chosen thematic area with fit analysis.", difficulty: "foundational", estimatedHours: 12 },
  { pathSlug: "grant-writing-mobilization", title: "Mock GCF concept note", summary: "Draft a Green Climate Fund concept note for a climate project.", difficulty: "intermediate", estimatedHours: 25 },
  { pathSlug: "grant-writing-mobilization", title: "Full proposal with logframe + budget", summary: "Write a full 10-page proposal with logframe and budget for a real call.", difficulty: "capstone", estimatedHours: 80 },
  { pathSlug: "grant-writing-mobilization", title: "Funding pipeline build", summary: "Deliver a donor map, pipeline tracker, concept note, and full proposal for one thematic area.", difficulty: "capstone", estimatedHours: 90 },
];

export function projectsForPath(pathSlug: string): PortfolioProject[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.pathSlug === pathSlug);
}
