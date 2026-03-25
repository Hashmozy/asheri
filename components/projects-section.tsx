import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { analyticsEvents } from "@/lib/analytics"
import { portfolioData } from "@/lib/portfolio-data"

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-space px-4 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projects"
            titleId="projects-title"
            title="A portfolio shaped by production work."
            description="These are the builds that best represent my range across mobile apps, brand platforms, data science, and exploratory engineering."
          />
          <Button asChild variant="outline" size="lg" className="glass-panel h-12 rounded-full border-white/15 bg-transparent">
            <a
              href={portfolioData.socials[0].href}
              target="_blank"
              rel="noreferrer"
              data-analytics-event={analyticsEvents.projectLinkClick}
              data-analytics-label="github_projects"
              data-analytics-location="projects"
              data-analytics-title="More on GitHub"
            >
              <Github className="size-4" />
              More on GitHub
            </a>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <article
              key={project.title}
              className="glass-panel motion-card group rounded-[30px] p-6 transition duration-300 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {project.status}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] transition group-hover:text-primary">
                    {project.title}
                  </h3>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  {project.sector}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">{project.description}</p>

              <div className="mt-6 rounded-[24px] border border-white/10 bg-black/10 p-4">
                <p className="text-sm font-semibold text-foreground">Project note</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.impact}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                <span>Selected build</span>
                <ArrowUpRight className="size-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
