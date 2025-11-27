"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactSection() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "asherimusa505@gmail.com",
      href: "mailto:asherimusa505@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+256 764 292 546",
      href: "tel:+256764292546",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kampala, Uganda",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Hashmozy",
    },
    {
      icon: Github,
      label: "GitHub Work",
      href: "https://github.com/musatallen",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/asheri-musa-942531211",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 mb-12 text-center`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Let's build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card
                  key={index}
                  className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 border-border hover:border-primary/50 transition-colors`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{info.label}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {info.href ? (
                      <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{info.value}</span>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 delay-400 border-border`}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Connect With Me</CardTitle>
              <CardDescription>Find me on these platforms or send me a message</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <Button key={index} asChild variant="outline" className="gap-2 bg-transparent">
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </a>
                    </Button>
                  )
                })}
              </div>
              <Button asChild size="lg" className="w-full gap-2">
                <a href="mailto:asherimusa505@gmail.com">
                  <Send className="h-4 w-4" />
                  Send Me an Email
                </a>
              </Button>
            </CardContent>
          </Card>

          <div
            className={`${isVisible ? "opacity-100" : "opacity-0"} transition-all duration-700 delay-600 mt-12 text-center text-muted-foreground`}
          >
            <p>© 2025 Asheri Musa. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
