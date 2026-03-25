"use client"

import Link from "next/link"
import { Download, Github, Linkedin, Mail, MessageCircle, MoonStar, Palette, Phone, Sparkles, SunMedium } from "lucide-react"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { accentThemes, useAccentTheme, useTheme } from "@/components/theme-provider"
import { analyticsEvents } from "@/lib/analytics"
import { portfolioData, sectionLinks } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const modeOptions = [
  {
    value: "light",
    label: "Light",
    icon: SunMedium,
  },
  {
    value: "dark",
    label: "Dark",
    icon: MoonStar,
  },
  {
    value: "system",
    label: "System",
    icon: Sparkles,
  },
] as const

export function PortfolioDrawer() {
  const { theme, setTheme } = useTheme()
  const { accentTheme, setAccentTheme } = useAccentTheme()

  return (
    <Drawer direction="right" shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="glass-panel motion-button h-10 rounded-full border-white/15 px-3.5 text-sm font-medium shadow-[0_14px_38px_rgba(0,0,0,0.12)] sm:h-11 sm:px-4.5"
        >
          <Palette className="size-4" />
          <span className="hidden sm:inline">Control Center</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="border-white/10 bg-background/70 backdrop-blur-3xl data-[vaul-drawer-direction=right]:w-[min(100vw,28rem)] sm:data-[vaul-drawer-direction=right]:max-w-[28rem]">
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-6">
          <div className="border-b border-white/10 py-6">
            <DrawerTitle className="text-2xl tracking-[-0.03em]">{portfolioData.name}</DrawerTitle>
            <DrawerDescription className="mt-2 max-w-sm leading-6">
              Feature-rich controls for light and dark mode, accent themes, navigation, and quick actions.
            </DrawerDescription>
          </div>

          <div className="space-y-4 py-6">
            <div className="glass-panel rounded-[26px] p-4">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Quick Jump</p>
              <div className="grid gap-2">
                {sectionLinks.map((link) => (
                  <DrawerClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-foreground/90 transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-muted-foreground">Go</span>
                    </a>
                  </DrawerClose>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[26px] p-4">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Mode</p>
              <div className="grid grid-cols-3 gap-2">
                {modeOptions.map((option) => {
                  const Icon = option.icon
                  const active = theme === option.value

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setTheme(option.value)}
                      className={cn(
                        "rounded-2xl border px-3 py-3 text-sm transition",
                        active
                          ? "border-primary/40 bg-primary/15 text-primary shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                          : "border-white/10 bg-white/5 text-muted-foreground hover:border-primary/20 hover:bg-white/10 hover:text-foreground",
                      )}
                    >
                      <Icon className="mx-auto mb-2 size-4" />
                      <span>{option.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="glass-panel rounded-[26px] p-4">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Accent Themes</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {accentThemes.map((item) => {
                  const active = accentTheme === item.value

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setAccentTheme(item.value)}
                      className={cn(
                        "rounded-[22px] border p-3 text-left transition",
                        active
                          ? "border-primary/50 bg-primary/10 shadow-[0_18px_42px_rgba(0,0,0,0.12)]"
                          : "border-white/10 bg-white/5 hover:border-primary/25 hover:bg-white/10",
                      )}
                    >
                      <span
                        className="mb-3 block h-12 rounded-2xl border border-white/15"
                        style={{ backgroundImage: item.gradient }}
                      />
                      <span className="block text-sm font-semibold">{item.label}</span>
                      <span className="mt-1 block text-xs leading-5 text-muted-foreground">{item.description}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="glass-panel rounded-[26px] p-4">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Quick Actions</p>
              <div className="grid gap-2">
                <a
                  href={`mailto:${portfolioData.email}`}
                  data-analytics-event={analyticsEvents.emailClick}
                  data-analytics-label="drawer_email"
                  data-analytics-location="drawer"
                  data-analytics-title="Email"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-primary/30 hover:bg-primary/10"
                >
                  <Mail className="size-4 text-primary" />
                  <span>{portfolioData.email}</span>
                </a>
                <a
                  href={portfolioData.callHref}
                  data-analytics-event={analyticsEvents.phoneCallClick}
                  data-analytics-label="drawer_call"
                  data-analytics-location="drawer"
                  data-analytics-title="Call"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-primary/30 hover:bg-primary/10"
                >
                  <Phone className="size-4 text-primary" />
                  <span>Call: {portfolioData.phone}</span>
                </a>
                <a
                  href={portfolioData.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  data-analytics-event={analyticsEvents.whatsappClick}
                  data-analytics-label="drawer_whatsapp"
                  data-analytics-location="drawer"
                  data-analytics-title="WhatsApp"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-primary/30 hover:bg-primary/10"
                >
                  <MessageCircle className="size-4 text-primary" />
                  <span>WhatsApp: {portfolioData.phone}</span>
                </a>
                <a
                  href={portfolioData.socials[2].href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-primary/30 hover:bg-primary/10"
                >
                  <Linkedin className="size-4 text-primary" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={portfolioData.socials[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-primary/30 hover:bg-primary/10"
                >
                  <Github className="size-4 text-primary" />
                  <span>GitHub</span>
                </a>
              </div>
              <Button asChild className="mt-4 h-11 w-full rounded-full">
                <Link
                  href={portfolioData.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  prefetch={false}
                  data-analytics-event={analyticsEvents.resumeDownload}
                  data-analytics-label="drawer_resume"
                  data-analytics-location="drawer"
                  data-analytics-title="Download Resume"
                >
                  <Download className="size-4" />
                  Download Resume
                </Link>
              </Button>
              <div className="mt-4 grid gap-2">
                <DrawerClose asChild>
                  <Link
                    href="/privacy"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-foreground/90 transition hover:border-primary/30 hover:bg-primary/10"
                  >
                    <span>Privacy & Cookies</span>
                    <span className="text-xs text-muted-foreground">Open</span>
                  </Link>
                </DrawerClose>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
