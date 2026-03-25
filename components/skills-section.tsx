import { Code2, Database, Rocket, Server, Smartphone, Users, Wrench } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { portfolioData } from "@/lib/portfolio-data"

export function SkillsSection() {
  const icons = [Code2, Smartphone, Server, Database, Wrench, Users]

  return (
    <section id="skills" aria-labelledby="skills-title" className="section-space px-4 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading
          eyebrow="Skills"
          titleId="skills-title"
          title="A stack built for shipping, scaling, and leading."
          description="My strongest work sits where frontend systems, product design, backend integration, and execution discipline meet."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioData.skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Rocket

            return (
              <article key={group.title} className="glass-panel rounded-[30px] p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-white/10 bg-primary/10 p-3">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">{group.title}</h3>
                    <p className="text-sm text-muted-foreground">Core capability cluster</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="glass-panel-strong rounded-[32px] p-6 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Strengths</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">The difference is in the delivery habits.</h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              Teams usually pull me in when they need a modern interface, practical backend coordination, and someone
              who can keep the work moving without letting quality collapse.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Product thinking",
              "Cross-functional communication",
              "Technical leadership",
              "Clean UI systems",
              "Refactoring discipline",
              "Release readiness",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
