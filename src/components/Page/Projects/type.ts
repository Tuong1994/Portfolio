export type Project = {
  id: string;
  title: string;
  description: string;
  features: string[];
  techs: string[];
  imageUrl: string;
  link: string;
};

export type Projects = Project[]