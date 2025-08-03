export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  appStoreUrl?: string;
  gitHubUrl?: string;
  websiteUrl?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Article {
  title: string;
  platform: string;
  url: string;
  imageUrl: string;
}
