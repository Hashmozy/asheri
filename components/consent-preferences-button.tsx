"use client"

import type { ButtonHTMLAttributes, MouseEvent } from "react"
import { ANALYTICS_CONSENT_OPEN_EVENT } from "@/lib/analytics"

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()

type ConsentPreferencesButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function ConsentPreferencesButton({
  children,
  onClick,
  type = "button",
  ...props
}: ConsentPreferencesButtonProps) {
  if (!measurementId) {
    return null
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event)

    if (event.defaultPrevented) {
      return
    }

    window.dispatchEvent(new Event(ANALYTICS_CONSENT_OPEN_EVENT))
  }

  return (
    <button type={type} onClick={handleClick} {...props}>
      {children}
    </button>
  )
}
