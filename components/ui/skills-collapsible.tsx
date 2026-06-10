import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeIn } from "./fade-int"

const items = [
  {
    value: "frontend",
    trigger: "Frontend Frameworks",
    content:
      "Worked on multiple projects using Next.js, leveraging its server-side rendering and static site generation capabilities to build high-performance web applications. Experienced in utilizing Next.js features such as API routes, dynamic routing, and middleware to create seamless user experiences.",
  },
  {
    value: "backend",
    trigger: "Backend & Database",
    content:
      "Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences. You can also download your data or delete your account.",
  },
  {
    value: "tools",
    trigger: "Tools & DevOps",
    content:
      "View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
  },
]

export function SkillsAccordion() {
  return (
    <FadeIn delay={2}>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl text-muted-foreground">My Skills</h2>
        <Accordion multiple className="w-full" defaultValue={["notifications"]}>
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </FadeIn>
  )
}
