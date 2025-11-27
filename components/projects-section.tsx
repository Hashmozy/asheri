"use client"

import { useEffect, useRef, useState } from "react"
import { Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
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

  const projects = [
    {
      title: "Farmsell Mobile App",
      description:
        "B2B marketplace mobile application connecting farmers across East Africa with buyers, streamlining agricultural trade with real-time updates and secure transactions.",
      technologies: ["React Native", "Expo", "Laravel", "REST API"],
      status: "In Production",
    },
    {
      title: "Netlife Healthcare App",
      description:
        "Comprehensive healthcare application with appointment scheduling, patient management, email notifications via Zeptomail, and WhatsApp integration through Twilio.",
      technologies: ["React", "Supabase", "Zeptomail", "Twilio"],
      status: "Deployed",
    },
    {
      title: "TalenTech Company Website",
      description:
        "Modern marketing website for TalenTech showcasing services, portfolio, and team. Features contact forms with email integration and responsive design.",
      technologies: ["React", "Supabase", "Zeptomail", "Tailwind CSS"],
      status: "Live",
    },
    {
      title: "Facial Recognition System",
      description:
        "Machine learning project utilizing data science techniques with Pandas, NumPy, and Scikit-learn to develop a facial recognition system achieving 87% accuracy.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      status: "Completed",
    },
    {
      title: "Farmsell Marketing Website",
      description:
        "Marketing website with blog functionality and project portfolio showcase. Features SEO optimization and content management system.",
      technologies: ["React", "Next.js", "Tailwind CSS", "MDX"],
      status: "Live",
    },
    {
      title: "Blockchain DApp Calculator",
      description:
        "Decentralized application calculator built on Solana blockchain with wallet integration using Web3.js and smart contracts written in Rust.",
      technologies: ["Web3.js", "Rust", "Solana", "React"],
      status: "Completed",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 mb-12`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground text-lg">A selection of projects I've built and contributed to</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 border-border hover:border-primary/50 transition-colors group`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="mb-3">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 delay-700 mt-12 text-center`}
          >
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <a href="https://github.com/Hashmozy" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
