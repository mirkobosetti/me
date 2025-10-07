import projectPortfolio from '@/assets/images/project_portfolio.png'
import projectDrinkando from '@/assets/images/project_drinkando.png'
import projectKingmaker from '@/assets/images/project_kingmaker.png'
import projectCarAI from '@/assets/images/project_carai.png'

export interface ProjectDetail {
  name: string
  tagline: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  links?: {
    live?: string
    github?: string
    demo?: string
  }
  category: string
  date: string
}

export const projectsDetailData: Record<string, ProjectDetail> = {
  'portfolio-website': {
    name: 'Portfolio Website',
    tagline: 'Personal portfolio showcasing my work and skills',
    description:
      'A modern, responsive portfolio website built with Vue.js and Tailwind CSS. Features smooth animations, optimized performance, and a clean design that puts my work front and center.',
    image: projectPortfolio,
    category: 'Web Development',
    date: '2024',
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Vite'],
    features: [
      'Fully responsive design that works on all devices',
      'Component-based architecture for maintainability',
      'Interactive project showcase',
      'Optimized performance with lazy loading',
      'SEO-friendly structure',
      'Accessible to all users'
    ],
    links: {
      github: 'https://github.com/mirkobosetti/portfolio'
    }
  },
  drinkando: {
    name: 'Drinkando',
    tagline: 'Late Night Game with Friends',
    description:
      'A fun interactive drinking game app designed for parties and social gatherings. Built with Vue.js and features a clean, intuitive interface perfect for late-night entertainment with friends.',
    image: projectDrinkando,
    category: 'Entertainment',
    date: '2024',
    technologies: ['Vue.js', 'Pinia', 'Tailwind CSS'],
    features: [
      'Multiple game modes and challenges',
      'Customizable rules and settings',
      'Player management system',
      'Responsive design for mobile play',
      'State management with Pinia',
      'Fun animations and sound effects'
    ],
    links: {
      demo: 'https://drinkando.example.com'
    }
  },
  kingmaker: {
    name: 'Kingmaker',
    tagline: 'Pathfinder: Kingmaker - Game Assistant',
    description:
      'A comprehensive companion app for the Pathfinder: Kingmaker RPG. Helps players manage characters, track kingdom stats, and enhance their gaming experience with quick reference tools and calculators.',
    image: projectKingmaker,
    category: 'Gaming Tools',
    date: '2024',
    technologies: ['Vue.js', 'Pinia', 'MongoDB', 'Node.js'],
    features: [
      'Character sheet management',
      'Kingdom building tracker',
      'Combat calculator and initiative tracker',
      'Spell and ability quick reference',
      'Campaign progress tracking',
      'Cloud save with MongoDB integration'
    ],
    links: {
      github: 'https://github.com/mirkobosetti/kingmaker'
    }
  },
  carai: {
    name: 'CarAI',
    tagline: 'AI-Powered Car',
    description:
      'A sophisticated self-driving car simulation powered by neural networks and genetic algorithms. Watch as 100 AI-controlled cars learn to navigate traffic, avoid obstacles, and improve their driving skills through evolutionary learning.',
    image: projectCarAI,
    category: 'AI Learning',
    date: '2022',
    technologies: ['Typescript', 'Vite'],
    features: [
      'Ray-casting sensors: 7 rays with 200px detection range',
      'Real-time visualization: Neural network activity display',
      'Traffic simulation: Dynamic obstacle generation',
      'Auto-save: Best brain persists across sessions',
      'Performance tracking: Distance, generation, and stats display',
      'Pause/Resume: Full simulation control',
      'Speed control: 1x, 2x, 5x simulation speeds'
    ],
    links: {
      live: 'https://carai.example.com',
      github: 'https://github.com/mirkobosetti/carai'
    }
  }
}
