import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Cookie, LineChart, Settings2, ShieldCheck } from "lucide-react"
import { ConsentPreferencesButton } from "@/components/consent-preferences-button"
import { absoluteUrl, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy & Cookies",
  description: "How this portfolio handles analytics consent, cookies, and visitor tracking.",
  alternates: {
    canonical: absoluteUrl("/privacy"),
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
}

const privacyHighlights = [
  {
    title: "What gets measured",
    description:
      "Only lightweight portfolio analytics: page visits, resume downloads, key project clicks, and contact actions such as email, phone, and WhatsApp.",
    icon: LineChart,
  },
  {
    title: "How consent works",
    description:
      "Google Analytics is configured with analytics storage denied by default. Nothing analytics-related is enabled until you accept from the consent prompt.",
    icon: ShieldCheck,
  },
  {
    title: "How your choice is remembered",
    description:
      "Your preference is stored in the browser so the site can remember whether analytics should stay enabled or disabled on later visits.",
    icon: Cookie,
  },
  {
    title: "How to change it later",
    description:
      "You can reopen cookie preferences from the portfolio footer or from this page at any time and switch between accepting and declining analytics.",
    icon: Settings2,
  },
] as const

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      <div className="page-grid pointer-events-none fixed inset-0 opacity-50" />
      <div className="relative z-10 mx-auto max-w-5xl space-y-8">
        <Link
          href="/"
          className="glass-panel motion-button inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-foreground/90"
        >
          <ArrowLeft className="size-4" />
          Back to portfolio
        </Link>

        <section className="glass-panel-strong motion-card rounded-[34px] p-6 sm:p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">Privacy Notice</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-balance sm:text-5xl">
            Cookies and analytics are optional on this portfolio.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            {siteConfig.name} uses a consent-based Google Analytics setup to understand visits and important calls to
            action. Analytics remains disabled until you accept, and you can change that choice later.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ConsentPreferencesButton className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
              Review cookie choices
            </ConsentPreferencesButton>
            <a
              href="https://support.google.com/analytics/answer/6004245"
              target="_blank"
              rel="noreferrer"
              className="glass-panel inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-medium text-foreground/90"
            >
              Google Analytics privacy info
            </a>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {privacyHighlights.map((item) => {
            const Icon = item.icon

            return (
              <article key={item.title} className="glass-panel motion-card rounded-[30px] p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-white/10 bg-primary/10 p-3">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold tracking-[-0.03em]">{item.title}</h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">{item.description}</p>
              </article>
            )
          })}
        </section>

        <section className="glass-panel motion-card rounded-[34px] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.04em]">Practical details</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              The site runs as a static GitHub Pages deployment. Analytics is limited to anonymous traffic insights and
              engagement signals so the portfolio can be improved without using a paid analytics stack.
            </p>
            <p>
              Consent is specific to analytics. Advertising-related storage and personalization remain denied, and this
              portfolio does not use Google Tag Manager or paid ad tooling.
            </p>
            <p>
              If you decline analytics, the site still works normally. Theme switching, drawer controls, navigation,
              resume download links, and contact links remain available.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
