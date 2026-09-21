import type { CertLevel, Certification } from "@/types/pathfinder";

export const CERTIFICATIONS: Certification[] = [
  { pathSlug: "esg-reporting", level: "beginner", name: "GHG Protocol Corporate Standard", provider: "WRI / WBCSD", hours: "6–10 h" },
  { pathSlug: "esg-reporting", level: "beginner", name: "CDP Disclosure Training", provider: "CDP", hours: "4–6 h" },
  { pathSlug: "esg-reporting", level: "intermediate", name: "GRI Sustainability Reporting Standards", provider: "GRI", hours: "30–40 h" },
  { pathSlug: "esg-reporting", level: "intermediate", name: "TCFD Foundation Course", provider: "CFA Institute", hours: "10–15 h" },
  { pathSlug: "esg-reporting", level: "intermediate", name: "ISSP Sustainability Associate (ISSP-SA)", provider: "ISSP", hours: "40 h" },
  { pathSlug: "esg-reporting", level: "advanced", name: "FSA Credential", provider: "IFRS / SASB", hours: "100+ h" },
  { pathSlug: "esg-reporting", level: "advanced", name: "ISSP Certified Sustainability Professional", provider: "ISSP", hours: "100+ h" },
  { pathSlug: "esg-reporting", level: "advanced", name: "CFA ESG Certificate", provider: "CFA Institute", hours: "130 h" },

  { pathSlug: "climate-policy", level: "beginner", name: "Carbon Literacy Project", provider: "Carbon Literacy Trust", hours: "8 h" },
  { pathSlug: "climate-policy", level: "intermediate", name: "ISSP Sustainability Associate (ISSP-SA)", provider: "ISSP", hours: "40 h" },
  { pathSlug: "climate-policy", level: "advanced", name: "ISSP Certified Sustainability Professional", provider: "ISSP", hours: "100+ h" },

  { pathSlug: "climate-communications", level: "beginner", name: "Carbon Literacy Project", provider: "Carbon Literacy Trust", hours: "8 h" },

  { pathSlug: "carbon-markets", level: "beginner", name: "PRI Academy: ESG Investing Foundations", provider: "PRI", hours: "10 h" },
  { pathSlug: "carbon-markets", level: "intermediate", name: "ICROA Carbon Markets Fundamentals", provider: "ICROA", hours: "25 h" },
  { pathSlug: "carbon-markets", level: "intermediate", name: "CFA ESG Certificate", provider: "CFA Institute", hours: "130 h" },
  { pathSlug: "carbon-markets", level: "intermediate", name: "TCFD Foundation Course", provider: "CFA Institute", hours: "10–15 h" },
  { pathSlug: "carbon-markets", level: "advanced", name: "FSA Credential", provider: "IFRS / SASB", hours: "100+ h" },
  { pathSlug: "carbon-markets", level: "advanced", name: "VCMI Claims Code Training", provider: "VCMI", hours: "10 h" },

  { pathSlug: "renewable-energy", level: "beginner", name: "Renewable Energy 100 (edX)", provider: "edX / TU Delft", hours: "30 h" },
  { pathSlug: "renewable-energy", level: "intermediate", name: "Esri GIS Fundamentals", provider: "Esri", hours: "20 h" },

  { pathSlug: "sustainability-data", level: "beginner", name: "GHG Protocol Corporate Standard", provider: "WRI / WBCSD", hours: "6–10 h" },
  { pathSlug: "sustainability-data", level: "beginner", name: "Google Data Analytics Certificate", provider: "Coursera / Google", hours: "6 months" },
  { pathSlug: "sustainability-data", level: "intermediate", name: "Microsoft PL-300: Power BI Data Analyst", provider: "Microsoft", hours: "40–60 h" },

  { pathSlug: "sustainable-supply-chain", level: "beginner", name: "GHG Protocol Corporate Standard", provider: "WRI / WBCSD", hours: "6–10 h" },
  { pathSlug: "sustainable-supply-chain", level: "intermediate", name: "CIPS Sustainable Procurement", provider: "CIPS", hours: "40 h" },
  { pathSlug: "sustainable-supply-chain", level: "intermediate", name: "GRI Sustainability Reporting Standards", provider: "GRI", hours: "30–40 h" },

  { pathSlug: "circular-economy", level: "beginner", name: "Circular Economy in Cities", provider: "Ellen MacArthur Foundation", hours: "15 h" },

  { pathSlug: "biodiversity-conservation", level: "beginner", name: "Esri GIS Fundamentals", provider: "Esri", hours: "20 h" },

  { pathSlug: "green-building", level: "beginner", name: "LEED Green Associate", provider: "USGBC", hours: "40 h" },
  { pathSlug: "green-building", level: "intermediate", name: "WELL AP", provider: "IWBI", hours: "60 h" },
  { pathSlug: "green-building", level: "advanced", name: "LEED AP BD+C", provider: "USGBC", hours: "80+ h" },

  { pathSlug: "environmental-consulting", level: "beginner", name: "GHG Protocol Corporate Standard", provider: "WRI / WBCSD", hours: "6–10 h" },
  { pathSlug: "environmental-consulting", level: "beginner", name: "Carbon Literacy Project", provider: "Carbon Literacy Trust", hours: "8 h" },
  { pathSlug: "environmental-consulting", level: "intermediate", name: "GRI Sustainability Reporting Standards", provider: "GRI", hours: "30–40 h" },
  { pathSlug: "environmental-consulting", level: "intermediate", name: "ISSP Sustainability Associate (ISSP-SA)", provider: "ISSP", hours: "40 h" },
  { pathSlug: "environmental-consulting", level: "advanced", name: "ISSP Certified Sustainability Professional", provider: "ISSP", hours: "100+ h" },
  { pathSlug: "environmental-consulting", level: "advanced", name: "FSA Credential", provider: "IFRS / SASB", hours: "100+ h" },

  { pathSlug: "community-sustainability", level: "beginner", name: "Circular Economy in Cities", provider: "Ellen MacArthur Foundation", hours: "15 h" },
  { pathSlug: "community-sustainability", level: "intermediate", name: "Esri GIS Fundamentals", provider: "Esri", hours: "20 h" },

  { pathSlug: "education-capacity-building", level: "beginner", name: "Carbon Literacy Project", provider: "Carbon Literacy Trust", hours: "8 h" },
  { pathSlug: "education-capacity-building", level: "advanced", name: "ISSP Sustainability Associate (ISSP-SA)", provider: "ISSP", hours: "40 h" },

  { pathSlug: "programs-project-management", level: "beginner", name: "Carbon Literacy Project", provider: "Carbon Literacy Trust", hours: "8 h" },
  { pathSlug: "programs-project-management", level: "intermediate", name: "ISSP Sustainability Associate (ISSP-SA)", provider: "ISSP", hours: "40 h" },
  { pathSlug: "programs-project-management", level: "advanced", name: "ISSP Certified Sustainability Professional", provider: "ISSP", hours: "100+ h" },

  { pathSlug: "partnerships-stakeholder-engagement", level: "beginner", name: "Carbon Literacy Project", provider: "Carbon Literacy Trust", hours: "8 h" },

  { pathSlug: "research-knowledge-management", level: "beginner", name: "Carbon Literacy Project", provider: "Carbon Literacy Trust", hours: "8 h" },
  { pathSlug: "research-knowledge-management", level: "beginner", name: "GHG Protocol Corporate Standard", provider: "WRI / WBCSD", hours: "6–10 h" },
  { pathSlug: "research-knowledge-management", level: "intermediate", name: "GRI Sustainability Reporting Standards", provider: "GRI", hours: "30–40 h" },
  { pathSlug: "research-knowledge-management", level: "advanced", name: "ISSP Certified Sustainability Professional", provider: "ISSP", hours: "100+ h" },

  { pathSlug: "grant-writing-mobilization", level: "intermediate", name: "ISSP Sustainability Associate (ISSP-SA)", provider: "ISSP", hours: "40 h" },
  { pathSlug: "grant-writing-mobilization", level: "advanced", name: "ISSP Certified Sustainability Professional", provider: "ISSP", hours: "100+ h" },
  { pathSlug: "grant-writing-mobilization", level: "advanced", name: "CFA ESG Certificate", provider: "CFA Institute", hours: "130 h" },
];

export function certsForPath(pathSlug: string, level?: CertLevel): Certification[] {
  return CERTIFICATIONS.filter(
    (c) => c.pathSlug === pathSlug && (!level || c.level === level)
  );
}
