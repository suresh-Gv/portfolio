import type {
  Achievement,
  EducationItem,
  ExperienceItem,
  NavItem,
  Project,
  Service,
  SkillCategory,
  SocialLink,
  StatCard,
} from '../types';

export const personalInfo = {
  name: 'Suresh G',
  title: 'Senior Software Engineer',
  tagline:
    'Building scalable web and mobile applications with React, React Native, AWS, and modern cloud technologies.',
  email: 'gv.suresh02@gmail.com',
  phone: '+91 8056728199',
  location: 'Puducherry, India',
  resumeUrl: '/resume.pdf',
  aboutSummary:
    'Senior Software Engineer with 10+ years of experience in web and mobile application development. Specialized in React.js, React Native, Node.js, PHP, Healthcare Applications, CRM Systems, AWS integrations, application security, and performance optimization.',
  aboutParagraphs: [
    'I am a Senior Software Engineer with over 10 years of experience designing, developing, and maintaining enterprise-grade web and mobile applications.',
    'My expertise includes React.js, React Native, Node.js, PHP, MySQL, AWS, healthcare systems, CRM platforms, application security, and performance optimization.',
    'I enjoy solving complex technical challenges, improving application performance, implementing secure architectures, and delivering scalable software solutions that create business value.',
  ],
  languages: ['Tamil', 'English'],
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/suresh-Gv', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/suresh-govindhasamy', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:gv.suresh02@gmail.com', icon: 'email' },
];

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
];

export const stats: StatCard[] = [
  { value: '10+', label: 'Years Experience', icon: 'experience' },
  { value: '5', label: 'Industries Served', icon: 'industries' },
  { value: 'Healthcare', label: 'Platform Specialist', icon: 'healthcare' },
  { value: 'Full Stack', label: 'Web & Mobile Expert', icon: 'expert' },
];

