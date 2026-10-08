import solidIcons from "@/components/icons/solid";

export const technologies = {
  JS: { name: "JavaScript", img: "/imgs/technologies/js.svg" },
  TS: { name: "TypeScript", img: "/imgs/technologies/ts.svg" },
  Vite: { name: "Vite", img: "/imgs/technologies/vite.svg" },
  React: { name: "React", img: "/imgs/technologies/react.svg" },
  Next: { name: "Next", img: "/imgs/technologies/next.svg" },
  Astro: { name: "Astro", img: "/imgs/technologies/astro.svg" },
  Tailwind: { name: "Tailwind", img: "/imgs/technologies/tailwind.svg" },
  MongoDB: { name: "MongoDB", img: "/imgs/technologies/mongo.svg" },
  Postgres: { name: "PostgreSQL", img: "/imgs/technologies/postgres.svg" },
  Nest: { name: "NestJS", img: "/imgs/technologies/nestjs.svg" },
  Node: { name: "Node.js", img: "/imgs/technologies/nodejs.svg" },
  Express: { name: "Express.js", img: "/imgs/technologies/express.svg" },
  Drizzle: { name: "Drizzle ORM", img: "/imgs/technologies/drizzle.svg" },
  ChartJS: { name: "ChartJS", img: "/imgs/technologies/chartjs.svg" },
  Go: { name: "Go", img: "/imgs/technologies/go.svg" },
};

export const author = {
  img: "/imgs/me.jpg",
  name: "Ahmed Magdy",
  jobTitle: "Full Stack Engineer",
  bio: "Full Stack Engineer with hands-on experience building scalable ERP systems and user-centric platforms. Specialized in NestJS, Next.js, and designing scalable data architectures using PostgreSQL and MongoDB. Experienced in complex troubleshooting and delivering high-performance applications with a focus on modern UI. Demonstrated experience migrating legacy systems and implementing secure role-based access controls.",
  email: "ahmedmagdynusir@gmail.com",
  cvLink: "/Ahmed_Magdy_CV.pdf",
  siteUrl: "https://ahmedmagdynusir.com",
};

export const techStack = [
  "React",
  "Next.js",
  "Tailwind",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "Nginx",
  "Docker",
  "RESTful APIs",
  "WebSockets",
  "Webpack",
  "Vite",
  "Git",
  "GitHub",
  "CSS",
  "HTML",
];

export const experiences: Project[] = [
  {
    title: "MOG ERP",
    description:
      "A manufacturing ERP for commercial kitchen equipment that connects sales, production, procurement, delivery, and installation on one centralized platform.",
    img: "/imgs/projects/mog-project.webp",
    technologies: [
      technologies.TS,
      technologies.Postgres,
      technologies.Nest,
      technologies.Next,
      technologies.React,
      technologies.Tailwind,
      technologies.ChartJS,
    ],
  },
  {
    title: "Gen Z App",
    description:
      "A healthcare platform focused on supporting Gen Z users. Provides resources, articles, and interactive tools to improve emotional, cognitive, and social wellness.",
    img: "/imgs/projects/gen-z-project.webp",
    technologies: [
      technologies.TS,
      technologies.Postgres,
      technologies.Nest,
      technologies.Next,
      technologies.React,
      technologies.Tailwind,
      technologies.ChartJS,
    ],
    liveDemo: "https://genzapp.com",
  },
  {
    title: "Leopard Stores",
    description:
      "An online store solution for Leopard with integrated accounting, inventory, orders, and customer management for a seamless shopping experience.",
    img: "/imgs/projects/leopard-project.webp",
    technologies: [technologies.TS, technologies.MongoDB, technologies.Express, technologies.React, technologies.Tailwind],
    liveDemo: "https://leopardegy.com",
  },
];

export const projects: Project[] = [
  {
    title: "Namy SaaS ERP",
    description:
      "A multi-tenant MENA-focused ERP and commerce platform for SMEs, with inventory, sales, purchasing, and accounting as first-class citizens.",
    img: "/imgs/projects/namy-project.webp",
    technologies: [
      technologies.Go,
      technologies.Postgres,
      technologies.Astro,
      technologies.Vite,
      technologies.React,
      technologies.Tailwind,
      technologies.ChartJS,
    ],
  },
  {
    title: "Pro Sales CRM",
    description:
      "A CRM platform that simplifies sales, optimizes customer management, and increases productivity with lead tracking, automation, and analytics.",
    img: "/imgs/projects/pro-sales-project.webp",
    technologies: [technologies.JS, technologies.Vite, technologies.React, technologies.Tailwind, technologies.ChartJS],
    liveDemo: "https://ahmedmagdynusir.github.io/pro-sales-crm",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/AhmedMagdyNusir",
    icon: solidIcons.Github,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/AhmedMagdyNusir",
    icon: solidIcons.Linkedin,
  },
];
