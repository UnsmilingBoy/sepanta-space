import type { ElementType, ReactNode } from "react"
import { FadeIn } from "@/components/ui/fade-int"
import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  icon: ElementType
  title: string
  children: ReactNode
  delay?: number
  className?: string
}

export function Section({
  id,
  icon: Icon,
  title,
  children,
  className,
  delay = 0,
}: SectionProps) {
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
