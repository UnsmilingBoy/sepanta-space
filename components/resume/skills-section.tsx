import { Code2 } from "lucide-react"
import { Section } from "@/components/resume/section"
import { SkillPill } from "@/components/resume/skill-pill"

interface SkillGroup {
  label: string
  items: string[]
}

export function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  if (groups.length === 0) return null

  return (
    <Section id="skills" icon={Code2} title="Skills">
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map(({ label, items }) => (
          <div key={label} className="space-y-2.5">
            <h3 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              {label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <SkillPill key={s} label={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
