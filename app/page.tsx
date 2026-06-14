"use client"

import ResumeHeader from "@/components/resume-header"
import { FadeIn } from "@/components/ui/fade-int"
import { useTypingAnimation } from "@/hooks/useTypingAnimations"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Award,
  Briefcase,
  ChevronRight,
  Code2,
  ExternalLink,
  GraduationCap,
  Layers,
  Star,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/app/data/resume"

// Skill pill component
function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex cursor-default items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors select-none hover:bg-primary hover:text-primary-foreground">
      {label}
    </span>
  )
}

// Timeline dot component
function TimelineDot() {
  return (
    <div className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-primary ring-4 ring-background" />
  )
}

// Seciton boilerplate
function Section({
  id,
  icon: Icon,
  title,
  children,
  className,
  delay = 0,
}: {
  id: string
  icon: React.ElementType
  title: string
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <FadeIn direction="up" delay={delay}>
      <section id={id} className={cn("pt-14", className)}>
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground">
            <Icon size={18} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <div className="ml-2 h-px flex-1 bg-border" />
        </div>
        {children}
      </section>
    </FadeIn>
  )
}

export default function Page() {
  const {
    name,
    title,
    tagline,
    location,
    email,
    phone,
    website,
    github,
    linkedin,
    avatar,
    about,
    experience,
    education,
    skills,
    projects,
    certifications,
  } = resumeData

  const typedName = useTypingAnimation(name, 80, 100)

  return (
    <div className="m-auto flex min-h-svh w-full max-w-5xl min-w-0 flex-col gap-4 px-4 pr-4 pl-4 text-sm leading-loose sm:px-6 sm:pr-6 sm:pl-6">
      <div className="sticky top-0 z-10 pt-4 sm:pt-6">
        <FadeIn direction="down">
          <ResumeHeader />
        </FadeIn>
      </div>
      <div className="flex flex-col justify-between gap-10 sm:flex-row">
        <div className="mt-10 flex flex-col items-start gap-3">
          <FadeIn direction="down">
            <h1 className="text-3xl">{typedName}</h1>
          </FadeIn>
          <FadeIn direction="down">
            <div className="flex flex-col gap-8">
              <span className="w-fit bg-foreground p-1 text-sm font-bold text-background">
                {title}
                <span className="animate-caret-blink">_</span>
              </span>
              <p>{about}</p>
              <div className="flex flex-row gap-3">
                <Button variant={"default"}>Contact Me</Button>
                <Button variant={"outline"}>Projects</Button>
              </div>
            </div>
          </FadeIn>
        </div>
        {/* <FadeIn direction="left" delay={1.0}>
          <Carousel className="w-full overflow-hidden sm:max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext size={"xs"} variant={"ghost"} />
            <CarouselPrevious size={"xs"} variant={"ghost"} />
          </Carousel>
        </FadeIn> */}
      </div>

      <Section id="experience" icon={Briefcase} title="Experience">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-1.5 w-px bg-border" />
          <div className="">
            {experience.map((job, i) => (
              <div key={i} className="relative flex gap-6 pl-8">
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
                        <span className="text-xs text-muted-foreground">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {job.description}
                    </p>
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
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.tech.map((t) => (
                        <SkillPill key={t} label={t} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── EDUCATION ── */}
      <Section id="education" icon={GraduationCap} title="Education">
        {education.map((edu, i) => (
          <Card
            key={i}
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
                  <span className="text-xs text-muted-foreground">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </Section>

      {/* ── SKILLS ── */}
      <Section id="skills" icon={Code2} title="Skills">
        <div className="grid gap-6 md:grid-cols-2">
          {(
            [
              { label: "Languages", items: skills.languages },
              { label: "Frontend", items: skills.frontend },
              { label: "Backend & Data", items: skills.backend },
              {
                label: "Infrastructure & DevOps",
                items: skills.infrastructure,
              },
              { label: "Practices", items: skills.practices },
            ] as { label: string; items: string[] }[]
          ).map(({ label, items }) => (
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

      {/* ── PROJECTS ── */}
      <Section id="projects" icon={Layers} title="Projects">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <Card
              key={i}
              className="group flex flex-col border-border transition-all duration-200 hover:border-primary/40 hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">{proj.name}</CardTitle>
                  <a
                    href={`https://${proj.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <ExternalLink
                      size={14}
                      className="text-muted-foreground hover:text-foreground"
                    />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <SkillPill key={t} label={t} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── CERTIFICATIONS ── */}
      <Section id="certifications" icon={Award} title="Certifications">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <div
              key={i}
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
    </div>
  )
}
