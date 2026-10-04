export type Project = {
  name: string;
  description: string;
  link?: string;
  skills?: string[];
  screenshots?: { src: string; alt: string }[];
};

export const siteConfig = {
  name: "Mohammed Alnahhal",
  title: "Cybersecurity Student & Full-Stack Engineer",
  description:
    "Portfolio of Mohammed Alnahhal, a cybersecurity student and full-stack developer building secure web applications with Laravel, PostgreSQL, React, and Next.js.",
  accentColor: "#018545",
  accentToColor: "#00ad5a",
  sections: ["about", "experience", "projects", "education"] as const,
  social: {
    email: "anahallmohammed@gmail.com",
    linkedin: "https://linkedin.com/in/mohammed-alnahhal",
    github: "https://github.com/mohamedalnahhal",
  },
  aboutMe:
    "I'm a final-year cybersecurity student and full-stack developer who likes building web applications that are secure as well as fast. I work mainly with Laravel, PostgreSQL, React, and Next.js, and I recently built features for governmental systems during an internship at the Palestinian Ministry of National Economy. My final-year project is research in agentic AI security, and I'm especially interested in application and database security, threat modeling, and offline-first systems for constrained environments. I'm always learning.",
  skills: [
    "Laravel",
    "PHP",
    "PostgreSQL",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Docker",
    "Python",
    "Application Security",
  ],
  experience: [
    {
      company: "Palestinian Ministry of National Economy",
      title: "Web Developer",
      dateRange: "Jul 2026 - Sep 2026",
      bullets: [
        "Maintained and fixed bugs for CTRS, a government company and trader registration system",
        "Standardized error handling and code patterns",
        "Contributed and built features for the Gaza Markets Monitoring & Economic Analysis System",
        "Test-Driven Development",
      ],
    },
    {
      company: "Jawwal",
      title: "Internship (online)",
      dateRange: "Jun 2026 - Sep 2026",
      bullets: [
        "Broad exposure to company IT functions: networks, QA, database administration, backend, and frontend",
      ],
    },
    {
      company: "Al-Shifa Medical Complex",
      title: "Training (partial)",
      dateRange: "Jun 2026",
      bullets: ["Partial training focused on computer networks"],
    },
  ],
  projects: [
    {
      name: "Multi-Tenant E-Commerce SaaS Platform",
      description:
        "A multi-tenant e-commerce platform development using Laravel 12 with Livewire v4 storefront and Filament admin dashboard, tenant-scoped data in a shared schema, and multi-currency support. Deployed using Docker",
      link: "https://github.com/mohamedalnahhal/eshop",
      skills: ["Laravel", "Docker", "Multi-tenancy"],
    },
    {
      name: "Flowboard",
      description: "A system to manage teams and projects grouped in workspaces, built with Next.js and deployed using Docker.",
      link: "https://github.com/mohamedalnahhal/Flowboard",
      skills: ["Next.js", "Docker"],
    },
    {
      name: "Agentic AI Security Research",
      description:
        "Final-year research project (in progress) on the security of LLM-based agents, using threat modeling, adversarial testing, and sandboxed experiments.",
      skills: ["Python", "Threat Modeling", "Sandboxing"],
    },
  ] as Project[],
  education: [
    {
      school: "University College of Applied Science (UCAS)",
      degree: "B.Sc. in Cybersecurity and Information Security",
      dateRange: "Expected 2027 | GPA: 90.31%",
      achievements: [
        "Final-year student",
        "Graduation project: agentic AI security research (in progress)",
      ],
    },
    {
      school: "Gaza Sky Geeks",
      degree: "Beyond the Code Training Program",
      dateRange: "May 2026 - Jul 2026",
      achievements: ["Completed the Beyond the Code Training Program"],
    },
  ],
};
