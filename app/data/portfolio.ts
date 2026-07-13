import logoDaze from '@/assets/images/logo_daze.svg'
import logoCving from '@/assets/images/logo_cving.png'
import logoOripan from '@/assets/images/logo_oripan.png'
import avatar from '@/assets/images/avatar.png'
import projectPortfolio from '@/assets/images/project_portfolio.png'
import projectDrinkando from '@/assets/images/project_drinkando.png'
import projectKingmaker from '@/assets/images/project_kingmaker.webp'
import projectCarAI from '@/assets/images/project_carai.webp'
import projectStreetsAI from '@/assets/images/project_streetsai.webp'
import projectPixelliniSbarazzini from '@/assets/images/project_pixellini_sbarazzini.webp'
import type { workExperience } from '../types'

export const personalInfo = {
  name: 'Mirko Bosetti',
  title: 'Full Stack Web Developer',
  location: 'Trento, Italy',
  yearsExperience: '6+',
  availability: 'Available for Opportunities',
  avatar: avatar,
  hero: {
    greeting: "Hi, I'm",
    name: 'MIRKO',
    subtitle: "I'm a Full Stack Web Developer",
    icon: 'lucide:laptop'
  },
  about: {
    summary: [
      'Full Stack Web Developer with <strong>6+ years of experience</strong> building modern, scalable web applications. Expert in the <strong>Vue.js ecosystem</strong> (Vue 2/3, Nuxt.js), now also working with <strong>React</strong> and <strong>.NET</strong> APIs, with a strong focus on performance optimization, user experience, and clean code architecture.',
      'Currently at <strong>Daze</strong>, an Italian e-mobility company, building web platforms for EV charging with React, MUI and .NET. Previously at <strong>Cving</strong> I built a back-office dashboard, the candidate platform, and a real-time video interview system using <strong>WebRTC</strong> and <strong>Socket.io</strong>.',
      'On the side I am co-founder of <strong>Rhaeticon</strong>, where I design and ship production web projects end to end.'
    ],
    strengths: [
      {
        boldText: 'Problem Solver',
        text: 'I approach challenges methodically and find elegant solutions'
      },
      {
        boldText: 'Team Player',
        text: 'Experience collaborating in agile environments'
      },
      {
        boldText: 'Scalability Focused',
        text: 'Strong believer in project organization and scalable architecture'
      },
      {
        boldText: 'Fast Learner',
        text: 'Quick to adapt to new technologies and frameworks'
      }
    ],
    hobbies: [
      {
        icon: 'mdi:weight-lifter',
        text: 'Gym enthusiast - training 3-4 times a week with a focus on clean eating',
        iconColor: 'text-yellow-500'
      },
      {
        icon: 'mdi:code-braces-box',
        text: 'Exploring new web technologies and open source frameworks',
        iconColor: 'text-blue-500'
      },
      {
        icon: 'mdi:food-turkey',
        text: 'Cooking and experimenting with new recipes',
        iconColor: 'text-green-500'
      },
      {
        icon: 'mdi:gamepad-variant',
        text: 'Gaming and hardware tinkering',
        iconColor: 'text-purple-500'
      }
    ],
    opportunities: {
      title: 'Open to Opportunities',
      description:
        "I'm currently open to <strong>full stack and frontend roles</strong>, <strong>remote positions</strong>, and <strong>exciting projects</strong> where I can contribute my Vue.js and React expertise and grow as a developer. Particularly interested in <strong>product-focused companies</strong> and <strong>innovative startups</strong>."
    }
  }
}

