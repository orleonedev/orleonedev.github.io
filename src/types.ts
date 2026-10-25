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
  description?: string;
  highlights?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Award {
  date: string;
  title: string;
  link?: string;
  description?: string;
}
