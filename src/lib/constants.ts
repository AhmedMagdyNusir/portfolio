import solidIcons from "@/components/icons/solid";

export const allTechnologies: Record<"JS" | "TS" | "Vite" | "React" | "Next" | "Tailwind", Teck> = {
  JS: { name: "JavaScript", img: "/imgs/technologies/js.svg" },
  TS: { name: "TypeScript", img: "/imgs/technologies/ts.svg" },
  Vite: { name: "Vite", img: "/imgs/technologies/vite.svg" },
  React: { name: "React", img: "/imgs/technologies/react.svg" },
  Next: { name: "Next.js", img: "/imgs/technologies/next.svg" },
  Tailwind: { name: "Tailwind", img: "/imgs/technologies/tailwind.svg" },
};

export const author = {
  img: "/imgs/me.jpg",
  name: "Ahmed Magdy",
  jobTitle: "Software Engineer",
  bio: "A software engineer specializing in React, Next.js, and TypeScript, dedicated to building high-performance web applications. I focus on clean, efficient code to deliver innovative solutions that adapt to future growth and enhance user experience.",
  email: "ahmed.magdy.1138@gmail.com",
  cvLink: "/Ahmed Magdy CV.pdf",
};

export const techStack = [
  "React",
  "Redux",
  "Next.js",
  "Tailwind",
  "TypeScript",
  "HTML",
  "CSS",
  "JavaScript",
  "Webpack",
  "Vite",
  "Node.js",
  "RESTful APIs",
  "Git",
  "GitHub",
];

export const projects: Project[] = [
  {
    title: "Leopard Online Store",
    description:
      "Fashion collections for men and women, blending elegance and modern trends with quality craftsmanship to showcase your unique style.",
    img: "/imgs/projects/leopard-project.png",
    technologies: [allTechnologies.Vite, allTechnologies.TS, allTechnologies.React, allTechnologies.Tailwind],
    liveDome: "https://leopardegy.com",
  },
  {
    title: "Pro Sales CRM",
    description:
      "A CRM platform that simplifies sales, optimizes customer management, and increases productivity with lead tracking, automation, and analytics.",
    img: "/imgs/projects/pro-sales-project.jpg",
    technologies: [allTechnologies.Vite, allTechnologies.JS, allTechnologies.React, allTechnologies.Tailwind],
    liveDome: "https://ahmedmagdynoser.github.io/Pro-Sales",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/AhmedMagdyNoser",
    icon: solidIcons.Github,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/AhmedMagdyNoser",
    icon: solidIcons.Linkedin,
  },
];
