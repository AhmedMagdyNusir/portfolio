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
};
