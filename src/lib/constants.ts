import solidIcons from "@/components/icons/solid";

export const technologies = {
  JS: { name: "JavaScript", img: "/imgs/technologies/js.svg" },
  TS: { name: "TypeScript", img: "/imgs/technologies/ts.svg" },
  Vite: { name: "Vite", img: "/imgs/technologies/vite.svg" },
  React: { name: "React", img: "/imgs/technologies/react.svg" },
  Next: { name: "Next", img: "/imgs/technologies/next.svg" },
  Tailwind: { name: "Tailwind", img: "/imgs/technologies/tailwind.svg" },
  MongoDB: { name: "MongoDB", img: "/imgs/technologies/mongo.svg" },
  Postgres: { name: "PostgreSQL", img: "/imgs/technologies/postgres.svg" },
  Nest: { name: "NestJS", img: "/imgs/technologies/nestjs.svg" },
  Node: { name: "Node.js", img: "/imgs/technologies/nodejs.svg" },
  Express: { name: "Express.js", img: "/imgs/technologies/express.svg" },
  Drizzle: { name: "Drizzle ORM", img: "/imgs/technologies/drizzle.svg" },
  ChartJS: { name: "ChartJS", img: "/imgs/technologies/chartjs.svg" },
};

export const author = {
  img: "/imgs/me.jpg",
  name: "Ahmed Magdy",
  jobTitle: "Full Stack Engineer",
  bio: "Full Stack Engineer with hands-on experience building scalable ERP systems and user-centric platforms. Specialized in NestJS, Next.js, and designing scalable data architectures using PostgreSQL and MongoDB. Experienced in complex troubleshooting and delivering high-performance applications with a focus on modern UI. Demonstrated experience migrating legacy systems and implementing secure role-based access controls.",
  email: "ahmedmagdynusir@gmail.com",
  cvLink: "/Ahmed_Magdy_CV.pdf",
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

export const projects: Project[] = [
  {
    title: "Leopard ERP & Online Store",
    description:
      "A comprehensive ERP and online store solution for Leopard. The system manages inventory, orders, and customer relationships, while the online store showcases products and provides a seamless shopping experience.",
    img: "/imgs/projects/leopard-project.png",
    technologies: [technologies.TS, technologies.Postgres, technologies.Nest, technologies.Next, technologies.Tailwind],
    liveDome: "https://leopardegy.com",
  },
  {
    title: "Gen Z App",
    description:
      "A healthcare platform focused on supporting Gen Z users. Provides resources, articles, and interactive tools to improve emotional, cognitive, and social wellness.",
    img: "/imgs/projects/gen-z-project.png",
    technologies: [technologies.TS, technologies.MongoDB, technologies.Nest, technologies.Next, technologies.Tailwind],
    liveDome: "https://genzapp.com",
  },
  {
    title: "Pro Sales CRM",
    description:
      "A CRM platform that simplifies sales, optimizes customer management, and increases productivity with lead tracking, automation, and analytics.",
    img: "/imgs/projects/pro-sales-project.jpg",
    technologies: [technologies.JS, technologies.Vite, technologies.React, technologies.Tailwind, technologies.ChartJS],
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
