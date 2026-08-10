export function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex cursor-default items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors select-none hover:bg-primary hover:text-primary-foreground">
      {label}
    </span>
  )
}
