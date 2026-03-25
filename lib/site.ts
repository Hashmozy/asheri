import { portfolioData } from "@/lib/portfolio-data"

const fallbackSiteUrl = "https://hashmozy.github.io/asheri"

export const siteConfig = {
  name: portfolioData.name,
  title: "Asheri Musa | Full-Stack Software Engineer",
  description:
    "Portfolio of Asheri Musa, a full-stack software engineer building polished mobile apps, modern websites, and production-ready digital products.",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, ""),
  locale: "en_US",
  keywords: [
    "Asheri Musa",
    "Full-Stack Software Engineer",
    "React Native developer",
    "Expo developer",
    "Next.js developer",
    "Bun developer",
    "Laravel developer",
    "Uganda software engineer",
    "Kampala developer",
    "mobile app developer",
    "portfolio website",
  ],
} as const

export function absoluteUrl(path = "") {
  if (!path) {
    return siteConfig.siteUrl
  }

  if (/^https?:\/\//.test(path)) {
    return path
  }

  return new URL(path.replace(/^\//, ""), `${siteConfig.siteUrl}/`).toString()
}
