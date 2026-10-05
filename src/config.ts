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
      dateRange: "July 2026 - September 2026",
      bullets: [
        "Built 12+ modules and resolved 170+ tickets across two government systems",
        "Maintained and fixed bugs for CTRS, a government company and trader registration system",
        "Contributed and built features for the Gaza Markets Monitoring & Economic Analysis System",
        "Test-Driven Development",
      ],
    },
    {
      company: "Jawwal",
      title: "Internship (online)",
      dateRange: "June 2026 - September 2026",
      bullets: [
        "Broad exposure to company IT functions: networks, QA, database administration, backend, and frontend",
        "Completed 183 working hours",
      ],
    },
    {
      company: "Al-Shifa Medical Complex",
      title: "Training (partial)",
      dateRange: "June 2026",
      bullets: ["Partial training focused on computer networks"],
    },
  ],
  projects: [
    {
      name: "Multi-Tenant E-Commerce SaaS Platform",
      description:
        "A multi-tenant e-commerce platform development using Laravel 12 with Livewire v4 storefront and Filament admin dashboard, tenant-scoped data in a shared schema (38 tables), and multi-currency, custom-themes support. Deployed using Docker",
      link: "https://github.com/mohamedalnahhal/eshop",
      skills: ["Laravel", "Docker", "Multi-tenancy"],
      screenshots: [
        { src: "/screenshots/eshop/1.png", alt: "eShop landing page" },
        { src: "/screenshots/eshop/2.png", alt: "Shop sign-in page" },
        { src: "/screenshots/eshop/3.png", alt: "System admin shops list" },
        { src: "/screenshots/eshop/4.png", alt: "System admin users list" },
        { src: "/screenshots/eshop/5.png", alt: "Subscription plan form" },
        { src: "/screenshots/eshop/6.png", alt: "Shop dashboard" },
        { src: "/screenshots/eshop/7.png", alt: "Shipping rule form" },
        { src: "/screenshots/eshop/8.png", alt: "Shipping method form" },
        { src: "/screenshots/eshop/9.png", alt: "Shop products list" },
        { src: "/screenshots/eshop/10.png", alt: "Shop orders page" },
        { src: "/screenshots/eshop/11.png", alt: "Shop location form and map" },
        { src: "/screenshots/eshop/12.jpeg", alt: "Green storefront theme" },
        { src: "/screenshots/eshop/13.jpeg", alt: "Pink storefront theme" },
        { src: "/screenshots/eshop/14.jpeg", alt: "Neutral storefront theme" },
        { src: "/screenshots/eshop/15.jpeg", alt: "Shopping cart with blue checkout theme" },
        { src: "/screenshots/eshop/16.jpeg", alt: "Shopping cart with neutral checkout theme" },
      ],
    },
    {
      name: "Flowboard",
      description: "A system to manage teams and projects grouped in workspaces, built with Next.js and deployed using Docker.",
      link: "https://github.com/mohamedalnahhal/Flowboard",
      skills: ["Next.js", "Docker"],
      screenshots: [
        { src: "/screenshots/flowboard/Screenshot From 2026-07-18 15-40-02.png", alt: "Flowboard home dashboard" },
        { src: "/screenshots/flowboard/Screenshot From 2026-07-18 15-40-12.png", alt: "Team boards overview" },
        { src: "/screenshots/flowboard/Screenshot From 2026-07-18 15-45-51.png", alt: "API development Kanban board" },
        { src: "/screenshots/flowboard/Screenshot From 2026-07-18 15-48-41.png", alt: "Task details and activity" },
        { src: "/screenshots/flowboard/Screenshot From 2026-07-18 15-40-21.png", alt: "Monthly calendar view" },
        { src: "/screenshots/flowboard/Screenshot From 2026-07-18 15-40-46.png", alt: "Weekly calendar view" },
        { src: "/screenshots/flowboard/Screenshot From 2026-07-18 15-40-56.png", alt: "Team announcements" },
        { src: "/screenshots/flowboard/Screenshot From 2026-07-18 15-49-09.png", alt: "Teams overview" },
        { src: "/screenshots/flowboard/Screenshot From 2026-07-18 15-49-18.png", alt: "Users and roles" },
        { src: "/screenshots/flowboard/Screenshot From 2026-07-18 15-49-03.png", alt: "Team permissions management" },
      ],
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
      dateRange: "May 2026 - July 2026",
      achievements: [
        "Completed 35 hours of training",
        "Learned advanced development concepts and security practices",
        "Built a multi-module platform as a final project",
      ],
    },
    {
      school: "Green Armor Academy",
      degree: "Capture the Flag (CTF) Bootcamp",
      dateRange: "April 2026 - May 2026",
      achievements: [
        "Completed the Capture the Flag (CTF) Bootcamp",
        "Achieved 4th place in the final CTF competition",
      ],
    },
  ],
};
