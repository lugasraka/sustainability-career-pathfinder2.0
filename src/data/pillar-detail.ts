import type { Pillar } from "@/types/pathfinder";

export interface PillarDetail {
  pillar: Pillar;
  tagline: string;
  summary: string[];
  coverage: string[];
}

export const PILLAR_DETAILS: PillarDetail[] = [
  {
    pillar: "carbon_accounting",
    tagline: "Count emissions in a way auditors accept.",
    summary: [
      "This pillar covers the measurement work: corporate GHG inventories across Scopes 1, 2 and 3, science-based target tracking, and the models that show where emissions come from. It also holds the sector tools, from embodied carbon in buildings to soil carbon MRV and storage and hydrogen economics.",
      "Everything downstream depends on these numbers. Reporting teams can only disclose what has been counted, and assurance providers check the math. Companies hiring here want people who know the emission factors, can document a methodology, and can defend it when an auditor asks.",
    ],
    coverage: [
      "GHG Protocol inventories (Scopes 1, 2 and 3)",
      "Scope 3 accounting from spend and activity data",
      "Science-based targets and net-zero pathways",
      "Energy systems, power markets and grid emission factors",
      "Embodied carbon, retrofits and energy modeling",
      "Soil carbon MRV, storage and hydrogen economics",
    ],
  },
  {
    pillar: "regulations_disclosure",
    tagline: "Read the rules, then make the company answer them.",
    summary: [
      "This is the compliance pillar. It runs from disclosure frameworks (CSRD and ESRS, ISSB IFRS S1/S2, GRI, CDP) to assurance readiness, carbon pricing regimes like the EU ETS and CBAM, and due diligence on supply chains and human rights. Nature disclosure under TNFD and SBTN sits here too.",
      "The rulebook keeps growing, and each new rule pulls more companies into mandatory reporting. Every framework needs people who can run a gap assessment, keep a disclosure calendar and answer auditor questions without panic.",
    ],
    coverage: [
      "CSRD / ESRS implementation and gap assessments",
      "ISSB IFRS S1/S2, SEC climate rules, GRI and CDP reporting",
      "Assurance readiness (limited to reasonable)",
      "Carbon pricing (EU ETS, CBAM), credit standards and claims codes",
      "Supply-chain and human-rights due diligence",
      "Nature disclosure (TNFD LEAP, SBTN) and green finance instruments",
    ],
  },
  {
    pillar: "data_systems",
    tagline: "Turn messy sustainability data into evidence.",
    summary: [
      "The analytical pillar holds the tools: Python and SQL, BI dashboards, data pipelines, GIS and remote sensing, financial and LCOE modeling. It also covers the research side, from literature review to MEL frameworks and program evaluation.",
      "A team that can rebuild a Scope 3 estimate in SQL or trace a supply chain in QGIS moves faster than one waiting on manual spreadsheets. Platform work (Workiva, Sweep, Persefoni) is what turns the numbers into audit-ready records.",
    ],
    coverage: [
      "Python, SQL and data pipelines (dbt, Snowflake)",
      "BI dashboards, visualization and KPI tracking",
      "ESG reporting platforms (Workiva, Sweep, Persefoni)",
      "GIS, remote sensing and supply-chain mapping",
      "Financial modeling, LCOE and cost-benefit analysis",
      "Research, MEL frameworks and program evaluation",
    ],
  },
  {
    pillar: "circularity_nature",
    tagline: "Keep materials in use and ecosystems in the balance.",
    summary: [
      "This pillar covers materials and nature. Practitioners run material flow analyses and waste stream audits, redesign products for reuse, screen packaging, and implement EU deforestation rules. On the nature side it holds biodiversity monitoring, regenerative agriculture and climate resilience planning.",
      "Regulation is pulling the work into the mainstream. EU rules on deforestation, packaging and ecodesign carry deadlines, and investors increasingly ask about nature the way they ask about emissions. Lifecycle assessment anchors the pillar because most circularity claims need it.",
    ],
    coverage: [
      "LCA (ISO 14040/44) with openLCA or SimaPro",
      "Circular design, material flow analysis and waste audits",
      "EUDR deforestation due diligence",
      "Biodiversity monitoring and field methods",
      "Regenerative agriculture and soil practices",
      "Climate resilience and adaptation planning",
    ],
  },
  {
    pillar: "strategy_governance",
    tagline: "Turn findings into decisions people follow.",
    summary: [
      "The delivery pillar is the largest and the most human. It covers double materiality assessments, executive communication, investor memos, supplier engagement, negotiation and coalition building across departments that do not report to each other.",
      "It also holds the advocacy and program skills: policy briefs, campaign strategy, media relations, proposal and grant writing, facilitation and training. These skills decide whether a strategy ships. An inventory that never reaches a decision gets ignored, and the people who can frame a finding for a CFO or a procurement lead are the ones companies promote.",
    ],
    coverage: [
      "Double materiality assessment and facilitation",
      "Executive communication, investor memos and board reporting",
      "Supplier engagement programs and scorecards",
      "Policy analysis, briefs and public affairs",
      "Campaigns, media relations and storytelling",
      "Proposal and grant writing, program design and delivery",
      "Negotiation, stakeholder mapping and coalition building",
    ],
  },
];
