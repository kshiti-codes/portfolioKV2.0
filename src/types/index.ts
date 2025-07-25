import { IconType } from 'react-icons';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
  content?: string; // Optional field for additional content
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Skill {
  id: number;
  name: string;
  icon: IconType;
  iconColor: string; // Hex color code for the icon
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface LiveTool {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  category: 'AI Tools' | 'Utilities' | 'Demos' | 'Interactive';
  technologies: string[];
  artifactUrl: string;
  sourceCode?: string;
  featured: boolean;
  usageCount?: number;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Live' | 'Beta' | 'Coming Soon';
}