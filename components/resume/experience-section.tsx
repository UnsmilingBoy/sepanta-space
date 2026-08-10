import { Briefcase, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/resume/section"
import { SkillPill } from "@/components/resume/skill-pill"
import { TimelineDot } from "@/components/resume/timeline-dot"
import type { Experience } from "@/payload-types"

export function ExperienceSection({
  experience,
}: {
  experience: Experience[]
}) {
  if (experience.length === 0) return null

  return (
    <Section id="experience" icon={Briefcase} title="Experience">
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-1.5 w-px bg-border" />
        <div>
          {experience.map((job) => (
            <div key={job.id} className="relative flex gap-6 pl-8">
              <div className="absolute top-1.5 left-0">
                <TimelineDot />
              </div>
              <Card className="flex-1 border-border transition-all duration-200 hover:border-primary/40 hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg">{job.role}</CardTitle>
                      <p className="mt-0.5 text-sm font-semibold text-muted-foreground">
                        {job.company} ·{" "}
                        <span className="font-normal">{job.location}</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge
                        variant="secondary"
                        className="text-xs whitespace-nowrap"
                      >
                        {job.period}
                      </Badge>
                      {job.type && (
                        <span className="text-xs text-muted-foreground">
                          {job.type}
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {job.description && (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {job.description}
                    </p>
                  )}
                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="space-y-1.5">
                      {job.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight
                            size={14}
                            className="mt-0.5 shrink-0 text-primary"
                          />
                          {h.text}
                        </li>
                      ))}
                    </ul>
                  )}
                  {job.tech && job.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.tech.map((t, i) => (
                        <SkillPill key={i} label={t.label} />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
