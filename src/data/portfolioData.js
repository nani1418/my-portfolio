import {
  FaCode,
  FaDatabase,
  FaTools,
  FaServer,
  FaCloud,
  FaGraduationCap,
  FaSchool,
  FaBriefcase,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'

export const owner = {
  name: 'Nalam Venkata Naga Vamsi Krishna',
  role: 'Software Developer | Machine Learning Enthusiast',
  profileImage: '/profile.jpg',
  tagline:
    'I design and build elegant, high-performance digital experiences with modern web technologies and intelligent systems.',
  email: '2300033840cseh2@gmail.com',
  altEmail: 'nalamvamsikrishna09june@gmail.com',
  phone: '9010359315',
  linkedin: 'https://www.linkedin.com/in/nalamvamsikrishna9/',
  github: 'https://github.com/nani1418',
  socials: [
    { label: 'GitHub', icon: FaGithub, href: 'https://github.com/nani1418' },
    { label: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/nalamvamsikrishna9/' },
    { label: 'Email', icon: FaEnvelope, href: 'mailto:2300033840cseh2@gmail.com' },
  ],
}

export const about = {
  summary:
    'I’m a Computer Science student specializing in Data Science and Big Data Analytics. I build practical web applications, consistently practice Data Structures and Algorithms, and enjoy learning modern technologies and exploring new things.',
  goals:
    'My career goal is to grow as a full-stack engineer and machine learning practitioner, building products that solve meaningful real-world problems.',
  passion:
    'I enjoy blending software engineering with machine learning to create impactful and intelligent solutions.',
}

export const skills = [
  {
    category: 'Frontend',
    icon: FaCode,
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Backend',
    icon: FaServer,
    items: ['Java', 'Python', 'Node.js'],
  },
  {
    category: 'Database',
    icon: FaDatabase,
    items: ['MySQL'],
  },
  {
    category: 'Cloud',
    icon: FaCloud,
    items: ['Azure'],
  },
  {
    category: 'Tools',
    icon: FaTools,
    items: ['GitHub', 'VS Code'],
  },
]

export const education = [
  {
    level: 'B.Tech in Computer Science and Engineering',
    institution: 'KL University',
    period: '2023 - 2027',
    details:
      'Specializing in Data Science and Big Data Analytics with focus on software engineering, machine learning, and scalable web systems.',
    icon: FaGraduationCap,
  },
  {
    level: 'Intermediate',
    institution: 'NEW ERA Junior College',
    period: '2021 - 2023',
    details:
      'Completed Intermediate under Andhra Pradesh Board of Intermediate Education (APBIE) with strong academic focus.',
    icon: FaSchool,
  },
  {
    level: 'State Board',
    institution: 'V.Z.P High School',
    period: '2020 - 2021',
    details:
      'Completed secondary schooling with a solid foundation in mathematics, science, and analytical thinking.',
    icon: FaSchool,
  },
]

export const experience = [
  {
    title: 'AI-ML Virtual Intern',
    organization: 'Edu Skills (AICTE)',
    duration: 'April 2025 - June 2025',
    points: [
      'Completed the AICTE AI-ML Virtual Internship and developed an end-to-end machine learning project involving data preprocessing, model building, deep learning, and deployment using Python, TensorFlow, and Flask.',
      'Gained hands-on experience in supervised and unsupervised learning, artificial neural networks (ANN), and model optimization.',
    ],
    icon: FaBriefcase,
  },
]

export const projects = [
  {
    title: 'SecureKYC Validator',
    description:
      'Developed a real-time identification document verification engine for validating PAN and Aadhaar formats. Features structured format validation, a secure Java Spring Boot backend, and a responsive React client interface.',
    techStack: ['React.js', 'Spring Boot', 'Java', 'Tailwind CSS'],
    category: 'Web',
    image: '/securekyc-validator.png',
    githubUrl: 'https://github.com/nani1418/SecureKYC-Validator',
  },
  {
    title: 'Learning Hub - E-Learning Platform',
    description:
      'Built a scalable e-learning platform supporting 100+ users with a responsive UI and improved database query performance by 30%. Developed REST APIs, user analytics, and a recommendation system using modular architecture.',
    techStack: ['React.js', 'Spring Boot', 'MySQL'],
    category: 'Web',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'YouTube Sentiment Analysis',
    description:
      'Built an NLP model using TF-IDF, Naive Bayes, and Logistic Regression, achieving 85%+ accuracy. Performed data preprocessing, API integration, and model optimization for efficient real-time sentiment analysis.',
    techStack: ['Python', 'ML', 'NLP'],
    category: 'ML',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'Forum App',
    description:
      'Built a community forum application with user authentication, threaded discussions, posts, and comments. Implemented a responsive UI and REST APIs for real-time collaboration and content management.',
    techStack: ['React.js', 'Node.js', 'MySQL'],
    category: 'Web',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    githubUrl: 'https://github.com/',
  },
]

export const certifications = [
  {
    title: 'Microsoft Azure AZ-900',
    certificateUrl: '/azure-az900-certificate.pdf',
  },
  {
    title: 'AWS Certified Cloud Practitioner (AWS CP)',
    certificateUrl: '/aws-cp-certificate.png',
  },
  {
    title: 'ServiceNow Certified System Administrator (CSA)',
    certificateUrl: '/servicenow-csa-certificate.pdf',
  },
]

export const navLinks = [
  'Home',
  'About',
  'Education',
  'Experience',
  'Skills',
  'Projects',
  'Certifications',
  'Resume',
  'Contact',
]
