import { BriefcaseBusiness, CalendarRange, MapPin } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { portfolioData } from "@/lib/portfolio-data"

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-space px-4 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading
          eyebrow="Experience"
          titleId="experience-title"
          title="Leading delivery, not just contributing code."
          description="My current role combines hands-on implementation with architecture decisions, code review, product execution, and team direction."
        />

        <div className="space-y-6">
          {portfolioData.experience.map((experience) => (
            <article key={experience.company} className="glass-panel-strong rounded-[34px] p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 text-sm font-medium text-primary">
                    <BriefcaseBusiness className="size-4" />
                    Current role
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-balance">{experience.title}</h3>
                  <p className="mt-2 text-lg text-primary">{experience.company}</p>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{experience.summary}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 text-sm text-muted-foreground">
                    <span className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                      <CalendarRange className="size-4 text-primary" />
                      Timeline
                    </span>
                    {experience.period}
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 text-sm text-muted-foreground">
                    <span className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                      <MapPin className="size-4 text-primary" />
                      Location
                    </span>
                    {experience.location}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[28px] border border-white/10 bg-black/10 p-5">
                  <p className="text-sm font-semibold text-foreground">Selected Responsibilities</p>
                  <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-2 size-1.5 rounded-full bg-primary" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-6">
                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-semibold text-foreground">Delivery Outcomes</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.outcomes.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-semibold text-foreground">Core Stack</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
