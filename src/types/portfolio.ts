export type PortfolioMode = 'personal' | 'works';

export interface Project {
  id: string;
  slug: string;
  number: string;
  category: string;
  actionLabel: string;
  pixelWord: string;
  title: string;
  summary: string;
  tags: string[];
  theme: 'dark' | 'terracotta' | 'stone';
  inProgress: boolean;
  featured?: boolean;
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  title: string;
  subtitle: string;
  client?: string;
  role: string;
  timeline: string;
  overview: string;
  challenge: string;
  researchAndInsights?: string[];
  keyDecisions: { title: string; detail: string }[];
  solution: string;
  metrics?: { label: string; value: string }[];
  takeaways?: string;
}

export interface CareerMilestone {
  id: string;
  company: string;
  period: string;
  role: string;
  description: string;
  highlights?: string[];
}

export interface PhilosophyPrinciple {
  title: string;
  description: string;
}

export interface CapabilityGroup {
  category: string;
  details: string;
}

export interface ToolCategory {
  title: string;
  items: string[];
}

export interface MetricItem {
  value: string;
  label: string;
}