export const workExperiences: workExperience[] = [
  {
    step: 1,
    company: {
      name: 'Daze',
      location: 'Bergamo, Italy',
      description:
        'Daze Technology s.r.l. — Italian e-mobility company designing EV charging hardware and the software platforms around it.',
      linkedin: 'https://www.linkedin.com/company/dazetechnology/'
    },
    location: 'Bergamo, Italy',
    remote: true,
    logo: logoDaze,
    period: '01/2026 - Present',
    title: 'Full Stack Web Developer',
    description:
      'Building web platforms for the e-mobility world, working across the stack with React on the frontend and .NET APIs on the backend.',
    contributions: [
      {
        description:
          'Develop frontend features with React and MUI (Material UI) for the EV charging management platforms.'
      },
      {
        description: 'Design and maintain backend REST APIs with .NET.'
      },
      {
        description:
          'Work in a Scrum team with Jira, contributing through pull requests and code reviews.'
      },
      {
        description:
          'Adopt AI-assisted development workflows (Claude Code) to speed up delivery while keeping code quality high.'
      }
    ],
    technologies: [
      'React',
      'TypeScript',
      'MUI (Material UI)',
      '.NET',
      'C#',
      'REST APIs',
      'Git',
      'Jira',
      'Scrum',
      'Claude Code'
    ]
  },
  {
    step: 2,
    company: {
      name: 'Cving',
      location: 'Milan, Italy',
      description:
        'The first platform experience dedicated to the world of work, experience, entertainment, and career.',
      linkedin: 'https://www.linkedin.com/company/cving/'
    },
    location: 'Milan, Italy',
    remote: true,
    logo: logoCving,
    period: '02/2022 - 01/2026',
    title: 'Front-end Developer',
    description: 'Working on building and maintaining web applications using Vue.js and Nuxt.js.',
    contributions: [
      {
        description:
          'Created a back-office dashboard using Vue3 and Tailwind CSS. Used by our company employees to manage recruiters, candidates, companies and their campaigns.'
      },
      {
        description:
          'Mantained and improved the website used by candidates (https://www.cving.com) using Nuxt2. Optimizing performance and SEO.'
      },
      {
        description:
          'Mantained the website used by recruiters (https://recruiter.cving.com) using vue2. Implemented new features and fixed bugs.'
      },
      {
        description:
          'Built an internal video interview platform from scratch similar to Google Meet using Vue3 WebRTC and socket (both FE and BE in express.js) and enabling seamless video calls between candidates and recruiters.'
      }
    ],
    technologies: [
      'Vue.js 2/3',
      'Nuxt.js 2/3',
      'TypeScript',
      'Tailwind CSS',
      'WebRTC',
      'Socket.io',
      'Express.js',
      'Vite',
      'Pinia',
      'Vuex',
      'Vue Router',
      'Git',
      'REST APIs',
      'HTML5',
      'CSS3'
    ],
    milestones: [
      {
        title: 'Back-Office Dashboard Launch',
        description:
          'Successfully launched comprehensive dashboard improving internal workflow efficiency'
      },
      {
        title: 'Video Interview Platform',
        description:
          'Built complete video interview platform enabling seamless calls between candidates and recruiters'
      },
      {
        title: 'Performance Optimization',
        description: 'Improved SEO and performance on the main candidate-facing website'
      }
    ]
  },
  {
    step: 3,
    company: {
      name: 'Oripan',
      location: 'Tione di Trento, Italy',
      description: 'A software company focused on enterprise solutions.',
      linkedin: 'https://www.linkedin.com/company/oripan/'
    },
    location: 'Tione di Trento, Italy',
    remote: false,
    logo: logoOripan,
    period: '08/2019 - 02/2022',
    title: 'Software Developer',
    description: 'Developed and maintained web applications JQuery, Vue.js and ASP.NET Core.',
    contributions: [
      {
        description:
          'Converted old visual basic application to web applications using ASP.NET Core and Amin LTE template and DevExtreme components.'
      },
      {
        description: 'Developed a new version of the product line management software using Vue2'
      },
      {
        description: 'Optimized applications for maximum speed and scalability.'
      },
      {
        description:
          'Complete redesign of a warehouse management system for Falcon and Zebra barcode readers, building a lightweight, optimized web application for mobile scanning devices.'
      }
    ],
    technologies: [
      'Vue.js',
      'jQuery',
      'ASP.NET Core',
      'C#',
      'DevExtreme',
      'SQL Server',
      'Visual Studio',
      'Git',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap'
    ],
    milestones: [
      {
        title: 'Legacy Migration',
        description: 'Converted old Visual Basic applications to modern web applications'
      },
      {
        title: 'Product Line Software',
        description: 'Developed new version using Vue2 improving user experience'
      },
      {
        title: 'Warehouse System Redesign',
        description: 'Complete redesign for mobile scanning devices with optimized performance'
      }
    ]
  }
]

