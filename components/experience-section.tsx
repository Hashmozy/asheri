"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
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

  const experiences = [
    {
      title: "FullStack Developer",
      company: "Farmsell (TalenTech)",
      period: "May 2024 - Present",
      location: "Kampala, Uganda",
      achievements: [
        "Developed Farmsell mobile application using Expo React Native and Laravel, streamlining B2B market for farmers in East Africa",
        "Led development of TalenTech company website using Supabase and Zeptomail, deployed in 1 month",
        "Built Farmsell marketing website with blog and project portfolios, deployed in 3 months",
        "Developed Netlife healthcare app with Supabase, Zeptomail, and Twilio WhatsApp integration, deployed in 2 months",
        "Currently maintaining and updating the Farmsell mobile app",
        "Collaborate in team to deliver comprehensive solutions with positive feedback",
      ],
      technologies: ["React Native", "Expo", "Laravel", "Supabase", "Zeptomail", "Twilio"],
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 mb-12`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground text-lg">
              Building impactful solutions across mobile and web platforms
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"} transition-all duration-700 border-border hover:border-primary/50 transition-colors`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                      <CardDescription className="text-lg text-primary">{exp.company}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
