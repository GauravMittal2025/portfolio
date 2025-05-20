export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number; // 1-5
  category: 'frontend' | 'backend' | 'design' | 'tools';
}



export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface TechItem {
  id: number;
  name: string;
  logo: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TrainingProgram {
  id: number;
  title: string;
  description: string;
  image: string;
}