import { GraduationCap } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/resume/section"
import type { Education } from "@/payload-types"

export function EducationSection({ education }: { education: Education[] }) {
  if (education.length === 0) return null

  return (
    <Section id="education" icon={GraduationCap} title="Education">
      {education.map((edu) => (
        <Card
          key={edu.id}
          className="border-border transition-all duration-200 hover:border-primary/40 hover:shadow-md"
        >
          <CardHeader className="pb-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <CardTitle className="text-lg">{edu.degree}</CardTitle>
                <p className="mt-0.5 text-sm font-semibold text-muted-foreground">
                  {edu.school}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Badge variant="secondary" className="text-xs">
                  {edu.period}
                </Badge>
                {edu.gpa && (
                  <span className="text-xs text-muted-foreground">
                    GPA: {edu.gpa}
                  </span>
                )}
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </Section>
  )
}