export const highlights: string[] = [
  'React.js & React Native',
  'Healthcare & EHR Systems',
  'CRM & Logistics Platforms',
  'AWS Secrets Manager',
  'Application Security',
  'BLE Device Integration',
  'REST API Development',
  'Performance Optimization',
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: [
      { name: 'React.js', proficiency: 95 },
      { name: 'React Native', proficiency: 90 },
      { name: 'JavaScript', proficiency: 95 },
      { name: 'HTML5', proficiency: 95 },
      { name: 'CSS3', proficiency: 90 },
      { name: 'jQuery', proficiency: 82 },
    ],
  },
  {
    title: 'Backend',
    icon: 'backend',
    skills: [
      { name: 'Node.js', proficiency: 88 },
      { name: 'Express.js', proficiency: 85 },
      { name: 'PHP', proficiency: 90 },
      { name: 'Laravel', proficiency: 88 },
      { name: 'CodeIgniter', proficiency: 85 },
    ],
  },
  {
    title: 'Database',
    icon: 'database',
    skills: [
      { name: 'MySQL', proficiency: 90 },
      { name: 'MongoDB', proficiency: 80 },
    ],
  },
  {
    title: 'Cloud & Security',
    icon: 'security',
    skills: [
      { name: 'AWS Secrets Manager', proficiency: 88 },
      { name: 'Application Security', proficiency: 85 },
      { name: 'OWASP ZAP', proficiency: 82 },
      { name: 'Semgrep', proficiency: 80 },
    ],
  },
  {
    title: 'Tools',
    icon: 'tools',
    skills: [
      { name: 'Git', proficiency: 92 },
      { name: 'GitHub', proficiency: 90 },
      { name: 'Bitbucket', proficiency: 85 },
      { name: 'Apache Solr', proficiency: 78 },
      { name: 'Postman', proficiency: 88 },
      { name: 'VS Code', proficiency: 95 },
      { name: 'Cursor AI', proficiency: 85 },
    ],
  },
  {
    title: 'Specializations',
    icon: 'specialization',
    skills: [
      { name: 'REST API Development', proficiency: 92 },
      { name: 'Performance Optimization', proficiency: 90 },
      { name: 'Third-Party Integrations', proficiency: 88 },
      { name: 'Twilio Integration', proficiency: 85 },
      { name: 'BLE Device Integration', proficiency: 82 },
      { name: 'ImageMagick Customization', proficiency: 80 },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Voyage Software Technologies',
    period: 'January 2020 – Present',
    responsibilities: [
      'Developed enterprise web and mobile applications using React.js, React Native, PHP, and MySQL',
      'Implemented AWS Secrets Manager integration for secure credential management',
      'Improved application security by addressing vulnerabilities identified through Semgrep and OWASP ZAP',
      'Optimized frontend and backend performance',
      'Resolved production issues and improved system reliability',
      'Worked within cross-functional teams to deliver scalable solutions',
    ],
    achievements: [
      'Enhanced application security across enterprise applications',
      'Improved application performance through query optimization and code refactoring',
      'Successfully implemented AWS Secrets Manager integrations',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company: 'Voyage Software Technologies',
    period: 'October 2016 – December 2019',
    responsibilities: [
      'Developed features for Drupal and Laravel applications',
      'Integrated BLE healthcare devices with mobile applications',
      'Collaborated with development teams to deliver healthcare solutions',
    ],
    achievements: [
      'Implemented real-time healthcare data collection systems',
      'Successfully integrated BLE medical devices',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company: 'Smart Site Solution',
    period: 'August 2015 – September 2016',
    responsibilities: [
      'Developed design tool applications',
      'Built e-commerce platforms using CodeIgniter and Laravel',
      'Customized image generation solutions using ImageMagick',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'shipcrm',
    title: 'ShipCRM',
    industry: 'CRM / Logistics',
    description:
      'CRM platform for logistics and shipping operations that supports customer management, sales workflows, operational tracking, and business process automation.',
    technologies: ['React.js', 'React Native', 'PHP', 'MySQL'],
    features: ['Customer Management', 'Sales Workflow Automation', 'Operational Tracking', 'Business Process Automation'],
    gradient: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
  },
  {
    id: 'mywellnessbuddy',
    title: 'MyWellnessBuddy',
    industry: 'Healthcare / EHR',
    description:
      'Healthcare platform for patient management and HIPAA-compliant provider-patient communication.',
    technologies: ['React.js', 'React Native', 'Node.js'],
    features: ['Care Plan Management', 'Patient Management', 'Telecall Modules', 'BLE Device Integration'],
    gradient: 'linear-gradient(135deg, #4338ca 0%, #6366f1 100%)',
  },
  {
    id: 'snaphealthcare',
    title: 'SnapHealthcare',
    industry: 'Healthcare / EHR',
    description:
      'Enterprise healthcare platform for occupational health, employee health, billing, clinical documentation, and EMR management.',
    technologies: ['React.js', 'React Native', 'Node.js', 'PHP'],
    features: ['EMR Management', 'Billing', 'Clinical Documentation', 'Secure REST APIs', 'PDF Automation'],
    gradient: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
  },
  {
    id: 'fullnote',
    title: 'FullNote',
    industry: 'Healthcare',
    description:
      'Healthcare application for patient records, billing, telecalls, and secure communication between providers and patients.',
    technologies: ['React.js', 'React Native', 'Node.js', 'PHP'],
    features: ['Patient Records', 'Billing', 'Telecalls', 'Secure Provider Communication'],
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
  },
  {
    id: 'calendarpress',
    title: 'CalendarPress',
    industry: 'E-Commerce / Design Tools',
    description:
      'Online customization platform for personalized calendars with dynamic image generation and design tool workflows.',
    technologies: ['PHP', 'Laravel', 'CodeIgniter', 'ImageMagick'],
    features: ['Calendar Customization', 'Dynamic Image Generation', 'ImageMagick Integration', 'Design Tool Workflows'],
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
  },
  {
    id: 'wedding-playing-cards',
    title: 'Wedding Playing Cards',
    industry: 'E-Commerce / Design Tools',
    description:
      'E-commerce platform for personalized wedding playing cards with custom image uploads and automated card generation.',
    technologies: ['PHP', 'Laravel', 'CodeIgniter', 'ImageMagick'],
    features: ['Card Customization', 'Image Upload & Editing', 'Dynamic Image Generation', 'E-Commerce Checkout'],
    gradient: 'linear-gradient(135deg, #db2777 0%, #7c3aed 100%)',
  },
];

export const achievements: Achievement[] = [
  {
    title: '10+ Years Experience',
    description: 'Over a decade of professional software development across healthcare, CRM, and enterprise domains.',
    icon: 'experience',
  },
  {
    title: 'Healthcare Platforms',
    description: 'Built enterprise healthcare platforms including EHR, patient management, and HIPAA-compliant systems.',
    icon: 'healthcare',
  },
  {
    title: 'CRM for Logistics',
    description: 'Developed CRM systems for logistics industry with sales workflow and operational tracking.',
    icon: 'crm',
  },
  {
    title: 'BLE Medical Devices',
    description: 'Integrated BLE medical devices with mobile applications for real-time healthcare data collection.',
    icon: 'mobile',
  },
  {
    title: 'AWS Secrets Manager',
    description: 'Implemented AWS Secrets Manager for secure credential management across enterprise applications.',
    icon: 'security',
  },
  {
    title: 'Security Enhancements',
    description: 'Enhanced application security using OWASP ZAP and Semgrep vulnerability assessments.',
    icon: 'shield',
  },
  {
    title: 'React Native Apps',
    description: 'Developed React Native mobile applications for healthcare and enterprise use cases.',
    icon: 'reactnative',
  },
  {
    title: 'Performance Optimization',
    description: 'Optimized application performance and reliability through query optimization and code refactoring.',
    icon: 'optimization',
  },
  {
    title: 'Secure REST APIs',
    description: 'Built secure REST APIs with third-party integrations for healthcare and business platforms.',
    icon: 'api',
  },
  {
    title: 'Twilio Integration',
    description: 'Implemented Twilio communication integrations for real-time notifications and telecalls.',
    icon: 'communication',
  },
];

export const services: Service[] = [
  {
    title: 'React.js Development',
    description: 'Building modern, responsive web applications with React.js for enterprise and healthcare platforms.',
    icon: 'react',
  },
  {
    title: 'React Native Development',
    description: 'Cross-platform mobile applications with BLE integrations and healthcare workflows.',
    icon: 'reactnative',
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end development with React, Node.js, PHP, and MySQL for scalable business solutions.',
    icon: 'fullstack',
  },
  {
    title: 'Healthcare Software',
    description: 'HIPAA-compliant healthcare platforms, EHR systems, and patient management applications.',
    icon: 'healthcare',
  },
  {
    title: 'CRM Development',
    description: 'Custom CRM solutions for logistics, sales workflows, and business process automation.',
    icon: 'crm',
  },
  {
    title: 'API Development',
    description: 'Secure REST APIs with third-party integrations, PDF automation, and webhook support.',
    icon: 'api',
  },
  {
    title: 'AWS Integration',
    description: 'AWS Secrets Manager and cloud service integrations for secure enterprise deployments.',
    icon: 'aws',
  },
  {
    title: 'Application Security',
    description: 'Security improvements using OWASP ZAP, Semgrep, and secure architecture best practices.',
    icon: 'security',
  },
  {
    title: 'Performance Optimization',
    description: 'Frontend and backend optimization, query tuning, and system reliability improvements.',
    icon: 'performance',
  },
  {
    title: 'Technical Consulting',
    description: 'Architecture guidance, code reviews, and technical leadership for development teams.',
    icon: 'consulting',
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Christ College of Engineering & Technology',
    location: 'Puducherry',
    icon: 'masters',
  },
  {
    degree: 'Bachelor of Science - Computer Science',
    institution: 'Aravindar Arts & Science College',
    location: 'Puducherry',
    icon: 'bachelors',
  },
];
