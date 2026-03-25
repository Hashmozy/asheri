import { Award, GraduationCap } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { portfolioData } from "@/lib/portfolio-data"

export function EducationSection() {
  return (
    <section id="education" className="section-space px-4 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-panel-strong rounded-[32px] p-6 sm:p-8">
          <SectionHeading
            eyebrow="Education"
            title="Grounded in software engineering fundamentals."
            description="My academic background gave me the base for architecture, systems thinking, and the machine learning work that later fed into product execution."
          />

          <div className="mt-8 rounded-[28px] border border-white/10 bg-black/10 p-5">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-white/10 bg-primary/10 p-3">
                <GraduationCap className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{portfolioData.education.degree}</h3>
                <p className="mt-2 text-base text-primary">{portfolioData.education.institution}</p>
                <p className="mt-2 text-sm text-muted-foreground">{portfolioData.education.period}</p>
              </div>
            </div>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
              {portfolioData.education.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {portfolioData.education.coursework.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[32px] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-primary/10 p-3">
              <Award className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Credentials</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Certifications & training</h3>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {portfolioData.certifications.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold tracking-[-0.03em]">{item.title}</h4>
                    <p className="mt-1 text-sm text-primary">{item.provider}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
