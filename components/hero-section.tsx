"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particleColor = theme === "light" ? "rgba(20, 184, 166, 0.4)" : "rgba(20, 184, 166, 0.3)"
      const lineColor = theme === "light" ? "rgba(20, 184, 166, 0.3)" : "rgba(20, 184, 166, 0.2)"

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()
      })

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            const opacity = theme === "light" ? 0.3 : 0.2
            ctx.strokeStyle = `rgba(20, 184, 166, ${opacity * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [theme])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10" />
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="opacity-0 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Asheri Musa</h1>
          </div>

          <div className="opacity-0 animate-fade-in-up delay-200">
            <p className="text-xl md:text-2xl text-primary mb-4">Full Stack Developer</p>
          </div>

          <div className="opacity-0 animate-fade-in-up delay-300">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Results-driven Software Engineer specializing in mobile app development, React Native, and full-stack
              solutions. Building innovative applications that make a difference in East Africa and beyond.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up delay-400 flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button asChild size="lg" className="gap-2">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="opacity-0 animate-fade-in-up delay-500 flex items-center justify-center gap-6">
            <a
              href="https://github.com/Hashmozy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/musatallen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:asherimusa505@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a href="tel:+256754560414" className="text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
