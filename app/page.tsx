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

export default function Page() {
  const typedName = useTypingAnimation("Sepanta Shafizadeh", 80, 100)

  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="flex w-full max-w-3xl min-w-0 flex-col gap-4 text-sm leading-loose">
        <FadeIn direction="down">
          <ResumeHeader />
        </FadeIn>
        <div className="flex justify-between">
          <div className="mt-10 flex flex-col items-start gap-4">
            <h1 className="text-3xl">{typedName}</h1>
            <FadeIn direction="down" delay={1.6}>
              <span className="bg-foreground p-1 text-sm font-bold text-background">
                web & mobile developer
                <span className="animate-caret-blink">_</span>
              </span>
            </FadeIn>
          </div>
          <Carousel className="w-full sm:max-w-xs">
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  )
}
