import { Compass, Layers3, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { portfolioData } from "@/lib/portfolio-data"

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-space px-4 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel-strong motion-card rounded-[32px] p-6 sm:p-8">
          <SectionHeading
            eyebrow="About"
            titleId="about-title"
            title="Product-minded engineering with strong visual taste."
            description="I combine frontend craft, backend practicality, and disciplined delivery to create products that feel modern, useful, and ready for real users."
          />

          <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
            {portfolioData.introduction.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="glass-panel motion-card rounded-[32px] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-primary/10 p-3">
                <Layers3 className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">How I Work</h3>
                <p className="text-sm text-muted-foreground">Design clarity, stable engineering, and release discipline.</p>
              </div>
            </div>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
              {portfolioData.principles.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel motion-card rounded-[32px] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-primary/10 p-3">
                <Compass className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">Sector Fluency</h3>
                <p className="text-sm text-muted-foreground">Built for teams solving operational problems, not just demos.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {portfolioData.sectors.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-black/10 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Sparkles className="size-4 text-primary" />
                What teams usually rely on me for
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["UI systems", "API coordination", "Refactoring", "Cross-functional delivery", "Code review"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
