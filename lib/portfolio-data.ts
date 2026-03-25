export const sectionLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const

export const portfolioData = {
  name: "Asheri Musa",
  initials: "AM",
  role: "Full-Stack Software Engineer",
  location: "Kampala, Uganda",
  email: "asherimusa505@gmail.com",
  phone: "+256754560414",
  callHref: "tel:+256754560414",
  whatsappHref: "https://wa.me/256754560414",
  summary:
    "Results-driven engineer delivering production mobile apps, web platforms, admin dashboards, and PWAs with React Native, Expo, Next.js, Bun, Node.js, GraphQL, and Laravel.",
  introduction: [
    "I drive delivery across product, design, and engineering at Tallen Tech, building modern software that feels polished, useful, and ready for real operations.",
    "My work spans agriculture, healthcare, e-commerce, and digital brand platforms, with a strong focus on clean UI systems, reliable APIs, and disciplined shipping.",
  ],
  heroSkillWords: [
    "mobile apps",
    "web platforms",
    "admin systems",
    "product dashboards",
    "API workflows",
    "healthcare tools",
    "commerce experiences",
    "brand websites",
  ],
  stats: [
    {
      value: "3+",
      label: "Years building production software",
    },
    {
      value: "6",
      label: "Major builds shipped across web and mobile",
    },
    {
      value: "4",
      label: "Sectors served in East Africa and beyond",
    },
  ],
  principles: [
    "Design systems that feel modern without sacrificing clarity",
    "Architecture decisions that keep teams fast after launch",
    "Code review, refactoring, and release quality as delivery habits",
  ],
  sectors: ["Agriculture", "Healthcare", "E-commerce", "Professional Networking"],
  currentFocus: [
    "Shipping production-ready mobile and web products",
    "Designing clearer interfaces with stronger UX polish",
    "Structuring reliable APIs and admin workflows",
    "Improving release quality across iterations",
  ],
  experience: [
    {
      title: "Full-Stack Software Engineer",
      company: "Tallen Tech",
      period: "July 2024 - Present",
      location: "Kampala, Uganda",
      summary:
        "Driving cross-functional delivery across mobile, marketing, and product systems with an emphasis on architecture, execution speed, and shipping quality.",
      achievements: [
        "Led development of the Farmsell mobile product using React Native, Expo, and Laravel for East African agricultural trade.",
        "Delivered the Tallen Tech website and the Farmsell marketing experience with modern responsive design and structured content flows.",
        "Built the Netlife healthcare experience with Supabase, ZeptoMail, and Twilio WhatsApp integrations for patient communication.",
        "Directed implementation choices across UI systems, APIs, code review, refactoring, and release coordination.",
        "Maintain shipped products while planning the next iterations across mobile, web, and admin surfaces.",
      ],
      stack: [
        "React Native",
        "Expo",
        "Next.js",
        "Bun",
        "Node.js",
        "Laravel",
        "Supabase",
        "GraphQL",
        "Twilio",
      ],
      outcomes: [
        "Production apps",
        "Responsive websites",
        "Admin-ready workflows",
        "Cross-functional delivery",
      ],
    },
  ],
  projects: [
    {
      title: "Farmsell Mobile Platform",
      status: "Production",
      sector: "Agriculture",
      description:
        "A B2B marketplace mobile experience connecting farmers and buyers with product discovery, operational coordination, and real-world trade flows.",
      impact: "Shipped as a production mobile product with a delivery focus on reliability, speed, and usability.",
      stack: ["React Native", "Expo", "Laravel", "REST APIs"],
    },
    {
      title: "Netlife Care Experience",
      status: "Deployed",
      sector: "Healthcare",
      description:
        "A healthcare workflow app combining patient communication, scheduling, and support interactions across email and WhatsApp channels.",
      impact: "Integrated messaging and backend services into a practical product flow for patient-facing operations.",
      stack: ["React", "Supabase", "ZeptoMail", "Twilio WhatsApp"],
    },
    {
      title: "Tallen Tech Website",
      status: "Live",
      sector: "Brand Platform",
      description:
        "A modern digital presence for the company with structured service storytelling, responsive layout work, and conversion-focused contact journeys.",
      impact: "Delivered a cleaner brand presentation with polished UX and stronger content hierarchy.",
      stack: ["Next.js", "Tailwind CSS", "Supabase", "Bun"],
    },
    {
      title: "Farmsell Marketing Stack",
      status: "Live",
      sector: "Content Platform",
      description:
        "A marketing website with portfolio and blog surfaces, designed to support product storytelling, discovery, and future content operations.",
      impact: "Extended the Farmsell ecosystem beyond the app with a scalable web presence.",
      stack: ["Next.js", "MDX", "SEO", "Content Architecture"],
    },
    {
      title: "Facial Recognition Research",
      status: "Completed",
      sector: "Data Science",
      description:
        "A university machine learning project focused on facial recognition, built as a collaborative capstone with practical evaluation workflows.",
      impact: "Reached 87% accuracy while strengthening applied data science and experimentation skills.",
      stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    },
    {
      title: "Solana DApp Calculator",
      status: "Completed",
      sector: "Blockchain",
      description:
        "An exploratory decentralized app project built to understand wallet interaction, smart contract patterns, and Web3 development flows.",
      impact: "Expanded cross-stack fluency into blockchain tooling and Rust-backed smart contract concepts.",
      stack: ["React", "Web3.js", "Rust", "Solana"],
    },
  ],
  skillGroups: [
    {
      title: "Frontend",
      items: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS", "Design Systems", "Responsive UI"],
    },
    {
      title: "Mobile",
      items: ["React Native", "Expo", "Cross-platform UX", "Production App Delivery"],
    },
    {
      title: "Backend",
      items: ["Bun", "Node.js", "Laravel", "REST APIs", "GraphQL", "Architecture"],
    },
    {
      title: "Data & Infra",
      items: ["Supabase", "PostgreSQL", "MySQL", "Twilio", "ZeptoMail", "CI/CD"],
    },
    {
      title: "Tools",
      items: ["Git", "Figma", "Cursor", "Antigravity", "Kanboard", "Code Review"],
    },
    {
      title: "Delivery",
      items: ["Refactoring", "Project Planning", "Release Quality", "Delivery Ownership"],
    },
  ],
  education: {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Uganda Technology and Management University",
    period: "September 2018 - September 2023",
    highlights: [
      "Built a facial recognition project with 87% accuracy as part of a three-person team.",
      "Completed industrial training across networking, applied machine learning, and system tooling.",
      "Strengthened foundations in software architecture, databases, project management, and computer networks.",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Software Project Management",
      "Database Systems",
      "Computer Networks",
      "Software Architecture",
      "Machine Learning",
    ],
  },
  certifications: [
    {
      title: "Python Bootcamp",
      provider: "Udemy",
      date: "2024",
      description: "Focused on practical Python work with data tooling, automation, and project-based learning.",
    },
    {
      title: "Solana Blockchain Development Bootcamp",
      provider: "Udemy",
      date: "2022",
      description: "Built wallet-connected blockchain projects with Web3.js and Rust fundamentals.",
    },
    {
      title: "Industrial Training Certification",
      provider: "UTAMU",
      date: "2019",
      description: "Covered networking labs, systems work, and applied project delivery in technical environments.",
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/musatallen" },
    { label: "Hashmozy GitHub", href: "https://github.com/Hashmozy" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/asheri-musa-942531211" },
  ],
  resumeHref: "/Asheri-Musa-Resume.pdf",
} as const
