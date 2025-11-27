"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, Smartphone, Server, Cloud, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Expo", "Mobile UI/UX", "Cross-platform Development"],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Laravel", "PHP", "REST APIs", "Node.js", "Shell Programming"],
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: ["SQL", "Supabase", "Database Design", "PostgreSQL", "MySQL"],
    },
    {
      title: "Tools & Services",
      icon: Wrench,
      skills: ["Git", "Zeptomail", "Twilio", "Cisco Packet Tracer", "Virtual Machines"],
    },
    {
      title: "Data Science",
      icon: Cloud,
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Machine Learning"],
    },
  ]

  const softSkills = [
    "Teamwork",
    "Problem Solving",
    "Project Planning",
    "Technical Support",
    "Quick Learning",
    "Adaptability",
    "Leadership",
    "Communication",
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 mb-12`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
            <p className="text-muted-foreground text-lg">Technical expertise and professional capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={index}
                  className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 border-border hover:border-primary/50 transition-colors`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 delay-700 border-border`}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Soft Skills & Strengths</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-base py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
