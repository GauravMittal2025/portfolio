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