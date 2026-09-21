import type { CareerPath } from "@/types/pathfinder";
import { PATH_SKILLS } from "@/data/path-skills";
import { PATH_ORG_FIT, PATH_REGIONS } from "@/data/path-context";

const path = (
  p: Omit<CareerPath, "requiredSkills" | "regions" | "orgFit">
): CareerPath => ({
  ...p,
  regions: PATH_REGIONS[p.slug] ?? ["GLOBAL"],
  orgFit: PATH_ORG_FIT[p.slug] ?? ["corporate", "nonprofit"],
  requiredSkills: PATH_SKILLS[p.slug] ?? [],
});

export const PATHS: CareerPath[] = [
  path({
    slug: "esg-reporting",
    title: "ESG & Sustainability Reporting",
    tagline: "Measure, disclose, and improve corporate sustainability performance.",
    overview: [
      "ESG and sustainability reporting professionals collect data, apply disclosure frameworks (GRI, ISSB, CSRD, SASB), and produce annual reports that show how a company manages environmental, social and governance risk. The job mixes finance, data, and regulation: you translate what a company actually does into audited, decision-useful disclosure.",
      "Mandatory disclosure regimes (CSRD, SEC climate rules, ISSB adoption) are making this one of the fastest-growing functions inside companies of every size. Assurance readiness (moving from limited to reasonable assurance) separates reporting managers from heads of sustainability.",
    ],
    demand: "explosive",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Sustainability Analyst", "ESG Data Analyst", "CSR Coordinator"],
      mid: ["ESG Reporting Manager", "Sustainability Specialist", "ESG Program Lead"],
      senior: ["Head of Sustainability", "Chief Sustainability Officer", "Director, ESG Strategy"],
    },
    frameworks: ["CSRD / ESRS", "EU Taxonomy", "ISSB IFRS S1/S2", "GRI", "SASB", "TCFD", "CDP"],
    entryBackgrounds: ["finance", "policy", "other", "data"],
  }),
  path({
    slug: "climate-policy",
    title: "Climate Policy & Governance",
    tagline: "Shape the rules that drive systemic climate action.",
    overview: [
      "Climate policy professionals analyze regulations, draft policy briefs, and advise governments, NGOs and companies on how to design effective climate and environmental policy. Work ranges from national NDC reviews to municipal adaptation plans and corporate regulatory-affairs strategy.",
      "Net-zero legislation, carbon pricing and adaptation policy are expanding fast in every region. Geographic calibration matters strongly: EU roles cluster around Fit-for-55, ETS reform and CBAM; US roles around IRA implementation and state-level action; global roles around the UNFCCC process and multilateral finance.",
    ],
    demand: "strong",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Policy Research Assistant", "Climate Policy Analyst", "Government Affairs Associate"],
      mid: ["Policy Manager", "Senior Policy Analyst", "Regulatory Affairs Manager"],
      senior: ["Head of Climate Policy", "Director of Government Affairs", "Senior Advisor"],
    },
    frameworks: ["Paris Agreement / NDCs", "EU Fit-for-55", "EU ETS & CBAM", "IRA (US)", "IPCC AR6"],
    entryBackgrounds: ["policy", "science", "other"],
  }),
  path({
    slug: "climate-communications",
    title: "Climate Communications & Advocacy",
    tagline: "Move audiences from awareness to action.",
    overview: [
      "Climate communicators translate science and policy into stories, campaigns, and content that change minds and behaviors across audiences. The work needs editorial judgment and campaign discipline: message-market fit for climate-active NGOs, agencies, media, and increasingly in-house corporate teams.",
      "Every climate-active organization needs communicators who can cut through noise and inspire action. Under tightening anti-greenwashing rules (EU Green Claims Directive, SEC enforcement), credibility is now a compliance question too.",
    ],
    demand: "strong",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Communications Coordinator", "Content Producer", "Social Media Associate"],
      mid: ["Climate Campaign Manager", "Communications Manager", "Content Strategy Lead"],
      senior: ["Director of Communications", "Head of Advocacy", "Chief Storyteller"],
    },
    frameworks: ["IPCC AR6", "EU Green Claims Directive", "UNFCCC framing", "SBTi claims norms"],
    entryBackgrounds: ["other", "policy", "science"],
  }),
  path({
    slug: "carbon-markets",
    title: "Carbon Markets & Climate Finance",
    tagline: "Channel capital into climate solutions.",
    overview: [
      "Professionals in this space develop, finance, trade and analyze carbon credits, climate funds, and green financial products. The work spans project origination (REDD+, cookstoves, DAC), compliance markets (EU ETS, CORSIA), and the voluntary carbon market's integrity rebuild under ICVCM.",
      "Carbon markets, climate funds and transition finance are projected to be among the highest-growth segments in finance this decade. A finance background helps but isn't required at entry. Fluency in credit integrity standards and honest quantitative modeling is.",
    ],
    demand: "explosive",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Carbon Markets Analyst", "Sustainable Finance Associate", "Climate Investment Analyst"],
      mid: ["Carbon Project Manager", "Climate Finance Manager", "Transition Finance Specialist"],
      senior: ["Head of Carbon Strategy", "Managing Director, Climate Investing", "CIO, Climate Fund"],
    },
    frameworks: ["Verra VCS", "Gold Standard", "ICVCM Core Carbon Principles", "Article 6", "EU ETS & CBAM", "Green Bond Principles", "ISSB S2"],
    entryBackgrounds: ["finance", "data", "engineering"],
  }),
  path({
    slug: "renewable-energy",
    title: "Renewable Energy & Clean Tech",
    tagline: "Build and scale the technology of the energy transition.",
    overview: [
      "Professionals in renewables and clean tech develop, finance, deploy and operate solar, wind, storage, EV, hydrogen and grid solutions. Roles split across technical (engineering, modeling), commercial (development, PPAs), and finance (project finance) tracks, all feeding one of the largest capital deployments in history.",
      "Trillions of dollars are flowing into deployment and innovation through 2050. Incentive architecture is the regional differentiator: US candidates need IRA/ITC fluency, EU candidates need RED III and permitting-reform literacy, and everyone needs grid-connection realism.",
    ],
    demand: "explosive",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Renewable Energy Analyst", "Project Coordinator", "Clean Tech Associate"],
      mid: ["Project Developer", "Energy Engineer", "Clean Tech Product Manager"],
      senior: ["Director of Development", "Head of Engineering", "VP, Clean Energy"],
    },
    frameworks: ["IRA tax credits (ITC/PTC)", "EU RED III", "PPA structures", "REC / GO markets"],
    entryBackgrounds: ["engineering", "data", "finance"],
  }),
  path({
    slug: "sustainability-data",
    title: "Sustainability Data & Analytics",
    tagline: "Turn sustainability data into decisions.",
    overview: [
      "Sustainability data professionals build datasets, dashboards, models and tools that help organizations measure and improve environmental and social performance. It's standard data engineering, applied to unusual inputs: emission factors, supplier surveys, satellite feeds, and unstructured disclosure text.",
      "Disclosure regulation and AI are accelerating demand for technical sustainability talent, and this is the highest-conversion path for engineers and analysts. Domain calibration is what separates generic data people from climate data people: knowing why a Scope 3 spend estimate needs uncertainty bands, and how CSRD datapoint requirements shape warehouse schemas.",
    ],
    demand: "explosive",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Sustainability Data Analyst", "ESG Data Engineer", "Climate Tech Analyst"],
      mid: ["Senior Data Scientist, Climate", "Product Manager, Climate Tech", "GHG Data Lead"],
      senior: ["Head of Sustainability Data", "Director, Climate Analytics", "VP Product, Climate Tech"],
    },
    frameworks: ["GHG Protocol", "CSRD / ESRS datapoints", "ISSB S2", "Climate TRACE / EDGAR"],
    entryBackgrounds: ["data", "engineering", "science"],
  }),
  path({
    slug: "sustainable-supply-chain",
    title: "Sustainable Supply Chains & Procurement",
    tagline: "Decarbonize and ethicalize global value chains.",
    overview: [
      "Sustainable supply chain professionals work with suppliers to measure Scope 3 emissions, improve labor and environmental practices, and source responsibly. Half the job is diplomacy (getting 200 suppliers to disclose), half is data (building the spend models that show where impact concentrates).",
      "Scope 3 is the largest emissions bucket for most companies and is rapidly becoming a disclosure requirement (CSRD E1, CDP Supply Chain). Regulatory intensity is rising on both the carbon and human-rights sides: EUDR, CSDDD and Germany's LkSG turn supplier governance into a legal obligation.",
    ],
    demand: "explosive",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Procurement Analyst", "Supply Chain Sustainability Analyst", "Supplier Engagement Associate"],
      mid: ["Sustainable Procurement Manager", "Scope 3 Lead", "Ethical Sourcing Manager"],
      senior: ["Director, Sustainable Supply Chain", "VP Procurement & Sustainability"],
    },
    frameworks: ["GHG Protocol Scope 3", "CSRD ESRS E1 + S2", "CSDDD", "EUDR", "LkSG", "EcoVadis", "CDP Supply Chain"],
    entryBackgrounds: ["finance", "other", "policy"],
  }),
  path({
    slug: "circular-economy",
    title: "Circular Economy & Waste Management",
    tagline: "Design out waste. Design in regeneration.",
    overview: [
      "Circular economy professionals redesign products, business models and material flows to eliminate waste and keep resources in use at their highest value. The work spans design and hard numbers: life cycle assessment, material flow analysis, and end-of-life modeling.",
      "EU regulation (CEAP, EPR schemes, ESPR and its Digital Product Passports) and corporate strategy are converging on circular models. LCA software fluency is the clearest junior-to-mid gate; business model redesign is the senior differentiator.",
    ],
    demand: "strong",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Circular Economy Analyst", "Sustainability Consultant", "Packaging Sustainability Coordinator"],
      mid: ["Circular Design Lead", "EPR Compliance Manager", "Materials Innovation Manager"],
      senior: ["Head of Circularity", "Director, Sustainable Innovation"],
    },
    frameworks: ["ISO 14040/44", "EU CEAP", "EPR schemes", "ESPR & Digital Product Passports", "PPWR"],
    entryBackgrounds: ["engineering", "science", "other"],
  }),
  path({
    slug: "biodiversity-conservation",
    title: "Nature, Biodiversity & Conservation",
    tagline: "Protect and restore the living systems we depend on.",
    overview: [
      "Biodiversity and conservation professionals work on habitat protection, restoration, biodiversity credits, and the emerging TNFD nature disclosure framework. The path spans field science, geospatial analysis, and, increasingly, corporate nature strategy as disclosure regimes mature.",
      "Corporate sustainability and finance are moving from carbon to nature. TNFD LEAP and SBTN are the bridge skills in both directions: conservationists use them to move into corporate roles, analysts use them to move into conservation. For hybrid backgrounds, this is the most accessible emerging path.",
    ],
    demand: "emerging",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Conservation Officer", "Field Researcher", "Biodiversity Analyst"],
      mid: ["Program Manager", "Nature-Based Solutions Specialist", "TNFD Implementation Lead"],
      senior: ["Director of Conservation", "Head of Nature Strategy"],
    },
    frameworks: ["TNFD (LEAP)", "SBTN", "Kunming-Montreal GBF", "EUDR (nature angle)"],
    entryBackgrounds: ["science", "policy", "data"],
  }),
  path({
    slug: "green-building",
    title: "Green Building & Urban Sustainability",
    tagline: "Design the buildings and cities of a low-carbon future.",
    overview: [
      "Green building professionals apply LEED, BREEAM, WELL and embodied-carbon practices to design, certify and operate sustainable buildings and urban developments. The path runs through architecture and engineering firms, real estate owners, and urban planning bodies.",
      "Cities account for ~70% of emissions; built-environment decarbonization is non-negotiable. The regulatory floor keeps rising: the EU EPBD recast and whole-life carbon disclosure turn embodied carbon from a niche skill into a core competency. Certification exams (LEED GA → AP) are the standard credential ladder.",
    ],
    demand: "strong",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Sustainability Coordinator", "LEED Consultant", "Junior Energy Modeler"],
      mid: ["Senior Sustainability Consultant", "WELL AP", "Embodied Carbon Specialist"],
      senior: ["Director of Sustainability", "Principal Consultant"],
    },
    frameworks: ["LEED", "BREEAM", "WELL", "NABERS", "EU EPBD", "RICS whole-life carbon"],
    entryBackgrounds: ["engineering", "other"],
  }),
  path({
    slug: "environmental-consulting",
    title: "Environmental Consulting",
    tagline: "Advise clients across industries on sustainability strategy and compliance.",
    overview: [
      "Environmental consultants help companies design strategies, comply with regulation, measure impacts and improve performance across ESG topics. It is the generalist path: breadth across frameworks and sectors, with depth added by specialization (carbon, CSRD, supply chain, nature).",
      "Consulting is one of the most common entry points into sustainability for early-career professionals and career switchers. Big 4, boutique and specialist firms are all hiring aggressively. Structured problem solving and client communication are the entry gates; a named sector or framework specialization is what moves you into mid-level roles.",
    ],
    demand: "explosive",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Sustainability Consultant", "ESG Associate", "Research Analyst"],
      mid: ["Senior Consultant", "Engagement Manager", "Subject Matter Expert"],
      senior: ["Partner", "Director", "Practice Lead"],
    },
    frameworks: ["GHG Protocol", "GRI", "ISSB", "CSRD / ESRS", "TCFD", "CDP"],
    entryBackgrounds: ["other", "finance", "engineering", "science"],
  }),
  path({
    slug: "community-sustainability",
    title: "Sustainable Agriculture & Food Systems",
    tagline: "Transform how we grow, distribute, and eat food.",
    overview: [
      "Sustainable food systems professionals work on regenerative agriculture, food security, sustainable sourcing, and community-led development. The path spans NGOs, foundations, corporates (food & agri), agri-startups and government, with field program roles and corporate sourcing roles emphasizing different skills.",
      "Food systems account for ~30% of emissions and are central to biodiversity, water and equity. SBTi FLAG guidance and Scope 3 agricultural accounting are pulling food corporates toward rigorous land-sector targets, creating hybrid roles that combine program management with carbon and nature accounting.",
    ],
    demand: "emerging",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Program Officer", "Sustainable Sourcing Analyst", "Field Coordinator"],
      mid: ["Regenerative Ag Specialist", "Food Systems Manager", "Impact Manager"],
      senior: ["Director of Food Systems", "Head of Sustainable Sourcing"],
    },
    frameworks: ["SBTi FLAG", "GHG Protocol ag guidance", "TNFD food systems", "EU Farm to Fork"],
    entryBackgrounds: ["science", "policy", "other"],
  }),
  path({
    slug: "education-capacity-building",
    title: "Sustainability Education & Capacity Building",
    tagline: "Grow the talent and awareness the climate transition needs.",
    overview: [
      "Sustainability educators design curricula, workshops, and training programs that build climate and sustainability literacy across schools, universities, corporates, NGOs and communities. The path requires both pedagogy and subject-matter depth: the best practitioners design learning experiences and hold technical credibility on climate content.",
      "The green skills gap is one of the biggest blockers to the transition, so education and capacity building are in massive demand across every sector. Corporate L&D is the fastest-growing lane: every company rolling out sustainability training needs instructional designers who actually understand the material.",
    ],
    demand: "explosive",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Sustainability Educator", "Environmental Education Officer", "L&D Coordinator"],
      mid: ["Climate Education Specialist", "Curriculum Manager", "Capacity Building Lead"],
      senior: ["Director of Education & Learning", "Head of Capacity Building", "Chief Learning Officer"],
    },
    frameworks: ["UNESCO ESD 2030", "UNFCCC ACE", "Carbon Literacy Standard"],
    entryBackgrounds: ["other", "policy", "science"],
  }),
  path({
    slug: "programs-project-management",
    title: "Sustainability Programs & Project Management",
    tagline: "Turn sustainability strategy into on-the-ground delivery.",
    overview: [
      "Program and project managers plan, coordinate, and deliver sustainability initiatives, ESG programs, climate projects, and development interventions, on time, on budget, and with measurable outcomes. Every kind of organization needs this role: corporates, NGOs, foundations, government and UN agencies.",
      "As sustainability moves from strategy to execution, organizations need people who can run the programs that deliver impact. Existing PMs transfer almost all core skills. The sustainability-specific additions are Theory of Change/logframe discipline, donor-grade M&E, and budget stewardship under grant compliance rules.",
    ],
    demand: "explosive",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Program Assistant", "Sustainability Project Coordinator", "ESG Program Officer"],
      mid: ["Program Manager", "Sustainability Project Manager", "Climate Program Lead"],
      senior: ["Director of Programs", "Head of Sustainability Delivery", "Chief of Party"],
    },
    frameworks: ["PMD Pro", "PMP", "Theory of Change / logframe", "GEF / GCF results frameworks"],
    entryBackgrounds: ["other", "policy", "finance"],
  }),
  path({
    slug: "partnerships-stakeholder-engagement",
    title: "Sustainability Partnerships & Stakeholder Engagement",
    tagline: "Build the coalitions that make sustainability work.",
    overview: [
      "Partnerships and engagement professionals connect companies, governments, NGOs and communities. The job is designing collaborations, managing relationships, and enabling collective action. Typical formats: multipartite platforms, corporate–NGO alliances, and community engagement processes.",
      "No sustainability outcome happens alone, so partnerships and stakeholder engagement are core capabilities for every serious organization. The skills are relational: influence without authority, cross-cultural collaboration, and coalition architecture.",
    ],
    demand: "strong",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Engagement Coordinator", "Partnerships Associate", "Community Relations Officer"],
      mid: ["Sustainability Partnerships Manager", "Stakeholder Engagement Lead", "External Affairs Manager"],
      senior: ["Director of Partnerships", "Head of Stakeholder Engagement", "VP External Affairs"],
    },
    frameworks: ["UN Global Compact", "SDG 17", "Multipartite platform norms"],
    entryBackgrounds: ["other", "policy"],
  }),
  path({
    slug: "research-knowledge-management",
    title: "Sustainability Research & Knowledge Management",
    tagline: "Turn evidence into insight that drives climate action.",
    overview: [
      "Researchers and knowledge managers generate, curate, and share evidence: running studies, producing briefs and reports, and building the knowledge systems that inform decisions. The path spans think tanks, universities, NGOs, foundations, UN agencies and corporate strategy teams.",
      "Two distinct lanes exist: the research lane (methods-heavy, publication-oriented) and the knowledge-management lane (systems-heavy, platform architecture). As sustainability decisions get bigger, so does the need for rigorous research and well-organized knowledge to back them.",
    ],
    demand: "strong",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Research Assistant", "Knowledge Management Officer", "Junior Research Analyst"],
      mid: ["Sustainability Research Associate", "Policy Researcher", "Knowledge Manager"],
      senior: ["Head of Research", "Director of Knowledge Management", "Principal Researcher"],
    },
    frameworks: ["IPCC AR6", "UNEP GEO / Emissions Gap", "GRI", "ISSB"],
    entryBackgrounds: ["science", "policy", "data"],
  }),
  path({
    slug: "grant-writing-mobilization",
    title: "Grant Writing & Climate Resource Mobilization",
    tagline: "Unlock the funding that makes climate work happen.",
    overview: [
      "Grant writers and resource mobilization specialists identify funders, craft proposals, and secure the grants, contracts and partnerships that finance sustainability and climate initiatives. These are the people who keep NGOs and climate startups funded: funders include GCF, GEF, the Adaptation Fund, EU programs and philanthropy.",
      "Climate finance is scaling fast, and organizations urgently need people who can turn missions into fundable proposals. Writers who can also speak the language of climate funds (logframes, results frameworks, co-financing) get hired faster.",
    ],
    demand: "explosive",
    medianSalaryUsd: null,
    seniorSalaryUsd: null,
    commonJobTitles: {
      entry: ["Grants Assistant", "Fundraising Associate", "Development Officer"],
      mid: ["Grant Writer", "Resource Mobilization Officer", "Proposal Development Specialist"],
      senior: ["Director of Development", "Head of Resource Mobilization", "Chief Development Officer"],
    },
    frameworks: ["Green Climate Fund", "GEF", "Adaptation Fund", "EU funding programs", "USAID-type bilateral rules"],
    entryBackgrounds: ["policy", "other", "finance"],
  }),
];

export const PATH_BY_SLUG = new Map<string, CareerPath>(
  PATHS.map((p) => [p.slug, p])
);

export function getPath(slug: string): CareerPath | undefined {
  return PATH_BY_SLUG.get(slug);
}
