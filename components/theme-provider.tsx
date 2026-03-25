"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes"

const ACCENT_STORAGE_KEY = "asheri-accent-theme"

export const accentThemes = [
  {
    value: "aqua",
    label: "Aqua",
    description: "Cool glass with teal-cyan energy.",
    gradient: "linear-gradient(135deg, #67e8f9 0%, #0ea5e9 45%, #1d4ed8 100%)",
  },
  {
    value: "ruby",
    label: "Ruby",
    description: "Bold red accents with editorial contrast.",
    gradient: "linear-gradient(135deg, #fb7185 0%, #ef4444 48%, #7f1d1d 100%)",
  },
  {
    value: "emerald",
    label: "Emerald",
    description: "Clean green tones for product calm.",
    gradient: "linear-gradient(135deg, #6ee7b7 0%, #22c55e 50%, #065f46 100%)",
  },
  {
    value: "cobalt",
    label: "Cobalt",
    description: "Deep blue with crisp dark-mode contrast.",
    gradient: "linear-gradient(135deg, #93c5fd 0%, #2563eb 48%, #1e3a8a 100%)",
  },
  {
    value: "amber",
    label: "Amber",
    description: "Golden warmth for brighter light themes.",
    gradient: "linear-gradient(135deg, #fcd34d 0%, #f59e0b 50%, #92400e 100%)",
  },
  {
    value: "rose",
    label: "Rose",
    description: "Soft rose glass with polished glow.",
    gradient: "linear-gradient(135deg, #f9a8d4 0%, #ec4899 48%, #831843 100%)",
  },
] as const

type AccentTheme = (typeof accentThemes)[number]["value"]

type AccentThemeContextValue = {
  accentTheme: AccentTheme
  setAccentTheme: (accentTheme: AccentTheme) => void
}

const AccentThemeContext = React.createContext<AccentThemeContextValue | null>(null)

function isAccentTheme(value: string): value is AccentTheme {
  return accentThemes.some((theme) => theme.value === value)
}

function AccentThemeProvider({ children }: { children: React.ReactNode }) {
  const [accentTheme, setAccentThemeState] = React.useState<AccentTheme>("aqua")

  React.useEffect(() => {
    const savedTheme = window.localStorage.getItem(ACCENT_STORAGE_KEY)

    if (savedTheme && isAccentTheme(savedTheme)) {
      setAccentThemeState(savedTheme)
    }
  }, [])

  React.useEffect(() => {
    document.documentElement.setAttribute("data-accent", accentTheme)
    window.localStorage.setItem(ACCENT_STORAGE_KEY, accentTheme)
  }, [accentTheme])

  const value = React.useMemo(
    () => ({
      accentTheme,
      setAccentTheme: setAccentThemeState,
    }),
    [accentTheme],
  )

  return <AccentThemeContext.Provider value={value}>{children}</AccentThemeContext.Provider>
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <AccentThemeProvider>{children}</AccentThemeProvider>
    </NextThemesProvider>
  )
}

export function useAccentTheme() {
  const context = React.useContext(AccentThemeContext)

  if (!context) {
    throw new Error("useAccentTheme must be used within ThemeProvider")
  }

  return context
}

export const useTheme = useNextTheme
