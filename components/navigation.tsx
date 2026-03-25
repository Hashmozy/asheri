"use client"

import { useState, useEffect } from "react"
import { PortfolioDrawer } from "@/components/portfolio-drawer"
import { ThemeToggle } from "@/components/theme-toggle"
import { portfolioData, sectionLinks } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav aria-label="Primary" className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={cn(
          "animate-nav-enter mx-auto flex min-h-[4.35rem] max-w-7xl items-center justify-between gap-3 rounded-[30px] border px-3.5 py-3 transition-all duration-500 sm:min-h-[4.6rem] sm:rounded-full sm:px-5 sm:py-3.5",
          isScrolled
            ? "glass-panel-strong border-white/15 shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
            : "border-transparent bg-transparent",
        )}
        >
        <a href="#top" className="flex items-center gap-3.5 pl-1">
          <span className="flex size-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
            <span className="text-sm font-semibold tracking-[0.08em] text-primary">{portfolioData.initials}</span>
          </span>
          <div className="hidden min-[430px]:block">
            <p className="text-sm font-semibold tracking-[0.08em] text-foreground">{portfolioData.name}</p>
            <p className="text-xs text-muted-foreground">{portfolioData.role}</p>
          </div>
        </a>

        <div className="hidden xl:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2">
          {sectionLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="motion-pill rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/10 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <ThemeToggle />
          <PortfolioDrawer />
        </div>
      </div>
    </nav>
  )
}
