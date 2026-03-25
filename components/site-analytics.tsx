"use client"

import Link from "next/link"
import { Flame } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ANALYTICS_CONSENT_OPEN_EVENT,
  ANALYTICS_CONSENT_STORAGE_KEY,
  analyticsMeasurementId,
  defaultConsentMode,
  deniedConsentMode,
  grantedConsentMode,
  normalizeAnalyticsConsent,
} from "@/lib/analytics"

const measurementId = analyticsMeasurementId

declare global {
  interface Window {
    __asheriAnalyticsInitialized?: boolean
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function applyConsentUpdate(consent: "granted" | "denied") {
  if (!measurementId || typeof window === "undefined" || typeof window.gtag !== "function") {
    return
  }

  window.gtag("consent", "update", consent === "granted" ? grantedConsentMode : deniedConsentMode)
}

function ensureAnalytics(initialConsent: "granted" | "denied" | "unknown") {
  if (!measurementId || typeof window === "undefined") {
    return
  }

  window.dataLayer = window.dataLayer || []

  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
  }

  if (!window.__asheriAnalyticsInitialized) {
    window.gtag("consent", "default", defaultConsentMode)
    window.gtag("set", "ads_data_redaction", true)
    window.gtag("js", new Date())
    window.gtag("config", measurementId, {
      anonymize_ip: true,
      send_page_view: false,
      transport_type: "beacon",
    })
    window.__asheriAnalyticsInitialized = true
  }

  if (initialConsent !== "unknown") {
    applyConsentUpdate(initialConsent)
  }

  const existingScript = document.getElementById("google-analytics-tag")

  if (!existingScript) {
    const script = document.createElement("script")
    script.id = "google-analytics-tag"
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)
  }
}

function trackEvent(name: string, parameters: Record<string, string | undefined>) {
  if (!measurementId || typeof window === "undefined" || typeof window.gtag !== "function") {
    return
  }

  const filteredParameters = Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => typeof value === "string" && value.length > 0),
  )

  window.gtag("event", name, filteredParameters)
}

export function SiteAnalytics() {
  const pathname = usePathname()
  const [consent, setConsent] = useState<"granted" | "denied" | "unknown">("unknown")
  const [isBannerOpen, setIsBannerOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)
  const lastTrackedPathRef = useRef<string | null>(null)

  useEffect(() => {
    if (!measurementId) {
      return
    }

    const storedConsent = normalizeAnalyticsConsent(window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY))
    ensureAnalytics(storedConsent)
    setConsent(storedConsent)
    setIsBannerOpen(storedConsent === "unknown")
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!measurementId) {
      return
    }

    const openPreferences = () => {
      setIsBannerOpen(true)
    }

    window.addEventListener(ANALYTICS_CONSENT_OPEN_EVENT, openPreferences)
    return () => window.removeEventListener(ANALYTICS_CONSENT_OPEN_EVENT, openPreferences)
  }, [])

  useEffect(() => {
    if (!measurementId || !isHydrated || consent !== "granted") {
      return
    }

    const pagePath = `${window.location.pathname}${window.location.search}`

    if (lastTrackedPathRef.current === pagePath) {
      return
    }

    trackEvent("page_view", {
      page_location: window.location.href,
      page_path: pagePath,
      page_title: document.title,
    })
    lastTrackedPathRef.current = pagePath
  }, [consent, isHydrated, pathname])

  useEffect(() => {
    if (!measurementId) {
      return
    }

    const handleClick = (event: MouseEvent) => {
      if (consent !== "granted") {
        return
      }

      const target = event.target as HTMLElement | null
      const trackingTarget = target?.closest<HTMLElement>("[data-analytics-event]")

      if (!trackingTarget) {
        return
      }

      const eventName = trackingTarget.dataset.analyticsEvent

      if (!eventName) {
        return
      }

      const anchor = trackingTarget.closest("a")

      trackEvent(eventName, {
        destination: anchor?.href || trackingTarget.dataset.analyticsDestination,
        item_name: trackingTarget.dataset.analyticsTitle || trackingTarget.textContent?.trim(),
        link_text: trackingTarget.dataset.analyticsLabel || trackingTarget.textContent?.trim(),
        placement: trackingTarget.dataset.analyticsLocation,
      })
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [consent])

  if (!measurementId) {
    return null
  }

  const updateConsent = (nextConsent: "granted" | "denied") => {
    applyConsentUpdate(nextConsent)
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, nextConsent)
    setConsent(nextConsent)
    setIsBannerOpen(false)

    if (nextConsent !== "granted") {
      lastTrackedPathRef.current = null
    }
  }

  return isBannerOpen ? (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/28 px-4 py-6 backdrop-blur-[3px] sm:px-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-title"
        aria-describedby="consent-description"
        className="glass-panel-strong relative w-full max-w-[24rem] overflow-hidden rounded-[28px] border border-white/15 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-5"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
              <Flame className="size-4 text-primary" />
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/80">Privacy</p>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Optional
            </span>
          </div>
          <h2 id="consent-title" className="mt-3 text-lg font-semibold tracking-[-0.04em] sm:text-xl">
            Allow lightweight visitor analytics?
          </h2>
          <p id="consent-description" className="mt-2 text-sm leading-6 text-muted-foreground">
            Helps measure visits, resume downloads, and contact clicks. Analytics stays off until you choose.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Button type="button" className="h-10 rounded-full px-4 sm:flex-1" onClick={() => updateConsent("granted")}>
              Accept Analytics
            </Button>
            <Button
              type="button"
              variant="outline"
              className="glass-panel h-10 rounded-full border-white/15 bg-transparent px-4 sm:flex-1"
              onClick={() => updateConsent("denied")}
            >
              Decline
            </Button>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3 text-xs sm:text-sm">
            <span className="text-muted-foreground">You can change this later.</span>
            <Link
              href="/privacy"
              className="font-medium text-primary underline-offset-4 transition hover:underline"
            >
              Privacy & cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null
}
