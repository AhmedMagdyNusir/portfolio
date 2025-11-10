type Teck = {
  name: string;
  img: string;
};

type Project = {
  title: string;
  description: string;
  img: string;
  technologies: Teck[];
  liveDome?: string;
};
