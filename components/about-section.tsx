"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About</h2>
            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <MapPin className="h-4 w-4" />
              <span>Kampala, Uganda</span>
            </div>
          </div>

          <div
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 delay-200 space-y-6 text-lg leading-relaxed text-muted-foreground`}
          >
            <p>
              I'm a passionate software engineer with expertise in frontend development, mobile applications, and
              full-stack solutions. My journey in technology has been driven by a commitment to creating impactful
              applications that solve real-world problems.
            </p>

            <p>
              Currently working at <span className="text-primary font-semibold">Farmsell (TalenTech)</span>, I
              specialize in building mobile applications using React Native and Expo, with a strong foundation in
              Laravel backend development. I've successfully led multiple projects from conception to deployment,
              including healthcare apps, B2B marketplace platforms, and company websites.
            </p>

            <p>
              My approach combines technical excellence with creative problem-solving. I thrive in collaborative
              environments, quickly adapt to new technologies, and maintain a strong commitment to continuous learning.
              Whether it's developing a facial recognition system with 87% accuracy or building scalable mobile
              applications, I bring dedication and innovation to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
