import { SKILLS } from "@/data/skills";

export interface SkillGlossaryEntry {
  definition: string;
  example: string;
}

export const SKILL_GLOSSARY: Record<string, SkillGlossaryEntry> = {
  // Carbon & Climate Accounting
  "ghg-protocol-scopes-1-3": {
    definition:
      "The accounting standard for a company's greenhouse gas emissions, split into Scope 1 (fuel burned on site), Scope 2 (purchased electricity and heat) and Scope 3 (everything in the value chain).",
    example:
      "You build the annual inventory: fuel invoices for Scope 1, utility data for Scope 2, supplier surveys for Scope 3, then document the method and boundaries for the assurance provider.",
  },
  "scope-3-accounting": {
    definition:
      "Estimating the emissions a company's suppliers, customers and products generate, using either spend data (fast, rough) or activity data from suppliers (slower, more accurate).",
    example:
      "You convert a 1,000-row purchase ledger into a spend-based estimate, then upgrade the top 20 suppliers to activity-based factors from DEFRA and EPA.",
  },
  "ipcc-science-literacy": {
    definition:
      "Knowing what the IPCC assessment reports conclude about climate science, impacts and mitigation, and which numbers are credible to cite.",
    example:
      "You brief a client on why 1.5°C pathways require roughly halving emissions by 2030, citing AR6 Working Group III instead of a news article.",
  },
  "energy-systems-literacy": {
    definition:
      "How electricity and heat are generated, transmitted, stored and priced, and where the emissions come from in that system.",
    example:
      "You review a company's renewable claims and point out that its grid mix still includes coal at night, so the reported savings are overstated.",
  },
  "power-markets-grid": {
    definition:
      "How electricity markets price power and how projects connect to the grid: interconnection queues, capacity markets, PPAs and grid codes.",
    example:
      "You check a solar project's position in the interconnection queue and model how curtailment would affect its revenue.",
  },
  "energy-modeling": {
    definition:
      "Simulating how a building or system uses energy so design choices can be tested before construction.",
    example:
      "You model a 4,000 m² office in EnergyPlus, then test whether triple glazing or a heat pump cuts more from the annual load.",
  },
  "embodied-carbon": {
    definition:
      "The emissions locked into materials and construction before a building is used, measured over the structure's whole life.",
    example:
      "You compare concrete and mass timber for a six-storey building in One Click LCA and write up which option saves more carbon.",
  },
  "net-zero-retrofit": {
    definition:
      "Planning the upgrades that take an existing building to near-zero emissions: insulation, heat pumps, glazing, controls and on-site generation.",
    example:
      "You assess a 1980s office block and sequence the retrofits by payback period, starting with the building envelope.",
  },
  "soil-carbon-mrv": {
    definition:
      "Measuring, reporting and verifying how much carbon farmland actually stores, which decides whether soil carbon credits can be issued.",
    example:
      "You design a sampling plan for 40 fields, combine lab results with satellite data, and write the verification report a registry will accept.",
  },
  "agroforestry-economics": {
    definition:
      "The costs and returns of growing trees alongside crops or livestock, including yield changes, timber income and carbon payments.",
    example:
      "You build a 15-year cashflow for a coffee farm adding shade trees and show where carbon revenue covers the establishment cost.",
  },
  "storage-hydrogen-economics": {
    definition:
      "When batteries, pumped hydro or hydrogen make money: capital costs, round-trip efficiency, and the price spread between charging and discharging.",
    example:
      "You model a 4-hour battery against a hydrogen peaker for a utility and show which one clears the evening price spike more cheaply.",
  },
  "public-climate-datasets": {
    definition:
      "The open datasets that track emissions by country, sector and facility, including EDGAR, Climate TRACE and national inventories.",
    example:
      "You pull Climate TRACE facility data to check a supplier's claimed emissions against an independent estimate.",
  },

  // Regulatory & Disclosure Standards
  "csrd-esrs-implementation": {
    definition:
      "The EU's corporate sustainability reporting rules: what companies must disclose under the Corporate Sustainability Reporting Directive and the European Sustainability Reporting Standards.",
    example:
      "You map your company's operations against ESRS E1 climate datapoints, flag which ones you can source today, and build a gap plan for the rest.",
  },
  "gri-standards": {
    definition:
      "The most widely used global framework for sustainability reports, organized into universal, sector and topic standards.",
    example:
      "You assemble a GRI-indexed report: material topics first, then the disclosures that support each one, with page references for readers.",
  },
  "issb-ifrs-s1-s2": {
    definition:
      "The ISSB's investor-focused disclosure standards: IFRS S1 for general sustainability risks and S2 for climate, built on TCFD's structure.",
    example:
      "You draft the climate section of an annual report around S2's four pillars: governance, strategy, risk management, and metrics and targets.",
  },
  "cdp-disclosure": {
    definition:
      "The annual CDP questionnaire that investors and customers use to score a company's climate, water and forest performance.",
    example:
      "You gather the evidence behind each CDP question, submit before the deadline, and review the score feedback to see where you lost points.",
  },
  "assurance-readiness": {
    definition:
      "Preparing sustainability data so an external auditor can verify it, first at limited assurance and eventually at the stricter reasonable level.",
    example:
      "You build an audit trail for every emissions figure: source document, calculation, owner and change history, so the auditor can trace each number.",
  },
  "integrated-reporting-sasb": {
    definition:
      "Reporting that connects financial performance with sustainability performance, using SASB's industry-specific disclosure topics.",
    example:
      "You write the value-creation section of an integrated report, linking a packaging redesign to both cost savings and waste reduction.",
  },
  "regulatory-analysis": {
    definition:
      "Reading climate and environmental laws and working out exactly what they require of a specific company or sector.",
    example:
      "You compare CSDDD and Germany's LkSG and list which due-diligence steps your client must run in each jurisdiction.",
  },
  "anti-greenwashing-claims": {
    definition:
      "Knowing which marketing claims regulators now treat as misleading, and what evidence a claim needs before it can be published.",
    example:
      "You review a campaign's carbon neutral claim, find that it rests on unverified offsets, and rewrite it to match what the data supports.",
  },
  "carbon-pricing-mechanisms": {
    definition:
      "How carbon is priced through emissions trading systems, carbon taxes and border adjustments, and what that means for costs.",
    example:
      "You calculate what CBAM would add to a steel importer's landed cost and model two sourcing alternatives.",
  },
  "carbon-credit-standards": {
    definition:
      "The rules that decide whether a carbon credit is real, additional and permanent, set by registries such as Verra and Gold Standard.",
    example:
      "You review a REDD+ project against Verra's methodology and flag that its baseline assumes more deforestation than nearby projects.",
  },
  "carbon-market-policy": {
    definition:
      "The rules governing carbon markets, including Article 6 of the Paris Agreement and the ICVCM's Core Carbon Principles for credit quality.",
    example:
      "You assess whether a project can issue credits under Article 6 and what corresponding adjustments the host country would need to make.",
  },
  "vcmi-claims-code": {
    definition:
      "The Voluntary Carbon Markets Integrity Initiative's rules for what companies can claim when they buy carbon credits.",
    example:
      "You check a client's offset purchase against VCMI tiers and confirm the claim wording it is allowed to use.",
  },
  "green-bond-instruments": {
    definition:
      "Bonds that fund environmental projects, and the standards for issuing them: use of proceeds, reporting and external review.",
    example:
      "You prepare the allocation and impact report for a green bond, showing which projects the proceeds funded and what they achieved.",
  },
  "ppa-rec-markets": {
    definition:
      "Contracts for buying renewable power and the certificates that prove it: power purchase agreements and renewable energy certificates.",
    example:
      "You structure a 10-year PPA for a manufacturer and match the RECs to its reported electricity use.",
  },
  "human-rights-due-diligence": {
    definition:
      "Finding and addressing human-rights risks in a company's operations and supply chain, following the UN Guiding Principles and HREDD rules.",
    example:
      "You run a saliency assessment across three tiers of suppliers, then design a remediation process for the highest-risk sites.",
  },
  "supplier-rating-programs": {
    definition:
      "Third-party systems such as EcoVadis and CDP Supply Chain that score suppliers on sustainability and share the results with buyers.",
    example:
      "You manage 80 suppliers through the EcoVadis process, chase missing evidence, and use the scores to set improvement targets.",
  },
  "supplier-audit": {
    definition:
      "Checking a supplier's environmental or labor practices on site, against a standard or a code of conduct.",
    example:
      "You plan the audit scope, interview workers and review records at a factory, then issue findings with deadlines for correction.",
  },
  "epr-compliance": {
    definition:
      "Extended producer responsibility: the rules that make companies pay for collecting and recycling the packaging and products they sell.",
    example:
      "You register a producer in four EU markets, report tonnage by material, and reconcile the fee invoices against sales data.",
  },
  "digital-product-passports": {
    definition:
      "The EU's ESPR requirement for a digital record that travels with a product and shows its materials, origin and recyclability.",
    example:
      "You map the data fields a passport needs for a textile product and test whether current supplier systems can supply them.",
  },
  "packaging-regulation": {
    definition:
      "The EU Packaging and Packaging Waste Regulation and its national equivalents: recyclability, recycled content and reduction targets.",
    example:
      "You score a packaging portfolio against PPWR's design-for-recycling criteria and prioritise the formats that fail.",
  },
  "tnfd-leap": {
    definition:
      "The TNFD's four-step method for companies to find, assess and report their dependencies and impacts on nature: Locate, Evaluate, Assess, Prepare.",
    example:
      "You run the Locate step for a food company, overlay its sourcing regions with habitat maps, and shortlist the sites that need deeper assessment.",
  },
  "sbtn-target-setting": {
    definition:
      "Setting science-based targets for nature through the Science Based Targets Network, covering land, freshwater and biodiversity.",
    example:
      "You define a freshwater target for a beverage company: baseline withdrawals, reduction pathway and the basin-level actions to get there.",
  },
  "biodiversity-credit-markets": {
    definition:
      "Emerging markets that pay for measurable improvements in biodiversity, with methodologies still being standardized.",
    example:
      "You compare two biodiversity credit methodologies for a restoration project and estimate how many units it could issue.",
  },
  "green-building-certifications": {
    definition:
      "The rating systems that certify a building's environmental performance: LEED, BREEAM, WELL and national equivalents.",
    example:
      "You manage a LEED submission: tracking credits, collecting documentation from the design team, and closing gaps before the review deadline.",
  },
  "food-security-policy": {
    definition:
      "How governments and agencies define and address food security, including nutrition, access and supply-chain resilience.",
    example:
      "You review a national food strategy and identify where climate adaptation is missing from its targets.",
  },
  "donor-compliance": {
    definition:
      "The procurement, reporting and eligibility rules attached to donor funding from agencies such as USAID, the EU and the GEF.",
    example:
      "You check a project's procurement plan against donor thresholds and flag purchases that need prior approval.",
  },
  "climate-fund-design": {
    definition:
      "How major climate funds such as the GCF, GEF and Adaptation Fund structure their programs, eligibility and approval steps.",
    example:
      "You map a project idea against the GCF's investment criteria and identify which accreditation route fits your organization.",
  },
  "public-affairs-strategy": {
    definition:
      "Planning how an organization engages with governments and regulators: positioning, timing, coalitions and channels.",
    example:
      "You build a 12-month engagement plan around a packaging bill, listing which committees to brief and when.",
  },

  // Quantitative & Data Systems
  "excel-data-analysis": {
    definition:
      "Spreadsheet work: cleaning data, building formulas and pivot tables, and checking that numbers reconcile.",
    example:
      "You clean a 5,000-row emissions export, reconcile it against finance records, and build a pivot summary by site.",
  },
  "bi-dashboards": {
    definition:
      "Building interactive dashboards in Power BI or Tableau that let teams track metrics without asking for a new spreadsheet.",
    example:
      "You publish a Power BI dashboard that shows emissions by business unit, with filters for month and scope.",
  },
  "esg-reporting-platforms": {
    definition:
      "Software such as Workiva, Watershed and Persefoni that collects, controls and reports ESG data.",
    example:
      "You configure a Workiva workspace so each site owner enters their own data, with review steps before it feeds the report.",
  },
  "python-sql": {
    definition:
      "Programming and querying: Python for analysis and automation, SQL for pulling and joining data from databases.",
    example:
      "You write a SQL query to join utility records with site metadata, then a Python script that flags consumption outliers.",
  },
  "data-pipelines": {
    definition:
      "Automated flows that move and transform data from sources into a warehouse, built with tools such as dbt and Snowflake.",
    example:
      "You build a dbt model that turns raw invoice data into a monthly emissions table the dashboard can read.",
  },
  "ml-forecasting": {
    definition:
      "Using machine learning to predict climate-related quantities, from energy demand to flood risk.",
    example:
      "You train a model on ten years of meter data to forecast next summer's cooling load for a building portfolio.",
  },
  "r-stata-analytics": {
    definition:
      "Statistical analysis in R, Stata or SPSS: regression, significance testing and survey analysis.",
    example:
      "You run a regression in R to test whether a training program changed reported energy-saving behaviour.",
  },
  "economic-modeling": {
    definition:
      "Quantifying costs and benefits of policies or projects, including who pays and who gains.",
    example:
      "You build a cost-benefit model for a retrofit subsidy and show the break-even year under three energy price scenarios.",
  },
  "research-literature-review": {
    definition:
      "Finding, reading and summarizing what is already known on a topic, and knowing which sources are reliable.",
    example:
      "You screen 60 papers on urban heat, extract the findings into a matrix, and write a four-page synthesis.",
  },
  "social-analytics": {
    definition:
      "Measuring how content performs and how audiences respond across social platforms.",
    example:
      "You track a campaign's reach and engagement weekly and report which messages drove the most saves and shares.",
  },
  "design-tools": {
    definition:
      "Producing visual assets with tools such as Canva or Figma: graphics, layouts and simple prototypes.",
    example:
      "You turn a report into a carousel of six graphics in Canva that follow the brand's templates.",
  },
  "owned-media-platforms": {
    definition:
      "Running an organization's own channels: website, newsletter, blog and social accounts.",
    example:
      "You plan a month of newsletter and LinkedIn content, then schedule and publish it.",
  },
  "carbon-market-data-platforms": {
    definition:
      "Tools such as Sylvera and registry interfaces used to track credit prices, project performance and retirement records.",
    example:
      "You pull registry data to verify that the credits a client retired match the projects it claims.",
  },
  "financial-modeling": {
    definition:
      "Building spreadsheet or code-based models of cashflows, returns and financing structures for projects and companies.",
    example:
      "You build a project finance model for a wind farm with debt sizing, DSCR checks and sensitivity tables.",
  },
  "lcoe-modeling": {
    definition:
      "Calculating the levelized cost of electricity: the average cost per MWh over a project's life.",
    example:
      "You compare LCOE for a solar-plus-storage plant across two capex scenarios and show which one clears the PPA price.",
  },
  "yield-modeling-tools": {
    definition:
      "Estimating how much energy a renewable site will produce, using tools such as PVsyst, WindPRO or HOMER.",
    example:
      "You run a PVsyst simulation for a rooftop array, adjust for shading and soiling, and report the expected annual yield.",
  },
  "gis-analysis": {
    definition:
      "Mapping and spatial analysis with QGIS, ArcGIS or Google Earth Engine: where things are, and what is near them.",
    example:
      "You overlay a proposed transmission line with protected areas and rank the route options by land conflict.",
  },
  "engineering-fundamentals": {
    definition:
      "Core electrical and mechanical concepts needed to judge whether a technical proposal is sound.",
    example:
      "You review a heat pump specification and check that the capacity and flow temperatures match the building's load.",
  },
  "spend-analysis": {
    definition:
      "Breaking down what a company buys, from whom, and how much, to find risk and emissions hotspots.",
    example:
      "You segment a €200M procurement ledger by category and country and flag the categories with the highest supplier concentration.",
  },
  "procurement-platforms": {
    definition:
      "Systems such as SAP Ariba that run sourcing, contracts and supplier records.",
    example:
      "You pull supplier spend from Ariba and add sustainability questions to the next sourcing round.",
  },
  "supply-chain-mapping": {
    definition:
      "Tracing where materials and products come from, often with platforms such as Sourcemap, beyond the first tier of suppliers.",
    example:
      "You map a cotton supply chain down to the farm level and find that two spinning mills supply most of the volume.",
  },
  "building-design-tools": {
    definition:
      "Design and documentation software such as Revit and AutoCAD used on construction projects.",
    example:
      "You open the Revit model to check material quantities before calculating the building's embodied carbon.",
  },
  "field-data-tools": {
    definition:
      "Collecting data in the field with tools such as KoboToolbox, including offline forms and GPS points.",
    example:
      "You build a mobile survey for enumerators, collect 300 household responses offline, and clean the data for analysis.",
  },
  "mel-frameworks": {
    definition:
      "Monitoring, evaluation and learning: defining indicators, collecting data and using findings to adjust a program.",
    example:
      "You set indicators for a farmer training program and design the quarterly monitoring schedule.",
  },
  "budgeting-donor-reporting": {
    definition:
      "Building project budgets and reporting spend to donors in their required format.",
    example:
      "You prepare a six-month financial report, explain variances above 10%, and flag a budget line that needs reallocation.",
  },
  "pm-tools": {
    definition:
      "Project management software such as Asana, ClickUp or MS Project used to plan work and track progress.",
    example:
      "You set up a project in Asana with owners, milestones and dependencies, then run the weekly status review from it.",
  },
  "crm-tools": {
    definition:
      "Managing relationships and pipelines in systems such as Salesforce, or funder databases such as Candid.",
    example:
      "You log every funder conversation in Salesforce and build a pipeline view of applications by stage.",
  },
  "data-visualization": {
    definition:
      "Choosing the right chart and designing it so the message is clear without explanation.",
    example:
      "You turn a table of emissions by country into a sorted bar chart with a single highlight color for the top market.",
  },
  "survey-design": {
    definition:
      "Writing questionnaires that produce usable data: clear questions, sensible scales and low bias.",
    example:
      "You draft a supplier survey, pilot it with five companies, and cut the questions that produced ambiguous answers.",
  },
  "research-methods": {
    definition:
      "Choosing and running qualitative or quantitative methods, from interviews and coding to sampling and statistical tests.",
    example:
      "You design a mixed-methods study: 20 interviews coded for themes, plus a survey to test how widespread the themes are.",
  },
  "knowledge-platforms": {
    definition:
      "Structuring information in tools such as Notion or Airtable so a team can find and reuse it.",
    example:
      "You rebuild a project database in Airtable with linked tables for projects, funders and documents.",
  },
  "assessment-design": {
    definition:
      "Writing quizzes, assignments or exams that measure whether learning happened.",
    example:
      "You write a 20-question assessment for a climate course, check each question against the learning objectives, and set the pass mark.",
  },
  "lms-platforms": {
    definition:
      "Running courses on learning platforms such as Moodle or Teachable: structure, enrolment and progress tracking.",
    example:
      "You set up a four-module course in Moodle, upload the materials, and configure completion tracking for certificates.",
  },
  "program-evaluation": {
    definition:
      "Judging whether a program worked, using data and comparison to decide what to continue or change.",
    example:
      "You evaluate a three-year water program, compare outcomes against the baseline, and recommend which components to scale.",
  },

  // Circularity & Natural Capital
  "lca-life-cycle-assessment": {
    definition:
      "A method for measuring a product's environmental impact across its whole life: raw materials, production, use and disposal. ISO 14040/44 sets the rules.",
    example:
      "You define the functional unit (one reusable bottle, 500 uses), map the system boundary, and compare global warming potential against a single-use alternative in openLCA.",
  },
  "circular-design": {
    definition:
      "Designing products so materials can be reused, repaired or recycled instead of discarded.",
    example:
      "You redesign a lamp so it can be disassembled with one tool and its electronics replaced without discarding the housing.",
  },
  "material-flow-analysis": {
    definition:
      "Tracking where materials enter, move through and leave a system, measured in tonnes.",
    example:
      "You map a city's construction material flows and find that 60% of demolition waste never reaches recycling.",
  },
  "waste-stream-auditing": {
    definition:
      "Sorting and weighing what an organization throws away to see what could be reduced or diverted.",
    example:
      "You run a two-day waste audit at a factory, categorize the waste by type, and quantify the recyclable share.",
  },
  "eudr-due-diligence": {
    definition:
      "The EU Deforestation Regulation's requirement to prove that commodities such as soy, palm, timber and cocoa were not grown on deforested land.",
    example:
      "You geolocate supplier plots for a cocoa supply chain and check each polygon against satellite deforestation alerts.",
  },
  "biodiversity-monitoring": {
    definition:
      "Measuring the state of species and habitats over time, using field surveys and remote sensing.",
    example:
      "You set up a monitoring plan for a restored wetland: bird counts, vegetation plots and drone imagery on a fixed schedule.",
  },
  "field-methods": {
    definition:
      "Practical techniques for collecting ecological data: species identification, transects, trapping and sampling.",
    example:
      "You run a transect survey to record plant species cover across a restoration site.",
  },
  "regenerative-agriculture": {
    definition:
      "Farming practices that rebuild soil health and store carbon: cover crops, reduced tillage, rotation and agroforestry.",
    example:
      "You compare soil organic matter on a cover-cropped field against a conventionally tilled one and present the difference to the farm cooperative.",
  },
  "climate-resilience-planning": {
    definition:
      "Preparing for climate impacts: assessing exposure to heat, flood and drought, then choosing adaptation measures.",
    example:
      "You assess a coastal city's flood exposure under two scenarios and rank adaptation options by cost per household protected.",
  },

  // Strategy & Stakeholder Delivery
  "double-materiality-assessment": {
    definition:
      "The EFRAG-aligned process for deciding which sustainability topics are material, from both an impact perspective (how the company affects people and planet) and a financial one (how sustainability affects the company).",
    example:
      "You run a materiality assessment for a manufacturer: stakeholder surveys, a scoring matrix, and a shortlist of topics with threshold justification.",
  },
  "product-thinking": {
    definition:
      "Framing work around what users actually need, then translating that into something a team can build.",
    example:
      "You turn a vague request for a sustainability dashboard into a defined set of user questions the tool must answer.",
  },
  "urban-planning": {
    definition:
      "How cities plan land use, transport and services, and the policy tools they use to shape development.",
    example:
      "You review a district plan and identify where mixed-use zoning would cut car trips.",
  },
  "executive-communication": {
    definition:
      "Writing and presenting for senior audiences: one page, the decision, the tradeoffs, the ask.",
    example:
      "You condense a 40-page risk assessment into a one-page board memo with three options and a recommendation.",
  },
  "policy-analysis-brief-writing": {
    definition:
      "Analyzing a policy problem and writing a short brief that states options, evidence and a recommendation.",
    example:
      "You write a two-page brief comparing two carbon pricing designs, with costs by household income decile.",
  },
  "negotiation-coalition-building": {
    definition:
      "Reaching agreements with parties who have different interests, and assembling support around a shared position.",
    example:
      "You negotiate a joint position on recycling targets with three industry associations that started with different demands.",
  },
  "stakeholder-mapping": {
    definition:
      "Identifying who affects or is affected by a decision, and what each party wants.",
    example:
      "You map the stakeholders around a wind project by influence and interest, then plan who to meet first.",
  },
  "policy-design-drafting": {
    definition:
      "Writing the actual text of policies, regulations or legislative amendments.",
    example:
      "You draft amendments to a waste ordinance, including definitions, obligations and enforcement provisions.",
  },
  "storytelling-narrative-strategy": {
    definition:
      "Choosing the story that makes an audience care, and structuring content around it.",
    example:
      "You reframe a company's climate report around one farmer's perspective and build the narrative arc for the annual campaign.",
  },
  "campaign-strategy": {
    definition:
      "Planning a multi-channel campaign: audience, message, channels, timing and how success will be measured.",
    example:
      "You design a six-week campaign for a local issue with channel-by-channel plans and weekly KPIs.",
  },
  "copywriting-content-production": {
    definition:
      "Writing and producing content that gets published: articles, posts, scripts and newsletters.",
    example:
      "You write a 60-second video script and five social posts on one climate solution, matched to each platform's format.",
  },
  "media-relations": {
    definition:
      "Getting coverage by working with journalists: pitching stories, preparing spokespeople and handling enquiries.",
    example:
      "You pitch a data story to two journalists, prepare the spokesperson with likely questions, and track the resulting coverage.",
  },
  "crisis-communication": {
    definition:
      "Responding when something goes wrong: acknowledging the facts quickly and protecting trust.",
    example:
      "You draft holding statements within two hours of a spill, brief the spokesperson, and plan the follow-up disclosure.",
  },
  "investor-communication": {
    definition:
      "Explaining sustainability performance to investors and analysts in the language of risk and returns.",
    example:
      "You write the ESG section of an investor memo, linking water risk to production costs in two key markets.",
  },
  "blended-finance": {
    definition:
      "Structuring funding that combines public, philanthropic and private capital to make a project investable.",
    example:
      "You design a guarantee that de-risks the first-loss layer of a reforestation fund so commercial investors can enter.",
  },
  "project-management": {
    definition:
      "Planning and running work so it lands on time and on budget: scope, schedule, owners and risks.",
    example:
      "You run a CSRD readiness project across four departments, tracking 60 tasks and escalating blockers weekly.",
  },
  "supplier-engagement": {
    definition:
      "Getting suppliers to act on sustainability: persuading, supporting and following up until data or changes arrive.",
    example:
      "You run a supplier cohort through emissions training, then follow up quarterly until each one submits its data.",
  },
  "supplier-scorecard-design": {
    definition:
      "Building the criteria and weights that turn supplier sustainability data into a comparable score.",
    example:
      "You design a scorecard that weights emissions, labor practices and certifications, then test it on 30 suppliers.",
  },
  "business-model-redesign": {
    definition:
      "Changing how a company creates and captures value, for example from selling products to selling services.",
    example:
      "You model a leasing model for industrial equipment and compare margins and material use against outright sales.",
  },
  "systems-thinking": {
    definition:
      "Looking at how parts of a system interact, so a fix in one place does not cause a problem in another.",
    example:
      "You map how a biofuel mandate affects land use, food prices and transport emissions before recommending a target.",
  },
  "community-engagement": {
    definition:
      "Working with local communities so projects respond to their concerns and knowledge.",
    example:
      "You run three community workshops for a restoration project and adjust the planting plan based on local water use concerns.",
  },
  "proposal-writing": {
    definition:
      "Writing funding proposals that connect a funder's priorities to a concrete plan, budget and results.",
    example:
      "You write a 10-page proposal with a logframe, budget and evidence of past results for a climate fund call.",
  },
  "program-leadership": {
    definition:
      "Running multi-year programs in an NGO: teams, budgets, partners and reporting.",
    example:
      "You lead a five-country program, chair quarterly reviews with partners, and manage the donor relationship.",
  },
  "client-management": {
    definition:
      "Keeping consulting clients informed and confident: scope, expectations, delivery and follow-on work.",
    example:
      "You run a weekly client check-in, flag a scope change before it becomes a cost issue, and agree the next phase.",
  },
  "structured-problem-solving": {
    definition:
      "Breaking a messy question into parts, forming hypotheses and testing them with data.",
    example:
      "You break how do we reach net zero into emissions sources, abatement options and costs, then size each one.",
  },
  "strategy-frameworks": {
    definition:
      "Reusable structures for making choices, such as market sizing, competitive analysis and option evaluation.",
    example:
      "You size the addressable market for a circular packaging service and rank three entry options by fit and cost.",
  },
  "sector-specialization": {
    definition:
      "Deep knowledge of one industry's value chain, regulation and sustainability issues.",
    example:
      "You know food and agriculture well enough to challenge a client's assumption about fertilizer emissions.",
  },
  "business-development": {
    definition:
      "Winning new work: identifying opportunities, building relationships and converting them into contracts.",
    example:
      "You track an upcoming tender, position the firm with the client beforehand, and lead the bid.",
  },
  "theory-of-change": {
    definition:
      "Mapping how an intervention is expected to lead to outcomes: activities, outputs, outcomes and assumptions.",
    example:
      "You build a theory of change for a training program, then design a logframe with indicators at each level.",
  },
  "risk-management": {
    definition:
      "Identifying what could go wrong, rating likelihood and impact, and putting mitigations in place.",
    example:
      "You maintain a risk register for a climate program, review it monthly, and escalate the two risks that moved up.",
  },
  "portfolio-management": {
    definition:
      "Managing a set of projects or investments as a group, balancing risk and return across them.",
    example:
      "You review a portfolio of 12 grants, reallocate budget from two underperforming projects, and report to the board.",
  },
  "adaptive-leadership": {
    definition:
      "Leading when the problem is unclear and the answer has to be learned while working.",
    example:
      "You run short experiments with a partner team, keep what works, and stop the approaches that stall.",
  },
  "cross-cultural-collaboration": {
    definition:
      "Working effectively across countries and cultures, including different decision styles and communication norms.",
    example:
      "You adapt a workshop format for partners in three regions after finding that one prefers written input over open discussion.",
  },
  "multi-stakeholder-platforms": {
    definition:
      "Designing and running a collaboration where several organizations govern a shared agenda together.",
    example:
      "You set up a platform charter for a sustainable sourcing initiative, with seats, decision rules and a secretariat.",
  },
  "conflict-resolution": {
    definition:
      "Working through disagreements between parties so a project can continue.",
    example:
      "You mediate between a project team and a community group over water access and agree a monitoring arrangement.",
  },
  "editorial-judgment": {
    definition:
      "Deciding what is worth publishing, what is accurate enough, and how to frame it fairly.",
    example:
      "You cut a supplier's unsupported recycling claim from a draft report and replace it with the verified figure.",
  },
  "sustainability-domain-literacy": {
    definition:
      "A working knowledge of the field's core concepts, frameworks and current debates.",
    example:
      "You can explain the difference between net zero and carbon neutral without notes and apply it to a client's claim.",
  },
  "partnership-design": {
    definition:
      "Structuring a collaboration: objectives, roles, governance, and the documents that hold it together.",
    example:
      "You draft an MOU and governance model for a corporate-NGO alliance, including decision rights and exit terms.",
  },
  "peer-review-publishing": {
    definition:
      "Writing research that passes academic peer review, and reviewing others' work.",
    example:
      "You submit a study to a journal, respond to reviewer comments, and revise the methods section.",
  },
  "donor-relations": {
    definition:
      "Managing relationships with funders over time: updates, site visits, honest reporting and renewal conversations.",
    example:
      "You prepare a donor for a difficult quarter, present the revised plan, and secure the next tranche.",
  },
  "consortium-coordination": {
    definition:
      "Holding a group of partner organizations to a shared proposal or program, with clear roles and timelines.",
    example:
      "You coordinate six partners through a joint bid, run the submission calendar, and merge their budget inputs.",
  },
  "instructional-design": {
    definition:
      "Building learning experiences with a method, such as ADDIE, that starts from what learners must be able to do.",
    example:
      "You design a course for procurement teams: objectives first, then activities and assessment, then the materials.",
  },
  "curriculum-development": {
    definition:
      "Structuring a course or program across sessions so each one builds on the last.",
    example:
      "You sequence a four-week climate course so learners can calculate a footprint by week three.",
  },
  "facilitation-public-speaking": {
    definition:
      "Running a room and presenting clearly, whether it is a workshop, a training session or a stage.",
    example:
      "You facilitate a two-day materiality workshop, keep 30 participants on task, and present the outputs at the close.",
  },
  "train-the-trainer": {
    definition:
      "Preparing other people to deliver training, including materials, practice and feedback.",
    example:
      "You train 15 internal champions to run a carbon literacy session and give each one feedback on a practice delivery.",
  },
  "executive-coaching": {
    definition:
      "Working one-to-one with senior leaders on how they lead sustainability work.",
    example:
      "You coach a new CSO through her first board presentation, rehearsing the narrative and the hard questions.",
  },
};

if (process.env.NODE_ENV !== "production") {
  const missing = SKILLS.filter((skill) => !SKILL_GLOSSARY[skill.slug]);
  if (missing.length > 0) {
    console.warn(
      `[skill-glossary] ${missing.length} skills still need an entry: ${missing
        .map((skill) => skill.slug)
        .join(", ")}`
    );
  }
}
