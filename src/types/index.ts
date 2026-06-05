export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface StatCard {
  value: string;
  label: string;
  icon: string;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceItem {
  title: string;
  company?: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
