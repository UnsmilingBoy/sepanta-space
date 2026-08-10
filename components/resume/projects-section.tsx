import { ExternalLink, Layers } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/resume/section"
import { SkillPill } from "@/components/resume/skill-pill"
import type { Project } from "@/payload-types"

export function ProjectsSection({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null

  return (
    <Section id="projects" icon={Layers} title="Projects">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <Card
            key={proj.id}
            className="group flex flex-col border-border transition-all duration-200 hover:border-primary/40 hover:shadow-md"
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-base">{proj.name}</CardTitle>
                {proj.link && proj.link.trim().length > 0 && (
                  <a
                    href={
                      proj.link.startsWith("http")
                        ? proj.link
                        : `https://${proj.link}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <ExternalLink
                      size={14}
                      className="text-muted-foreground hover:text-foreground"
                    />
                  </a>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-3">
              {proj.description && (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {proj.description}
                </p>
              )}
              {proj.tech && proj.tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <SkillPill key={t.id ?? t.label} label={t.label} />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
