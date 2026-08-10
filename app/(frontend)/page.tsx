import ResumeHeader from "@/components/resume-header"
import { FadeIn } from "@/components/ui/fade-int"
import { getPayloadClient } from "@/lib/get-payload"
import { groupSkillsByCategory } from "@/lib/resume"
import { HeroSection } from "@/components/resume/hero-section"
import { ExperienceSection } from "@/components/resume/experience-section"
import { EducationSection } from "@/components/resume/education-section"
import { SkillsSection } from "@/components/resume/skills-section"
import { ProjectsSection } from "@/components/resume/projects-section"
import { CertificationsSection } from "@/components/resume/certifications-section"

export const dynamic = "force-dynamic"

export default async function Page() {
  const payload = await getPayloadClient()

  const [
    settings,
    experienceRes,
    educationRes,
    skillsRes,
    projectsRes,
    certsRes,
  ] = await Promise.all([
    payload.findGlobal({ slug: "site-settings" }),
    payload.find({ collection: "experience", sort: "order", limit: 100 }),
    payload.find({ collection: "education", sort: "order", limit: 100 }),
    payload.find({ collection: "skills", sort: "order", limit: 100 }),
    payload.find({ collection: "projects", sort: "order", limit: 100 }),
    payload.find({ collection: "certifications", sort: "order", limit: 100 }),
  ])

  const skillGroups = groupSkillsByCategory(skillsRes.docs)

  return (
    <div className="m-auto flex min-h-svh w-full max-w-5xl min-w-0 flex-col gap-4 px-4 pr-4 pl-4 text-sm leading-loose sm:px-6 sm:pr-6 sm:pl-6">
      <div className="sticky top-0 z-10 pt-4 sm:pt-6">
        <FadeIn direction="down">
          <ResumeHeader />
        </FadeIn>
      </div>

      <HeroSection
        name={settings.name}
        title={settings.title}
        about={settings.about}
      />
      <ExperienceSection experience={experienceRes.docs} />
      <EducationSection education={educationRes.docs} />
      <SkillsSection groups={skillGroups} />
      <ProjectsSection projects={projectsRes.docs} />
      <CertificationsSection certifications={certsRes.docs} />
    </div>
  )
}
