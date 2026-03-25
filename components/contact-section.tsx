import Link from "next/link"
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { ConsentPreferencesButton } from "@/components/consent-preferences-button"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { analyticsEvents } from "@/lib/analytics"
import { portfolioData } from "@/lib/portfolio-data"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
      analyticsEvent: analyticsEvents.emailClick,
    },
    {
      icon: Phone,
      label: "Call",
      value: portfolioData.phone,
      href: portfolioData.callHref,
      analyticsEvent: analyticsEvents.phoneCallClick,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: portfolioData.phone,
      href: portfolioData.whatsappHref,
      analyticsEvent: analyticsEvents.whatsappClick,
    },
    {
      icon: MapPin,
      label: "Location",
      value: portfolioData.location,
      href: null,
      analyticsEvent: undefined,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: portfolioData.socials[0].label,
      href: portfolioData.socials[0].href,
    },
    {
      icon: Github,
      label: portfolioData.socials[1].label,
      href: portfolioData.socials[1].href,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: portfolioData.socials[2].href,
    },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-space px-4 pb-16 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="glass-panel-strong motion-card rounded-[34px] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Contact"
                titleId="contact-title"
                title="Need a polished product presence or a stronger app experience?"
                description="I’m open to product work, engineering leadership, and focused collaborations where execution quality matters."
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="h-12 w-full rounded-full px-6 sm:w-auto">
                  <a
                    href={`mailto:${portfolioData.email}`}
                    data-analytics-event={analyticsEvents.emailClick}
                    data-analytics-label="contact_email_cta"
                    data-analytics-location="contact"
                    data-analytics-title="Email Me"
                  >
                    Email Me
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="glass-panel h-12 w-full rounded-full border-white/15 bg-transparent px-6 sm:w-auto"
                >
                  <Link
                    href={portfolioData.resumeHref}
                    target="_blank"
                    rel="noreferrer"
                    prefetch={false}
                    data-analytics-event={analyticsEvents.resumeDownload}
                    data-analytics-label="contact_resume"
                    data-analytics-location="contact"
                    data-analytics-title="Resume"
                  >
                    <Download className="size-4" />
                    Resume
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info) => {
                const Icon = info.icon

                return (
                  <article key={info.label} className="motion-card rounded-[28px] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-white/10 bg-primary/10 p-3">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noreferrer" : undefined}
                            data-analytics-event={info.analyticsEvent}
                            data-analytics-label={info.label}
                            data-analytics-location="contact-card"
                            data-analytics-title={info.label}
                            className="mt-1 block text-sm text-muted-foreground transition hover:text-primary"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="mt-1 block text-sm text-muted-foreground">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        <div className="glass-panel motion-card rounded-[34px] p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Socials</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Connect where you already work.</h3>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <Button
                    key={link.label}
                    asChild
                    variant="outline"
                    className="glass-panel motion-button h-11 w-full rounded-full border-white/15 bg-transparent px-5 sm:w-auto"
                  >
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <Icon className="size-4" />
                      {link.label}
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              © {currentYear} {portfolioData.name}. Built with a modern web stack and a dual theme system for light,
              dark, and six accent palettes.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy" className="font-medium text-foreground/85 transition hover:text-primary">
                Privacy & Cookies
              </Link>
              <ConsentPreferencesButton className="font-medium text-foreground/85 transition hover:text-primary">
                Review Cookie Choices
              </ConsentPreferencesButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
