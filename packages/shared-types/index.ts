export enum ScoreCategory {
  WORKFORCE = "WORKFORCE",
  PRIVILEGED = "PRIVILEGED",
  MFA = "MFA",
  LIFECYCLE = "LIFECYCLE",
  MACHINE = "MACHINE",
  SAAS = "SAAS",
  SOD = "SOD",
  ZERO_TRUST = "ZERO_TRUST",
  COMPLIANCE = "COMPLIANCE"
}

export enum RiskLevel {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW"
}

export interface ScorecardMetric {
  id: string;
  name: string;
  category: ScoreCategory;
  score: number; // 0-100
  weight: number;
  trend: "UP" | "DOWN" | "STABLE";
  riskLevel: RiskLevel;
  lastUpdated: string;
}

export interface BusinessUnitBenchmark {
  id: string;
  name: string;
  avgScore: number;
  topMetric: string;
  lowestMetric: string;
  complianceGap: number;
}

export interface MaturityLevel {
  level: 1 | 2 | 3 | 4 | 5;
  name: string;
  description: string;
  requirements: string[];
}

export interface ExecutiveSummary {
  overallScore: number;
  totalIdentities: number;
  activeRiskIncidents: number;
  topImprovementAreas: string[];
}
