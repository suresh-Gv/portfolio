import type {
  Achievement,
  Certification,
  ExperienceItem,
  NavItem,
  Project,
  Service,
  SkillCategory,
  SocialLink,
  StatCard,
} from '../types';

export const personalInfo = {
  name: 'Suresh K',
  title: 'Senior Software Engineer',
  tagline:
    'Building scalable web and mobile applications with React, AWS, and modern cloud technologies.',
  email: 'suresh.k@email.com',
  location: 'Chennai, Tamil Nadu, India',
  resumeUrl: '/resume.pdf',
  aboutSummary:
    'Experienced Senior Software Engineer with over 10 years of expertise in designing, developing, and optimizing enterprise-grade web and mobile applications. Specialized in React.js, Redux, AWS, cloud integrations, performance optimization, and scalable software architecture.',
};

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/suresh-k', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/suresh-Gv', icon: 'github' },
  { name: 'Email', url: 'mailto:suresh.k@email.com', icon: 'email' },
];

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const stats: StatCard[] = [
  { value: '10+', label: 'Years Experience', icon: 'experience' },
  { value: '50+', label: 'Projects Delivered', icon: 'projects' },
  { value: 'Enterprise', label: 'Application Specialist', icon: 'enterprise' },
  { value: 'Expert', label: 'Frontend & Cloud Expert', icon: 'expert' },
];

export const highlights: string[] = [
  'React & Frontend Development',
  'AWS Cloud Services',
  'Mobile Application Development',
  'Performance Optimization',
  'Security Enhancements',
  'API Integration',
  'Enterprise Application Development',
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: [
      { name: 'React.js', proficiency: 95 },
      { name: 'Redux', proficiency: 90 },
      { name: 'JavaScript', proficiency: 95 },
      { name: 'TypeScript', proficiency: 90 },
      { name: 'Material UI', proficiency: 88 },
      { name: 'HTML5', proficiency: 95 },
      { name: 'CSS3', proficiency: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: 'backend',
    skills: [
      { name: 'Node.js', proficiency: 85 },
      { name: 'Express.js', proficiency: 85 },
      { name: 'REST APIs', proficiency: 90 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    skills: [
      { name: 'AWS', proficiency: 88 },
      { name: 'Secrets Manager', proficiency: 85 },
      { name: 'Lambda', proficiency: 80 },
      { name: 'S3', proficiency: 85 },
      { name: 'CI/CD', proficiency: 82 },
    ],
  },
  {
    title: 'Database',
    icon: 'database',
    skills: [
      { name: 'MySQL', proficiency: 85 },
      { name: 'MongoDB', proficiency: 80 },
      { name: 'SQL Server', proficiency: 82 },
    ],
  },
  {
    title: 'Tools',
    icon: 'tools',
    skills: [
      { name: 'Git', proficiency: 92 },
      { name: 'Jenkins', proficiency: 78 },
      { name: 'Solr', proficiency: 75 },
      { name: 'Twilio', proficiency: 80 },
      { name: 'ImageMagick', proficiency: 72 },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    period: 'January 2015 – Present',
    responsibilities: [
      'Enterprise application development',
      'React architecture design',
      'Performance optimization',
      'Security implementation',
      'AWS cloud integration',
      'Team mentoring',
      'Code reviews',
      'Technical leadership',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'tms',
    title: 'Transport Management System (TMS)',
    description:
      'Enterprise transportation platform for fleet management, route planning, reporting, and operations monitoring.',
    technologies: ['React.js', 'Node.js', 'AWS'],
    features: ['Fleet Management', 'Route Planning', 'Dashboard Analytics', 'Reports & Monitoring'],
    demoUrl: '#',
    githubUrl: 'https://github.com/suresh-Gv',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
  },
  {
    id: 'cssp',
    title: 'Corporate Secretarial Services Platform',
    description:
      'Compliance and document management platform for corporate governance processes.',
    technologies: ['React.js', 'Node.js', 'MongoDB'],
    features: ['Compliance Tracking', 'Document Management', 'Notification System', 'Reporting Dashboard'],
    demoUrl: '#',
    githubUrl: 'https://github.com/suresh-Gv',
    gradient: 'linear-gradient(135deg, #4338ca 0%, #6366f1 100%)',
  },
  {
    id: 'erp',
    title: 'Enterprise Reporting Platform',
    description:
      'Dynamic reporting platform with KPI dashboards, advanced filtering, exports, and performance optimization.',
    technologies: ['React.js', 'Redux', 'AWS', 'SQL Server'],
    features: ['KPI Dashboards', 'Dynamic Reports', 'Export to Excel/PDF', 'Performance Improvements'],
    demoUrl: '#',
    githubUrl: 'https://github.com/suresh-Gv',
    gradient: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
  },
];

export const achievements: Achievement[] = [
  {
    title: '40% Faster Load Times',
    description: 'Reduced application load time by 40% through performance optimization strategies.',
    icon: 'speed',
  },
  {
    title: 'AWS Secrets Manager',
    description: 'Implemented AWS Secrets Manager integrations for secure credential management.',
    icon: 'security',
  },
  {
    title: 'BLE Mobile Apps',
    description: 'Developed BLE-integrated mobile applications for enterprise IoT solutions.',
    icon: 'mobile',
  },
  {
    title: 'Twilio Integration',
    description: 'Integrated Twilio communication solutions for real-time notifications.',
    icon: 'communication',
  },
  {
    title: 'Enterprise Dashboards',
    description: 'Built enterprise-scale dashboard applications with real-time analytics.',
    icon: 'dashboard',
  },
  {
    title: 'Redux Optimization',
    description: 'Optimized complex React Redux applications for improved maintainability.',
    icon: 'optimization',
  },
];

export const services: Service[] = [
  {
    title: 'React Development',
    description: 'Building modern, responsive web applications with React.js and TypeScript.',
    icon: 'react',
  },
  {
    title: 'Frontend Architecture',
    description: 'Designing scalable frontend architectures for enterprise applications.',
    icon: 'architecture',
  },
  {
    title: 'Performance Optimization',
    description: 'Optimizing application performance, load times, and user experience.',
    icon: 'performance',
  },
  {
    title: 'AWS Integration',
    description: 'Integrating AWS cloud services including Lambda, S3, and Secrets Manager.',
    icon: 'aws',
  },
  {
    title: 'API Development',
    description: 'Developing robust REST APIs with Node.js and Express.js.',
    icon: 'api',
  },
  {
    title: 'Technical Consulting',
    description: 'Providing technical guidance on architecture, best practices, and team mentoring.',
    icon: 'consulting',
  },
];

export const certifications: Certification[] = [
  { title: 'AWS Certification', issuer: 'Amazon Web Services', year: '2023', icon: 'aws' },
  { title: 'React Certification', issuer: 'Meta / Coursera', year: '2022', icon: 'react' },
  { title: 'Agile Methodology', issuer: 'Scrum Alliance', year: '2021', icon: 'agile' },
  { title: 'Software Architecture', issuer: 'Professional Development', year: '2020', icon: 'architecture' },
];
