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
  company: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  industry: string;
  description: string;
  technologies: string[];
  features: string[];
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

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
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