export const education = {
  degree: {
    title: 'Technical Diploma in Computer Science and Telecommunications',
    institution: 'ITT M.Buonarroti, Trento, Italy',
    period: '2019',
    description:
      'Acquired a solid foundation in computer science principles, programming languages, and telecommunications technologies. Fundamentals of Object-Oriented Programming (OOP) and Database Design'
  },
  certifications: [
    'The Vue.js Master Class 2024 Edition',
    'COMAU Certification: "Use and Programming"'
  ]
}

export const projects = [
  {
    slug: 'pixellini-sbarazzini',
    title: 'Pixellini Sbarazzini',
    description: 'Interactive Particle Image Effect',
    image: projectPixelliniSbarazzini,
    technologies: ['TypeScript', 'Canvas API', 'Particle Systems', 'Physics Simulation']
  },
  {
    slug: 'streetsai',
    title: 'StreetsAI',
    description: 'Autonomous Driving with Real-World Maps',
    image: projectStreetsAI,
    technologies: ['TypeScript', 'Canvas API', 'Neural Networks', 'OpenStreetMap API']
  },
  {
    slug: 'kingmaker',
    title: 'Kingmaker',
    description: 'Pathfinder:Kingmaker - Game Assistant',
    image: projectKingmaker,
    technologies: ['Vue.js', 'Pinia', 'MongoDB', 'Desktop Only']
  },
  {
    slug: 'carai',
    title: 'CarAI',
    description: 'AI-Powered Car',
    image: projectCarAI,
    technologies: ['Typescript', 'Vite']
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio',
    description: 'This very site. Rebuilt on Nuxt with a terminal aesthetic.',
    image: projectPortfolio,
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind v4', 'Neon Postgres']
  },
  {
    slug: 'gestoide',
    title: 'Gestoide',
    description: 'Media Manager Web App',
    image: null,
    technologies: ['Angular', 'Express.js', 'MongoDB', 'Bootstrap']
  },
  {
    slug: 'drinkando',
    title: 'Drinkando',
    description: 'Late Night Game with Friends',
    image: projectDrinkando,
    technologies: ['Vue.js', 'Pinia', 'Mobile Only']
  }
]

export const skills = {
  frontend: [
    'Vue.js',
    'Nuxt.js',
    'React',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'MUI (Material UI)',
    'Pinia',
    'Vuex',
    'Shadcn UI',
    'Sass/SCSS',
    'PDFTron'
  ],
  tools: [
    'Git',
    'GitHub',
    'Bitbucket',
    'Jira',
    'Claude Code',
    'Vite',
    'WebRTC',
    'Socket.io',
    'REST APIs',
    'ESLint',
    'npm/yarn',
    'Postman'
  ],
  backend: ['MongoDB', 'PostgreSQL', 'Node.js', 'Express.js', '.NET', 'ASP.NET Core', 'C#'],
  soft: ['Agile/Scrum Methodology', 'Team Collaboration', 'Problem Solving', 'Code Review']
}

export const socialLinks = {
  github: 'https://github.com/mirkobosetti',
  linkedin: 'https://www.linkedin.com/in/mirkobosetti',
  email: 'mirkobosetti1998@gmail.com'
}

