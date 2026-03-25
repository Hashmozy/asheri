import Link from "next/link"
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { analyticsEvents } from "@/lib/analytics"
import { portfolioData } from "@/lib/portfolio-data"

export function HeroSection() {
  const socialLinks = [
    {
      label: "GitHub",
      href: portfolioData.socials[0].href,
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: portfolioData.socials[2].href,
      icon: Linkedin,
    },
    {
      label: "Email",
      href: `mailto:${portfolioData.email}`,
      icon: Mail,
      analyticsEvent: analyticsEvents.emailClick,
      analyticsLocation: "hero-card",
    },
    {
      label: "Call",
      href: portfolioData.callHref,
      icon: Phone,
      analyticsEvent: analyticsEvents.phoneCallClick,
      analyticsLocation: "hero-card",
    },
  ]

  return (
    <header aria-labelledby="hero-title" aria-describedby="hero-summary" className="relative px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="glass-panel motion-pill inline-flex w-full animate-reveal justify-center rounded-full px-4 py-2 text-center text-sm font-medium text-foreground/80 sm:w-auto sm:justify-start sm:text-left">
            <Sparkles className="mr-2 size-4 text-primary" />
            Building modern mobile, web, and admin products with Bun in the workflow.
          </div>

          <div className="space-y-6 animate-reveal [animation-delay:120ms]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">{portfolioData.role}</p>
            <h1 id="hero-title" className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-5xl md:text-7xl">
              {portfolioData.name}
              <span className="mt-3 block text-gradient">Design-forward product delivery across mobile and web.</span>
            </h1>
            <p id="hero-summary" className="max-w-2xl text-base leading-7 text-muted-foreground text-pretty sm:text-lg sm:leading-8 md:text-xl">
              {portfolioData.summary}
            </p>
          </div>

          <div className="flex flex-col gap-3 animate-reveal sm:flex-row sm:flex-wrap [animation-delay:220ms]">
            <Button asChild size="lg" className="motion-button h-12 w-full rounded-full px-6 text-sm sm:w-auto">
              <a href="#contact">
                Start a Conversation
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass-panel motion-button h-12 w-full rounded-full border-white/15 bg-transparent px-6 text-sm sm:w-auto"
            >
              <Link
                href={portfolioData.resumeHref}
                target="_blank"
                rel="noreferrer"
                prefetch={false}
                data-analytics-event={analyticsEvents.resumeDownload}
                data-analytics-label="hero_resume"
                data-analytics-location="hero"
                data-analytics-title="Download Resume"
              >
                <Download className="size-4" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 animate-reveal [animation-delay:320ms]">
            {portfolioData.heroHighlights.map((item) => (
              <span
                key={item}
                className="motion-pill rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="grid gap-3 text-sm text-muted-foreground animate-reveal sm:flex sm:flex-wrap sm:gap-6 [animation-delay:420ms]">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              {portfolioData.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="size-4 text-primary" />
              {portfolioData.email}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="size-4 text-primary" />
              {portfolioData.phone}
            </span>
          </div>
        </div>

        <div className="relative animate-reveal [animation-delay:180ms]">
          <div className="glass-panel-strong motion-card relative overflow-hidden rounded-[28px] p-5 sm:rounded-[32px] sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Currently leading</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl md:text-4xl">
                  Shipping product systems at Tallen Tech
                </h2>
              </div>
              <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Open to select collaborations
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-semibold text-foreground">Current Focus</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                  {portfolioData.currentFocus.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-semibold text-foreground">Sector Coverage</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {portfolioData.sectors.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm font-semibold text-foreground">Shipping Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["React Native", "Expo", "Next.js", "Bun", "GraphQL", "Laravel"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {portfolioData.stats.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-white/10 bg-black/10 p-4">
                  <p className="text-3xl font-semibold tracking-[-0.05em] text-foreground">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel absolute -bottom-6 -left-2 hidden w-56 animate-float-slow rounded-[28px] p-4 xl:block">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">Contact Layer</p>
            <div className="mt-4 grid gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    data-analytics-event={link.analyticsEvent}
                    data-analytics-label={link.label}
                    data-analytics-location={link.analyticsLocation}
                    data-analytics-title={link.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm transition hover:border-primary/30 hover:bg-primary/10"
                  >
                    <Icon className="size-4 text-primary" />
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="glass-panel absolute -right-4 -top-8 hidden w-52 animate-float-medium rounded-[28px] p-4 lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">Workflow</p>
            <p className="mt-3 text-lg font-semibold tracking-[-0.03em]">Bun-first tooling with release discipline.</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Fast local iteration, consistent UI patterns, and practical shipping decisions across the stack.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
