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
      "Reporting teams collect the data, apply the frameworks (GRI, ISSB, CSRD, SASB) and produce the annual report that shows how a company manages environmental, social and governance risk. The job mixes finance, data and regulation. You translate what a company actually does into audited, decision-useful disclosure.",
      "CSRD, the SEC climate rules and ISSB adoption have made disclosure mandatory for thousands of companies. Assurance readiness (moving from limited to reasonable assurance) is what gets reporting managers into head-of-sustainability roles.",
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
    tagline: "Turn climate science into rules governments can pass.",
    overview: [
      "Climate policy work is analysis, drafting and advice: reading regulations, writing briefs, and telling governments, NGOs or companies what to propose next. Roles range from national NDC reviews to municipal adaptation plans to corporate regulatory-affairs strategy.",
      "Carbon pricing, net-zero legislation and adaptation policy keep expanding, and the work is regional: EU roles cluster around Fit-for-55, ETS reform and CBAM; US roles around IRA implementation and state-level action; global roles around the UNFCCC process and multilateral finance.",
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
      "Climate communicators turn science and policy into stories, campaigns and content that move audiences to act. The work needs editorial judgment and campaign discipline: message-market fit for NGOs, agencies, media and increasingly in-house corporate teams.",
      "Anti-greenwashing rules (the EU Green Claims Directive, SEC enforcement) mean every public claim now needs evidence behind it. That shifts the job from awareness campaigns toward claims that can survive a legal review.",
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
      "This work is developing, financing, trading and analyzing carbon credits, climate funds and green financial products. Project origination covers REDD+, cookstoves and DAC; compliance means the EU ETS and CORSIA; and the voluntary market is rebuilding integrity standards under ICVCM.",
      "Carbon markets and climate funds keep expanding, and a finance background helps but isn't required at entry. Fluency in credit integrity standards and honest quantitative modeling is.",
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
      "Solar, wind, storage, EV, hydrogen and grid projects all need development, financing, construction and operations staff. Roles split across three tracks: technical (engineering, modeling), commercial (development, PPAs) and finance (project finance).",
      "Clean energy investment hit $2.2 trillion in 2025, twice the fossil fuel total (IEA World Energy Investment 2025). Where projects get built depends on subsidies and tax credits, so each market demands its own fluency: US candidates need IRA/ITC, EU candidates RED III and permitting reform, and everyone needs grid-connection realism.",
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
    tagline: "Build the datasets, dashboards and models sustainability teams run on.",
    overview: [
      "Sustainability data teams build datasets, dashboards and models that show whether environmental and social targets are being met. It's standard data engineering applied to unusual inputs: emission factors, supplier surveys, satellite feeds and unstructured disclosure text.",
      "Disclosure rules are pushing emissions data into the same warehouses and BI stacks companies already run, so data skills transfer into this path faster than most. The domain knowledge is what separates generic data people from climate data people. It shows up when you explain why a Scope 3 spend estimate needs uncertainty bands, or how CSRD datapoints shape a warehouse schema.",
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
    tagline: "Cut supplier emissions and clean up labor practices.",
    overview: [
      "Supply chain sustainability work means getting suppliers to measure Scope 3 emissions, improve labor and environmental practices, and source responsibly. Half the job is diplomacy (getting 200 suppliers to disclose), half is data (building the spend models that show where impact concentrates).",
      "Scope 3 is the largest emissions bucket for most companies, and it's becoming a disclosure requirement (CSRD E1, CDP Supply Chain). EUDR, CSDDD and Germany's LkSG now make supplier governance a legal obligation on both the carbon and human-rights sides.",
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
    tagline: "Redesign products and material flows to keep resources in use.",
    overview: [
      "Circular economy work is redesign: products, business models and material flows, so waste gets eliminated and resources stay in use at their highest value. The analytical side is life cycle assessment, material flow analysis and end-of-life modeling.",
      "EU rules keep adding design and reporting duties for manufacturers: CEAP, EPR schemes, and ESPR's Digital Product Passports. LCA software fluency (openLCA, SimaPro) is the heaviest requirement in this path's skill matrix; business model redesign is what moves you into senior roles.",
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
      "Conservation work covers habitat protection and restoration, biodiversity credits, and the TNFD nature disclosure framework. The skills mix field science, geospatial analysis, and increasingly corporate nature strategy as disclosure regimes mature.",
      "Corporate sustainability and finance are starting to treat nature like carbon. TNFD LEAP and SBTN are the bridge skills in both directions: conservationists use them to move into corporate roles, analysts use them to move into conservation. For hybrid backgrounds, this is the most accessible emerging path.",
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
      "Green building work applies LEED, BREEAM, WELL and embodied-carbon methods to design, certify and operate buildings and urban developments. Employers are architecture and engineering firms, real estate owners, and urban planning bodies.",
      "Cities produce around 70% of global greenhouse gas emissions (IEA), which is why the EU EPBD recast and whole-life carbon disclosure have moved embodied carbon from a niche skill into a core one. Certification exams (LEED GA → AP) are the standard credential ladder.",
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
      "Consultants help companies design strategies, comply with regulation, measure impacts and improve ESG performance. It is the generalist path: breadth across frameworks and sectors, with depth added by specialization (carbon, CSRD, supply chain, nature).",
      "Consulting is one of the most common entry points into sustainability, for early-career hires and career switchers alike. Big 4, boutique and specialist firms all run sustainability practices. Structured problem solving and client communication get you hired; a named sector or framework specialization is what moves you into mid-level roles.",
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
      "Food systems work covers regenerative agriculture, food security, sustainable sourcing and community-led development. Employers range from NGOs, foundations and government to food corporates and agri-startups, and field program roles look very different from corporate sourcing roles.",
      "Food systems produce about 30% of global greenhouse gas emissions (FAO) and sit at the center of biodiversity, water and equity debates. SBTi FLAG guidance and Scope 3 agricultural accounting are pushing food corporates to set land-sector targets, and those programs need people who can pair program management with carbon and nature accounting.",
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
    tagline: "Teach the climate skills other sectors are hiring for.",
    overview: [
      "Educators design curricula, workshops and training programs that build climate literacy in schools, universities, corporates, NGOs and communities. The job needs both pedagogy and subject-matter depth. Good practitioners design the learning experience and hold their own on the climate content.",
      "Corporate L&D, schools, NGOs and training providers all hire for the same combination: instructional designers who can actually explain the material, not just format it.",
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
    tagline: "Deliver climate programs on time and on budget.",
    overview: [
      "Program and project managers plan and deliver sustainability initiatives, ESG programs and development interventions, on time, on budget and with measurable outcomes. Corporates, NGOs, foundations, government and UN agencies all hire for the role.",
      "Existing project managers transfer almost all their core skills. What they add is sustainability-specific: Theory of Change and logframe discipline, donor-grade M&E, and budget stewardship under grant compliance rules.",
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
    tagline: "Connect companies, governments and NGOs around shared climate goals.",
    overview: [
      "Partnership work connects companies, governments, NGOs and communities. The job is designing collaborations, managing relationships and enabling collective action, usually through multipartite platforms, corporate–NGO alliances or community engagement processes.",
      "Most sustainability outcomes depend on coalitions rather than single organizations. That takes influence without authority, cross-cultural collaboration and coalition architecture.",
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
    tagline: "Produce the evidence sustainability decisions rest on.",
    overview: [
      "Researchers and knowledge managers produce the evidence base: running studies, writing briefs and reports, and building the systems that keep findings findable. Employers include think tanks, universities, NGOs, foundations, UN agencies and corporate strategy teams.",
      "The path splits into two lanes: research (methods-heavy, publication-oriented) and knowledge management (systems-heavy, platform architecture). The research lane hires on methods and publications; the knowledge lane hires on platform architecture and information design.",
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
    tagline: "Write the proposals that fund climate work.",
    overview: [
      "Grant writers and resource mobilization specialists find the funders, write the proposals, and win the grants and contracts that finance climate work. The funders are GCF, GEF, the Adaptation Fund, EU programs and philanthropy.",
      "Climate funds expect a specific vocabulary: logframes, results frameworks, co-financing. Getting that vocabulary into a proposal is what separates a near-miss from a funded project.",
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
