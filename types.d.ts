type Tech = {
  name: string;
  img: string;
};

type Project = {
  title: string;
  description: string;
  img: string;
  technologies: Tech[];
  liveDemo?: string;
  // Why there's no live demo: an organization's internal system, or still being built
  status?: "internal" | "under-construction";
};
