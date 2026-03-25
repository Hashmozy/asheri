import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { portfolioData } from "@/lib/portfolio-data"
import { absoluteUrl, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.title,
  description:
    "Explore Asheri Musa's portfolio, selected projects, technical stack, and contact information for full-stack engineering, mobile app delivery, and modern product work.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${absoluteUrl("/")}#person`,
        name: portfolioData.name,
        jobTitle: portfolioData.role,
        description: portfolioData.summary,
        email: portfolioData.email,
        telephone: portfolioData.phone,
        url: absoluteUrl("/"),
        sameAs: portfolioData.socials.map((social) => social.href),
        knowsAbout: [
          "React Native",
          "Expo",
          "Next.js",
          "Bun",
          "Laravel",
          "GraphQL",
          "Mobile app development",
          "Frontend engineering",
          "Full-stack architecture",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Tallen Tech",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kampala",
          addressCountry: "UG",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        name: siteConfig.name,
        url: absoluteUrl("/"),
        description: siteConfig.description,
      },
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl("/")}#webpage`,
        url: absoluteUrl("/"),
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: {
          "@id": `${absoluteUrl("/")}#website`,
        },
        about: {
          "@id": `${absoluteUrl("/")}#person`,
        },
      },
      {
        "@type": "ItemList",
        name: "Selected Projects",
        itemListElement: portfolioData.projects.slice(0, 4).map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          description: project.description,
        })),
      },
    ],
  }

  return (
    <main id="top" aria-label="Portfolio homepage" className="relative min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="page-grid pointer-events-none fixed inset-0 opacity-50" />
      <Navigation />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  )
}
