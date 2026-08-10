import { Award } from "lucide-react"
import { Section } from "@/components/resume/section"
import type { Certification } from "@/payload-types"

export function CertificationsSection({
  certifications,
}: {
  certifications: Certification[]
}) {
  if (certifications.length === 0) return null

  return (
    <Section id="certifications" icon={Award} title="Certifications">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="flex items-start gap-3 rounded-xl border border-border bg-secondary p-4 transition-all duration-200 hover:border-primary/40 hover:bg-accent"
          >
            <Award size={18} className="mt-0.5 flex-shrink-0 text-primary" />
            <div>
              <p className="text-sm leading-snug font-medium">{cert.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {cert.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
