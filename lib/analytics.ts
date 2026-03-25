export const analyticsEvents = {
  emailClick: "email_click",
  phoneCallClick: "phone_call_click",
  projectLinkClick: "project_link_click",
  resumeDownload: "resume_download",
  whatsappClick: "whatsapp_click",
} as const

const fallbackMeasurementId = "G-5LFESDLPJ1"

export const analyticsMeasurementId = (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || fallbackMeasurementId).trim()
export const ANALYTICS_CONSENT_STORAGE_KEY = "asheri-analytics-consent"
export const ANALYTICS_CONSENT_OPEN_EVENT = "asheri-analytics:open-preferences"
export const ANALYTICS_CONSENT_WAIT_FOR_UPDATE_MS = 500

export type AnalyticsEventName = (typeof analyticsEvents)[keyof typeof analyticsEvents]
export type AnalyticsConsentChoice = "granted" | "denied"
export type AnalyticsConsentState = AnalyticsConsentChoice | "unknown"

export function normalizeAnalyticsConsent(value: string | null): AnalyticsConsentState {
  if (value === "granted" || value === "denied") {
    return value
  }

  return "unknown"
}

export const deniedConsentMode = {
  ad_personalization: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  analytics_storage: "denied",
} as const

export const defaultConsentMode = {
  ...deniedConsentMode,
  wait_for_update: ANALYTICS_CONSENT_WAIT_FOR_UPDATE_MS,
} as const

export const grantedConsentMode = {
  ...deniedConsentMode,
  analytics_storage: "granted",
} as const
