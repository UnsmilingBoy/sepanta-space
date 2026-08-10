"use client"

import { FadeIn } from "@/components/ui/fade-int"
import { Button } from "@/components/ui/button"
import { useTypingAnimation } from "@/hooks/useTypingAnimations"

interface HeroSectionProps {
  name: string
  title: string
  about: string
}

export function HeroSection({ name, title, about }: HeroSectionProps) {
  const typedName = useTypingAnimation(name, 80, 100)

  return (
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
              <Button variant="default">Contact Me</Button>
              <Button variant="outline">Projects</Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
