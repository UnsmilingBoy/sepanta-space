import type { Skill } from "@/payload-types"

const CATEGORY_LABELS: Record<string, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend & Data",
  infrastructure: "Infrastructure & DevOps",
  practices: "Practices",
}

const CATEGORY_ORDER = [
  "languages",
  "frontend",
  "backend",
  "infrastructure",
  "practices",
] as const

export function groupSkillsByCategory(skills: Skill[]) {
  return CATEGORY_ORDER.map((category) => ({
    label: CATEGORY_LABELS[category],
    items: skills.filter((s) => s.category === category).map((s) => s.label),
  })).filter((group) => group.items.length > 0)
}
