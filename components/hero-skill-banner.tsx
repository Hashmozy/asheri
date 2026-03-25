"use client";

import { Flame } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { portfolioData } from "@/lib/portfolio-data";

const TYPE_SPEED_MS = 34;
const DELETE_SPEED_MS = 22;
const HOLD_MS = 1550;
const NEXT_STATEMENT_DELAY_MS = 180;

function HeroFlameIcon() {
  return (
    <span className="relative mt-0.5 inline-flex size-5 shrink-0 items-center justify-center">
      <span
        aria-hidden="true"
        className="absolute inset-[-3px] rounded-full border border-primary/20"
      />
      <span
        aria-hidden="true"
        className="absolute inset-[-7px] rounded-full border border-primary/10"
      />
      <Flame className="size-4 text-primary" />
    </span>
  );
}

export function HeroSkillBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const skillWords = portfolioData.heroSkillWords;
  const currentWord = skillWords[activeIndex];
  const longestWord = useMemo(
    () =>
      skillWords.reduce(
        (longest, word) => (word.length > longest.length ? word : longest),
        skillWords[0] ?? "",
      ),
    [skillWords],
  );
  const accentTextClass =
    "text-[color-mix(in_oklab,var(--foreground)_54%,var(--primary)_46%)]";

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(skillWords[0] ?? "");
      setIsDeleting(false);
      setActiveIndex(0);
      return;
    }

    let timeoutId: ReturnType<typeof globalThis.setTimeout>;

    if (!isDeleting && displayText === currentWord) {
      timeoutId = globalThis.setTimeout(() => setIsDeleting(true), HOLD_MS);
      return () => globalThis.clearTimeout(timeoutId);
    }

    if (isDeleting && displayText.length === 0) {
      timeoutId = globalThis.setTimeout(() => {
        setIsDeleting(false);
        setActiveIndex(
          (currentIndex) => (currentIndex + 1) % skillWords.length,
        );
      }, NEXT_STATEMENT_DELAY_MS);
      return () => globalThis.clearTimeout(timeoutId);
    }

    timeoutId = globalThis.setTimeout(
      () => {
        setDisplayText((currentText) =>
          isDeleting
            ? currentWord.slice(0, Math.max(currentText.length - 1, 0))
            : currentWord.slice(0, currentText.length + 1),
        );
      },
      isDeleting ? DELETE_SPEED_MS : TYPE_SPEED_MS,
    );

    return () => globalThis.clearTimeout(timeoutId);
  }, [currentWord, displayText, isDeleting, prefersReducedMotion, skillWords]);

  return (
    <div className="animate-reveal">
      <div className="relative max-w-2xl">
        <p className="invisible flex items-start gap-3 text-sm font-medium leading-6 text-foreground/78 sm:text-base sm:leading-7">
          <HeroFlameIcon />
          <span>
            Building modern{" "}
            <span className={accentTextClass}>
              {longestWord}
            </span>
          </span>
        </p>
        <p className="absolute inset-0 flex items-start gap-3 text-sm font-medium leading-6 text-foreground/78 sm:text-base sm:leading-7">
          <HeroFlameIcon />
          <span className="text-left text-pretty">
            <span>Building modern </span>
            <span className={accentTextClass}>
              {displayText}
            </span>
            {prefersReducedMotion ? null : (
              <span
                aria-hidden="true"
                className="ml-1 inline-block h-[1em] w-px animate-[cursor-blink_1s_step-end_infinite] align-[-0.12em] bg-primary/80"
              />
            )}
          </span>
        </p>
      </div>
    </div>
  );
}
