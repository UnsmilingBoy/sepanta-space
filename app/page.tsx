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
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SkillsAccordion } from "@/components/ui/skills-collapsible"

export default function Page() {
  const typedName = useTypingAnimation("Sepanta Shafizadeh", 80, 100)

  return (
    <div className="m-auto flex min-h-svh w-full max-w-3xl min-w-0 flex-col gap-4 px-4 pr-4 pl-4 text-sm leading-loose sm:px-6 sm:pr-6 sm:pl-6">
      <div className="sticky top-0 z-10 pt-4 sm:pt-6">
        <FadeIn direction="down">
          <ResumeHeader />
        </FadeIn>
      </div>
      <div className="flex flex-col justify-between gap-10 sm:flex-row">
        <div className="mt-10 flex flex-col items-start gap-3">
          <h1 className="text-3xl">{typedName}</h1>
          <FadeIn direction="down" delay={1.6}>
            <div className="flex flex-col gap-8">
              <span className="w-fit bg-foreground p-1 text-sm font-bold text-background">
                web & mobile developer
                <span className="animate-caret-blink">_</span>
              </span>
              <p>
                Computer Engineering graduate focused on modern web and mobile
                development. Leveraging Next.js and Flutter to build
                high-performance digital products from the ground up.
              </p>
              <div className="flex flex-row gap-3">
                <Button variant={"default"}>Contact Me</Button>
                <Button variant={"outline"}>My Work</Button>
              </div>
            </div>
          </FadeIn>
        </div>
        <FadeIn direction="left" delay={1.0}>
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
        </FadeIn>
      </div>
      <FadeIn direction="up" delay={1.8}>
        <Separator className="my-4" />
      </FadeIn>

      <section>
        <SkillsAccordion />
      </section>
    </div>
  )
}
