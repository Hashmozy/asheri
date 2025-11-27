"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Award, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EducationSection() {
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

  const education = {
    degree: "Bachelor's of Science in Software Engineering",
    institution: "Uganda Technology And Management University",
    location: "Uganda",
    period: "September 2018 - September 2023",
    highlights: [
      "Completed comprehensive project in data science and machine learning",
      "Developed Facial Recognition system with 87% accuracy in team of three",
      "Completed industrial training on computer networks using Cisco Packet Tracer and Wireshark",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Software Project Management",
      "Database Management Systems",
      "Computer Networks",
      "Web Development",
      "Operating Systems",
      "Software Architecture",
      "Data Science & Machine Learning",
    ],
  }

  const certifications = [
    {
      title: "Python Bootcamp",
      provider: "Udemy",
      date: "January 2024",
      description:
        "Developed real-world Python projects, utilized data science frameworks like Pandas, Scikit-learn, Matplotlib",
    },
    {
      title: "Solana Blockchain Development Bootcamp",
      provider: "Udemy",
      date: "August 2022",
      description: "Developed DApp calculator and created blockchain wallets using Web3.js and Rust Programming",
    },
    {
      title: "Industrial Training Certification",
      provider: "Uganda Technology And Management University",
      date: "September 2019",
      description: "Facial recognition system development and centralized computer network using Cisco Packet Tracer",
    },
  ]

  return (
    <section id="education" ref={sectionRef} className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 mb-12`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground text-lg">Academic background and professional certifications</p>
          </div>

          <Card
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 delay-200 border-border mb-8`}
          >
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">{education.degree}</CardTitle>
                  <CardDescription className="text-lg text-primary mb-2">{education.institution}</CardDescription>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{education.period}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {education.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <Badge key={course} variant="secondary">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 delay-400`}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{cert.title}</CardTitle>
                        <CardDescription className="text-primary">{cert.provider}</CardDescription>
                      </div>
                      <Badge variant="outline">{cert.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
