export type ProjectCategory =
  | "All"
  | "Featured"
  | "Admin & Fintech"
  | "Telegram Mini Apps"
  | "Mobile Applications"
  | "Tools & Platforms";

export const CATEGORIES: ProjectCategory[] = [
  "All",
  "Featured",
  "Admin & Fintech",
  "Telegram Mini Apps",
  "Mobile Applications",
  "Tools & Platforms",
];

export const projectToCategoryMap: Record<string, ProjectCategory[]> = {
  Gopaddi: ["Featured", "Admin & Fintech"],
  Medicinex: ["Featured", "Admin & Fintech"],
  "Medicinex Admin": ["Featured", "Admin & Fintech"],
  "ODA Admin": ["Admin & Fintech"],
  "Cudie Admin": ["Admin & Fintech"],
  "BankX Admin Portal": ["Admin & Fintech"],
  "AFEX Talent Management Portal": ["Featured", "Admin & Fintech"],
  "Budget Management System": ["Admin & Fintech"],
  "ARC & K FUSION": ["Featured", "Tools & Platforms"],
  "Julswap AI Terminal": ["Featured", "Tools & Platforms"],
  MAPX: ["Tools & Platforms"],
  "Commodity Grading System": ["Admin & Fintech", "Tools & Platforms"],
  "Unified Access Control System for AFEX": ["Admin & Fintech"],
  "Retweeted AI": ["Tools & Platforms"],
  YCIYC: ["Telegram Mini Apps"],
  Surdatics: ["Telegram Mini Apps"],
  BPay: ["Telegram Mini Apps"],
  Afriq: ["Telegram Mini Apps"],
  "Tonnie Coin": ["Telegram Mini Apps"],
  Ghoolf: ["Featured", "Mobile Applications"],
  "84": ["Featured", "Mobile Applications", "Admin & Fintech"],
  Easichore: ["Mobile Applications"],
  Pipn: ["Mobile Applications"],
};
