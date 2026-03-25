"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ANALYTICS_CONSENT_OPEN_EVENT,
  ANALYTICS_CONSENT_STORAGE_KEY,
  defaultConsentMode,
  deniedConsentMode,
  grantedConsentMode,
  normalizeAnalyticsConsent,
} from "@/lib/analytics"

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()

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
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[70] px-4 sm:px-6">
      <div className="glass-panel-strong pointer-events-auto mx-auto max-w-4xl rounded-[30px] border border-white/15 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Privacy & Cookies</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-balance">
              Allow privacy-first visitor analytics?
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              This portfolio can use Google Analytics to understand visits and key actions such as resume downloads,
              project clicks, and contact actions. Analytics stays off until you choose, and ad-related data stays
              denied.
            </p>
            <div className="mt-4">
              <Link
                href="/privacy"
                className="text-sm font-medium text-primary underline-offset-4 transition hover:underline"
              >
                Read the privacy & cookies notice
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              className="glass-panel h-11 rounded-full border-white/15 bg-transparent px-5"
              onClick={() => updateConsent("denied")}
            >
              Decline
            </Button>
            <Button type="button" className="h-11 rounded-full px-5" onClick={() => updateConsent("granted")}>
              Accept Analytics
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null
}
