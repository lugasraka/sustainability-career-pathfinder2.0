import type { Pillar } from "@/types/pathfinder";
import { SKILLS } from "@/data/skills";

export interface SkillSubgroup {
  id: string;
  label: string;
  slugs: string[];
}

/**
 * Themed sub-groups for pillars with long skill lists. Pillars without an
 * entry here render as a single flat list (carbon accounting, circularity).
 */
export const PILLAR_SUBGROUPS: Partial<Record<Pillar, SkillSubgroup[]>> = {
  regulations_disclosure: [
    {
      id: "regulations-reporting",
      label: "Reporting frameworks",
      slugs: [
        "csrd-esrs-implementation",
        "gri-standards",
        "issb-ifrs-s1-s2",
        "cdp-disclosure",
        "assurance-readiness",
        "integrated-reporting-sasb",
        "regulatory-analysis",
        "anti-greenwashing-claims",
      ],
    },
    {
      id: "regulations-markets",
      label: "Carbon pricing & markets",
      slugs: [
        "carbon-pricing-mechanisms",
        "carbon-credit-standards",
        "carbon-market-policy",
        "vcmi-claims-code",
        "green-bond-instruments",
        "ppa-rec-markets",
      ],
    },
    {
      id: "regulations-supply-chain",
      label: "Supply chains & due diligence",
      slugs: [
        "human-rights-due-diligence",
        "supplier-rating-programs",
        "supplier-audit",
      ],
    },
    {
      id: "regulations-products",
      label: "Products, buildings & materials",
      slugs: [
        "epr-compliance",
        "digital-product-passports",
        "packaging-regulation",
        "green-building-certifications",
      ],
    },
    {
      id: "regulations-nature",
      label: "Nature, land & food",
      slugs: [
        "tnfd-leap",
        "sbtn-target-setting",
        "biodiversity-credit-markets",
        "food-security-policy",
      ],
    },
    {
      id: "regulations-public",
      label: "Public sector & climate finance",
      slugs: [
        "donor-compliance",
        "climate-fund-design",
        "public-affairs-strategy",
      ],
    },
  ],
  data_systems: [
    {
      id: "data-analytics",
      label: "Data analysis & BI",
      slugs: [
        "excel-data-analysis",
        "bi-dashboards",
        "data-visualization",
        "spend-analysis",
      ],
    },
    {
      id: "data-modeling",
      label: "Programming & modeling",
      slugs: [
        "python-sql",
        "data-pipelines",
        "ml-forecasting",
        "r-stata-analytics",
        "economic-modeling",
        "financial-modeling",
        "lcoe-modeling",
        "yield-modeling-tools",
      ],
    },
    {
      id: "data-geospatial",
      label: "GIS, engineering & field tools",
      slugs: [
        "gis-analysis",
        "engineering-fundamentals",
        "building-design-tools",
        "field-data-tools",
      ],
    },
    {
      id: "data-research",
      label: "Research, evaluation & learning design",
      slugs: [
        "research-literature-review",
        "research-methods",
        "survey-design",
        "mel-frameworks",
        "program-evaluation",
        "assessment-design",
      ],
    },
    {
      id: "data-platforms",
      label: "Platforms & program ops",
      slugs: [
        "esg-reporting-platforms",
        "carbon-market-data-platforms",
        "procurement-platforms",
        "supply-chain-mapping",
        "pm-tools",
        "crm-tools",
        "knowledge-platforms",
        "lms-platforms",
        "budgeting-donor-reporting",
      ],
    },
    {
      id: "data-content",
      label: "Marketing & content tools",
      slugs: ["design-tools", "owned-media-platforms", "social-analytics"],
    },
  ],
  strategy_governance: [
    {
      id: "strategy-craft",
      label: "Sustainability craft & governance",
      slugs: [
        "double-materiality-assessment",
        "sustainability-domain-literacy",
        "sector-specialization",
        "urban-planning",
        "policy-analysis-brief-writing",
        "policy-design-drafting",
      ],
    },
    {
      id: "strategy-comms",
      label: "Communication & advocacy",
      slugs: [
        "storytelling-narrative-strategy",
        "campaign-strategy",
        "copywriting-content-production",
        "media-relations",
        "crisis-communication",
        "editorial-judgment",
        "investor-communication",
      ],
    },
    {
      id: "strategy-problem-solving",
      label: "Strategy & problem solving",
      slugs: [
        "structured-problem-solving",
        "strategy-frameworks",
        "systems-thinking",
        "product-thinking",
        "business-model-redesign",
        "risk-management",
      ],
    },
    {
      id: "strategy-delivery",
      label: "Project & program delivery",
      slugs: [
        "project-management",
        "program-leadership",
        "theory-of-change",
        "partnership-design",
        "consortium-coordination",
        "portfolio-management",
        "adaptive-leadership",
      ],
    },
    {
      id: "strategy-stakeholders",
      label: "Stakeholder & community",
      slugs: [
        "stakeholder-mapping",
        "negotiation-coalition-building",
        "community-engagement",
        "conflict-resolution",
        "facilitation-public-speaking",
        "cross-cultural-collaboration",
        "multi-stakeholder-platforms",
      ],
    },
    {
      id: "strategy-commercial",
      label: "Commercial & fundraising",
      slugs: [
        "proposal-writing",
        "business-development",
        "donor-relations",
        "blended-finance",
        "client-management",
        "executive-communication",
      ],
    },
    {
      id: "strategy-suppliers",
      label: "Supplier engagement",
      slugs: ["supplier-engagement", "supplier-scorecard-design"],
    },
    {
      id: "strategy-learning",
      label: "Learning & facilitation",
      slugs: [
        "instructional-design",
        "curriculum-development",
        "train-the-trainer",
        "executive-coaching",
        "peer-review-publishing",
      ],
    },
  ],
};

if (process.env.NODE_ENV !== "production") {
  for (const [pillar, groups] of Object.entries(PILLAR_SUBGROUPS) as [
    Pillar,
    SkillSubgroup[],
  ][]) {
    const pillarSlugs = new Set(
      SKILLS.filter((skill) => skill.pillar === pillar).map(
        (skill) => skill.slug
      )
    );
    const seen = new Set<string>();
    for (const group of groups) {
      for (const slug of group.slugs) {
        if (!pillarSlugs.has(slug)) {
          console.warn(
            `[skill-subgroups] "${slug}" is not part of pillar "${pillar}"`
          );
        }
        if (seen.has(slug)) {
          console.warn(
            `[skill-subgroups] "${slug}" appears twice in pillar "${pillar}"`
          );
        }
        seen.add(slug);
      }
    }
    for (const slug of pillarSlugs) {
      if (!seen.has(slug)) {
        console.warn(
          `[skill-subgroups] "${slug}" is missing from pillar "${pillar}" sub-groups`
        );
      }
    }
  }
}
