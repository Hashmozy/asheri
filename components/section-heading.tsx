import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  titleId?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, titleId, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">{eyebrow}</p>
      <h2 id={titleId} className="text-3xl leading-tight font-semibold tracking-[-0.04em] text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-muted-foreground text-pretty md:text-lg">{description}</p>
    </div>
  )
}
