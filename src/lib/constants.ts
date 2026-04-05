import solidIcons from "@/components/icons/solid";

export const allTechnologies = {
  JS: { name: "JavaScript", img: "/imgs/technologies/js.svg" },
  TS: { name: "TypeScript", img: "/imgs/technologies/ts.svg" },
  Vite: { name: "Vite", img: "/imgs/technologies/vite.svg" },
  React: { name: "React", img: "/imgs/technologies/react.svg" },
  Next: { name: "Next", img: "/imgs/technologies/next.svg" },
  Tailwind: { name: "Tailwind", img: "/imgs/technologies/tailwind.svg" },
  MongoDB: { name: "MongoDB", img: "/imgs/technologies/mongodb.svg" },
  Postgres: { name: "PostgreSQL", img: "/imgs/technologies/postgres.svg" },
  NestJS: { name: "NestJS", img: "/imgs/technologies/nestjs.svg" },
  NodeJS: { name: "Node.js", img: "/imgs/technologies/nodejs.svg" },
  Express: { name: "Express.js", img: "/imgs/technologies/express.svg" },
  Drizzle: { name: "Drizzle ORM", img: "/imgs/technologies/drizzle.svg" },
};

export const author = {
  img: "/imgs/me.jpg",
  name: "Ahmed Magdy",
  jobTitle: "Full Stack Engineer",
  bio: "Full Stack Engineer with 2+ years of experience building scalable systems and production-ready applications. Experienced with Nest.js, Next.js, and modern databases, with hands-on work in ERP and user-focused platforms.",
  email: "ahmedmagdynusir@gmail.com",
  cvLink: "/Ahmed Magdy CV.pdf",
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
  "RESTful APIs",
  "WebSockets",
  "Webpack",
  "Vite",
  "Git",
  "GitHub",
  "CSS",
  "HTML",
];

export const projects: Project[] = [
  {
    title: "Leopard ERP & Online Store",
    description:
      "A comprehensive ERP and online store solution for Leopard. The system manages inventory, orders, and customer relationships, while the online store showcases products and provides a seamless shopping experience.",
    img: "/imgs/projects/leopard-project.png",
    technologies: [allTechnologies.Vite, allTechnologies.TS, allTechnologies.React, allTechnologies.Tailwind],
    liveDome: "https://leopardegy.com",
  },
  {
    title: "Gen Z App",
    description:
      "A mental health platform focused on supporting Gen Z users. Provides resources, articles, and interactive tools to improve emotional, cognitive, and social wellness.",
    img: "/imgs/projects/gen-z-project.png",
    technologies: [allTechnologies.TS, allTechnologies.React, allTechnologies.Tailwind],
    liveDome: "https://genzapp.com",
  },
  {
    title: "Pro Sales CRM",
    description:
      "A CRM platform that simplifies sales, optimizes customer management, and increases productivity with lead tracking, automation, and analytics.",
    img: "/imgs/projects/pro-sales-project.jpg",
    technologies: [allTechnologies.Vite, allTechnologies.JS, allTechnologies.React, allTechnologies.Tailwind],
    liveDome: "https://ahmedmagdynusir.github.io/pro-sales-crm",
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
