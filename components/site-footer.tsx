"use client"

import { SiteSetting } from "@/payload-types"
import { ArrowUp, Mail, Phone, FileText } from "lucide-react"

const index = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
]

export default function Footer({ sitesetting }: { sitesetting: SiteSetting }) {
  const elsewhere = [
    { label: "Email", href: sitesetting.email || "", icon: Mail },
    { label: "Phone", href: sitesetting.phone || "", icon: Phone },
    {
      label: "LinkedIn",
      href: sitesetting.linkedin || "",
      icon: Mail,
    },
    { label: "GitHub", href: sitesetting.github || "", icon: Mail },
    { label: "Resume", href: "/resume", icon: FileText },
  ]

  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="mt-12 border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6">
        {/* Index / Elsewhere / Colophon */}
        <div className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-3">
          <nav aria-label="Section index">
            <h3 className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Index
            </h3>
            <ul className="space-y-2.5">
              {index.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Elsewhere">
            <h3 className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Elsewhere
            </h3>
            <ul className="space-y-2.5">
              {elsewhere.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="inline-flex items-center gap-2 underline decoration-transparent underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    <item.icon
                      className="h-3.5 w-3.5 text-muted-foreground"
                      aria-hidden
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Colophon
            </h3>
            <p className="max-w-[28ch] text-sm leading-relaxed text-muted-foreground">
              Set in a serif / sans pairing, built with Next.js, Tailwind CSS
              and shadcn/ui — Sera style.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-start gap-4 border-t border-border py-6 text-xs tracking-widest text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Sepanta. All rights reserved.</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-none underline decoration-transparent underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
          >
            Back to top
            <ArrowUp className="h-3 w-3" aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  )
}
